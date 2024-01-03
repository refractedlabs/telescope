import { createLCDClient } from './lcd';
import { traverse } from '@refractedlabs/proto-parser'
import { getNestedProto } from '@cosmology/utils'
import { ProtoService } from '@cosmology/types';
import { GenericParseContext } from '../../../encoding';
import { getTestProtoStore, expectCode } from '../../../../test-utils';
const store = getTestProtoStore({
    classesUseArrowFunctions: true
});
store.traverseAll();

it('cosmos/group/v1/query.proto', () => {
    const ref = store.findProto('cosmos/group/v1/query.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Query;
    const context = new GenericParseContext(ref, store, store.options);
    const ast = createLCDClient(context, service);
    expectCode(ast);
});
