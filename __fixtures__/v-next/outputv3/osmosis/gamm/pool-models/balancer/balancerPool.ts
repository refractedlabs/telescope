import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../../../helpers";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "osmosis.gamm.v1beta1";
/**
 * Parameters for changing the weights in a balancer pool smoothly from
 * a start weight and end weight over a period of time.
 * Currently, the only smooth change supported is linear changing between
 * the two weights, but more types may be added in the future.
 * When these parameters are set, the weight w(t) for pool time `t` is the
 * following:
 *   t <= start_time: w(t) = initial_pool_weights
 *   start_time < t <= start_time + duration:
 *     w(t) = initial_pool_weights + (t - start_time) *
 *       (target_pool_weights - initial_pool_weights) / (duration)
 *   t > start_time + duration: w(t) = target_pool_weights
 */
export interface SmoothWeightChangeParams {
  /**
   * The start time for beginning the weight change.
   * If a parameter change / pool instantiation leaves this blank,
   * it should be generated by the state_machine as the current time.
   */
  startTime: Date;
  /** Duration for the weights to change over */
  duration: Duration;
  /**
   * The initial pool weights. These are copied from the pool's settings
   * at the time of weight change instantiation.
   * The amount PoolAsset.token.amount field is ignored if present,
   * future type refactorings should just have a type with the denom & weight
   * here.
   */
  initialPoolWeights: PoolAsset[];
  /**
   * The target pool weights. The pool weights will change linearly with respect
   * to time between start_time, and start_time + duration. The amount
   * PoolAsset.token.amount field is ignored if present, future type
   * refactorings should just have a type with the denom & weight here.
   */
  targetPoolWeights: PoolAsset[];
}
export interface SmoothWeightChangeParamsProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.SmoothWeightChangeParams";
  value: Uint8Array;
}
/**
 * Parameters for changing the weights in a balancer pool smoothly from
 * a start weight and end weight over a period of time.
 * Currently, the only smooth change supported is linear changing between
 * the two weights, but more types may be added in the future.
 * When these parameters are set, the weight w(t) for pool time `t` is the
 * following:
 *   t <= start_time: w(t) = initial_pool_weights
 *   start_time < t <= start_time + duration:
 *     w(t) = initial_pool_weights + (t - start_time) *
 *       (target_pool_weights - initial_pool_weights) / (duration)
 *   t > start_time + duration: w(t) = target_pool_weights
 */
export interface SmoothWeightChangeParamsAmino {
  /**
   * The start time for beginning the weight change.
   * If a parameter change / pool instantiation leaves this blank,
   * it should be generated by the state_machine as the current time.
   */
  start_time?: string;
  /** Duration for the weights to change over */
  duration?: DurationAmino;
  /**
   * The initial pool weights. These are copied from the pool's settings
   * at the time of weight change instantiation.
   * The amount PoolAsset.token.amount field is ignored if present,
   * future type refactorings should just have a type with the denom & weight
   * here.
   */
  initial_pool_weights?: PoolAssetAmino[];
  /**
   * The target pool weights. The pool weights will change linearly with respect
   * to time between start_time, and start_time + duration. The amount
   * PoolAsset.token.amount field is ignored if present, future type
   * refactorings should just have a type with the denom & weight here.
   */
  target_pool_weights?: PoolAssetAmino[];
}
/**
 * Parameters for changing the weights in a balancer pool smoothly from
 * a start weight and end weight over a period of time.
 * Currently, the only smooth change supported is linear changing between
 * the two weights, but more types may be added in the future.
 * When these parameters are set, the weight w(t) for pool time `t` is the
 * following:
 *   t <= start_time: w(t) = initial_pool_weights
 *   start_time < t <= start_time + duration:
 *     w(t) = initial_pool_weights + (t - start_time) *
 *       (target_pool_weights - initial_pool_weights) / (duration)
 *   t > start_time + duration: w(t) = target_pool_weights
 */
export interface SmoothWeightChangeParamsSDKType {
  start_time: Date;
  duration: DurationSDKType;
  initial_pool_weights: PoolAssetSDKType[];
  target_pool_weights: PoolAssetSDKType[];
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParams {
  swapFee: string;
  exitFee: string;
  smoothWeightChangeParams?: SmoothWeightChangeParams;
}
export interface PoolParamsProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.PoolParams";
  value: Uint8Array;
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParamsAmino {
  swap_fee?: string;
  exit_fee?: string;
  smooth_weight_change_params?: SmoothWeightChangeParamsAmino;
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParamsSDKType {
  swap_fee: string;
  exit_fee: string;
  smooth_weight_change_params?: SmoothWeightChangeParamsSDKType;
}
/**
 * Pool asset is an internal struct that combines the amount of the
 * token in the pool, and its balancer weight.
 * This is an awkward packaging of data,
 * and should be revisited in a future state migration.
 */
export interface PoolAsset {
  /**
   * Coins we are talking about,
   * the denomination must be unique amongst all PoolAssets for this pool.
   */
  token: Coin;
  /** Weight that is not normalized. This weight must be less than 2^50 */
  weight: string;
}
export interface PoolAssetProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.PoolAsset";
  value: Uint8Array;
}
/**
 * Pool asset is an internal struct that combines the amount of the
 * token in the pool, and its balancer weight.
 * This is an awkward packaging of data,
 * and should be revisited in a future state migration.
 */
export interface PoolAssetAmino {
  /**
   * Coins we are talking about,
   * the denomination must be unique amongst all PoolAssets for this pool.
   */
  token?: CoinAmino;
  /** Weight that is not normalized. This weight must be less than 2^50 */
  weight?: string;
}
/**
 * Pool asset is an internal struct that combines the amount of the
 * token in the pool, and its balancer weight.
 * This is an awkward packaging of data,
 * and should be revisited in a future state migration.
 */
export interface PoolAssetSDKType {
  token: CoinSDKType;
  weight: string;
}
export interface Pool {
  $typeUrl?: "/osmosis.gamm.v1beta1.Pool";
  address: string;
  id: bigint;
  poolParams: PoolParams;
  /**
   * This string specifies who will govern the pool in the future.
   * Valid forms of this are:
   * {token name},{duration}
   * {duration}
   * where {token name} if specified is the token which determines the
   * governor, and if not specified is the LP token for this pool.duration is
   * a time specified as 0w,1w,2w, etc. which specifies how long the token
   * would need to be locked up to count in governance. 0w means no lockup.
   * TODO: Further improve these docs
   */
  futurePoolGovernor: string;
  /** sum of all LP tokens sent out */
  totalShares: Coin;
  /**
   * These are assumed to be sorted by denomiation.
   * They contain the pool asset and the information about the weight
   */
  poolAssets: PoolAsset[];
  /** sum of all non-normalized pool weights */
  totalWeight: string;
}
export interface PoolProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  address?: string;
  id?: string;
  pool_params?: PoolParamsAmino;
  /**
   * This string specifies who will govern the pool in the future.
   * Valid forms of this are:
   * {token name},{duration}
   * {duration}
   * where {token name} if specified is the token which determines the
   * governor, and if not specified is the LP token for this pool.duration is
   * a time specified as 0w,1w,2w, etc. which specifies how long the token
   * would need to be locked up to count in governance. 0w means no lockup.
   * TODO: Further improve these docs
   */
  future_pool_governor?: string;
  /** sum of all LP tokens sent out */
  total_shares?: CoinAmino;
  /**
   * These are assumed to be sorted by denomiation.
   * They contain the pool asset and the information about the weight
   */
  pool_assets?: PoolAssetAmino[];
  /** sum of all non-normalized pool weights */
  total_weight?: string;
}
export interface PoolSDKType {
  $typeUrl?: "/osmosis.gamm.v1beta1.Pool";
  address: string;
  id: bigint;
  pool_params: PoolParamsSDKType;
  future_pool_governor: string;
  total_shares: CoinSDKType;
  pool_assets: PoolAssetSDKType[];
  total_weight: string;
}
function createBaseSmoothWeightChangeParams(): SmoothWeightChangeParams {
  return {
    startTime: new Date(),
    duration: Duration.fromPartial({}),
    initialPoolWeights: [],
    targetPoolWeights: []
  };
}
export const SmoothWeightChangeParams = {
  typeUrl: "/osmosis.gamm.v1beta1.SmoothWeightChangeParams",
  aminoType: "osmosis/gamm/smooth-weight-change-params",
  encode(message: SmoothWeightChangeParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.initialPoolWeights) {
      PoolAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.targetPoolWeights) {
      PoolAsset.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SmoothWeightChangeParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSmoothWeightChangeParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.initialPoolWeights.push(PoolAsset.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.targetPoolWeights.push(PoolAsset.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SmoothWeightChangeParams {
    const obj = createBaseSmoothWeightChangeParams();
    if (isSet(object.startTime)) obj.startTime = new Date(object.startTime);
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    if (Array.isArray(object?.initialPoolWeights)) obj.initialPoolWeights = object.initialPoolWeights.map((e: any) => PoolAsset.fromJSON(e));
    if (Array.isArray(object?.targetPoolWeights)) obj.targetPoolWeights = object.targetPoolWeights.map((e: any) => PoolAsset.fromJSON(e));
    return obj;
  },
  toJSON(message: SmoothWeightChangeParams): unknown {
    const obj: any = {};
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    if (message.initialPoolWeights) {
      obj.initialPoolWeights = message.initialPoolWeights.map(e => e ? PoolAsset.toJSON(e) : undefined);
    } else {
      obj.initialPoolWeights = [];
    }
    if (message.targetPoolWeights) {
      obj.targetPoolWeights = message.targetPoolWeights.map(e => e ? PoolAsset.toJSON(e) : undefined);
    } else {
      obj.targetPoolWeights = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SmoothWeightChangeParams>): SmoothWeightChangeParams {
    const message = createBaseSmoothWeightChangeParams();
    message.startTime = object.startTime ?? undefined;
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    message.initialPoolWeights = object.initialPoolWeights?.map(e => PoolAsset.fromPartial(e)) || [];
    message.targetPoolWeights = object.targetPoolWeights?.map(e => PoolAsset.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: SmoothWeightChangeParamsSDKType): SmoothWeightChangeParams {
    return {
      startTime: object.start_time ?? undefined,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined,
      initialPoolWeights: Array.isArray(object?.initial_pool_weights) ? object.initial_pool_weights.map((e: any) => PoolAsset.fromSDK(e)) : [],
      targetPoolWeights: Array.isArray(object?.target_pool_weights) ? object.target_pool_weights.map((e: any) => PoolAsset.fromSDK(e)) : []
    };
  },
  toSDK(message: SmoothWeightChangeParams): SmoothWeightChangeParamsSDKType {
    const obj: any = {};
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    if (message.initialPoolWeights) {
      obj.initial_pool_weights = message.initialPoolWeights.map(e => e ? PoolAsset.toSDK(e) : undefined);
    } else {
      obj.initial_pool_weights = [];
    }
    if (message.targetPoolWeights) {
      obj.target_pool_weights = message.targetPoolWeights.map(e => e ? PoolAsset.toSDK(e) : undefined);
    } else {
      obj.target_pool_weights = [];
    }
    return obj;
  },
  fromAmino(object: SmoothWeightChangeParamsAmino): SmoothWeightChangeParams {
    const message = createBaseSmoothWeightChangeParams();
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    message.initialPoolWeights = object.initial_pool_weights?.map(e => PoolAsset.fromAmino(e)) || [];
    message.targetPoolWeights = object.target_pool_weights?.map(e => PoolAsset.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SmoothWeightChangeParams, useInterfaces: boolean = true): SmoothWeightChangeParamsAmino {
    const obj: any = {};
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration, useInterfaces) : undefined;
    if (message.initialPoolWeights) {
      obj.initial_pool_weights = message.initialPoolWeights.map(e => e ? PoolAsset.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.initial_pool_weights = message.initialPoolWeights;
    }
    if (message.targetPoolWeights) {
      obj.target_pool_weights = message.targetPoolWeights.map(e => e ? PoolAsset.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.target_pool_weights = message.targetPoolWeights;
    }
    return obj;
  },
  fromProtoMsg(message: SmoothWeightChangeParamsProtoMsg, useInterfaces: boolean = true): SmoothWeightChangeParams {
    return SmoothWeightChangeParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SmoothWeightChangeParams): Uint8Array {
    return SmoothWeightChangeParams.encode(message).finish();
  },
  toProtoMsg(message: SmoothWeightChangeParams): SmoothWeightChangeParamsProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.SmoothWeightChangeParams",
      value: SmoothWeightChangeParams.encode(message).finish()
    };
  }
};
function createBasePoolParams(): PoolParams {
  return {
    swapFee: "",
    exitFee: "",
    smoothWeightChangeParams: undefined
  };
}
export const PoolParams = {
  typeUrl: "/osmosis.gamm.v1beta1.PoolParams",
  aminoType: "osmosis/gamm/pool-params",
  encode(message: PoolParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swapFee !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.exitFee !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.exitFee, 18).atomics);
    }
    if (message.smoothWeightChangeParams !== undefined) {
      SmoothWeightChangeParams.encode(message.smoothWeightChangeParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PoolParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.exitFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.smoothWeightChangeParams = SmoothWeightChangeParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolParams {
    const obj = createBasePoolParams();
    if (isSet(object.swapFee)) obj.swapFee = String(object.swapFee);
    if (isSet(object.exitFee)) obj.exitFee = String(object.exitFee);
    if (isSet(object.smoothWeightChangeParams)) obj.smoothWeightChangeParams = SmoothWeightChangeParams.fromJSON(object.smoothWeightChangeParams);
    return obj;
  },
  toJSON(message: PoolParams): unknown {
    const obj: any = {};
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.exitFee !== undefined && (obj.exitFee = message.exitFee);
    message.smoothWeightChangeParams !== undefined && (obj.smoothWeightChangeParams = message.smoothWeightChangeParams ? SmoothWeightChangeParams.toJSON(message.smoothWeightChangeParams) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<PoolParams>): PoolParams {
    const message = createBasePoolParams();
    message.swapFee = object.swapFee ?? "";
    message.exitFee = object.exitFee ?? "";
    if (object.smoothWeightChangeParams !== undefined && object.smoothWeightChangeParams !== null) {
      message.smoothWeightChangeParams = SmoothWeightChangeParams.fromPartial(object.smoothWeightChangeParams);
    }
    return message;
  },
  fromSDK(object: PoolParamsSDKType): PoolParams {
    return {
      swapFee: object?.swap_fee,
      exitFee: object?.exit_fee,
      smoothWeightChangeParams: object.smooth_weight_change_params ? SmoothWeightChangeParams.fromSDK(object.smooth_weight_change_params) : undefined
    };
  },
  toSDK(message: PoolParams): PoolParamsSDKType {
    const obj: any = {};
    obj.swap_fee = message.swapFee;
    obj.exit_fee = message.exitFee;
    message.smoothWeightChangeParams !== undefined && (obj.smooth_weight_change_params = message.smoothWeightChangeParams ? SmoothWeightChangeParams.toSDK(message.smoothWeightChangeParams) : undefined);
    return obj;
  },
  fromAmino(object: PoolParamsAmino): PoolParams {
    const message = createBasePoolParams();
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    if (object.exit_fee !== undefined && object.exit_fee !== null) {
      message.exitFee = object.exit_fee;
    }
    if (object.smooth_weight_change_params !== undefined && object.smooth_weight_change_params !== null) {
      message.smoothWeightChangeParams = SmoothWeightChangeParams.fromAmino(object.smooth_weight_change_params);
    }
    return message;
  },
  toAmino(message: PoolParams, useInterfaces: boolean = true): PoolParamsAmino {
    const obj: any = {};
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    obj.exit_fee = message.exitFee === "" ? undefined : message.exitFee;
    obj.smooth_weight_change_params = message.smoothWeightChangeParams ? SmoothWeightChangeParams.toAmino(message.smoothWeightChangeParams, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: PoolParamsProtoMsg, useInterfaces: boolean = true): PoolParams {
    return PoolParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PoolParams): Uint8Array {
    return PoolParams.encode(message).finish();
  },
  toProtoMsg(message: PoolParams): PoolParamsProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.PoolParams",
      value: PoolParams.encode(message).finish()
    };
  }
};
function createBasePoolAsset(): PoolAsset {
  return {
    token: Coin.fromPartial({}),
    weight: ""
  };
}
export const PoolAsset = {
  typeUrl: "/osmosis.gamm.v1beta1.PoolAsset",
  aminoType: "osmosis/gamm/pool-asset",
  encode(message: PoolAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PoolAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolAsset {
    const obj = createBasePoolAsset();
    if (isSet(object.token)) obj.token = Coin.fromJSON(object.token);
    if (isSet(object.weight)) obj.weight = String(object.weight);
    return obj;
  },
  toJSON(message: PoolAsset): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: DeepPartial<PoolAsset>): PoolAsset {
    const message = createBasePoolAsset();
    if (object.token !== undefined && object.token !== null) {
      message.token = Coin.fromPartial(object.token);
    }
    message.weight = object.weight ?? "";
    return message;
  },
  fromSDK(object: PoolAssetSDKType): PoolAsset {
    return {
      token: object.token ? Coin.fromSDK(object.token) : undefined,
      weight: object?.weight
    };
  },
  toSDK(message: PoolAsset): PoolAssetSDKType {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token ? Coin.toSDK(message.token) : undefined);
    obj.weight = message.weight;
    return obj;
  },
  fromAmino(object: PoolAssetAmino): PoolAsset {
    const message = createBasePoolAsset();
    if (object.token !== undefined && object.token !== null) {
      message.token = Coin.fromAmino(object.token);
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: PoolAsset, useInterfaces: boolean = true): PoolAssetAmino {
    const obj: any = {};
    obj.token = message.token ? Coin.toAmino(message.token, useInterfaces) : undefined;
    obj.weight = message.weight === "" ? undefined : message.weight;
    return obj;
  },
  fromProtoMsg(message: PoolAssetProtoMsg, useInterfaces: boolean = true): PoolAsset {
    return PoolAsset.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PoolAsset): Uint8Array {
    return PoolAsset.encode(message).finish();
  },
  toProtoMsg(message: PoolAsset): PoolAssetProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.PoolAsset",
      value: PoolAsset.encode(message).finish()
    };
  }
};
function createBasePool(): Pool {
  return {
    $typeUrl: "/osmosis.gamm.v1beta1.Pool",
    address: "",
    id: BigInt(0),
    poolParams: PoolParams.fromPartial({}),
    futurePoolGovernor: "",
    totalShares: Coin.fromPartial({}),
    poolAssets: [],
    totalWeight: ""
  };
}
export const Pool = {
  typeUrl: "/osmosis.gamm.v1beta1.Pool",
  aminoType: "osmosis/gamm/pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.futurePoolGovernor !== "") {
      writer.uint32(34).string(message.futurePoolGovernor);
    }
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.totalWeight !== "") {
      writer.uint32(58).string(message.totalWeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.poolParams = PoolParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.futurePoolGovernor = reader.string();
          break;
        case 5:
          message.totalShares = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 7:
          message.totalWeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    const obj = createBasePool();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.poolParams)) obj.poolParams = PoolParams.fromJSON(object.poolParams);
    if (isSet(object.futurePoolGovernor)) obj.futurePoolGovernor = String(object.futurePoolGovernor);
    if (isSet(object.totalShares)) obj.totalShares = Coin.fromJSON(object.totalShares);
    if (Array.isArray(object?.poolAssets)) obj.poolAssets = object.poolAssets.map((e: any) => PoolAsset.fromJSON(e));
    if (isSet(object.totalWeight)) obj.totalWeight = String(object.totalWeight);
    return obj;
  },
  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.poolParams !== undefined && (obj.poolParams = message.poolParams ? PoolParams.toJSON(message.poolParams) : undefined);
    message.futurePoolGovernor !== undefined && (obj.futurePoolGovernor = message.futurePoolGovernor);
    message.totalShares !== undefined && (obj.totalShares = message.totalShares ? Coin.toJSON(message.totalShares) : undefined);
    if (message.poolAssets) {
      obj.poolAssets = message.poolAssets.map(e => e ? PoolAsset.toJSON(e) : undefined);
    } else {
      obj.poolAssets = [];
    }
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);
    return obj;
  },
  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.address = object.address ?? "";
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    if (object.poolParams !== undefined && object.poolParams !== null) {
      message.poolParams = PoolParams.fromPartial(object.poolParams);
    }
    message.futurePoolGovernor = object.futurePoolGovernor ?? "";
    if (object.totalShares !== undefined && object.totalShares !== null) {
      message.totalShares = Coin.fromPartial(object.totalShares);
    }
    message.poolAssets = object.poolAssets?.map(e => PoolAsset.fromPartial(e)) || [];
    message.totalWeight = object.totalWeight ?? "";
    return message;
  },
  fromSDK(object: PoolSDKType): Pool {
    return {
      address: object?.address,
      id: object?.id,
      poolParams: object.pool_params ? PoolParams.fromSDK(object.pool_params) : undefined,
      futurePoolGovernor: object?.future_pool_governor,
      totalShares: object.total_shares ? Coin.fromSDK(object.total_shares) : undefined,
      poolAssets: Array.isArray(object?.pool_assets) ? object.pool_assets.map((e: any) => PoolAsset.fromSDK(e)) : [],
      totalWeight: object?.total_weight
    };
  },
  toSDK(message: Pool): PoolSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.id = message.id;
    message.poolParams !== undefined && (obj.pool_params = message.poolParams ? PoolParams.toSDK(message.poolParams) : undefined);
    obj.future_pool_governor = message.futurePoolGovernor;
    message.totalShares !== undefined && (obj.total_shares = message.totalShares ? Coin.toSDK(message.totalShares) : undefined);
    if (message.poolAssets) {
      obj.pool_assets = message.poolAssets.map(e => e ? PoolAsset.toSDK(e) : undefined);
    } else {
      obj.pool_assets = [];
    }
    obj.total_weight = message.totalWeight;
    return obj;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.pool_params !== undefined && object.pool_params !== null) {
      message.poolParams = PoolParams.fromAmino(object.pool_params);
    }
    if (object.future_pool_governor !== undefined && object.future_pool_governor !== null) {
      message.futurePoolGovernor = object.future_pool_governor;
    }
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = Coin.fromAmino(object.total_shares);
    }
    message.poolAssets = object.pool_assets?.map(e => PoolAsset.fromAmino(e)) || [];
    if (object.total_weight !== undefined && object.total_weight !== null) {
      message.totalWeight = object.total_weight;
    }
    return message;
  },
  toAmino(message: Pool, useInterfaces: boolean = true): PoolAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.pool_params = message.poolParams ? PoolParams.toAmino(message.poolParams, useInterfaces) : undefined;
    obj.future_pool_governor = message.futurePoolGovernor === "" ? undefined : message.futurePoolGovernor;
    obj.total_shares = message.totalShares ? Coin.toAmino(message.totalShares, useInterfaces) : undefined;
    if (message.poolAssets) {
      obj.pool_assets = message.poolAssets.map(e => e ? PoolAsset.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pool_assets = message.poolAssets;
    }
    obj.total_weight = message.totalWeight === "" ? undefined : message.totalWeight;
    return obj;
  },
  fromProtoMsg(message: PoolProtoMsg, useInterfaces: boolean = true): Pool {
    return Pool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};