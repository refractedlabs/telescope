import * as t from '@babel/types';
import { pascal } from 'case';
import { identifier, objectMethod } from '../../../utils';
import { ProtoType, ProtoField, getBaseCreateTypeFuncName } from '../../types';
import { arrayTypes, fromPartial } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement fromPartial (${field.type} rules[${field.rule}] name[${name}])`);
}

export const fromPartialMethodFields = (name: string, proto: ProtoType) => {
    const fields = Object.keys(proto.fields ?? {}).map(fieldName => {
        const field = proto.fields[fieldName];
        if (field.rule === 'repeated') {
            switch (field.type) {
                case 'string':
                    return fromPartial.array(fieldName, arrayTypes.string());
                case 'uint64':
                case 'int64':
                    return fromPartial.array(fieldName, arrayTypes.long());
                case 'uint32':
                case 'int32':
                    return fromPartial.array(fieldName, arrayTypes.number());
                case 'bytes':
                    return needsImplementation(fieldName, field);
                default:
                    switch (field.parsedType.type) {
                        case 'Enum':
                        case 'Type':
                            return fromPartial.array(fieldName, arrayTypes.type(field.parsedType.name));
                    }
                    return needsImplementation(fieldName, field);
            }

        }

        if (field.keyType) {
            switch (field.keyType) {
                case 'string':
                case 'int64':
                case 'uint64':
                case 'int32':
                case 'uint32':
                    return fromPartial.keyHash(fieldName, field.keyType, field.parsedType.name);
                default:
                    return needsImplementation(fieldName, field);
            }
        }

        switch (field.type) {
            case 'string':
                return fromPartial.string(fieldName);
            case 'uint64':
                return fromPartial.long(fieldName);
            case 'int64':
                return fromPartial.int64(fieldName);
            case 'double':
                return fromPartial.double(fieldName);
            case 'bytes':
                return fromPartial.bytes(fieldName);
            case 'bool':
                return fromPartial.bool(fieldName);
            case 'google.protobuf.Duration':
            case 'Duration':
                return fromPartial.duration(fieldName);
            case 'google.protobuf.Timestamp':
            case 'Timestamp':
                return fromPartial.timestamp(fieldName);
            default:
                switch (field.parsedType.type) {
                    case 'Enum':
                        return fromPartial.enum(fieldName);
                    case 'Type':
                        return fromPartial.type(fieldName, field.parsedType.name);
                }
                return needsImplementation(fieldName, field);
        }
    });
    return fields;
};
export const fromPartialMethod = (name: string, proto: ProtoType) => {
    return objectMethod(
        'method',
        t.identifier('fromPartial'),
        [
            identifier(
                'object',
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier('I')
                    )
                )
            )
        ],
        t.blockStatement([

            // init 
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        t.identifier('message'),
                        t.callExpression(
                            t.identifier(getBaseCreateTypeFuncName(name)),
                            []
                        )
                    )
                ]
            ),

            ...fromPartialMethodFields(name, proto),

            // RETURN 
            t.returnStatement(
                t.identifier('message')
            )

        ]),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(name)
            )
        ),
        t.tsTypeParameterDeclaration([
            t.tsTypeParameter(
                t.tsTypeReference(
                    t.identifier('Exact'),
                    t.tsTypeParameterInstantiation([
                        t.tsTypeReference(
                            t.identifier('DeepPartial'),
                            t.tsTypeParameterInstantiation([
                                t.tsTypeReference(
                                    t.identifier(name)
                                )
                            ])
                        ),
                        t.tsTypeReference(
                            t.identifier('I')
                        )
                    ])
                ),
                null,
                'I'
            )
        ])
    )
};

