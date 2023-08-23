import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.poolmanager.v1beta1";
/** PoolType is an enumeration of all supported pool types. */
export enum PoolType {
  /** Balancer - Balancer is the standard xy=k curve. Its pool model is defined in x/gamm. */
  Balancer = 0,
  /**
   * Stableswap - Stableswap is the Solidly cfmm stable swap curve. Its pool model is defined
   * in x/gamm.
   */
  Stableswap = 1,
  /**
   * Concentrated - Concentrated is the pool model specific to concentrated liquidity. It is
   * defined in x/concentrated-liquidity.
   */
  Concentrated = 2,
  /**
   * CosmWasm - CosmWasm is the pool model specific to CosmWasm. It is defined in
   * x/cosmwasmpool.
   */
  CosmWasm = 3,
  UNRECOGNIZED = -1,
}
export const PoolTypeSDKType = PoolType;
export function poolTypeFromJSON(object: any): PoolType {
  switch (object) {
    case 0:
    case "Balancer":
      return PoolType.Balancer;
    case 1:
    case "Stableswap":
      return PoolType.Stableswap;
    case 2:
    case "Concentrated":
      return PoolType.Concentrated;
    case 3:
    case "CosmWasm":
      return PoolType.CosmWasm;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolType.UNRECOGNIZED;
  }
}
export function poolTypeToJSON(object: PoolType): string {
  switch (object) {
    case PoolType.Balancer:
      return "Balancer";
    case PoolType.Stableswap:
      return "Stableswap";
    case PoolType.Concentrated:
      return "Concentrated";
    case PoolType.CosmWasm:
      return "CosmWasm";
    case PoolType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRoute {
  /** pool_type specifies the type of the pool */
  poolType: PoolType;
  poolId?: bigint;
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRouteSDKType {
  pool_type: PoolType;
  pool_id?: bigint;
}
function createBaseModuleRoute(): ModuleRoute {
  return {
    poolType: 0,
    poolId: undefined
  };
}
export const ModuleRoute = {
  encode(message: ModuleRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolType !== 0) {
      writer.uint32(8).int32(message.poolType);
    }
    if (message.poolId !== undefined) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolType = (reader.int32() as any);
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleRoute {
    const obj = createBaseModuleRoute();
    if (isSet(object.poolType)) obj.poolType = poolTypeFromJSON(object.poolType);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: ModuleRoute): unknown {
    const obj: any = {};
    message.poolType !== undefined && (obj.poolType = poolTypeToJSON(message.poolType));
    message.poolId !== undefined && (obj.poolId = (message.poolId || undefined).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ModuleRoute>): ModuleRoute {
    const message = createBaseModuleRoute();
    message.poolType = object.poolType ?? 0;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : undefined;
    return message;
  },
  fromSDK(object: ModuleRouteSDKType): ModuleRoute {
    return {
      poolType: isSet(object.pool_type) ? poolTypeFromJSON(object.pool_type) : -1,
      poolId: object?.pool_id
    };
  },
  fromSDKJSON(object: any): ModuleRouteSDKType {
    return {
      pool_type: isSet(object.pool_type) ? poolTypeFromJSON(object.pool_type) : -1,
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : undefined
    };
  },
  toSDK(message: ModuleRoute): ModuleRouteSDKType {
    const obj: any = {};
    message.poolType !== undefined && (obj.pool_type = poolTypeToJSON(message.poolType));
    obj.pool_id = message.poolId;
    return obj;
  }
};