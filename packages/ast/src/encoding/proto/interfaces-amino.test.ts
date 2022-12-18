import { getNestedProto } from '@osmonauts/proto-parser';
import { ProtoParseContext } from '@osmonauts/ast';
import { expectCode, getTestProtoStore } from '../../../test-utils';
import { createObjectWithMethods } from '../object';

const store = getTestProtoStore();
store.options.aminoEncoding.useRecursiveV2encoding = true;
store.options.interfaces.enabled = true;
store.traverseAll();

it('MsgSubmitProposal', async () => {
    const ref = store.findProto('cosmos/gov/v1beta1/tx.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    expectCode(createObjectWithMethods(
        context,
        'MsgSubmitProposal', getNestedProto(ref.traversed).MsgSubmitProposal
    ))
});