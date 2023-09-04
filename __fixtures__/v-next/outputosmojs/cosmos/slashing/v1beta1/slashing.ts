import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmos.slashing.v1beta1";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
  address: string;
  /** Height at which validator was first a candidate OR was unjailed */
  startHeight: bigint;
  /**
   * Index which is incremented each time the validator was a bonded
   * in a block and may have signed a precommit or not. This in conjunction with the
   * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
   */
  indexOffset: bigint;
  /** Timestamp until which the validator is jailed due to liveness downtime. */
  jailedUntil: Date;
  /**
   * Whether or not a validator has been tombstoned (killed out of validator set). It is set
   * once the validator commits an equivocation or for any other configured misbehiavor.
   */
  tombstoned: boolean;
  /**
   * A counter kept to avoid unnecessary array reads.
   * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
   */
  missedBlocksCounter: bigint;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfoSDKType {
  address: string;
  start_height: bigint;
  index_offset: bigint;
  jailed_until: Date;
  tombstoned: boolean;
  missed_blocks_counter: bigint;
}
/** Params represents the parameters used for by the slashing module. */
export interface Params {
  signedBlocksWindow: bigint;
  minSignedPerWindow: Uint8Array;
  downtimeJailDuration: Duration;
  slashFractionDoubleSign: Uint8Array;
  slashFractionDowntime: Uint8Array;
}
/** Params represents the parameters used for by the slashing module. */
export interface ParamsSDKType {
  signed_blocks_window: bigint;
  min_signed_per_window: Uint8Array;
  downtime_jail_duration: DurationSDKType;
  slash_fraction_double_sign: Uint8Array;
  slash_fraction_downtime: Uint8Array;
}
function createBaseValidatorSigningInfo(): ValidatorSigningInfo {
  return {
    address: "",
    startHeight: BigInt(0),
    indexOffset: BigInt(0),
    jailedUntil: new Date(),
    tombstoned: false,
    missedBlocksCounter: BigInt(0)
  };
}
export const ValidatorSigningInfo = {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
  encode(message: ValidatorSigningInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.startHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.startHeight);
    }
    if (message.indexOffset !== BigInt(0)) {
      writer.uint32(24).int64(message.indexOffset);
    }
    if (message.jailedUntil !== undefined) {
      Timestamp.encode(toTimestamp(message.jailedUntil), writer.uint32(34).fork()).ldelim();
    }
    if (message.tombstoned === true) {
      writer.uint32(40).bool(message.tombstoned);
    }
    if (message.missedBlocksCounter !== BigInt(0)) {
      writer.uint32(48).int64(message.missedBlocksCounter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSigningInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSigningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.startHeight = reader.int64();
          break;
        case 3:
          message.indexOffset = reader.int64();
          break;
        case 4:
          message.jailedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.tombstoned = reader.bool();
          break;
        case 6:
          message.missedBlocksCounter = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSigningInfo {
    const obj = createBaseValidatorSigningInfo();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.startHeight)) obj.startHeight = BigInt(object.startHeight.toString());
    if (isSet(object.indexOffset)) obj.indexOffset = BigInt(object.indexOffset.toString());
    if (isSet(object.jailedUntil)) obj.jailedUntil = new Date(object.jailedUntil);
    if (isSet(object.tombstoned)) obj.tombstoned = Boolean(object.tombstoned);
    if (isSet(object.missedBlocksCounter)) obj.missedBlocksCounter = BigInt(object.missedBlocksCounter.toString());
    return obj;
  },
  toJSON(message: ValidatorSigningInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.startHeight !== undefined && (obj.startHeight = (message.startHeight || BigInt(0)).toString());
    message.indexOffset !== undefined && (obj.indexOffset = (message.indexOffset || BigInt(0)).toString());
    message.jailedUntil !== undefined && (obj.jailedUntil = message.jailedUntil.toISOString());
    message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
    message.missedBlocksCounter !== undefined && (obj.missedBlocksCounter = (message.missedBlocksCounter || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorSigningInfo>): ValidatorSigningInfo {
    const message = createBaseValidatorSigningInfo();
    message.address = object.address ?? "";
    message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? BigInt(object.startHeight.toString()) : BigInt(0);
    message.indexOffset = object.indexOffset !== undefined && object.indexOffset !== null ? BigInt(object.indexOffset.toString()) : BigInt(0);
    message.jailedUntil = object.jailedUntil ?? undefined;
    message.tombstoned = object.tombstoned ?? false;
    message.missedBlocksCounter = object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null ? BigInt(object.missedBlocksCounter.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: ValidatorSigningInfoSDKType): ValidatorSigningInfo {
    return {
      address: object?.address,
      startHeight: object?.start_height,
      indexOffset: object?.index_offset,
      jailedUntil: object.jailed_until ?? undefined,
      tombstoned: object?.tombstoned,
      missedBlocksCounter: object?.missed_blocks_counter
    };
  },
  fromSDKJSON(object: any): ValidatorSigningInfoSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      start_height: isSet(object.start_height) ? BigInt(object.start_height.toString()) : BigInt(0),
      index_offset: isSet(object.index_offset) ? BigInt(object.index_offset.toString()) : BigInt(0),
      jailed_until: isSet(object.jailed_until) ? new Date(object.jailed_until) : undefined,
      tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
      missed_blocks_counter: isSet(object.missed_blocks_counter) ? BigInt(object.missed_blocks_counter.toString()) : BigInt(0)
    };
  },
  toSDK(message: ValidatorSigningInfo): ValidatorSigningInfoSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.start_height = message.startHeight;
    obj.index_offset = message.indexOffset;
    message.jailedUntil !== undefined && (obj.jailed_until = message.jailedUntil ?? undefined);
    obj.tombstoned = message.tombstoned;
    obj.missed_blocks_counter = message.missedBlocksCounter;
    return obj;
  },
  fromAmino(object: ValidatorSigningInfoAmino): ValidatorSigningInfo {
    return {
      address: object.address,
      startHeight: BigInt(object.start_height),
      indexOffset: BigInt(object.index_offset),
      jailedUntil: object.jailed_until,
      tombstoned: object.tombstoned,
      missedBlocksCounter: BigInt(object.missed_blocks_counter)
    };
  },
  toAmino(message: ValidatorSigningInfo): ValidatorSigningInfoAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.start_height = message.startHeight ? message.startHeight.toString() : undefined;
    obj.index_offset = message.indexOffset ? message.indexOffset.toString() : undefined;
    obj.jailed_until = message.jailedUntil;
    obj.tombstoned = message.tombstoned;
    obj.missed_blocks_counter = message.missedBlocksCounter ? message.missedBlocksCounter.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorSigningInfoAminoMsg): ValidatorSigningInfo {
    return ValidatorSigningInfo.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSigningInfo): ValidatorSigningInfoAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSigningInfo",
      value: ValidatorSigningInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorSigningInfoProtoMsg): ValidatorSigningInfo {
    return ValidatorSigningInfo.decode(message.value);
  },
  toProto(message: ValidatorSigningInfo): Uint8Array {
    return ValidatorSigningInfo.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSigningInfo): ValidatorSigningInfoProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
      value: ValidatorSigningInfo.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    signedBlocksWindow: BigInt(0),
    minSignedPerWindow: new Uint8Array(),
    downtimeJailDuration: Duration.fromPartial({}),
    slashFractionDoubleSign: new Uint8Array(),
    slashFractionDowntime: new Uint8Array()
  };
}
export const Params = {
  typeUrl: "/cosmos.slashing.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signedBlocksWindow !== BigInt(0)) {
      writer.uint32(8).int64(message.signedBlocksWindow);
    }
    if (message.minSignedPerWindow.length !== 0) {
      writer.uint32(18).bytes(message.minSignedPerWindow);
    }
    if (message.downtimeJailDuration !== undefined) {
      Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.slashFractionDoubleSign.length !== 0) {
      writer.uint32(34).bytes(message.slashFractionDoubleSign);
    }
    if (message.slashFractionDowntime.length !== 0) {
      writer.uint32(42).bytes(message.slashFractionDowntime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedBlocksWindow = reader.int64();
          break;
        case 2:
          message.minSignedPerWindow = reader.bytes();
          break;
        case 3:
          message.downtimeJailDuration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.slashFractionDoubleSign = reader.bytes();
          break;
        case 5:
          message.slashFractionDowntime = reader.bytes();
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
    if (isSet(object.signedBlocksWindow)) obj.signedBlocksWindow = BigInt(object.signedBlocksWindow.toString());
    if (isSet(object.minSignedPerWindow)) obj.minSignedPerWindow = bytesFromBase64(object.minSignedPerWindow);
    if (isSet(object.downtimeJailDuration)) obj.downtimeJailDuration = Duration.fromJSON(object.downtimeJailDuration);
    if (isSet(object.slashFractionDoubleSign)) obj.slashFractionDoubleSign = bytesFromBase64(object.slashFractionDoubleSign);
    if (isSet(object.slashFractionDowntime)) obj.slashFractionDowntime = bytesFromBase64(object.slashFractionDowntime);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.signedBlocksWindow !== undefined && (obj.signedBlocksWindow = (message.signedBlocksWindow || BigInt(0)).toString());
    message.minSignedPerWindow !== undefined && (obj.minSignedPerWindow = base64FromBytes(message.minSignedPerWindow !== undefined ? message.minSignedPerWindow : new Uint8Array()));
    message.downtimeJailDuration !== undefined && (obj.downtimeJailDuration = message.downtimeJailDuration ? Duration.toJSON(message.downtimeJailDuration) : undefined);
    message.slashFractionDoubleSign !== undefined && (obj.slashFractionDoubleSign = base64FromBytes(message.slashFractionDoubleSign !== undefined ? message.slashFractionDoubleSign : new Uint8Array()));
    message.slashFractionDowntime !== undefined && (obj.slashFractionDowntime = base64FromBytes(message.slashFractionDowntime !== undefined ? message.slashFractionDowntime : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.signedBlocksWindow = object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null ? BigInt(object.signedBlocksWindow.toString()) : BigInt(0);
    message.minSignedPerWindow = object.minSignedPerWindow ?? new Uint8Array();
    message.downtimeJailDuration = object.downtimeJailDuration !== undefined && object.downtimeJailDuration !== null ? Duration.fromPartial(object.downtimeJailDuration) : Duration.fromPartial({});
    message.slashFractionDoubleSign = object.slashFractionDoubleSign ?? new Uint8Array();
    message.slashFractionDowntime = object.slashFractionDowntime ?? new Uint8Array();
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      signedBlocksWindow: object?.signed_blocks_window,
      minSignedPerWindow: object?.min_signed_per_window,
      downtimeJailDuration: object.downtime_jail_duration ? Duration.fromSDK(object.downtime_jail_duration) : undefined,
      slashFractionDoubleSign: object?.slash_fraction_double_sign,
      slashFractionDowntime: object?.slash_fraction_downtime
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      signed_blocks_window: isSet(object.signed_blocks_window) ? BigInt(object.signed_blocks_window.toString()) : BigInt(0),
      min_signed_per_window: isSet(object.min_signed_per_window) ? bytesFromBase64(object.min_signed_per_window) : new Uint8Array(),
      downtime_jail_duration: isSet(object.downtime_jail_duration) ? Duration.fromSDKJSON(object.downtime_jail_duration) : undefined,
      slash_fraction_double_sign: isSet(object.slash_fraction_double_sign) ? bytesFromBase64(object.slash_fraction_double_sign) : new Uint8Array(),
      slash_fraction_downtime: isSet(object.slash_fraction_downtime) ? bytesFromBase64(object.slash_fraction_downtime) : new Uint8Array()
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.signed_blocks_window = message.signedBlocksWindow;
    obj.min_signed_per_window = message.minSignedPerWindow;
    message.downtimeJailDuration !== undefined && (obj.downtime_jail_duration = message.downtimeJailDuration ? Duration.toSDK(message.downtimeJailDuration) : undefined);
    obj.slash_fraction_double_sign = message.slashFractionDoubleSign;
    obj.slash_fraction_downtime = message.slashFractionDowntime;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      signedBlocksWindow: BigInt(object.signed_blocks_window),
      minSignedPerWindow: object.min_signed_per_window,
      downtimeJailDuration: object?.downtime_jail_duration ? Duration.fromAmino(object.downtime_jail_duration) : undefined,
      slashFractionDoubleSign: object.slash_fraction_double_sign,
      slashFractionDowntime: object.slash_fraction_downtime
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.signed_blocks_window = message.signedBlocksWindow ? message.signedBlocksWindow.toString() : undefined;
    obj.min_signed_per_window = message.minSignedPerWindow;
    obj.downtime_jail_duration = message.downtimeJailDuration ? Duration.toAmino(message.downtimeJailDuration) : undefined;
    obj.slash_fraction_double_sign = message.slashFractionDoubleSign;
    obj.slash_fraction_downtime = message.slashFractionDowntime;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};