import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { IdentifiedPacketFees, IdentifiedPacketFeesSDKType } from "./fee";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { FeeEnabledChannel, FeeEnabledChannelSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "ibc.applications.fee.v1";
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
  /** block height at which to query */
  queryHeight: bigint;
}
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequestSDKType {
  pagination: PageRequestSDKType;
  query_height: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponse {
  /** list of identified fees for incentivized packets */
  incentivizedPackets: IdentifiedPacketFees[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponseSDKType {
  incentivized_packets: IdentifiedPacketFeesSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequest {
  /** block height at which to query */
  queryHeight: bigint;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequestSDKType {
  query_height: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponse {
  /** the identified fees for the incentivized packet */
  incentivizedPacket: IdentifiedPacketFees;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponseSDKType {
  incentivized_packet: IdentifiedPacketFeesSDKType;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
  portId: string;
  channelId: string;
  /** Height to query at */
  queryHeight: bigint;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequestSDKType {
  pagination: PageRequestSDKType;
  port_id: string;
  channel_id: string;
  query_height: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponse {
  /** Map of all incentivized_packets */
  incentivizedPackets: IdentifiedPacketFees[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponseSDKType {
  incentivized_packets: IdentifiedPacketFeesSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequest {}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequestSDKType {}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponse {
  /** the total packet receive fees */
  recvFees: Coin[];
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponseSDKType {
  recv_fees: CoinSDKType[];
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequest {}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequestSDKType {}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponse {
  /** the total packet acknowledgement fees */
  ackFees: Coin[];
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponseSDKType {
  ack_fees: CoinSDKType[];
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequest {}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequestSDKType {}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponse {
  /** the total packet timeout fees */
  timeoutFees: Coin[];
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponseSDKType {
  timeout_fees: CoinSDKType[];
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequest {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address to which the distribution address is registered */
  relayer: string;
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequestSDKType {
  channel_id: string;
  relayer: string;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponse {
  /** the payee address to which packet fees are paid out */
  payeeAddress: string;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponseSDKType {
  payee_address: string;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequest {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address to which the counterparty is registered */
  relayer: string;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequestSDKType {
  channel_id: string;
  relayer: string;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponse {
  /** the counterparty payee address used to compensate forward relaying */
  counterpartyPayee: string;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponseSDKType {
  counterparty_payee: string;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
  /** block height at which to query */
  queryHeight: bigint;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequestSDKType {
  pagination: PageRequestSDKType;
  query_height: bigint;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponse {
  /** list of fee enabled channels */
  feeEnabledChannels: FeeEnabledChannel[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponseSDKType {
  fee_enabled_channels: FeeEnabledChannelSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequest {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequestSDKType {
  port_id: string;
  channel_id: string;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponse {
  /** boolean flag representing the fee enabled channel status */
  feeEnabled: boolean;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponseSDKType {
  fee_enabled: boolean;
}
function createBaseQueryIncentivizedPacketsRequest(): QueryIncentivizedPacketsRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    queryHeight: BigInt(0)
  };
}
export const QueryIncentivizedPacketsRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest",
  encode(message: QueryIncentivizedPacketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketsRequest {
    const obj = createBaseQueryIncentivizedPacketsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    if (isSet(object.queryHeight)) obj.queryHeight = BigInt(object.queryHeight.toString());
    return obj;
  },
  toJSON(message: QueryIncentivizedPacketsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketsRequest>): QueryIncentivizedPacketsRequest {
    const message = createBaseQueryIncentivizedPacketsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketsRequestSDKType): QueryIncentivizedPacketsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined,
      queryHeight: object?.query_height
    };
  },
  fromSDKJSON(object: any): QueryIncentivizedPacketsRequestSDKType {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined,
      query_height: isSet(object.query_height) ? BigInt(object.query_height.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    obj.query_height = message.queryHeight;
    return obj;
  },
  fromAmino(object: QueryIncentivizedPacketsRequestAmino): QueryIncentivizedPacketsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      queryHeight: BigInt(object.query_height)
    };
  },
  toAmino(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.query_height = message.queryHeight ? message.queryHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketsRequestAminoMsg): QueryIncentivizedPacketsRequest {
    return QueryIncentivizedPacketsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketsRequest",
      value: QueryIncentivizedPacketsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketsRequestProtoMsg): QueryIncentivizedPacketsRequest {
    return QueryIncentivizedPacketsRequest.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketsRequest): Uint8Array {
    return QueryIncentivizedPacketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest",
      value: QueryIncentivizedPacketsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIncentivizedPacketsResponse(): QueryIncentivizedPacketsResponse {
  return {
    incentivizedPackets: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryIncentivizedPacketsResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse",
  encode(message: QueryIncentivizedPacketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryIncentivizedPacketsResponse {
    const obj = createBaseQueryIncentivizedPacketsResponse();
    if (Array.isArray(object?.incentivizedPackets)) object.incentivizedPackets.map((e: any) => IdentifiedPacketFees.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryIncentivizedPacketsResponse): unknown {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivizedPackets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toJSON(e) : undefined);
    } else {
      obj.incentivizedPackets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketsResponse>): QueryIncentivizedPacketsResponse {
    const message = createBaseQueryIncentivizedPacketsResponse();
    message.incentivizedPackets = object.incentivizedPackets?.map(e => IdentifiedPacketFees.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketsResponseSDKType): QueryIncentivizedPacketsResponse {
    return {
      incentivizedPackets: Array.isArray(object?.incentivized_packets) ? object.incentivized_packets.map((e: any) => IdentifiedPacketFees.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryIncentivizedPacketsResponseSDKType {
    return {
      incentivized_packets: Array.isArray(object?.incentivized_packets) ? object.incentivized_packets.map((e: any) => IdentifiedPacketFees.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseSDKType {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivized_packets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toSDK(e) : undefined);
    } else {
      obj.incentivized_packets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryIncentivizedPacketsResponseAmino): QueryIncentivizedPacketsResponse {
    return {
      incentivizedPackets: Array.isArray(object?.incentivized_packets) ? object.incentivized_packets.map((e: any) => IdentifiedPacketFees.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseAmino {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivized_packets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toAmino(e) : undefined);
    } else {
      obj.incentivized_packets = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketsResponseAminoMsg): QueryIncentivizedPacketsResponse {
    return QueryIncentivizedPacketsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketsResponse",
      value: QueryIncentivizedPacketsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketsResponseProtoMsg): QueryIncentivizedPacketsResponse {
    return QueryIncentivizedPacketsResponse.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketsResponse): Uint8Array {
    return QueryIncentivizedPacketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse",
      value: QueryIncentivizedPacketsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIncentivizedPacketRequest(): QueryIncentivizedPacketRequest {
  return {
    queryHeight: BigInt(0)
  };
}
export const QueryIncentivizedPacketRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketRequest",
  encode(message: QueryIncentivizedPacketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketRequest {
    const obj = createBaseQueryIncentivizedPacketRequest();
    if (isSet(object.queryHeight)) obj.queryHeight = BigInt(object.queryHeight.toString());
    return obj;
  },
  toJSON(message: QueryIncentivizedPacketRequest): unknown {
    const obj: any = {};
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketRequest>): QueryIncentivizedPacketRequest {
    const message = createBaseQueryIncentivizedPacketRequest();
    message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketRequestSDKType): QueryIncentivizedPacketRequest {
    return {
      queryHeight: object?.query_height
    };
  },
  fromSDKJSON(object: any): QueryIncentivizedPacketRequestSDKType {
    return {
      query_height: isSet(object.query_height) ? BigInt(object.query_height.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestSDKType {
    const obj: any = {};
    obj.query_height = message.queryHeight;
    return obj;
  },
  fromAmino(object: QueryIncentivizedPacketRequestAmino): QueryIncentivizedPacketRequest {
    return {
      queryHeight: BigInt(object.query_height)
    };
  },
  toAmino(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestAmino {
    const obj: any = {};
    obj.query_height = message.queryHeight ? message.queryHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketRequestAminoMsg): QueryIncentivizedPacketRequest {
    return QueryIncentivizedPacketRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketRequest",
      value: QueryIncentivizedPacketRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketRequestProtoMsg): QueryIncentivizedPacketRequest {
    return QueryIncentivizedPacketRequest.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketRequest): Uint8Array {
    return QueryIncentivizedPacketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketRequest",
      value: QueryIncentivizedPacketRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIncentivizedPacketResponse(): QueryIncentivizedPacketResponse {
  return {
    incentivizedPacket: IdentifiedPacketFees.fromPartial({})
  };
}
export const QueryIncentivizedPacketResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketResponse",
  encode(message: QueryIncentivizedPacketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.incentivizedPacket !== undefined) {
      IdentifiedPacketFees.encode(message.incentivizedPacket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPacket = IdentifiedPacketFees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketResponse {
    const obj = createBaseQueryIncentivizedPacketResponse();
    if (isSet(object.incentivizedPacket)) obj.incentivizedPacket = IdentifiedPacketFees.fromJSON(object.incentivizedPacket);
    return obj;
  },
  toJSON(message: QueryIncentivizedPacketResponse): unknown {
    const obj: any = {};
    message.incentivizedPacket !== undefined && (obj.incentivizedPacket = message.incentivizedPacket ? IdentifiedPacketFees.toJSON(message.incentivizedPacket) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketResponse>): QueryIncentivizedPacketResponse {
    const message = createBaseQueryIncentivizedPacketResponse();
    message.incentivizedPacket = object.incentivizedPacket !== undefined && object.incentivizedPacket !== null ? IdentifiedPacketFees.fromPartial(object.incentivizedPacket) : IdentifiedPacketFees.fromPartial({});
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketResponseSDKType): QueryIncentivizedPacketResponse {
    return {
      incentivizedPacket: object.incentivized_packet ? IdentifiedPacketFees.fromSDK(object.incentivized_packet) : undefined
    };
  },
  fromSDKJSON(object: any): QueryIncentivizedPacketResponseSDKType {
    return {
      incentivized_packet: isSet(object.incentivized_packet) ? IdentifiedPacketFees.fromSDKJSON(object.incentivized_packet) : undefined
    };
  },
  toSDK(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseSDKType {
    const obj: any = {};
    message.incentivizedPacket !== undefined && (obj.incentivized_packet = message.incentivizedPacket ? IdentifiedPacketFees.toSDK(message.incentivizedPacket) : undefined);
    return obj;
  },
  fromAmino(object: QueryIncentivizedPacketResponseAmino): QueryIncentivizedPacketResponse {
    return {
      incentivizedPacket: object?.incentivized_packet ? IdentifiedPacketFees.fromAmino(object.incentivized_packet) : undefined
    };
  },
  toAmino(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseAmino {
    const obj: any = {};
    obj.incentivized_packet = message.incentivizedPacket ? IdentifiedPacketFees.toAmino(message.incentivizedPacket) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketResponseAminoMsg): QueryIncentivizedPacketResponse {
    return QueryIncentivizedPacketResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketResponse",
      value: QueryIncentivizedPacketResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketResponseProtoMsg): QueryIncentivizedPacketResponse {
    return QueryIncentivizedPacketResponse.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketResponse): Uint8Array {
    return QueryIncentivizedPacketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketResponse",
      value: QueryIncentivizedPacketResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIncentivizedPacketsForChannelRequest(): QueryIncentivizedPacketsForChannelRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    portId: "",
    channelId: "",
    queryHeight: BigInt(0)
  };
}
export const QueryIncentivizedPacketsForChannelRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest",
  encode(message: QueryIncentivizedPacketsForChannelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketsForChannelRequest {
    const obj = createBaseQueryIncentivizedPacketsForChannelRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.queryHeight)) obj.queryHeight = BigInt(object.queryHeight.toString());
    return obj;
  },
  toJSON(message: QueryIncentivizedPacketsForChannelRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketsForChannelRequest>): QueryIncentivizedPacketsForChannelRequest {
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketsForChannelRequestSDKType): QueryIncentivizedPacketsForChannelRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined,
      portId: object?.port_id,
      channelId: object?.channel_id,
      queryHeight: object?.query_height
    };
  },
  fromSDKJSON(object: any): QueryIncentivizedPacketsForChannelRequestSDKType {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined,
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      query_height: isSet(object.query_height) ? BigInt(object.query_height.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.query_height = message.queryHeight;
    return obj;
  },
  fromAmino(object: QueryIncentivizedPacketsForChannelRequestAmino): QueryIncentivizedPacketsForChannelRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      portId: object.port_id,
      channelId: object.channel_id,
      queryHeight: BigInt(object.query_height)
    };
  },
  toAmino(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.query_height = message.queryHeight ? message.queryHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketsForChannelRequestAminoMsg): QueryIncentivizedPacketsForChannelRequest {
    return QueryIncentivizedPacketsForChannelRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketsForChannelRequest",
      value: QueryIncentivizedPacketsForChannelRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketsForChannelRequestProtoMsg): QueryIncentivizedPacketsForChannelRequest {
    return QueryIncentivizedPacketsForChannelRequest.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketsForChannelRequest): Uint8Array {
    return QueryIncentivizedPacketsForChannelRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest",
      value: QueryIncentivizedPacketsForChannelRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIncentivizedPacketsForChannelResponse(): QueryIncentivizedPacketsForChannelResponse {
  return {
    incentivizedPackets: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryIncentivizedPacketsForChannelResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse",
  encode(message: QueryIncentivizedPacketsForChannelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryIncentivizedPacketsForChannelResponse {
    const obj = createBaseQueryIncentivizedPacketsForChannelResponse();
    if (Array.isArray(object?.incentivizedPackets)) object.incentivizedPackets.map((e: any) => IdentifiedPacketFees.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryIncentivizedPacketsForChannelResponse): unknown {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivizedPackets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toJSON(e) : undefined);
    } else {
      obj.incentivizedPackets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketsForChannelResponse>): QueryIncentivizedPacketsForChannelResponse {
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    message.incentivizedPackets = object.incentivizedPackets?.map(e => IdentifiedPacketFees.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketsForChannelResponseSDKType): QueryIncentivizedPacketsForChannelResponse {
    return {
      incentivizedPackets: Array.isArray(object?.incentivized_packets) ? object.incentivized_packets.map((e: any) => IdentifiedPacketFees.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryIncentivizedPacketsForChannelResponseSDKType {
    return {
      incentivized_packets: Array.isArray(object?.incentivized_packets) ? object.incentivized_packets.map((e: any) => IdentifiedPacketFees.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseSDKType {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivized_packets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toSDK(e) : undefined);
    } else {
      obj.incentivized_packets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryIncentivizedPacketsForChannelResponseAmino): QueryIncentivizedPacketsForChannelResponse {
    return {
      incentivizedPackets: Array.isArray(object?.incentivized_packets) ? object.incentivized_packets.map((e: any) => IdentifiedPacketFees.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseAmino {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivized_packets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toAmino(e) : undefined);
    } else {
      obj.incentivized_packets = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketsForChannelResponseAminoMsg): QueryIncentivizedPacketsForChannelResponse {
    return QueryIncentivizedPacketsForChannelResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketsForChannelResponse",
      value: QueryIncentivizedPacketsForChannelResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketsForChannelResponseProtoMsg): QueryIncentivizedPacketsForChannelResponse {
    return QueryIncentivizedPacketsForChannelResponse.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketsForChannelResponse): Uint8Array {
    return QueryIncentivizedPacketsForChannelResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse",
      value: QueryIncentivizedPacketsForChannelResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalRecvFeesRequest(): QueryTotalRecvFeesRequest {
  return {};
}
export const QueryTotalRecvFeesRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesRequest",
  encode(_: QueryTotalRecvFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalRecvFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRecvFeesRequest();
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
  fromJSON(_: any): QueryTotalRecvFeesRequest {
    const obj = createBaseQueryTotalRecvFeesRequest();
    return obj;
  },
  toJSON(_: QueryTotalRecvFeesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryTotalRecvFeesRequest>): QueryTotalRecvFeesRequest {
    const message = createBaseQueryTotalRecvFeesRequest();
    return message;
  },
  fromSDK(_: QueryTotalRecvFeesRequestSDKType): QueryTotalRecvFeesRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryTotalRecvFeesRequestSDKType {
    return {};
  },
  toSDK(_: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryTotalRecvFeesRequestAmino): QueryTotalRecvFeesRequest {
    return {};
  },
  toAmino(_: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalRecvFeesRequestAminoMsg): QueryTotalRecvFeesRequest {
    return QueryTotalRecvFeesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalRecvFeesRequest",
      value: QueryTotalRecvFeesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalRecvFeesRequestProtoMsg): QueryTotalRecvFeesRequest {
    return QueryTotalRecvFeesRequest.decode(message.value);
  },
  toProto(message: QueryTotalRecvFeesRequest): Uint8Array {
    return QueryTotalRecvFeesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesRequest",
      value: QueryTotalRecvFeesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalRecvFeesResponse(): QueryTotalRecvFeesResponse {
  return {
    recvFees: []
  };
}
export const QueryTotalRecvFeesResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesResponse",
  encode(message: QueryTotalRecvFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.recvFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalRecvFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRecvFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalRecvFeesResponse {
    const obj = createBaseQueryTotalRecvFeesResponse();
    if (Array.isArray(object?.recvFees)) object.recvFees.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryTotalRecvFeesResponse): unknown {
    const obj: any = {};
    if (message.recvFees) {
      obj.recvFees = message.recvFees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.recvFees = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalRecvFeesResponse>): QueryTotalRecvFeesResponse {
    const message = createBaseQueryTotalRecvFeesResponse();
    message.recvFees = object.recvFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalRecvFeesResponseSDKType): QueryTotalRecvFeesResponse {
    return {
      recvFees: Array.isArray(object?.recv_fees) ? object.recv_fees.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryTotalRecvFeesResponseSDKType {
    return {
      recv_fees: Array.isArray(object?.recv_fees) ? object.recv_fees.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseSDKType {
    const obj: any = {};
    if (message.recvFees) {
      obj.recv_fees = message.recvFees.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.recv_fees = [];
    }
    return obj;
  },
  fromAmino(object: QueryTotalRecvFeesResponseAmino): QueryTotalRecvFeesResponse {
    return {
      recvFees: Array.isArray(object?.recv_fees) ? object.recv_fees.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseAmino {
    const obj: any = {};
    if (message.recvFees) {
      obj.recv_fees = message.recvFees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.recv_fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalRecvFeesResponseAminoMsg): QueryTotalRecvFeesResponse {
    return QueryTotalRecvFeesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalRecvFeesResponse",
      value: QueryTotalRecvFeesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalRecvFeesResponseProtoMsg): QueryTotalRecvFeesResponse {
    return QueryTotalRecvFeesResponse.decode(message.value);
  },
  toProto(message: QueryTotalRecvFeesResponse): Uint8Array {
    return QueryTotalRecvFeesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesResponse",
      value: QueryTotalRecvFeesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalAckFeesRequest(): QueryTotalAckFeesRequest {
  return {};
}
export const QueryTotalAckFeesRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesRequest",
  encode(_: QueryTotalAckFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalAckFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAckFeesRequest();
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
  fromJSON(_: any): QueryTotalAckFeesRequest {
    const obj = createBaseQueryTotalAckFeesRequest();
    return obj;
  },
  toJSON(_: QueryTotalAckFeesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryTotalAckFeesRequest>): QueryTotalAckFeesRequest {
    const message = createBaseQueryTotalAckFeesRequest();
    return message;
  },
  fromSDK(_: QueryTotalAckFeesRequestSDKType): QueryTotalAckFeesRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryTotalAckFeesRequestSDKType {
    return {};
  },
  toSDK(_: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryTotalAckFeesRequestAmino): QueryTotalAckFeesRequest {
    return {};
  },
  toAmino(_: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalAckFeesRequestAminoMsg): QueryTotalAckFeesRequest {
    return QueryTotalAckFeesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalAckFeesRequest",
      value: QueryTotalAckFeesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalAckFeesRequestProtoMsg): QueryTotalAckFeesRequest {
    return QueryTotalAckFeesRequest.decode(message.value);
  },
  toProto(message: QueryTotalAckFeesRequest): Uint8Array {
    return QueryTotalAckFeesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesRequest",
      value: QueryTotalAckFeesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalAckFeesResponse(): QueryTotalAckFeesResponse {
  return {
    ackFees: []
  };
}
export const QueryTotalAckFeesResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesResponse",
  encode(message: QueryTotalAckFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.ackFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalAckFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAckFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ackFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalAckFeesResponse {
    const obj = createBaseQueryTotalAckFeesResponse();
    if (Array.isArray(object?.ackFees)) object.ackFees.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryTotalAckFeesResponse): unknown {
    const obj: any = {};
    if (message.ackFees) {
      obj.ackFees = message.ackFees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.ackFees = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalAckFeesResponse>): QueryTotalAckFeesResponse {
    const message = createBaseQueryTotalAckFeesResponse();
    message.ackFees = object.ackFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalAckFeesResponseSDKType): QueryTotalAckFeesResponse {
    return {
      ackFees: Array.isArray(object?.ack_fees) ? object.ack_fees.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryTotalAckFeesResponseSDKType {
    return {
      ack_fees: Array.isArray(object?.ack_fees) ? object.ack_fees.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseSDKType {
    const obj: any = {};
    if (message.ackFees) {
      obj.ack_fees = message.ackFees.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.ack_fees = [];
    }
    return obj;
  },
  fromAmino(object: QueryTotalAckFeesResponseAmino): QueryTotalAckFeesResponse {
    return {
      ackFees: Array.isArray(object?.ack_fees) ? object.ack_fees.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseAmino {
    const obj: any = {};
    if (message.ackFees) {
      obj.ack_fees = message.ackFees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.ack_fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalAckFeesResponseAminoMsg): QueryTotalAckFeesResponse {
    return QueryTotalAckFeesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalAckFeesResponse",
      value: QueryTotalAckFeesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalAckFeesResponseProtoMsg): QueryTotalAckFeesResponse {
    return QueryTotalAckFeesResponse.decode(message.value);
  },
  toProto(message: QueryTotalAckFeesResponse): Uint8Array {
    return QueryTotalAckFeesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesResponse",
      value: QueryTotalAckFeesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalTimeoutFeesRequest(): QueryTotalTimeoutFeesRequest {
  return {};
}
export const QueryTotalTimeoutFeesRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest",
  encode(_: QueryTotalTimeoutFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTimeoutFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTimeoutFeesRequest();
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
  fromJSON(_: any): QueryTotalTimeoutFeesRequest {
    const obj = createBaseQueryTotalTimeoutFeesRequest();
    return obj;
  },
  toJSON(_: QueryTotalTimeoutFeesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryTotalTimeoutFeesRequest>): QueryTotalTimeoutFeesRequest {
    const message = createBaseQueryTotalTimeoutFeesRequest();
    return message;
  },
  fromSDK(_: QueryTotalTimeoutFeesRequestSDKType): QueryTotalTimeoutFeesRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryTotalTimeoutFeesRequestSDKType {
    return {};
  },
  toSDK(_: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryTotalTimeoutFeesRequestAmino): QueryTotalTimeoutFeesRequest {
    return {};
  },
  toAmino(_: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalTimeoutFeesRequestAminoMsg): QueryTotalTimeoutFeesRequest {
    return QueryTotalTimeoutFeesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalTimeoutFeesRequest",
      value: QueryTotalTimeoutFeesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalTimeoutFeesRequestProtoMsg): QueryTotalTimeoutFeesRequest {
    return QueryTotalTimeoutFeesRequest.decode(message.value);
  },
  toProto(message: QueryTotalTimeoutFeesRequest): Uint8Array {
    return QueryTotalTimeoutFeesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest",
      value: QueryTotalTimeoutFeesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalTimeoutFeesResponse(): QueryTotalTimeoutFeesResponse {
  return {
    timeoutFees: []
  };
}
export const QueryTotalTimeoutFeesResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse",
  encode(message: QueryTotalTimeoutFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.timeoutFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTimeoutFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTimeoutFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeoutFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalTimeoutFeesResponse {
    const obj = createBaseQueryTotalTimeoutFeesResponse();
    if (Array.isArray(object?.timeoutFees)) object.timeoutFees.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryTotalTimeoutFeesResponse): unknown {
    const obj: any = {};
    if (message.timeoutFees) {
      obj.timeoutFees = message.timeoutFees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.timeoutFees = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalTimeoutFeesResponse>): QueryTotalTimeoutFeesResponse {
    const message = createBaseQueryTotalTimeoutFeesResponse();
    message.timeoutFees = object.timeoutFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalTimeoutFeesResponseSDKType): QueryTotalTimeoutFeesResponse {
    return {
      timeoutFees: Array.isArray(object?.timeout_fees) ? object.timeout_fees.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryTotalTimeoutFeesResponseSDKType {
    return {
      timeout_fees: Array.isArray(object?.timeout_fees) ? object.timeout_fees.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseSDKType {
    const obj: any = {};
    if (message.timeoutFees) {
      obj.timeout_fees = message.timeoutFees.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.timeout_fees = [];
    }
    return obj;
  },
  fromAmino(object: QueryTotalTimeoutFeesResponseAmino): QueryTotalTimeoutFeesResponse {
    return {
      timeoutFees: Array.isArray(object?.timeout_fees) ? object.timeout_fees.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseAmino {
    const obj: any = {};
    if (message.timeoutFees) {
      obj.timeout_fees = message.timeoutFees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.timeout_fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalTimeoutFeesResponseAminoMsg): QueryTotalTimeoutFeesResponse {
    return QueryTotalTimeoutFeesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalTimeoutFeesResponse",
      value: QueryTotalTimeoutFeesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalTimeoutFeesResponseProtoMsg): QueryTotalTimeoutFeesResponse {
    return QueryTotalTimeoutFeesResponse.decode(message.value);
  },
  toProto(message: QueryTotalTimeoutFeesResponse): Uint8Array {
    return QueryTotalTimeoutFeesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse",
      value: QueryTotalTimeoutFeesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPayeeRequest(): QueryPayeeRequest {
  return {
    channelId: "",
    relayer: ""
  };
}
export const QueryPayeeRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryPayeeRequest",
  encode(message: QueryPayeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPayeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPayeeRequest {
    const obj = createBaseQueryPayeeRequest();
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.relayer)) obj.relayer = String(object.relayer);
    return obj;
  },
  toJSON(message: QueryPayeeRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPayeeRequest>): QueryPayeeRequest {
    const message = createBaseQueryPayeeRequest();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
  fromSDK(object: QueryPayeeRequestSDKType): QueryPayeeRequest {
    return {
      channelId: object?.channel_id,
      relayer: object?.relayer
    };
  },
  fromSDKJSON(object: any): QueryPayeeRequestSDKType {
    return {
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : ""
    };
  },
  toSDK(message: QueryPayeeRequest): QueryPayeeRequestSDKType {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    return obj;
  },
  fromAmino(object: QueryPayeeRequestAmino): QueryPayeeRequest {
    return {
      channelId: object.channel_id,
      relayer: object.relayer
    };
  },
  toAmino(message: QueryPayeeRequest): QueryPayeeRequestAmino {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    return obj;
  },
  fromAminoMsg(object: QueryPayeeRequestAminoMsg): QueryPayeeRequest {
    return QueryPayeeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPayeeRequest): QueryPayeeRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPayeeRequest",
      value: QueryPayeeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPayeeRequestProtoMsg): QueryPayeeRequest {
    return QueryPayeeRequest.decode(message.value);
  },
  toProto(message: QueryPayeeRequest): Uint8Array {
    return QueryPayeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPayeeRequest): QueryPayeeRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryPayeeRequest",
      value: QueryPayeeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPayeeResponse(): QueryPayeeResponse {
  return {
    payeeAddress: ""
  };
}
export const QueryPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryPayeeResponse",
  encode(message: QueryPayeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.payeeAddress !== "") {
      writer.uint32(10).string(message.payeeAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payeeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPayeeResponse {
    const obj = createBaseQueryPayeeResponse();
    if (isSet(object.payeeAddress)) obj.payeeAddress = String(object.payeeAddress);
    return obj;
  },
  toJSON(message: QueryPayeeResponse): unknown {
    const obj: any = {};
    message.payeeAddress !== undefined && (obj.payeeAddress = message.payeeAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPayeeResponse>): QueryPayeeResponse {
    const message = createBaseQueryPayeeResponse();
    message.payeeAddress = object.payeeAddress ?? "";
    return message;
  },
  fromSDK(object: QueryPayeeResponseSDKType): QueryPayeeResponse {
    return {
      payeeAddress: object?.payee_address
    };
  },
  fromSDKJSON(object: any): QueryPayeeResponseSDKType {
    return {
      payee_address: isSet(object.payee_address) ? String(object.payee_address) : ""
    };
  },
  toSDK(message: QueryPayeeResponse): QueryPayeeResponseSDKType {
    const obj: any = {};
    obj.payee_address = message.payeeAddress;
    return obj;
  },
  fromAmino(object: QueryPayeeResponseAmino): QueryPayeeResponse {
    return {
      payeeAddress: object.payee_address
    };
  },
  toAmino(message: QueryPayeeResponse): QueryPayeeResponseAmino {
    const obj: any = {};
    obj.payee_address = message.payeeAddress;
    return obj;
  },
  fromAminoMsg(object: QueryPayeeResponseAminoMsg): QueryPayeeResponse {
    return QueryPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPayeeResponse): QueryPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPayeeResponse",
      value: QueryPayeeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPayeeResponseProtoMsg): QueryPayeeResponse {
    return QueryPayeeResponse.decode(message.value);
  },
  toProto(message: QueryPayeeResponse): Uint8Array {
    return QueryPayeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPayeeResponse): QueryPayeeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryPayeeResponse",
      value: QueryPayeeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCounterpartyPayeeRequest(): QueryCounterpartyPayeeRequest {
  return {
    channelId: "",
    relayer: ""
  };
}
export const QueryCounterpartyPayeeRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest",
  encode(message: QueryCounterpartyPayeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyPayeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyPayeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCounterpartyPayeeRequest {
    const obj = createBaseQueryCounterpartyPayeeRequest();
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.relayer)) obj.relayer = String(object.relayer);
    return obj;
  },
  toJSON(message: QueryCounterpartyPayeeRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCounterpartyPayeeRequest>): QueryCounterpartyPayeeRequest {
    const message = createBaseQueryCounterpartyPayeeRequest();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
  fromSDK(object: QueryCounterpartyPayeeRequestSDKType): QueryCounterpartyPayeeRequest {
    return {
      channelId: object?.channel_id,
      relayer: object?.relayer
    };
  },
  fromSDKJSON(object: any): QueryCounterpartyPayeeRequestSDKType {
    return {
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : ""
    };
  },
  toSDK(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestSDKType {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    return obj;
  },
  fromAmino(object: QueryCounterpartyPayeeRequestAmino): QueryCounterpartyPayeeRequest {
    return {
      channelId: object.channel_id,
      relayer: object.relayer
    };
  },
  toAmino(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestAmino {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    return obj;
  },
  fromAminoMsg(object: QueryCounterpartyPayeeRequestAminoMsg): QueryCounterpartyPayeeRequest {
    return QueryCounterpartyPayeeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryCounterpartyPayeeRequest",
      value: QueryCounterpartyPayeeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCounterpartyPayeeRequestProtoMsg): QueryCounterpartyPayeeRequest {
    return QueryCounterpartyPayeeRequest.decode(message.value);
  },
  toProto(message: QueryCounterpartyPayeeRequest): Uint8Array {
    return QueryCounterpartyPayeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest",
      value: QueryCounterpartyPayeeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCounterpartyPayeeResponse(): QueryCounterpartyPayeeResponse {
  return {
    counterpartyPayee: ""
  };
}
export const QueryCounterpartyPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse",
  encode(message: QueryCounterpartyPayeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.counterpartyPayee !== "") {
      writer.uint32(10).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCounterpartyPayeeResponse {
    const obj = createBaseQueryCounterpartyPayeeResponse();
    if (isSet(object.counterpartyPayee)) obj.counterpartyPayee = String(object.counterpartyPayee);
    return obj;
  },
  toJSON(message: QueryCounterpartyPayeeResponse): unknown {
    const obj: any = {};
    message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCounterpartyPayeeResponse>): QueryCounterpartyPayeeResponse {
    const message = createBaseQueryCounterpartyPayeeResponse();
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
  fromSDK(object: QueryCounterpartyPayeeResponseSDKType): QueryCounterpartyPayeeResponse {
    return {
      counterpartyPayee: object?.counterparty_payee
    };
  },
  fromSDKJSON(object: any): QueryCounterpartyPayeeResponseSDKType {
    return {
      counterparty_payee: isSet(object.counterparty_payee) ? String(object.counterparty_payee) : ""
    };
  },
  toSDK(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseSDKType {
    const obj: any = {};
    obj.counterparty_payee = message.counterpartyPayee;
    return obj;
  },
  fromAmino(object: QueryCounterpartyPayeeResponseAmino): QueryCounterpartyPayeeResponse {
    return {
      counterpartyPayee: object.counterparty_payee
    };
  },
  toAmino(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseAmino {
    const obj: any = {};
    obj.counterparty_payee = message.counterpartyPayee;
    return obj;
  },
  fromAminoMsg(object: QueryCounterpartyPayeeResponseAminoMsg): QueryCounterpartyPayeeResponse {
    return QueryCounterpartyPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryCounterpartyPayeeResponse",
      value: QueryCounterpartyPayeeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCounterpartyPayeeResponseProtoMsg): QueryCounterpartyPayeeResponse {
    return QueryCounterpartyPayeeResponse.decode(message.value);
  },
  toProto(message: QueryCounterpartyPayeeResponse): Uint8Array {
    return QueryCounterpartyPayeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse",
      value: QueryCounterpartyPayeeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeeEnabledChannelsRequest(): QueryFeeEnabledChannelsRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    queryHeight: BigInt(0)
  };
}
export const QueryFeeEnabledChannelsRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest",
  encode(message: QueryFeeEnabledChannelsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeEnabledChannelsRequest {
    const obj = createBaseQueryFeeEnabledChannelsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    if (isSet(object.queryHeight)) obj.queryHeight = BigInt(object.queryHeight.toString());
    return obj;
  },
  toJSON(message: QueryFeeEnabledChannelsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeeEnabledChannelsRequest>): QueryFeeEnabledChannelsRequest {
    const message = createBaseQueryFeeEnabledChannelsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryFeeEnabledChannelsRequestSDKType): QueryFeeEnabledChannelsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined,
      queryHeight: object?.query_height
    };
  },
  fromSDKJSON(object: any): QueryFeeEnabledChannelsRequestSDKType {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined,
      query_height: isSet(object.query_height) ? BigInt(object.query_height.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    obj.query_height = message.queryHeight;
    return obj;
  },
  fromAmino(object: QueryFeeEnabledChannelsRequestAmino): QueryFeeEnabledChannelsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      queryHeight: BigInt(object.query_height)
    };
  },
  toAmino(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.query_height = message.queryHeight ? message.queryHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeEnabledChannelsRequestAminoMsg): QueryFeeEnabledChannelsRequest {
    return QueryFeeEnabledChannelsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryFeeEnabledChannelsRequest",
      value: QueryFeeEnabledChannelsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryFeeEnabledChannelsRequestProtoMsg): QueryFeeEnabledChannelsRequest {
    return QueryFeeEnabledChannelsRequest.decode(message.value);
  },
  toProto(message: QueryFeeEnabledChannelsRequest): Uint8Array {
    return QueryFeeEnabledChannelsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest",
      value: QueryFeeEnabledChannelsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeeEnabledChannelsResponse(): QueryFeeEnabledChannelsResponse {
  return {
    feeEnabledChannels: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryFeeEnabledChannelsResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse",
  encode(message: QueryFeeEnabledChannelsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryFeeEnabledChannelsResponse {
    const obj = createBaseQueryFeeEnabledChannelsResponse();
    if (Array.isArray(object?.feeEnabledChannels)) object.feeEnabledChannels.map((e: any) => FeeEnabledChannel.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryFeeEnabledChannelsResponse): unknown {
    const obj: any = {};
    if (message.feeEnabledChannels) {
      obj.feeEnabledChannels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toJSON(e) : undefined);
    } else {
      obj.feeEnabledChannels = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeeEnabledChannelsResponse>): QueryFeeEnabledChannelsResponse {
    const message = createBaseQueryFeeEnabledChannelsResponse();
    message.feeEnabledChannels = object.feeEnabledChannels?.map(e => FeeEnabledChannel.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  },
  fromSDK(object: QueryFeeEnabledChannelsResponseSDKType): QueryFeeEnabledChannelsResponse {
    return {
      feeEnabledChannels: Array.isArray(object?.fee_enabled_channels) ? object.fee_enabled_channels.map((e: any) => FeeEnabledChannel.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryFeeEnabledChannelsResponseSDKType {
    return {
      fee_enabled_channels: Array.isArray(object?.fee_enabled_channels) ? object.fee_enabled_channels.map((e: any) => FeeEnabledChannel.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseSDKType {
    const obj: any = {};
    if (message.feeEnabledChannels) {
      obj.fee_enabled_channels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toSDK(e) : undefined);
    } else {
      obj.fee_enabled_channels = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryFeeEnabledChannelsResponseAmino): QueryFeeEnabledChannelsResponse {
    return {
      feeEnabledChannels: Array.isArray(object?.fee_enabled_channels) ? object.fee_enabled_channels.map((e: any) => FeeEnabledChannel.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseAmino {
    const obj: any = {};
    if (message.feeEnabledChannels) {
      obj.fee_enabled_channels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toAmino(e) : undefined);
    } else {
      obj.fee_enabled_channels = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeEnabledChannelsResponseAminoMsg): QueryFeeEnabledChannelsResponse {
    return QueryFeeEnabledChannelsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryFeeEnabledChannelsResponse",
      value: QueryFeeEnabledChannelsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryFeeEnabledChannelsResponseProtoMsg): QueryFeeEnabledChannelsResponse {
    return QueryFeeEnabledChannelsResponse.decode(message.value);
  },
  toProto(message: QueryFeeEnabledChannelsResponse): Uint8Array {
    return QueryFeeEnabledChannelsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse",
      value: QueryFeeEnabledChannelsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeeEnabledChannelRequest(): QueryFeeEnabledChannelRequest {
  return {
    portId: "",
    channelId: ""
  };
}
export const QueryFeeEnabledChannelRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest",
  encode(message: QueryFeeEnabledChannelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeEnabledChannelRequest {
    const obj = createBaseQueryFeeEnabledChannelRequest();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    return obj;
  },
  toJSON(message: QueryFeeEnabledChannelRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeeEnabledChannelRequest>): QueryFeeEnabledChannelRequest {
    const message = createBaseQueryFeeEnabledChannelRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromSDK(object: QueryFeeEnabledChannelRequestSDKType): QueryFeeEnabledChannelRequest {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id
    };
  },
  fromSDKJSON(object: any): QueryFeeEnabledChannelRequestSDKType {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  toSDK(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAmino(object: QueryFeeEnabledChannelRequestAmino): QueryFeeEnabledChannelRequest {
    return {
      portId: object.port_id,
      channelId: object.channel_id
    };
  },
  toAmino(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAminoMsg(object: QueryFeeEnabledChannelRequestAminoMsg): QueryFeeEnabledChannelRequest {
    return QueryFeeEnabledChannelRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryFeeEnabledChannelRequest",
      value: QueryFeeEnabledChannelRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryFeeEnabledChannelRequestProtoMsg): QueryFeeEnabledChannelRequest {
    return QueryFeeEnabledChannelRequest.decode(message.value);
  },
  toProto(message: QueryFeeEnabledChannelRequest): Uint8Array {
    return QueryFeeEnabledChannelRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest",
      value: QueryFeeEnabledChannelRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeeEnabledChannelResponse(): QueryFeeEnabledChannelResponse {
  return {
    feeEnabled: false
  };
}
export const QueryFeeEnabledChannelResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse",
  encode(message: QueryFeeEnabledChannelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeEnabled === true) {
      writer.uint32(8).bool(message.feeEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeEnabledChannelResponse {
    const obj = createBaseQueryFeeEnabledChannelResponse();
    if (isSet(object.feeEnabled)) obj.feeEnabled = Boolean(object.feeEnabled);
    return obj;
  },
  toJSON(message: QueryFeeEnabledChannelResponse): unknown {
    const obj: any = {};
    message.feeEnabled !== undefined && (obj.feeEnabled = message.feeEnabled);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeeEnabledChannelResponse>): QueryFeeEnabledChannelResponse {
    const message = createBaseQueryFeeEnabledChannelResponse();
    message.feeEnabled = object.feeEnabled ?? false;
    return message;
  },
  fromSDK(object: QueryFeeEnabledChannelResponseSDKType): QueryFeeEnabledChannelResponse {
    return {
      feeEnabled: object?.fee_enabled
    };
  },
  fromSDKJSON(object: any): QueryFeeEnabledChannelResponseSDKType {
    return {
      fee_enabled: isSet(object.fee_enabled) ? Boolean(object.fee_enabled) : false
    };
  },
  toSDK(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseSDKType {
    const obj: any = {};
    obj.fee_enabled = message.feeEnabled;
    return obj;
  },
  fromAmino(object: QueryFeeEnabledChannelResponseAmino): QueryFeeEnabledChannelResponse {
    return {
      feeEnabled: object.fee_enabled
    };
  },
  toAmino(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseAmino {
    const obj: any = {};
    obj.fee_enabled = message.feeEnabled;
    return obj;
  },
  fromAminoMsg(object: QueryFeeEnabledChannelResponseAminoMsg): QueryFeeEnabledChannelResponse {
    return QueryFeeEnabledChannelResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryFeeEnabledChannelResponse",
      value: QueryFeeEnabledChannelResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryFeeEnabledChannelResponseProtoMsg): QueryFeeEnabledChannelResponse {
    return QueryFeeEnabledChannelResponse.decode(message.value);
  },
  toProto(message: QueryFeeEnabledChannelResponse): Uint8Array {
    return QueryFeeEnabledChannelResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse",
      value: QueryFeeEnabledChannelResponse.encode(message).finish()
    };
  }
};