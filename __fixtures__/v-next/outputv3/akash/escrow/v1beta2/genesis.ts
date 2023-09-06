import { Account, AccountAmino, AccountSDKType, FractionalPayment, FractionalPaymentAmino, FractionalPaymentSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.escrow.v1beta2";
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisState {
  accounts: Account[];
  payments: FractionalPayment[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.escrow.v1beta2.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisStateAmino {
  accounts: AccountAmino[];
  payments: FractionalPaymentAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/akash.escrow.v1beta2.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisStateSDKType {
  accounts: AccountSDKType[];
  payments: FractionalPaymentSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    accounts: [],
    payments: []
  };
}
export const GenesisState = {
  typeUrl: "/akash.escrow.v1beta2.GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.payments) {
      FractionalPayment.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        case 2:
          message.payments.push(FractionalPayment.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (Array.isArray(object?.accounts)) obj.accounts = object.accounts.map((e: any) => Account.fromJSON(e));
    if (Array.isArray(object?.payments)) obj.payments = object.payments.map((e: any) => FractionalPayment.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    if (message.payments) {
      obj.payments = message.payments.map(e => e ? FractionalPayment.toJSON(e) : undefined);
    } else {
      obj.payments = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.payments = object.payments?.map(e => FractionalPayment.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromSDK(e)) : [],
      payments: Array.isArray(object?.payments) ? object.payments.map((e: any) => FractionalPayment.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toSDK(e) : undefined);
    } else {
      obj.accounts = [];
    }
    if (message.payments) {
      obj.payments = message.payments.map(e => e ? FractionalPayment.toSDK(e) : undefined);
    } else {
      obj.payments = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromAmino(e)) : [],
      payments: Array.isArray(object?.payments) ? object.payments.map((e: any) => FractionalPayment.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }
    if (message.payments) {
      obj.payments = message.payments.map(e => e ? FractionalPayment.toAmino(e) : undefined);
    } else {
      obj.payments = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};