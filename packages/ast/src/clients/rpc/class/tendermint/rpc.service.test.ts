import { traverse } from '@refractedlabs/proto-parser'
import { getNestedProto } from '@cosmology/utils'
import { defaultTelescopeOptions, ProtoService } from '@cosmology/types';
import { expectCode, getTestProtoStore, printCode } from '../../../../../test-utils';
import { GenericParseContext } from '../../../../encoding';
import { createRpcInterface, createRpcClientClass, createRpcClientInterface } from './rpc';
const store = getTestProtoStore();
store.traverseAll();

it('RPC Service Client', () => {
    const ref = store.findProto('cosmos/base/tendermint/v1beta1/query.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Service;
    const context = new GenericParseContext(ref, store, defaultTelescopeOptions);
    expectCode(createRpcClientInterface(context, service))
    expectCode(createRpcClientClass(context, service))
    expectCode(createRpcInterface(context, service))
});
