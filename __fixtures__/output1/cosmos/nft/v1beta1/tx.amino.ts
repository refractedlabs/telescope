import { AminoMsg } from "@cosmjs/amino";
import { MsgSend } from "../../../../../packages/transpiler/cosmos/nft/v1beta1/tx";
export interface AminoMsgSend extends AminoMsg {
  type: "cosmos-sdk/MsgSend";
  value: {
    class_id: string;
    id: string;
    sender: string;
    receiver: string;
  };
}
export const AminoConverter = {
  "/cosmos.nft.v1beta1.MsgSend": {
    aminoType: "cosmos-sdk/MsgSend",
    toAmino: ({
      classId,
      id,
      sender,
      receiver
    }: MsgSend): AminoMsgSend["value"] => {
      return {
        class_id: classId,
        id,
        sender,
        receiver
      };
    },
    fromAmino: ({
      class_id,
      id,
      sender,
      receiver
    }: AminoMsgSend["value"]): MsgSend => {
      return {
        classId: class_id,
        id,
        sender,
        receiver
      };
    }
  }
};