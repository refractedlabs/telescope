import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightAmino, HeightSDKType } from "../../../core/client/v1/client";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgTransfer, MsgTransferAmino, MsgTransferSDKType } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ibc.applications.transfer.v1.MsgTransfer", MsgTransfer]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value: MsgTransfer.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value
      };
    }

  },
  toJSON: {
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value: MsgTransfer.toJSON(value)
      };
    }

  },
  fromJSON: {
    transfer(value: any) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value: MsgTransfer.fromJSON(value)
      };
    }

  },
  fromPartial: {
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value: MsgTransfer.fromPartial(value)
      };
    }

  }
};