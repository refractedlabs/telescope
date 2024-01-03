import * as dotty from 'dotty';
import { getNestedProto, isRefIncluded, createEmptyProtoRef } from '@refractedlabs/proto-parser';
import { join } from 'path';
import { TelescopeBuilder } from '../builder';
import { createScopedRpcTmFactory, createScopedGrpcWebFactory, createScopedGrpcGatewayFactory } from '@refractedlabs/ast';
import { ProtoRef } from '@cosmology/types';
import { fixlocalpaths, getRelativePath } from '../utils';
import { Bundler } from '../bundler';
import { TelescopeParseContext } from '../build';
import { aggregateImports, getDepsFromQueries, getImportStatements } from '../imports';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {
    // if not enabled, exit
    if (!builder.options?.rpcClients?.enabled) {
        return;
    }

    if (builder.options?.rpcClients?.inline) {
        return;
    }

    // if no scopes, do them all!
    if (
        !builder.options.rpcClients.scoped ||
        !builder.options.rpcClients.scoped.length
    ) {
        // TODO inefficient
        // WE SHOULD NOT DO THIS IN A BUNDLER LOOP
        // MAKE SEPARATE PLUGIN
        return makeAllRPCBundles(
            builder,
            bundler
        );
    }

    if (!builder.options.rpcClients.scopedIsExclusive) {
        // TODO inefficient
        // WE SHOULD NOT DO THIS IN A BUNDLER LOOP
        // MAKE SEPARATE PLUGIN
        makeAllRPCBundles(
            builder,
            bundler
        );
    }

    // we have scopes!
    builder.options.rpcClients.scoped.forEach(rpc => {
        if (rpc.dir !== bundler.bundle.base) return;
        makeRPC(
            builder,
            bundler,
            rpc
        );
    });
};

const getFileName = (dir, filename) => {
    filename = filename.replace(/\.ts$/, '');
    const localname = join(dir, filename + '.query');
    return localname + '.ts';
};

const makeRPC = (
    builder: TelescopeBuilder,
    bundler: Bundler,
    rpc: {
        dir: string;
        filename?: string;
        packages: string[];
        protos?: string[];
        addToBundle: boolean;
        methodNameQuery?: string;
        methodNameTx?: string;
    }
) => {
    const dir = rpc.dir;
    const packages = rpc.packages;
    const protos = rpc.protos;
    const methodName = rpc.methodNameQuery ?? 'createRPCQueryClient'
    const localname = getFileName(dir, rpc.filename ?? 'rpc');

    const obj = {};
    builder.rpcQueryClients.forEach(file => {

        // ADD all option
        // which defaults to including cosmos
        // and defaults to base for each
        if (!isRefIncluded(createEmptyProtoRef(file.package, file.proto), {
            packages,
            protos
        })) {
            return;
        }

        const f = localname;
        const f2 = file.localname;
        const importPath = getRelativePath(f, f2);
        dotty.put(obj, file.package, importPath);
    });

    const ctx = new TelescopeParseContext(
        createEmptyProtoRef(dir, localname),
        builder.store,
        builder.options
    );
    //based on rpc type to generate client from client factory
    let rpcast;

    switch (builder.options?.rpcClients?.type) {
        case "grpc-gateway":
            rpcast = createScopedGrpcGatewayFactory(
                ctx.proto,
                obj,
                "createGrpcGateWayClient"
                // 'QueryClientImpl' // make option later
            );
            break;
        case "tendermint":
            // TODO add addUtil to generic context
            ctx.proto.addUtil('Rpc');

            rpcast = createScopedRpcTmFactory(
                ctx.proto,
                obj,
                methodName
                // 'QueryClientImpl' // make option later
            );
            break;
        case "grpc-web":
            rpcast = createScopedGrpcWebFactory(
                ctx.proto,
                obj,
                "createGrpcWebClient"
            );
            break;
        default:
            break;
    }


    const serviceImports = getDepsFromQueries(
        ctx.queries,
        localname
    );

    const imports = aggregateImports(ctx, serviceImports, localname);

    const importStmts = getImportStatements(
        localname,
        [...fixlocalpaths(imports)]
    );

    const prog = []
        .concat(importStmts)
        .concat(rpcast);

    const filename = bundler.getFilename(localname);
    bundler.writeAst(prog, filename);
    if (rpc.addToBundle) {
        bundler.addToBundleToPackage(`${dir}.ClientFactory`, localname)
    }
};

// TODO
/*
 move all options for rpc into previous `rpc` prop and
 clean up all these many options for one nested object full of options
*/

const makeAllRPCBundles = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {


    if (!builder.options.rpcClients.bundle) return;

    // [x] loop through every bundle
    // [x] if not cosmos, add all cosmos
    // [x] call makeRPC

    const dir = bundler.bundle.base;
    const filename = 'rpc'

    ///
    ///
    ///

    // refs with services
    const refs = builder.store.getProtos().filter((ref: ProtoRef) => {
        const proto = getNestedProto(ref.traversed);

        //// Anything except Msg Service OK...
        const allowedRpcServices = builder.options.rpcClients.enabledServices.filter(a => a !== 'Msg');
        const found = allowedRpcServices.some(svc => {
            return proto?.[svc] &&
                proto[svc]?.type === 'Service'
        });

        if (!found) {
            return;
        }
        ///

        return true;
    });

    const check = refs.filter((ref: ProtoRef) => {
        const [base] = ref.proto.package.split('.');
        return base === bundler.bundle.base;
    });

    if (!check.length) {
        // if there are no services
        // exit the plugin
        return;
    }

    const packages = refs.reduce((m, ref: ProtoRef) => {
        const [base] = ref.proto.package.split('.');
        if (base === 'cosmos' || base === bundler.bundle.base)
            return [...new Set([...m, ref.proto.package])];
        return m;
    }, []);

    makeRPC(
        builder,
        bundler,
        {
            dir,
            filename,
            packages,
            addToBundle: true,
            methodNameQuery: 'createRPCQueryClient'
        }
    );

};
