import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.claim.v1beta1";
/** Params defines the claim module's parameters. */
export interface Params {
  airdropStartTime: Date;
  durationUntilDecay: Duration;
  durationOfDecay: Duration;
  /** denom of claimable asset */
  claimDenom: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.claim.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the claim module's parameters. */
export interface ParamsAmino {
  airdrop_start_time?: string;
  duration_until_decay?: DurationAmino;
  duration_of_decay?: DurationAmino;
  /** denom of claimable asset */
  claim_denom: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/claim/params";
  value: ParamsAmino;
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
  airdrop_start_time: Date;
  duration_until_decay: DurationSDKType;
  duration_of_decay: DurationSDKType;
  claim_denom: string;
}
function createBaseParams(): Params {
  return {
    airdropStartTime: new Date(),
    durationUntilDecay: Duration.fromPartial({}),
    durationOfDecay: Duration.fromPartial({}),
    claimDenom: ""
  };
}
export const Params = {
  typeUrl: "/osmosis.claim.v1beta1.Params",
  aminoType: "osmosis/claim/params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.airdropStartTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.durationUntilDecay !== undefined) {
      Duration.encode(message.durationUntilDecay, writer.uint32(18).fork()).ldelim();
    }
    if (message.durationOfDecay !== undefined) {
      Duration.encode(message.durationOfDecay, writer.uint32(26).fork()).ldelim();
    }
    if (message.claimDenom !== "") {
      writer.uint32(34).string(message.claimDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.durationUntilDecay = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.durationOfDecay = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.claimDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.airdropStartTime)) obj.airdropStartTime = new Date(object.airdropStartTime);
    if (isSet(object.durationUntilDecay)) obj.durationUntilDecay = Duration.fromJSON(object.durationUntilDecay);
    if (isSet(object.durationOfDecay)) obj.durationOfDecay = Duration.fromJSON(object.durationOfDecay);
    if (isSet(object.claimDenom)) obj.claimDenom = String(object.claimDenom);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.airdropStartTime !== undefined && (obj.airdropStartTime = message.airdropStartTime.toISOString());
    message.durationUntilDecay !== undefined && (obj.durationUntilDecay = message.durationUntilDecay ? Duration.toJSON(message.durationUntilDecay) : undefined);
    message.durationOfDecay !== undefined && (obj.durationOfDecay = message.durationOfDecay ? Duration.toJSON(message.durationOfDecay) : undefined);
    message.claimDenom !== undefined && (obj.claimDenom = message.claimDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.airdropStartTime = object.airdropStartTime ?? undefined;
    if (object.durationUntilDecay !== undefined && object.durationUntilDecay !== null) {
      message.durationUntilDecay = Duration.fromPartial(object.durationUntilDecay);
    }
    if (object.durationOfDecay !== undefined && object.durationOfDecay !== null) {
      message.durationOfDecay = Duration.fromPartial(object.durationOfDecay);
    }
    message.claimDenom = object.claimDenom ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      airdropStartTime: object.airdrop_start_time ?? undefined,
      durationUntilDecay: object.duration_until_decay ? Duration.fromSDK(object.duration_until_decay) : undefined,
      durationOfDecay: object.duration_of_decay ? Duration.fromSDK(object.duration_of_decay) : undefined,
      claimDenom: object?.claim_denom
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.airdropStartTime !== undefined && (obj.airdrop_start_time = message.airdropStartTime ?? undefined);
    message.durationUntilDecay !== undefined && (obj.duration_until_decay = message.durationUntilDecay ? Duration.toSDK(message.durationUntilDecay) : undefined);
    message.durationOfDecay !== undefined && (obj.duration_of_decay = message.durationOfDecay ? Duration.toSDK(message.durationOfDecay) : undefined);
    obj.claim_denom = message.claimDenom;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      airdropStartTime: object?.airdrop_start_time ? fromTimestamp(Timestamp.fromAmino(object.airdrop_start_time)) : undefined,
      durationUntilDecay: object?.duration_until_decay ? Duration.fromAmino(object.duration_until_decay) : undefined,
      durationOfDecay: object?.duration_of_decay ? Duration.fromAmino(object.duration_of_decay) : undefined,
      claimDenom: object.claim_denom
    };
  },
  toAmino(message: Params, useInterfaces: boolean = true): ParamsAmino {
    const obj: any = {};
    obj.airdrop_start_time = message.airdropStartTime ? Timestamp.toAmino(toTimestamp(message.airdropStartTime)) : undefined;
    obj.duration_until_decay = message.durationUntilDecay ? Duration.toAmino(message.durationUntilDecay, useInterfaces) : undefined;
    obj.duration_of_decay = message.durationOfDecay ? Duration.toAmino(message.durationOfDecay, useInterfaces) : undefined;
    obj.claim_denom = message.claimDenom;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params, useInterfaces: boolean = true): ParamsAminoMsg {
    return {
      type: "osmosis/claim/params",
      value: Params.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg, useInterfaces: boolean = true): Params {
    return Params.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.claim.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};