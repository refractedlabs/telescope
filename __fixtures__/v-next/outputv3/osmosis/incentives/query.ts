import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeAmino, GaugeSDKType } from "./gauge";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, isSet } from "../../helpers";
export const protobufPackage = "osmosis.incentives";
export interface ModuleToDistributeCoinsRequest {}
export interface ModuleToDistributeCoinsRequestProtoMsg {
  typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsRequest";
  value: Uint8Array;
}
export interface ModuleToDistributeCoinsRequestAmino {}
export interface ModuleToDistributeCoinsRequestAminoMsg {
  type: "osmosis/incentives/module-to-distribute-coins-request";
  value: ModuleToDistributeCoinsRequestAmino;
}
export interface ModuleToDistributeCoinsRequestSDKType {}
export interface ModuleToDistributeCoinsResponse {
  /** Coins that have yet to be distributed */
  coins: Coin[];
}
export interface ModuleToDistributeCoinsResponseProtoMsg {
  typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsResponse";
  value: Uint8Array;
}
export interface ModuleToDistributeCoinsResponseAmino {
  /** Coins that have yet to be distributed */
  coins: CoinAmino[];
}
export interface ModuleToDistributeCoinsResponseAminoMsg {
  type: "osmosis/incentives/module-to-distribute-coins-response";
  value: ModuleToDistributeCoinsResponseAmino;
}
export interface ModuleToDistributeCoinsResponseSDKType {
  coins: CoinSDKType[];
}
export interface GaugeByIDRequest {
  /** Gague ID being queried */
  id: bigint;
}
export interface GaugeByIDRequestProtoMsg {
  typeUrl: "/osmosis.incentives.GaugeByIDRequest";
  value: Uint8Array;
}
export interface GaugeByIDRequestAmino {
  /** Gague ID being queried */
  id: string;
}
export interface GaugeByIDRequestAminoMsg {
  type: "osmosis/incentives/gauge-by-id-request";
  value: GaugeByIDRequestAmino;
}
export interface GaugeByIDRequestSDKType {
  id: bigint;
}
export interface GaugeByIDResponse {
  /** Gauge that corresponds to provided gague ID */
  gauge: Gauge;
}
export interface GaugeByIDResponseProtoMsg {
  typeUrl: "/osmosis.incentives.GaugeByIDResponse";
  value: Uint8Array;
}
export interface GaugeByIDResponseAmino {
  /** Gauge that corresponds to provided gague ID */
  gauge?: GaugeAmino;
}
export interface GaugeByIDResponseAminoMsg {
  type: "osmosis/incentives/gauge-by-id-response";
  value: GaugeByIDResponseAmino;
}
export interface GaugeByIDResponseSDKType {
  gauge: GaugeSDKType;
}
export interface GaugesRequest {
  /** Pagination defines pagination for the request */
  pagination: PageRequest;
}
export interface GaugesRequestProtoMsg {
  typeUrl: "/osmosis.incentives.GaugesRequest";
  value: Uint8Array;
}
export interface GaugesRequestAmino {
  /** Pagination defines pagination for the request */
  pagination?: PageRequestAmino;
}
export interface GaugesRequestAminoMsg {
  type: "osmosis/incentives/gauges-request";
  value: GaugesRequestAmino;
}
export interface GaugesRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface GaugesResponse {
  /** Upcoming and active gauges */
  data: Gauge[];
  /** Pagination defines pagination for the response */
  pagination: PageResponse;
}
export interface GaugesResponseProtoMsg {
  typeUrl: "/osmosis.incentives.GaugesResponse";
  value: Uint8Array;
}
export interface GaugesResponseAmino {
  /** Upcoming and active gauges */
  data: GaugeAmino[];
  /** Pagination defines pagination for the response */
  pagination?: PageResponseAmino;
}
export interface GaugesResponseAminoMsg {
  type: "osmosis/incentives/gauges-response";
  value: GaugesResponseAmino;
}
export interface GaugesResponseSDKType {
  data: GaugeSDKType[];
  pagination: PageResponseSDKType;
}
export interface ActiveGaugesRequest {
  /** Pagination defines pagination for the request */
  pagination: PageRequest;
}
export interface ActiveGaugesRequestProtoMsg {
  typeUrl: "/osmosis.incentives.ActiveGaugesRequest";
  value: Uint8Array;
}
export interface ActiveGaugesRequestAmino {
  /** Pagination defines pagination for the request */
  pagination?: PageRequestAmino;
}
export interface ActiveGaugesRequestAminoMsg {
  type: "osmosis/incentives/active-gauges-request";
  value: ActiveGaugesRequestAmino;
}
export interface ActiveGaugesRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface ActiveGaugesResponse {
  /** Active gagues only */
  data: Gauge[];
  /** Pagination defines pagination for the response */
  pagination: PageResponse;
}
export interface ActiveGaugesResponseProtoMsg {
  typeUrl: "/osmosis.incentives.ActiveGaugesResponse";
  value: Uint8Array;
}
export interface ActiveGaugesResponseAmino {
  /** Active gagues only */
  data: GaugeAmino[];
  /** Pagination defines pagination for the response */
  pagination?: PageResponseAmino;
}
export interface ActiveGaugesResponseAminoMsg {
  type: "osmosis/incentives/active-gauges-response";
  value: ActiveGaugesResponseAmino;
}
export interface ActiveGaugesResponseSDKType {
  data: GaugeSDKType[];
  pagination: PageResponseSDKType;
}
export interface ActiveGaugesPerDenomRequest {
  /** Desired denom when querying active gagues */
  denom: string;
  /** Pagination defines pagination for the request */
  pagination: PageRequest;
}
export interface ActiveGaugesPerDenomRequestProtoMsg {
  typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomRequest";
  value: Uint8Array;
}
export interface ActiveGaugesPerDenomRequestAmino {
  /** Desired denom when querying active gagues */
  denom: string;
  /** Pagination defines pagination for the request */
  pagination?: PageRequestAmino;
}
export interface ActiveGaugesPerDenomRequestAminoMsg {
  type: "osmosis/incentives/active-gauges-per-denom-request";
  value: ActiveGaugesPerDenomRequestAmino;
}
export interface ActiveGaugesPerDenomRequestSDKType {
  denom: string;
  pagination: PageRequestSDKType;
}
export interface ActiveGaugesPerDenomResponse {
  /** Active gagues that match denom in query */
  data: Gauge[];
  /** Pagination defines pagination for the response */
  pagination: PageResponse;
}
export interface ActiveGaugesPerDenomResponseProtoMsg {
  typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomResponse";
  value: Uint8Array;
}
export interface ActiveGaugesPerDenomResponseAmino {
  /** Active gagues that match denom in query */
  data: GaugeAmino[];
  /** Pagination defines pagination for the response */
  pagination?: PageResponseAmino;
}
export interface ActiveGaugesPerDenomResponseAminoMsg {
  type: "osmosis/incentives/active-gauges-per-denom-response";
  value: ActiveGaugesPerDenomResponseAmino;
}
export interface ActiveGaugesPerDenomResponseSDKType {
  data: GaugeSDKType[];
  pagination: PageResponseSDKType;
}
export interface UpcomingGaugesRequest {
  /** Pagination defines pagination for the request */
  pagination: PageRequest;
}
export interface UpcomingGaugesRequestProtoMsg {
  typeUrl: "/osmosis.incentives.UpcomingGaugesRequest";
  value: Uint8Array;
}
export interface UpcomingGaugesRequestAmino {
  /** Pagination defines pagination for the request */
  pagination?: PageRequestAmino;
}
export interface UpcomingGaugesRequestAminoMsg {
  type: "osmosis/incentives/upcoming-gauges-request";
  value: UpcomingGaugesRequestAmino;
}
export interface UpcomingGaugesRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface UpcomingGaugesResponse {
  /** Gauges whose distribution is upcoming */
  data: Gauge[];
  /** Pagination defines pagination for the response */
  pagination: PageResponse;
}
export interface UpcomingGaugesResponseProtoMsg {
  typeUrl: "/osmosis.incentives.UpcomingGaugesResponse";
  value: Uint8Array;
}
export interface UpcomingGaugesResponseAmino {
  /** Gauges whose distribution is upcoming */
  data: GaugeAmino[];
  /** Pagination defines pagination for the response */
  pagination?: PageResponseAmino;
}
export interface UpcomingGaugesResponseAminoMsg {
  type: "osmosis/incentives/upcoming-gauges-response";
  value: UpcomingGaugesResponseAmino;
}
export interface UpcomingGaugesResponseSDKType {
  data: GaugeSDKType[];
  pagination: PageResponseSDKType;
}
export interface UpcomingGaugesPerDenomRequest {
  /** Filter for upcoming gagues that match specific denom */
  denom: string;
  /** Pagination defines pagination for the request */
  pagination: PageRequest;
}
export interface UpcomingGaugesPerDenomRequestProtoMsg {
  typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomRequest";
  value: Uint8Array;
}
export interface UpcomingGaugesPerDenomRequestAmino {
  /** Filter for upcoming gagues that match specific denom */
  denom: string;
  /** Pagination defines pagination for the request */
  pagination?: PageRequestAmino;
}
export interface UpcomingGaugesPerDenomRequestAminoMsg {
  type: "osmosis/incentives/upcoming-gauges-per-denom-request";
  value: UpcomingGaugesPerDenomRequestAmino;
}
export interface UpcomingGaugesPerDenomRequestSDKType {
  denom: string;
  pagination: PageRequestSDKType;
}
export interface UpcomingGaugesPerDenomResponse {
  /** Upcoming gagues that match denom in query */
  upcomingGauges: Gauge[];
  /** Pagination defines pagination for the response */
  pagination: PageResponse;
}
export interface UpcomingGaugesPerDenomResponseProtoMsg {
  typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomResponse";
  value: Uint8Array;
}
export interface UpcomingGaugesPerDenomResponseAmino {
  /** Upcoming gagues that match denom in query */
  upcoming_gauges: GaugeAmino[];
  /** Pagination defines pagination for the response */
  pagination?: PageResponseAmino;
}
export interface UpcomingGaugesPerDenomResponseAminoMsg {
  type: "osmosis/incentives/upcoming-gauges-per-denom-response";
  value: UpcomingGaugesPerDenomResponseAmino;
}
export interface UpcomingGaugesPerDenomResponseSDKType {
  upcoming_gauges: GaugeSDKType[];
  pagination: PageResponseSDKType;
}
export interface RewardsEstRequest {
  /** Address that is being queried for future estimated rewards */
  owner: string;
  /** Lock IDs included in future reward estimation */
  lockIds: bigint[];
  /**
   * Upper time limit of reward estimation
   * Lower limit is current epoch
   */
  endEpoch: bigint;
}
export interface RewardsEstRequestProtoMsg {
  typeUrl: "/osmosis.incentives.RewardsEstRequest";
  value: Uint8Array;
}
export interface RewardsEstRequestAmino {
  /** Address that is being queried for future estimated rewards */
  owner: string;
  /** Lock IDs included in future reward estimation */
  lock_ids: string[];
  /**
   * Upper time limit of reward estimation
   * Lower limit is current epoch
   */
  end_epoch: string;
}
export interface RewardsEstRequestAminoMsg {
  type: "osmosis/incentives/rewards-est-request";
  value: RewardsEstRequestAmino;
}
export interface RewardsEstRequestSDKType {
  owner: string;
  lock_ids: bigint[];
  end_epoch: bigint;
}
export interface RewardsEstResponse {
  /**
   * Estimated coin rewards that will be recieved at provided address
   * from specified locks between current time and end epoch
   */
  coins: Coin[];
}
export interface RewardsEstResponseProtoMsg {
  typeUrl: "/osmosis.incentives.RewardsEstResponse";
  value: Uint8Array;
}
export interface RewardsEstResponseAmino {
  /**
   * Estimated coin rewards that will be recieved at provided address
   * from specified locks between current time and end epoch
   */
  coins: CoinAmino[];
}
export interface RewardsEstResponseAminoMsg {
  type: "osmosis/incentives/rewards-est-response";
  value: RewardsEstResponseAmino;
}
export interface RewardsEstResponseSDKType {
  coins: CoinSDKType[];
}
export interface QueryLockableDurationsRequest {}
export interface QueryLockableDurationsRequestProtoMsg {
  typeUrl: "/osmosis.incentives.QueryLockableDurationsRequest";
  value: Uint8Array;
}
export interface QueryLockableDurationsRequestAmino {}
export interface QueryLockableDurationsRequestAminoMsg {
  type: "osmosis/incentives/query-lockable-durations-request";
  value: QueryLockableDurationsRequestAmino;
}
export interface QueryLockableDurationsRequestSDKType {}
export interface QueryLockableDurationsResponse {
  /** Time durations that users can lock coins for in order to recieve rewards */
  lockableDurations: Duration[];
}
export interface QueryLockableDurationsResponseProtoMsg {
  typeUrl: "/osmosis.incentives.QueryLockableDurationsResponse";
  value: Uint8Array;
}
export interface QueryLockableDurationsResponseAmino {
  /** Time durations that users can lock coins for in order to recieve rewards */
  lockable_durations: DurationAmino[];
}
export interface QueryLockableDurationsResponseAminoMsg {
  type: "osmosis/incentives/query-lockable-durations-response";
  value: QueryLockableDurationsResponseAmino;
}
export interface QueryLockableDurationsResponseSDKType {
  lockable_durations: DurationSDKType[];
}
function createBaseModuleToDistributeCoinsRequest(): ModuleToDistributeCoinsRequest {
  return {};
}
export const ModuleToDistributeCoinsRequest = {
  typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsRequest",
  aminoType: "osmosis/incentives/module-to-distribute-coins-request",
  encode(_: ModuleToDistributeCoinsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleToDistributeCoinsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleToDistributeCoinsRequest();
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
  fromJSON(_: any): ModuleToDistributeCoinsRequest {
    const obj = createBaseModuleToDistributeCoinsRequest();
    return obj;
  },
  toJSON(_: ModuleToDistributeCoinsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<ModuleToDistributeCoinsRequest>): ModuleToDistributeCoinsRequest {
    const message = createBaseModuleToDistributeCoinsRequest();
    return message;
  },
  fromSDK(_: ModuleToDistributeCoinsRequestSDKType): ModuleToDistributeCoinsRequest {
    return {};
  },
  toSDK(_: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ModuleToDistributeCoinsRequestAmino): ModuleToDistributeCoinsRequest {
    return {};
  },
  toAmino(_: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ModuleToDistributeCoinsRequestAminoMsg): ModuleToDistributeCoinsRequest {
    return ModuleToDistributeCoinsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestAminoMsg {
    return {
      type: "osmosis/incentives/module-to-distribute-coins-request",
      value: ModuleToDistributeCoinsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleToDistributeCoinsRequestProtoMsg): ModuleToDistributeCoinsRequest {
    return ModuleToDistributeCoinsRequest.decode(message.value);
  },
  toProto(message: ModuleToDistributeCoinsRequest): Uint8Array {
    return ModuleToDistributeCoinsRequest.encode(message).finish();
  },
  toProtoMsg(message: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsRequest",
      value: ModuleToDistributeCoinsRequest.encode(message).finish()
    };
  }
};
function createBaseModuleToDistributeCoinsResponse(): ModuleToDistributeCoinsResponse {
  return {
    coins: []
  };
}
export const ModuleToDistributeCoinsResponse = {
  typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsResponse",
  aminoType: "osmosis/incentives/module-to-distribute-coins-response",
  encode(message: ModuleToDistributeCoinsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleToDistributeCoinsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleToDistributeCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleToDistributeCoinsResponse {
    const obj = createBaseModuleToDistributeCoinsResponse();
    if (Array.isArray(object?.coins)) object.coins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: ModuleToDistributeCoinsResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ModuleToDistributeCoinsResponse>): ModuleToDistributeCoinsResponse {
    const message = createBaseModuleToDistributeCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ModuleToDistributeCoinsResponseSDKType): ModuleToDistributeCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseSDKType {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAmino(object: ModuleToDistributeCoinsResponseAmino): ModuleToDistributeCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: ModuleToDistributeCoinsResponseAminoMsg): ModuleToDistributeCoinsResponse {
    return ModuleToDistributeCoinsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseAminoMsg {
    return {
      type: "osmosis/incentives/module-to-distribute-coins-response",
      value: ModuleToDistributeCoinsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleToDistributeCoinsResponseProtoMsg): ModuleToDistributeCoinsResponse {
    return ModuleToDistributeCoinsResponse.decode(message.value);
  },
  toProto(message: ModuleToDistributeCoinsResponse): Uint8Array {
    return ModuleToDistributeCoinsResponse.encode(message).finish();
  },
  toProtoMsg(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsResponse",
      value: ModuleToDistributeCoinsResponse.encode(message).finish()
    };
  }
};
function createBaseGaugeByIDRequest(): GaugeByIDRequest {
  return {
    id: BigInt(0)
  };
}
export const GaugeByIDRequest = {
  typeUrl: "/osmosis.incentives.GaugeByIDRequest",
  aminoType: "osmosis/incentives/gauge-by-id-request",
  encode(message: GaugeByIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GaugeByIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugeByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GaugeByIDRequest {
<<<<<<< HEAD
    const obj = createBaseGaugeByIDRequest();
    if (isSet(object.id)) obj.id = Long.fromValue(object.id);
    return obj;
=======
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
>>>>>>> changes-v1
  },
  toJSON(message: GaugeByIDRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GaugeByIDRequest>): GaugeByIDRequest {
    const message = createBaseGaugeByIDRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: GaugeByIDRequestSDKType): GaugeByIDRequest {
    return {
      id: object?.id
    };
  },
  toSDK(message: GaugeByIDRequest): GaugeByIDRequestSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: GaugeByIDRequestAmino): GaugeByIDRequest {
    return {
      id: BigInt(object.id)
    };
  },
  toAmino(message: GaugeByIDRequest): GaugeByIDRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GaugeByIDRequestAminoMsg): GaugeByIDRequest {
    return GaugeByIDRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GaugeByIDRequest): GaugeByIDRequestAminoMsg {
    return {
      type: "osmosis/incentives/gauge-by-id-request",
      value: GaugeByIDRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GaugeByIDRequestProtoMsg): GaugeByIDRequest {
    return GaugeByIDRequest.decode(message.value);
  },
  toProto(message: GaugeByIDRequest): Uint8Array {
    return GaugeByIDRequest.encode(message).finish();
  },
  toProtoMsg(message: GaugeByIDRequest): GaugeByIDRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.GaugeByIDRequest",
      value: GaugeByIDRequest.encode(message).finish()
    };
  }
};
function createBaseGaugeByIDResponse(): GaugeByIDResponse {
  return {
    gauge: Gauge.fromPartial({})
  };
}
export const GaugeByIDResponse = {
  typeUrl: "/osmosis.incentives.GaugeByIDResponse",
  aminoType: "osmosis/incentives/gauge-by-id-response",
  encode(message: GaugeByIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gauge !== undefined) {
      Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GaugeByIDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugeByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauge = Gauge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GaugeByIDResponse {
    const obj = createBaseGaugeByIDResponse();
    if (isSet(object.gauge)) obj.gauge = Gauge.fromJSON(object.gauge);
    return obj;
  },
  toJSON(message: GaugeByIDResponse): unknown {
    const obj: any = {};
    message.gauge !== undefined && (obj.gauge = message.gauge ? Gauge.toJSON(message.gauge) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GaugeByIDResponse>): GaugeByIDResponse {
    const message = createBaseGaugeByIDResponse();
    message.gauge = object.gauge !== undefined && object.gauge !== null ? Gauge.fromPartial(object.gauge) : Gauge.fromPartial({});
    return message;
  },
  fromSDK(object: GaugeByIDResponseSDKType): GaugeByIDResponse {
    return {
      gauge: object.gauge ? Gauge.fromSDK(object.gauge) : undefined
    };
  },
  toSDK(message: GaugeByIDResponse): GaugeByIDResponseSDKType {
    const obj: any = {};
    message.gauge !== undefined && (obj.gauge = message.gauge ? Gauge.toSDK(message.gauge) : undefined);
    return obj;
  },
  fromAmino(object: GaugeByIDResponseAmino): GaugeByIDResponse {
    return {
      gauge: object?.gauge ? Gauge.fromAmino(object.gauge) : undefined
    };
  },
  toAmino(message: GaugeByIDResponse): GaugeByIDResponseAmino {
    const obj: any = {};
    obj.gauge = message.gauge ? Gauge.toAmino(message.gauge) : undefined;
    return obj;
  },
  fromAminoMsg(object: GaugeByIDResponseAminoMsg): GaugeByIDResponse {
    return GaugeByIDResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GaugeByIDResponse): GaugeByIDResponseAminoMsg {
    return {
      type: "osmosis/incentives/gauge-by-id-response",
      value: GaugeByIDResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GaugeByIDResponseProtoMsg): GaugeByIDResponse {
    return GaugeByIDResponse.decode(message.value);
  },
  toProto(message: GaugeByIDResponse): Uint8Array {
    return GaugeByIDResponse.encode(message).finish();
  },
  toProtoMsg(message: GaugeByIDResponse): GaugeByIDResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.GaugeByIDResponse",
      value: GaugeByIDResponse.encode(message).finish()
    };
  }
};
function createBaseGaugesRequest(): GaugesRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const GaugesRequest = {
  typeUrl: "/osmosis.incentives.GaugesRequest",
  aminoType: "osmosis/incentives/gauges-request",
  encode(message: GaugesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GaugesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GaugesRequest {
    const obj = createBaseGaugesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: GaugesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GaugesRequest>): GaugesRequest {
    const message = createBaseGaugesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    return message;
  },
  fromSDK(object: GaugesRequestSDKType): GaugesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: GaugesRequest): GaugesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: GaugesRequestAmino): GaugesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: GaugesRequest): GaugesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GaugesRequestAminoMsg): GaugesRequest {
    return GaugesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GaugesRequest): GaugesRequestAminoMsg {
    return {
      type: "osmosis/incentives/gauges-request",
      value: GaugesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GaugesRequestProtoMsg): GaugesRequest {
    return GaugesRequest.decode(message.value);
  },
  toProto(message: GaugesRequest): Uint8Array {
    return GaugesRequest.encode(message).finish();
  },
  toProtoMsg(message: GaugesRequest): GaugesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.GaugesRequest",
      value: GaugesRequest.encode(message).finish()
    };
  }
};
function createBaseGaugesResponse(): GaugesResponse {
  return {
    data: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const GaugesResponse = {
  typeUrl: "/osmosis.incentives.GaugesResponse",
  aminoType: "osmosis/incentives/gauges-response",
  encode(message: GaugesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GaugesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GaugesResponse {
    const obj = createBaseGaugesResponse();
    if (Array.isArray(object?.data)) object.data.map((e: any) => Gauge.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: GaugesResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GaugesResponse>): GaugesResponse {
    const message = createBaseGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  },
  fromSDK(object: GaugesResponseSDKType): GaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: GaugesResponse): GaugesResponseSDKType {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toSDK(e) : undefined);
    } else {
      obj.data = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: GaugesResponseAmino): GaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: GaugesResponse): GaugesResponseAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toAmino(e) : undefined);
    } else {
      obj.data = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GaugesResponseAminoMsg): GaugesResponse {
    return GaugesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GaugesResponse): GaugesResponseAminoMsg {
    return {
      type: "osmosis/incentives/gauges-response",
      value: GaugesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GaugesResponseProtoMsg): GaugesResponse {
    return GaugesResponse.decode(message.value);
  },
  toProto(message: GaugesResponse): Uint8Array {
    return GaugesResponse.encode(message).finish();
  },
  toProtoMsg(message: GaugesResponse): GaugesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.GaugesResponse",
      value: GaugesResponse.encode(message).finish()
    };
  }
};
function createBaseActiveGaugesRequest(): ActiveGaugesRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const ActiveGaugesRequest = {
  typeUrl: "/osmosis.incentives.ActiveGaugesRequest",
  aminoType: "osmosis/incentives/active-gauges-request",
  encode(message: ActiveGaugesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ActiveGaugesRequest {
    const obj = createBaseActiveGaugesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: ActiveGaugesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ActiveGaugesRequest>): ActiveGaugesRequest {
    const message = createBaseActiveGaugesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    return message;
  },
  fromSDK(object: ActiveGaugesRequestSDKType): ActiveGaugesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: ActiveGaugesRequest): ActiveGaugesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: ActiveGaugesRequestAmino): ActiveGaugesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: ActiveGaugesRequest): ActiveGaugesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ActiveGaugesRequestAminoMsg): ActiveGaugesRequest {
    return ActiveGaugesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ActiveGaugesRequest): ActiveGaugesRequestAminoMsg {
    return {
      type: "osmosis/incentives/active-gauges-request",
      value: ActiveGaugesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ActiveGaugesRequestProtoMsg): ActiveGaugesRequest {
    return ActiveGaugesRequest.decode(message.value);
  },
  toProto(message: ActiveGaugesRequest): Uint8Array {
    return ActiveGaugesRequest.encode(message).finish();
  },
  toProtoMsg(message: ActiveGaugesRequest): ActiveGaugesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.ActiveGaugesRequest",
      value: ActiveGaugesRequest.encode(message).finish()
    };
  }
};
function createBaseActiveGaugesResponse(): ActiveGaugesResponse {
  return {
    data: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const ActiveGaugesResponse = {
  typeUrl: "/osmosis.incentives.ActiveGaugesResponse",
  aminoType: "osmosis/incentives/active-gauges-response",
  encode(message: ActiveGaugesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ActiveGaugesResponse {
    const obj = createBaseActiveGaugesResponse();
    if (Array.isArray(object?.data)) object.data.map((e: any) => Gauge.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: ActiveGaugesResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ActiveGaugesResponse>): ActiveGaugesResponse {
    const message = createBaseActiveGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  },
  fromSDK(object: ActiveGaugesResponseSDKType): ActiveGaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: ActiveGaugesResponse): ActiveGaugesResponseSDKType {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toSDK(e) : undefined);
    } else {
      obj.data = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: ActiveGaugesResponseAmino): ActiveGaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: ActiveGaugesResponse): ActiveGaugesResponseAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toAmino(e) : undefined);
    } else {
      obj.data = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ActiveGaugesResponseAminoMsg): ActiveGaugesResponse {
    return ActiveGaugesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ActiveGaugesResponse): ActiveGaugesResponseAminoMsg {
    return {
      type: "osmosis/incentives/active-gauges-response",
      value: ActiveGaugesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ActiveGaugesResponseProtoMsg): ActiveGaugesResponse {
    return ActiveGaugesResponse.decode(message.value);
  },
  toProto(message: ActiveGaugesResponse): Uint8Array {
    return ActiveGaugesResponse.encode(message).finish();
  },
  toProtoMsg(message: ActiveGaugesResponse): ActiveGaugesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.ActiveGaugesResponse",
      value: ActiveGaugesResponse.encode(message).finish()
    };
  }
};
function createBaseActiveGaugesPerDenomRequest(): ActiveGaugesPerDenomRequest {
  return {
    denom: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const ActiveGaugesPerDenomRequest = {
  typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomRequest",
  aminoType: "osmosis/incentives/active-gauges-per-denom-request",
  encode(message: ActiveGaugesPerDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesPerDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesPerDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ActiveGaugesPerDenomRequest {
    const obj = createBaseActiveGaugesPerDenomRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: ActiveGaugesPerDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ActiveGaugesPerDenomRequest>): ActiveGaugesPerDenomRequest {
    const message = createBaseActiveGaugesPerDenomRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    return message;
  },
  fromSDK(object: ActiveGaugesPerDenomRequestSDKType): ActiveGaugesPerDenomRequest {
    return {
      denom: object?.denom,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: ActiveGaugesPerDenomRequestAmino): ActiveGaugesPerDenomRequest {
    return {
      denom: object.denom,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ActiveGaugesPerDenomRequestAminoMsg): ActiveGaugesPerDenomRequest {
    return ActiveGaugesPerDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestAminoMsg {
    return {
      type: "osmosis/incentives/active-gauges-per-denom-request",
      value: ActiveGaugesPerDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ActiveGaugesPerDenomRequestProtoMsg): ActiveGaugesPerDenomRequest {
    return ActiveGaugesPerDenomRequest.decode(message.value);
  },
  toProto(message: ActiveGaugesPerDenomRequest): Uint8Array {
    return ActiveGaugesPerDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomRequest",
      value: ActiveGaugesPerDenomRequest.encode(message).finish()
    };
  }
};
function createBaseActiveGaugesPerDenomResponse(): ActiveGaugesPerDenomResponse {
  return {
    data: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const ActiveGaugesPerDenomResponse = {
  typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomResponse",
  aminoType: "osmosis/incentives/active-gauges-per-denom-response",
  encode(message: ActiveGaugesPerDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesPerDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesPerDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ActiveGaugesPerDenomResponse {
    const obj = createBaseActiveGaugesPerDenomResponse();
    if (Array.isArray(object?.data)) object.data.map((e: any) => Gauge.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: ActiveGaugesPerDenomResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ActiveGaugesPerDenomResponse>): ActiveGaugesPerDenomResponse {
    const message = createBaseActiveGaugesPerDenomResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  },
  fromSDK(object: ActiveGaugesPerDenomResponseSDKType): ActiveGaugesPerDenomResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseSDKType {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toSDK(e) : undefined);
    } else {
      obj.data = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: ActiveGaugesPerDenomResponseAmino): ActiveGaugesPerDenomResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toAmino(e) : undefined);
    } else {
      obj.data = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ActiveGaugesPerDenomResponseAminoMsg): ActiveGaugesPerDenomResponse {
    return ActiveGaugesPerDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseAminoMsg {
    return {
      type: "osmosis/incentives/active-gauges-per-denom-response",
      value: ActiveGaugesPerDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ActiveGaugesPerDenomResponseProtoMsg): ActiveGaugesPerDenomResponse {
    return ActiveGaugesPerDenomResponse.decode(message.value);
  },
  toProto(message: ActiveGaugesPerDenomResponse): Uint8Array {
    return ActiveGaugesPerDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomResponse",
      value: ActiveGaugesPerDenomResponse.encode(message).finish()
    };
  }
};
function createBaseUpcomingGaugesRequest(): UpcomingGaugesRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const UpcomingGaugesRequest = {
  typeUrl: "/osmosis.incentives.UpcomingGaugesRequest",
  aminoType: "osmosis/incentives/upcoming-gauges-request",
  encode(message: UpcomingGaugesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpcomingGaugesRequest {
    const obj = createBaseUpcomingGaugesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: UpcomingGaugesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UpcomingGaugesRequest>): UpcomingGaugesRequest {
    const message = createBaseUpcomingGaugesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    return message;
  },
  fromSDK(object: UpcomingGaugesRequestSDKType): UpcomingGaugesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: UpcomingGaugesRequest): UpcomingGaugesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: UpcomingGaugesRequestAmino): UpcomingGaugesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: UpcomingGaugesRequest): UpcomingGaugesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpcomingGaugesRequestAminoMsg): UpcomingGaugesRequest {
    return UpcomingGaugesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: UpcomingGaugesRequest): UpcomingGaugesRequestAminoMsg {
    return {
      type: "osmosis/incentives/upcoming-gauges-request",
      value: UpcomingGaugesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: UpcomingGaugesRequestProtoMsg): UpcomingGaugesRequest {
    return UpcomingGaugesRequest.decode(message.value);
  },
  toProto(message: UpcomingGaugesRequest): Uint8Array {
    return UpcomingGaugesRequest.encode(message).finish();
  },
  toProtoMsg(message: UpcomingGaugesRequest): UpcomingGaugesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.UpcomingGaugesRequest",
      value: UpcomingGaugesRequest.encode(message).finish()
    };
  }
};
function createBaseUpcomingGaugesResponse(): UpcomingGaugesResponse {
  return {
    data: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const UpcomingGaugesResponse = {
  typeUrl: "/osmosis.incentives.UpcomingGaugesResponse",
  aminoType: "osmosis/incentives/upcoming-gauges-response",
  encode(message: UpcomingGaugesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpcomingGaugesResponse {
    const obj = createBaseUpcomingGaugesResponse();
    if (Array.isArray(object?.data)) object.data.map((e: any) => Gauge.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: UpcomingGaugesResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UpcomingGaugesResponse>): UpcomingGaugesResponse {
    const message = createBaseUpcomingGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  },
  fromSDK(object: UpcomingGaugesResponseSDKType): UpcomingGaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: UpcomingGaugesResponse): UpcomingGaugesResponseSDKType {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toSDK(e) : undefined);
    } else {
      obj.data = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: UpcomingGaugesResponseAmino): UpcomingGaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: UpcomingGaugesResponse): UpcomingGaugesResponseAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toAmino(e) : undefined);
    } else {
      obj.data = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpcomingGaugesResponseAminoMsg): UpcomingGaugesResponse {
    return UpcomingGaugesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: UpcomingGaugesResponse): UpcomingGaugesResponseAminoMsg {
    return {
      type: "osmosis/incentives/upcoming-gauges-response",
      value: UpcomingGaugesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: UpcomingGaugesResponseProtoMsg): UpcomingGaugesResponse {
    return UpcomingGaugesResponse.decode(message.value);
  },
  toProto(message: UpcomingGaugesResponse): Uint8Array {
    return UpcomingGaugesResponse.encode(message).finish();
  },
  toProtoMsg(message: UpcomingGaugesResponse): UpcomingGaugesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.UpcomingGaugesResponse",
      value: UpcomingGaugesResponse.encode(message).finish()
    };
  }
};
function createBaseUpcomingGaugesPerDenomRequest(): UpcomingGaugesPerDenomRequest {
  return {
    denom: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const UpcomingGaugesPerDenomRequest = {
  typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomRequest",
  aminoType: "osmosis/incentives/upcoming-gauges-per-denom-request",
  encode(message: UpcomingGaugesPerDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesPerDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesPerDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpcomingGaugesPerDenomRequest {
    const obj = createBaseUpcomingGaugesPerDenomRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: UpcomingGaugesPerDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UpcomingGaugesPerDenomRequest>): UpcomingGaugesPerDenomRequest {
    const message = createBaseUpcomingGaugesPerDenomRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    return message;
  },
  fromSDK(object: UpcomingGaugesPerDenomRequestSDKType): UpcomingGaugesPerDenomRequest {
    return {
      denom: object?.denom,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: UpcomingGaugesPerDenomRequestAmino): UpcomingGaugesPerDenomRequest {
    return {
      denom: object.denom,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpcomingGaugesPerDenomRequestAminoMsg): UpcomingGaugesPerDenomRequest {
    return UpcomingGaugesPerDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestAminoMsg {
    return {
      type: "osmosis/incentives/upcoming-gauges-per-denom-request",
      value: UpcomingGaugesPerDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: UpcomingGaugesPerDenomRequestProtoMsg): UpcomingGaugesPerDenomRequest {
    return UpcomingGaugesPerDenomRequest.decode(message.value);
  },
  toProto(message: UpcomingGaugesPerDenomRequest): Uint8Array {
    return UpcomingGaugesPerDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomRequest",
      value: UpcomingGaugesPerDenomRequest.encode(message).finish()
    };
  }
};
function createBaseUpcomingGaugesPerDenomResponse(): UpcomingGaugesPerDenomResponse {
  return {
    upcomingGauges: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const UpcomingGaugesPerDenomResponse = {
  typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomResponse",
  aminoType: "osmosis/incentives/upcoming-gauges-per-denom-response",
  encode(message: UpcomingGaugesPerDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.upcomingGauges) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesPerDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesPerDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upcomingGauges.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpcomingGaugesPerDenomResponse {
    const obj = createBaseUpcomingGaugesPerDenomResponse();
    if (Array.isArray(object?.upcomingGauges)) object.upcomingGauges.map((e: any) => Gauge.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: UpcomingGaugesPerDenomResponse): unknown {
    const obj: any = {};
    if (message.upcomingGauges) {
      obj.upcomingGauges = message.upcomingGauges.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.upcomingGauges = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UpcomingGaugesPerDenomResponse>): UpcomingGaugesPerDenomResponse {
    const message = createBaseUpcomingGaugesPerDenomResponse();
    message.upcomingGauges = object.upcomingGauges?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  },
  fromSDK(object: UpcomingGaugesPerDenomResponseSDKType): UpcomingGaugesPerDenomResponse {
    return {
      upcomingGauges: Array.isArray(object?.upcoming_gauges) ? object.upcoming_gauges.map((e: any) => Gauge.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseSDKType {
    const obj: any = {};
    if (message.upcomingGauges) {
      obj.upcoming_gauges = message.upcomingGauges.map(e => e ? Gauge.toSDK(e) : undefined);
    } else {
      obj.upcoming_gauges = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: UpcomingGaugesPerDenomResponseAmino): UpcomingGaugesPerDenomResponse {
    return {
      upcomingGauges: Array.isArray(object?.upcoming_gauges) ? object.upcoming_gauges.map((e: any) => Gauge.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseAmino {
    const obj: any = {};
    if (message.upcomingGauges) {
      obj.upcoming_gauges = message.upcomingGauges.map(e => e ? Gauge.toAmino(e) : undefined);
    } else {
      obj.upcoming_gauges = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpcomingGaugesPerDenomResponseAminoMsg): UpcomingGaugesPerDenomResponse {
    return UpcomingGaugesPerDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseAminoMsg {
    return {
      type: "osmosis/incentives/upcoming-gauges-per-denom-response",
      value: UpcomingGaugesPerDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: UpcomingGaugesPerDenomResponseProtoMsg): UpcomingGaugesPerDenomResponse {
    return UpcomingGaugesPerDenomResponse.decode(message.value);
  },
  toProto(message: UpcomingGaugesPerDenomResponse): Uint8Array {
    return UpcomingGaugesPerDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomResponse",
      value: UpcomingGaugesPerDenomResponse.encode(message).finish()
    };
  }
};
function createBaseRewardsEstRequest(): RewardsEstRequest {
  return {
    owner: "",
    lockIds: [],
    endEpoch: BigInt(0)
  };
}
export const RewardsEstRequest = {
  typeUrl: "/osmosis.incentives.RewardsEstRequest",
  aminoType: "osmosis/incentives/rewards-est-request",
  encode(message: RewardsEstRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    writer.uint32(18).fork();
    for (const v of message.lockIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.endEpoch !== BigInt(0)) {
      writer.uint32(24).int64(message.endEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardsEstRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsEstRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lockIds.push(reader.uint64());
            }
          } else {
            message.lockIds.push(reader.uint64());
          }
          break;
        case 3:
          message.endEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardsEstRequest {
<<<<<<< HEAD
    const obj = createBaseRewardsEstRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (Array.isArray(object?.lockIds)) object.lockIds.map((e: any) => Long.fromValue(e));
    if (isSet(object.endEpoch)) obj.endEpoch = Long.fromValue(object.endEpoch);
    return obj;
=======
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      lockIds: Array.isArray(object?.lockIds) ? object.lockIds.map((e: any) => BigInt(e.toString())) : [],
      endEpoch: isSet(object.endEpoch) ? BigInt(object.endEpoch.toString()) : BigInt(0)
    };
>>>>>>> changes-v1
  },
  toJSON(message: RewardsEstRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.lockIds) {
      obj.lockIds = message.lockIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.lockIds = [];
    }
    message.endEpoch !== undefined && (obj.endEpoch = (message.endEpoch || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<RewardsEstRequest>): RewardsEstRequest {
    const message = createBaseRewardsEstRequest();
    message.owner = object.owner ?? "";
    message.lockIds = object.lockIds?.map(e => BigInt(e.toString())) || [];
    message.endEpoch = object.endEpoch !== undefined && object.endEpoch !== null ? BigInt(object.endEpoch.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: RewardsEstRequestSDKType): RewardsEstRequest {
    return {
      owner: object?.owner,
      lockIds: Array.isArray(object?.lock_ids) ? object.lock_ids.map((e: any) => e) : [],
      endEpoch: object?.end_epoch
    };
  },
  toSDK(message: RewardsEstRequest): RewardsEstRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    if (message.lockIds) {
      obj.lock_ids = message.lockIds.map(e => e);
    } else {
      obj.lock_ids = [];
    }
    obj.end_epoch = message.endEpoch;
    return obj;
  },
  fromAmino(object: RewardsEstRequestAmino): RewardsEstRequest {
    return {
      owner: object.owner,
      lockIds: Array.isArray(object?.lock_ids) ? object.lock_ids.map((e: any) => BigInt(e)) : [],
      endEpoch: BigInt(object.end_epoch)
    };
  },
  toAmino(message: RewardsEstRequest): RewardsEstRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    if (message.lockIds) {
      obj.lock_ids = message.lockIds.map(e => e.toString());
    } else {
      obj.lock_ids = [];
    }
    obj.end_epoch = message.endEpoch ? message.endEpoch.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardsEstRequestAminoMsg): RewardsEstRequest {
    return RewardsEstRequest.fromAmino(object.value);
  },
  toAminoMsg(message: RewardsEstRequest): RewardsEstRequestAminoMsg {
    return {
      type: "osmosis/incentives/rewards-est-request",
      value: RewardsEstRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: RewardsEstRequestProtoMsg): RewardsEstRequest {
    return RewardsEstRequest.decode(message.value);
  },
  toProto(message: RewardsEstRequest): Uint8Array {
    return RewardsEstRequest.encode(message).finish();
  },
  toProtoMsg(message: RewardsEstRequest): RewardsEstRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.RewardsEstRequest",
      value: RewardsEstRequest.encode(message).finish()
    };
  }
};
function createBaseRewardsEstResponse(): RewardsEstResponse {
  return {
    coins: []
  };
}
export const RewardsEstResponse = {
  typeUrl: "/osmosis.incentives.RewardsEstResponse",
  aminoType: "osmosis/incentives/rewards-est-response",
  encode(message: RewardsEstResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardsEstResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsEstResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardsEstResponse {
    const obj = createBaseRewardsEstResponse();
    if (Array.isArray(object?.coins)) object.coins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: RewardsEstResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<RewardsEstResponse>): RewardsEstResponse {
    const message = createBaseRewardsEstResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: RewardsEstResponseSDKType): RewardsEstResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: RewardsEstResponse): RewardsEstResponseSDKType {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAmino(object: RewardsEstResponseAmino): RewardsEstResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: RewardsEstResponse): RewardsEstResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: RewardsEstResponseAminoMsg): RewardsEstResponse {
    return RewardsEstResponse.fromAmino(object.value);
  },
  toAminoMsg(message: RewardsEstResponse): RewardsEstResponseAminoMsg {
    return {
      type: "osmosis/incentives/rewards-est-response",
      value: RewardsEstResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: RewardsEstResponseProtoMsg): RewardsEstResponse {
    return RewardsEstResponse.decode(message.value);
  },
  toProto(message: RewardsEstResponse): Uint8Array {
    return RewardsEstResponse.encode(message).finish();
  },
  toProtoMsg(message: RewardsEstResponse): RewardsEstResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.RewardsEstResponse",
      value: RewardsEstResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLockableDurationsRequest(): QueryLockableDurationsRequest {
  return {};
}
export const QueryLockableDurationsRequest = {
  typeUrl: "/osmosis.incentives.QueryLockableDurationsRequest",
  aminoType: "osmosis/incentives/query-lockable-durations-request",
  encode(_: QueryLockableDurationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockableDurationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsRequest();
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
  fromJSON(_: any): QueryLockableDurationsRequest {
    const obj = createBaseQueryLockableDurationsRequest();
    return obj;
  },
  toJSON(_: QueryLockableDurationsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryLockableDurationsRequest>): QueryLockableDurationsRequest {
    const message = createBaseQueryLockableDurationsRequest();
    return message;
  },
  fromSDK(_: QueryLockableDurationsRequestSDKType): QueryLockableDurationsRequest {
    return {};
  },
  toSDK(_: QueryLockableDurationsRequest): QueryLockableDurationsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryLockableDurationsRequestAmino): QueryLockableDurationsRequest {
    return {};
  },
  toAmino(_: QueryLockableDurationsRequest): QueryLockableDurationsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLockableDurationsRequestAminoMsg): QueryLockableDurationsRequest {
    return QueryLockableDurationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLockableDurationsRequest): QueryLockableDurationsRequestAminoMsg {
    return {
      type: "osmosis/incentives/query-lockable-durations-request",
      value: QueryLockableDurationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLockableDurationsRequestProtoMsg): QueryLockableDurationsRequest {
    return QueryLockableDurationsRequest.decode(message.value);
  },
  toProto(message: QueryLockableDurationsRequest): Uint8Array {
    return QueryLockableDurationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLockableDurationsRequest): QueryLockableDurationsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.QueryLockableDurationsRequest",
      value: QueryLockableDurationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLockableDurationsResponse(): QueryLockableDurationsResponse {
  return {
    lockableDurations: []
  };
}
export const QueryLockableDurationsResponse = {
  typeUrl: "/osmosis.incentives.QueryLockableDurationsResponse",
  aminoType: "osmosis/incentives/query-lockable-durations-response",
  encode(message: QueryLockableDurationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockableDurationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLockableDurationsResponse {
    const obj = createBaseQueryLockableDurationsResponse();
    if (Array.isArray(object?.lockableDurations)) object.lockableDurations.map((e: any) => Duration.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryLockableDurationsResponse): unknown {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.lockableDurations = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLockableDurationsResponse>): QueryLockableDurationsResponse {
    const message = createBaseQueryLockableDurationsResponse();
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryLockableDurationsResponseSDKType): QueryLockableDurationsResponse {
    return {
      lockableDurations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseSDKType {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toSDK(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }
    return obj;
  },
  fromAmino(object: QueryLockableDurationsResponseAmino): QueryLockableDurationsResponse {
    return {
      lockableDurations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseAmino {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryLockableDurationsResponseAminoMsg): QueryLockableDurationsResponse {
    return QueryLockableDurationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseAminoMsg {
    return {
      type: "osmosis/incentives/query-lockable-durations-response",
      value: QueryLockableDurationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLockableDurationsResponseProtoMsg): QueryLockableDurationsResponse {
    return QueryLockableDurationsResponse.decode(message.value);
  },
  toProto(message: QueryLockableDurationsResponse): Uint8Array {
    return QueryLockableDurationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.QueryLockableDurationsResponse",
      value: QueryLockableDurationsResponse.encode(message).finish()
    };
  }
};