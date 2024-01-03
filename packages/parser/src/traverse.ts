import {
    TraversedProtoRoot,
    ProtoRef,
    ProtoType,
    ProtoService,
    ProtoField,
    ProtoServiceMethod,
    ProtoServiceMethodInfo,
    TraverseRecord,
    TraverseImport,
    TraverseAccept,
    TraverseImplement,
    TraverseExport,
    TraverseLocalSymbol,
    TraverseImportNames,
    TraversalSymbol
} from '@cosmology/types';
import {
    getPluginValue
} from '@cosmology/utils';

import { Service, Type, Field, Enum, Root, Namespace } from '@cosmology/protobufjs';
import { importLookup, lookup, lookupAny, lookupNested, protoScopeImportLookup } from './lookup';
import { parseService } from './services';
import { ProtoStore } from './store';
import { instanceType, lookupSymbolScopes, SCALAR_TYPES } from './utils';

export interface TraverseContext {
    imports: TraverseImport;
    acceptsInterface: TraverseAccept;
    implementsInterface: TraverseImplement;
    exports: TraverseExport;
    store: ProtoStore;
    ref: ProtoRef;
}

export class TraverseContext implements TraverseContext {
    constructor(store: ProtoStore, ref: ProtoRef) {
        this.store = store;
        this.ref = ref;
        this.acceptsInterface = {};
        this.implementsInterface = {};
        this.imports = {};
        this.exports = {};
    }

    addImport(filename: string, symbolName: string) {
        this.imports[filename] = this.imports[filename] || [];
        this.imports[filename] = [...new Set([...this.imports[filename], symbolName])];
    }

    addImplements(symbolName: string, msgName: string) {
        this.implementsInterface = this.implementsInterface || {};
        this.implementsInterface[symbolName] = this.implementsInterface[symbolName] || [];
        this.implementsInterface[symbolName] = [...new Set([...this.implementsInterface[symbolName], msgName])];
    }

    addAccepts(symbolName: string, msgName: string) {
        this.acceptsInterface[symbolName] = this.acceptsInterface[symbolName] || [];
        this.acceptsInterface[symbolName] = [...new Set([...this.acceptsInterface[symbolName], msgName])];
    }

    addExport(symbolName: string) {
        this.exports[symbolName] = true;
    }
}

export const symbolsToImportNames = (
    ref: ProtoRef,
    symbols: TraversalSymbol[]
): TraverseImportNames => {
    return symbols.reduce((m, v) => {
        // imports to self... nope.
        if (v.source === ref.filename) return m;

        m[v.source] = m[v.source] || {};
        m[v.source][v.symbolName] = v.readAs;
        return m;
    }, {});
};

export const parseFullyTraversedProtoImports = (
    store: ProtoStore
): TraversalSymbol[] => {
    const protos = store.getProtos();
    const records: TraverseRecord[] = [];
    const symbols: TraversalSymbol[] = [];

    // AGGREGATE ALL implements

    protos.forEach(ref => {
        const enabled = getPluginValue('interfaces.enabled', ref.proto.package, store.options);
        if (!enabled) return;

        //
        const implementsInterface = ref.traversed?.implementsInterface ?? {};
        Object.keys(implementsInterface).forEach(implementsType => {
            implementsInterface[implementsType].forEach(msgName => {
                records.push({
                    filename: ref.filename,
                    implementsType,
                    msgName
                })
            })
        });
    });

    protos.forEach(ref => {
        const localSymbols: TraverseLocalSymbol[] = [];

        const hasConflict = (
            symbolName: string
        ) => {
            return localSymbols.filter(a => a.symbolName === symbolName).length > 1
        }
        const findAvailableName = (
            symbolName: string
        ) => {
            let counter = 1;
            if (!hasConflict(symbolName)) return symbolName;
            while (true) {
                const testName = symbolName + counter;
                const found = localSymbols.find(a => a.readAs === testName);
                if (found) {
                    counter++;
                } else {
                    return testName;
                }

            }
        };

        Object.keys(ref.traversed?.parsedExports ?? {}).forEach(e => {
            localSymbols.push({
                type: 'export',
                source: ref.filename,
                symbolName: e,
                readAs: e
            })
        })
        Object.keys(ref.traversed?.parsedImports ?? {}).forEach(source => {
            const imps = ref.traversed?.parsedImports?.[source] ?? [];
            imps.forEach(im => {
                localSymbols.push({
                    type: 'import',
                    source,
                    symbolName: im,
                    readAs: im
                })
            });
        });

        Object.keys(ref.traversed?.acceptsInterface ?? {}).forEach(implementsType => {
            const enabled = getPluginValue('interfaces.enabled', ref.proto.package, store.options);
            if (!enabled) return;

            const recordsThatMatter = records.filter(rec => rec.implementsType === implementsType);
            const notYetInImports = recordsThatMatter.filter(r => {
                return !localSymbols.find(l => l.source === r.filename && l.symbolName === r.msgName);
            });
            const alreadyInImports = recordsThatMatter.filter(r => {
                return localSymbols.find(l => l.source === r.filename && l.symbolName === r.msgName);
            });
            notYetInImports.forEach(imp => {
                localSymbols.push({
                    type: 'import',
                    source: imp.filename,
                    readAs: imp.msgName,
                    symbolName: imp.msgName,
                    implementsType: imp.implementsType
                })
            });
            // if already imported, addd implementsType
            alreadyInImports.forEach(imp => {
                const index = localSymbols.findIndex(l => l.source === imp.filename && l.symbolName === imp.msgName);
                localSymbols[index].implementsType = imp.implementsType;
            });
        });

        // update localSymbols for any conflicts
        localSymbols.forEach(sym => {
            // aside from exports, update readAs names...
            if (
                sym.readAs === sym.symbolName &&
                hasConflict(sym.symbolName) &&
                sym.type !== 'export'
            ) {
                sym.readAs = findAvailableName(sym.symbolName)
            }
            // add to symbols
            symbols.push({
                ref: ref.filename,
                ...sym
            });
        })
    });
    return symbols;
};

export const traverse = (store: ProtoStore, ref: ProtoRef) => {
    const context = new TraverseContext(store, ref);
    // @ts-ignore
    const obj: TraversedProtoRoot = {
        imports: ref.proto.imports,
        package: ref.proto.package,
        root: recursiveTraversal(
            store,
            ref,
            ref.proto.root,
            context,
            [],
            false
        ),
        parsedImports: null,
        parsedExports: null,
        importNames: {},
    };

    obj.parsedImports = context.imports;
    obj.parsedExports = context.exports;

    obj.acceptsInterface = context.acceptsInterface;
    obj.implementsInterface = context.implementsInterface;

    // just bc devs use proto syntax for types in the same file
    // does not mean we need to import them
    // delete any imports related to "this" file
    // delete obj.importNames[ref.filename];
    delete obj.parsedImports[ref.filename];
    return obj;
};

const getAllRefs = (store: ProtoStore, ref: ProtoRef) => {
    const importRefs = ref.proto.imports?.map(imp => store.findProto(imp)) ?? [];
    return importRefs.reduce((m, v) => {
        return [...m, ...getAllRefs(store, v)]
    }, importRefs);
};

const traverseFields = (
    store: ProtoStore,
    ref: ProtoRef,
    obj: any,
    context: TraverseContext,
    traversal: string[]
): Record<string, ProtoField> => {

    return Object.keys(obj.fields).reduce((m, mykey) => {
        const field: ProtoField & { toJSON?: Function } = obj.fields[mykey];

        let fieldName = mykey;
        const regexp = /([a-zA-Z0-9]+)[_]+([0-9]+)$/;
        if (regexp.test(fieldName)) {
            const matches = fieldName.match(regexp);
            if (matches?.length) {
                const begin = fieldName.split(matches[1])[0];
                fieldName = `${begin}${matches[1]}${matches[2]}`
            }
        }

        const serialize = () => {
            if (typeof field.toJSON !== 'undefined') {
                // non-traversed
                return field.toJSON({ keepComments: true });
            }
            // traversed
            // field.name is used for proto!
            field.name = fieldName;
            field.message = obj.name;
            field.package = ref.proto.package
            return field;
        }

        const implementsAcceptsAny = getPluginValue('interfaces.enabled', ref.proto.package, store.options);
        if (implementsAcceptsAny && field.options?.['(cosmos_proto.accepts_interface)']) {
            const value = field.options['(cosmos_proto.accepts_interface)'];
            // some of these contain a comma ...
            value.split(',').map(a => a.trim()).forEach(name => {
                context.addAccepts(name, obj.name);
            });
        }

        let found: any = null;

        if (SCALAR_TYPES.includes(field.type)) {
            m[fieldName] = {
                parsedType: { name: field.type, type: 'native' },
                isScalar: true,
                typeNum: SCALAR_TYPES.indexOf(field.type),
                ...serialize()
            }
            return m;
        }

        // nested scope first
        found = lookupNested(ref, traversal, field.type);
        if (found) {
            m[fieldName] = {
                scope: found.scope,
                parsedType: instanceType(found),
                ...serialize(),
            };
            return m;
        }

        // local scope second
        found = lookup(store, ref, field.type);
        if (found) {
            m[fieldName] = {
                scope: found.scope,
                parsedType: instanceType(found),
                ...serialize(),
            };
            return m;
        }

        found = importLookup(store, ref, field.type);
        if (found) {
            context.addImport(found.import, found.name);

            m[fieldName] = {
                parsedType: instanceType(found.obj),
                scopeType: 'import',
                scope: [found.obj.scope],
                ...serialize(),
                importedName: found.importedName,
                import: found.import,
            };
            return m;
        }

        // found = protoImportLookup(store, ref, field.type);
        // if (found) {
        //     imports[found.import] = imports[found.import] || [];
        //     imports[found.import] = [...new Set([...imports[found.import], found.name])];
        //     m[fieldName] = {

        //         parsedType: instanceType(found.obj),
        //         scopeType: 'protoImport',
        //         scope: [found.package],
        //         ...serialize(),
        //         importedName: found.importedName,
        //         import: found.import,
        //     };
        //     return m;
        // }

        // new scope lookup (TODO: replace above cases)
        const typeNames = lookupSymbolScopes(field.type, ref.proto.package + '.dummy');
        for (let lookupType of typeNames) {
            found = protoScopeImportLookup(store, ref, lookupType);
            if (found) {
                context.addImport(found.import, found.name);
                m[fieldName] = {

                    parsedType: instanceType(found.obj),
                    scopeType: 'protoImport',
                    scope: found.obj.scope ? found.obj.scope : [found.package],
                    ...serialize(),
                    importedName: found.importedName,
                    import: found.import,
                };
                return m;
            }
        }

        // e.g. akash/deployment/v1beta2/service.proto
        // referencing messages in another file, and so we need access through our imports
        // if we get this issue again, this should be recursive and not just one level...
        const importRefs = ref.proto.imports.map(imp => store.findProto(imp));
        // const importRefs = getAllRefs(store, ref);
        for (let importRef of importRefs) {
            const typeNames = lookupSymbolScopes(field.type, importRef.proto.package + '.dummy');
            for (let lookupType of typeNames) {
                found = protoScopeImportLookup(store, importRef, lookupType);
                if (found) {

                    context.addImport(found.import, found.name);
                    m[fieldName] = {
                        parsedType: instanceType(found.obj),
                        scopeType: 'protoImport',
                        scope: found.obj.scope ? found.obj.scope : [found.package],
                        ...serialize(),
                        importedName: found.importedName,
                        import: found.import,
                    };
                    return m;
                }
            }

        }

        console.warn(`
${obj.name}.${field.name}: ${field.type} NOT FOUND from ${ref.filename} in ${ref.proto.package}
you should contact the maintainers.
`);
        return m;
    }, {});
};


const traverseType = (
    store: ProtoStore,
    ref: ProtoRef,
    obj: any,
    context: TraverseContext,
    traversal: string[],
    isNested: boolean
): ProtoType => {
    let nested = null;
    if (obj.nested) {
        nested = Object.keys(obj.nested).reduce((m, key) => {
            m[key] = recursiveTraversal(store, ref, obj.nested[key], context, [...traversal, key], true);
            return m;
        }, {});
    }

    if (!isNested) {
        context.addExport(obj.name);
    }

    const traversed = {
        type: 'Type',
        name: obj.name,
        package: ref.proto.package,
        options: obj.options,
        oneofs: obj.oneofs ? Object.keys(obj.oneofs).reduce((m, v) => {
            m[v] = {
                // parse oneof
                oneof: obj.oneofs[v].oneof.map(name => name)
            };
            return m;
        }, {}) : undefined,
        fields: traverseFields(
            store,
            ref,
            obj,
            context,
            traversal
        ),
        nested,
        keyTypes: [],
        comment: obj.comment
    };

    // parse keyType
    const hasKeyType = Object.keys(traversed.fields).some(field => !!traversed.fields[field].keyType);
    let keyTypes = [];
    if (hasKeyType) {
        keyTypes = Object.keys(traversed.fields)
            .filter(field => !!traversed.fields[field].keyType)
            .map(field => {
                return {
                    name: field,
                    ...traversed.fields[field]
                };
            });
    }

    traversed.keyTypes = keyTypes;

    const implementsAcceptsAny = getPluginValue('interfaces.enabled', ref.proto.package, store.options);
    if (implementsAcceptsAny && traversed.options?.["(cosmos_proto.implements_interface)"]) {
        const name = traversed.options['(cosmos_proto.implements_interface)'];
        context.addImplements(name, obj.name);
    }

    return traversed as ProtoType;
};

const traverseEnum = (store: ProtoStore, ref: ProtoRef, obj: any, context: TraverseContext,) => {
    return {
        type: 'Enum',
        name: obj.name,
        ...obj.toJSON({ keepComments: true })
    }
};

const traverseField = (store: ProtoStore, ref: ProtoRef, obj: any, context: TraverseContext,) => {
    return {
        // type is already a property on field
        name: obj.name,
        ...obj.toJSON({ keepComments: true })
    }
};

const traverseServiceMethod = (
    store: ProtoStore,
    ref: ProtoRef,
    obj: any,
    context: TraverseContext,
    name: string,
    traversal: string[]
) => {
    const service: ProtoServiceMethod = obj.methods[name];
    const { requestType, responseType, options, comment } = service;
    let responseObject = lookupAny(store, ref, requestType);
    if (!responseObject) {
        throw new Error('Symbol not found ' + requestType);
    }
    let requestObject = lookupAny(store, ref, requestType);
    if (!requestObject) {
        throw new Error('Symbol not found ' + requestType);
    }


    const fields = traverseFields(store, ref, requestObject.obj, context, traversal);
    // @ts-ignore
    const info: ProtoServiceMethodInfo = parseService({
        options,
        fields
    });

    const svc: ProtoServiceMethod = {
        type: 'ServiceMethod',
        info,
        name,
        comment,
        requestType,
        responseType,
        options,
        fields
    };

    if (info) {

        // TODO is this still needed?

        // get casing info for request objects
        Object.keys(requestObject.obj.fields).map(fieldName => {
            const field: ProtoField = requestObject.obj.fields[fieldName];

            const protoCasing = store.options.prototypes.parser.keepCase ?
                field.options['(telescope:orig)'] :
                field.options['(telescope:camel)'];

            const origCase = field.options['(telescope:orig)'];
            svc.info.casing = svc.info.casing || {};
            svc.info.casing[origCase] = protoCasing;
        });
    }

    store.registerRequest(
        svc
    );

    return svc;
};

const traverseService = (
    store: ProtoStore,
    ref: ProtoRef,
    obj: any,
    context: TraverseContext,
    traversal: string[]
): ProtoService => {
    const json = obj.toJSON({ keepComments: true });
    const methods = Object.keys(json.methods).reduce((m, key) => {
        m[key] = traverseServiceMethod(
            store, ref, json, context, key, traversal
        );
        return m;
    }, {})
    return {
        type: 'Service',
        name: obj.name,
        ...obj.toJSON({ keepComments: true }),
        methods
    }
};

export const recursiveTraversal = (
    store: ProtoStore,
    ref: ProtoRef,
    obj: any,
    context: TraverseContext,
    traversal: string[],
    isNested: boolean
) => {
    if (obj instanceof Type) {
        return traverseType(store, ref, obj, context, traversal, isNested);
    }
    if (obj instanceof Enum) {
        return traverseEnum(store, ref, obj, context);
    }
    if (obj instanceof Service) {
        return traverseService(store, ref, obj, context, traversal);
    }
    if (obj instanceof Field) {
        return traverseField(store, ref, obj, context);
    }
    if (obj instanceof Root) {
        if (obj.nested) {
            return Object.keys(obj.nested).reduce((m, key) => {
                m.nested[key] = recursiveTraversal(store, ref, obj.nested[key], context, [...traversal, key], isNested);
                return m;
            }, {
                type: 'Root',
                nested: {}
            });
        } else {
            throw new Error(`recursiveTraversal() [Root] cannot find protobufjs Type in file: ${ref.filename}`)
        }
    }
    if (obj instanceof Namespace) {
        if (obj.nested) {
            return Object.keys(obj.nested).reduce((m, key) => {
                m.nested[key] = recursiveTraversal(store, ref, obj.nested[key], context, [...traversal, key], isNested);
                return m;
            }, {
                type: 'Namespace',
                nested: {}
            });
        } else {
            throw new Error(`recursiveTraversal() [Namespace] cannot find protobufjs Type in file: ${ref.filename}`)
        }
    }
    throw new Error('recursiveTraversal() cannot find protobufjs Type')
};
