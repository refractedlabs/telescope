import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "ibc.applications.transfer.v1";
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransfer {
  /** the port on which the packet will be sent */
  sourcePort?: string;
  /** the channel by which the packet will be sent */
  sourceChannel?: string;
  /** the tokens to be transferred */
  token: Coin;
  /** the sender address */
  sender?: string;
  /** the recipient address on the destination chain */
  receiver?: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeoutHeight: Height;
  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */
  timeoutTimestamp?: bigint;
}
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransferSDKType {
  source_port?: string;
  source_channel?: string;
  token: CoinSDKType;
  sender?: string;
  receiver?: string;
  timeout_height: HeightSDKType;
  timeout_timestamp?: bigint;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponse {}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponseSDKType {}
function createBaseMsgTransfer(): MsgTransfer {
  return {
    sourcePort: undefined,
    sourceChannel: undefined,
    token: Coin.fromPartial({}),
    sender: undefined,
    receiver: undefined,
    timeoutHeight: Height.fromPartial({}),
    timeoutTimestamp: undefined
  };
}
export const MsgTransfer = {
  typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
  encode(message: MsgTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourcePort !== undefined) {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.sourceChannel !== undefined) {
      writer.uint32(18).string(message.sourceChannel);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
    }
    if (message.sender !== undefined) {
      writer.uint32(34).string(message.sender);
    }
    if (message.receiver !== undefined) {
      writer.uint32(42).string(message.receiver);
    }
    if (message.timeoutHeight !== undefined) {
      Height.encode(message.timeoutHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.timeoutTimestamp !== undefined) {
      writer.uint32(56).uint64(message.timeoutTimestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourcePort = reader.string();
          break;
        case 2:
          message.sourceChannel = reader.string();
          break;
        case 3:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.sender = reader.string();
          break;
        case 5:
          message.receiver = reader.string();
          break;
        case 6:
          message.timeoutHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.timeoutTimestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTransfer {
    const obj = createBaseMsgTransfer();
    if (isSet(object.sourcePort)) obj.sourcePort = String(object.sourcePort);
    if (isSet(object.sourceChannel)) obj.sourceChannel = String(object.sourceChannel);
    if (isSet(object.token)) obj.token = Coin.fromJSON(object.token);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.timeoutHeight)) obj.timeoutHeight = Height.fromJSON(object.timeoutHeight);
    if (isSet(object.timeoutTimestamp)) obj.timeoutTimestamp = BigInt(object.timeoutTimestamp.toString());
    return obj;
  },
  toJSON(message: MsgTransfer): unknown {
    const obj: any = {};
    message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
    message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
    message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.timeoutHeight !== undefined && (obj.timeoutHeight = message.timeoutHeight ? Height.toJSON(message.timeoutHeight) : undefined);
    if (message.timeoutTimestamp !== undefined) {
      obj.timeoutTimestamp = message.timeoutTimestamp.toString();
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgTransfer>): MsgTransfer {
    const message = createBaseMsgTransfer();
    message.sourcePort = object.sourcePort ?? undefined;
    message.sourceChannel = object.sourceChannel ?? undefined;
    if (object.token !== undefined && object.token !== null) {
      message.token = Coin.fromPartial(object.token);
    }
    message.sender = object.sender ?? undefined;
    message.receiver = object.receiver ?? undefined;
    if (object.timeoutHeight !== undefined && object.timeoutHeight !== null) {
      message.timeoutHeight = Height.fromPartial(object.timeoutHeight);
    }
    if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
      message.timeoutTimestamp = BigInt(object.timeoutTimestamp.toString());
    }
    return message;
  },
  fromSDK(object: MsgTransferSDKType): MsgTransfer {
    return {
      sourcePort: object?.source_port,
      sourceChannel: object?.source_channel,
      token: object.token ? Coin.fromSDK(object.token) : undefined,
      sender: object?.sender,
      receiver: object?.receiver,
      timeoutHeight: object.timeout_height ? Height.fromSDK(object.timeout_height) : undefined,
      timeoutTimestamp: object?.timeout_timestamp
    };
  },
  fromSDKJSON(object: any): MsgTransferSDKType {
    return {
      source_port: isSet(object.source_port) ? String(object.source_port) : undefined,
      source_channel: isSet(object.source_channel) ? String(object.source_channel) : undefined,
      token: isSet(object.token) ? Coin.fromSDKJSON(object.token) : undefined,
      sender: isSet(object.sender) ? String(object.sender) : undefined,
      receiver: isSet(object.receiver) ? String(object.receiver) : undefined,
      timeout_height: isSet(object.timeout_height) ? Height.fromSDKJSON(object.timeout_height) : undefined,
      timeout_timestamp: isSet(object.timeout_timestamp) ? BigInt(object.timeout_timestamp.toString()) : undefined
    };
  },
  toSDK(message: MsgTransfer): MsgTransferSDKType {
    const obj: any = {};
    obj.source_port = message.sourcePort;
    obj.source_channel = message.sourceChannel;
    message.token !== undefined && (obj.token = message.token ? Coin.toSDK(message.token) : undefined);
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    message.timeoutHeight !== undefined && (obj.timeout_height = message.timeoutHeight ? Height.toSDK(message.timeoutHeight) : undefined);
    obj.timeout_timestamp = message.timeoutTimestamp;
    return obj;
  },
  fromAmino(object: MsgTransferAmino): MsgTransfer {
    return {
      sourcePort: object?.source_port,
      sourceChannel: object?.source_channel,
      token: object?.token ? Coin.fromAmino(object.token) : undefined,
      sender: object?.sender,
      receiver: object?.receiver,
      timeoutHeight: object?.timeout_height ? Height.fromAmino(object.timeout_height) : undefined,
      timeoutTimestamp: object?.timeout_timestamp ? BigInt(object.timeout_timestamp) : undefined
    };
  },
  toAmino(message: MsgTransfer): MsgTransferAmino {
    const obj: any = {};
    obj.source_port = message.sourcePort;
    obj.source_channel = message.sourceChannel;
    obj.token = message.token ? Coin.toAmino(message.token) : undefined;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    obj.timeout_height = message.timeoutHeight ? Height.toAmino(message.timeoutHeight) : {};
    obj.timeout_timestamp = message.timeoutTimestamp ? message.timeoutTimestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTransferAminoMsg): MsgTransfer {
    return MsgTransfer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransfer): MsgTransferAminoMsg {
    return {
      type: "cosmos-sdk/MsgTransfer",
      value: MsgTransfer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferProtoMsg): MsgTransfer {
    return MsgTransfer.decode(message.value);
  },
  toProto(message: MsgTransfer): Uint8Array {
    return MsgTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgTransfer): MsgTransferProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
      value: MsgTransfer.encode(message).finish()
    };
  }
};
function createBaseMsgTransferResponse(): MsgTransferResponse {
  return {};
}
export const MsgTransferResponse = {
  typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
  encode(_: MsgTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgTransferResponse {
    const obj = createBaseMsgTransferResponse();
    return obj;
  },
  toJSON(_: MsgTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgTransferResponse>): MsgTransferResponse {
    const message = createBaseMsgTransferResponse();
    return message;
  },
  fromSDK(_: MsgTransferResponseSDKType): MsgTransferResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgTransferResponseSDKType {
    return {};
  },
  toSDK(_: MsgTransferResponse): MsgTransferResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgTransferResponseAmino): MsgTransferResponse {
    return {};
  },
  toAmino(_: MsgTransferResponse): MsgTransferResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferResponseAminoMsg): MsgTransferResponse {
    return MsgTransferResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransferResponse): MsgTransferResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTransferResponse",
      value: MsgTransferResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferResponseProtoMsg): MsgTransferResponse {
    return MsgTransferResponse.decode(message.value);
  },
  toProto(message: MsgTransferResponse): Uint8Array {
    return MsgTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferResponse): MsgTransferResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
      value: MsgTransferResponse.encode(message).finish()
    };
  }
};