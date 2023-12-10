import { OrderFilters, OrderFiltersAmino, OrderFiltersSDKType, OrderID, OrderIDAmino, OrderIDSDKType, Order, OrderAmino, OrderSDKType } from "./order";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersAmino, BidFiltersSDKType, BidID, BidIDAmino, BidIDSDKType, Bid, BidAmino, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersAmino, LeaseFiltersSDKType, LeaseID, LeaseIDAmino, LeaseIDSDKType, Lease, LeaseAmino, LeaseSDKType } from "./lease";
import { Account, AccountAmino, AccountSDKType, FractionalPayment, FractionalPaymentAmino, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.market.v1beta2";
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequest {
  filters: OrderFilters;
  pagination?: PageRequest;
}
export interface QueryOrdersRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryOrdersRequest";
  value: Uint8Array;
}
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequestAmino {
  filters?: OrderFiltersAmino;
  pagination?: PageRequestAmino;
}
export interface QueryOrdersRequestAminoMsg {
  type: "/akash.market.v1beta2.QueryOrdersRequest";
  value: QueryOrdersRequestAmino;
}
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequestSDKType {
  filters: OrderFiltersSDKType;
  pagination?: PageRequestSDKType;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponse {
  orders: Order[];
  pagination?: PageResponse;
}
export interface QueryOrdersResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryOrdersResponse";
  value: Uint8Array;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponseAmino {
  orders?: OrderAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryOrdersResponseAminoMsg {
  type: "/akash.market.v1beta2.QueryOrdersResponse";
  value: QueryOrdersResponseAmino;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponseSDKType {
  orders: OrderSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequest {
  id: OrderID;
}
export interface QueryOrderRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryOrderRequest";
  value: Uint8Array;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequestAmino {
  id?: OrderIDAmino;
}
export interface QueryOrderRequestAminoMsg {
  type: "/akash.market.v1beta2.QueryOrderRequest";
  value: QueryOrderRequestAmino;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequestSDKType {
  id: OrderIDSDKType;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponse {
  order: Order;
}
export interface QueryOrderResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryOrderResponse";
  value: Uint8Array;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponseAmino {
  order?: OrderAmino;
}
export interface QueryOrderResponseAminoMsg {
  type: "/akash.market.v1beta2.QueryOrderResponse";
  value: QueryOrderResponseAmino;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponseSDKType {
  order: OrderSDKType;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequest {
  filters: BidFilters;
  pagination?: PageRequest;
}
export interface QueryBidsRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryBidsRequest";
  value: Uint8Array;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequestAmino {
  filters?: BidFiltersAmino;
  pagination?: PageRequestAmino;
}
export interface QueryBidsRequestAminoMsg {
  type: "/akash.market.v1beta2.QueryBidsRequest";
  value: QueryBidsRequestAmino;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequestSDKType {
  filters: BidFiltersSDKType;
  pagination?: PageRequestSDKType;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponse {
  bids: QueryBidResponse[];
  pagination?: PageResponse;
}
export interface QueryBidsResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryBidsResponse";
  value: Uint8Array;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponseAmino {
  bids?: QueryBidResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryBidsResponseAminoMsg {
  type: "/akash.market.v1beta2.QueryBidsResponse";
  value: QueryBidsResponseAmino;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponseSDKType {
  bids: QueryBidResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequest {
  id: BidID;
}
export interface QueryBidRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryBidRequest";
  value: Uint8Array;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequestAmino {
  id?: BidIDAmino;
}
export interface QueryBidRequestAminoMsg {
  type: "/akash.market.v1beta2.QueryBidRequest";
  value: QueryBidRequestAmino;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequestSDKType {
  id: BidIDSDKType;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponse {
  bid: Bid;
  escrowAccount: Account;
}
export interface QueryBidResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryBidResponse";
  value: Uint8Array;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponseAmino {
  bid?: BidAmino;
  escrow_account?: AccountAmino;
}
export interface QueryBidResponseAminoMsg {
  type: "/akash.market.v1beta2.QueryBidResponse";
  value: QueryBidResponseAmino;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponseSDKType {
  bid: BidSDKType;
  escrow_account: AccountSDKType;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequest {
  filters: LeaseFilters;
  pagination?: PageRequest;
}
export interface QueryLeasesRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryLeasesRequest";
  value: Uint8Array;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequestAmino {
  filters?: LeaseFiltersAmino;
  pagination?: PageRequestAmino;
}
export interface QueryLeasesRequestAminoMsg {
  type: "/akash.market.v1beta2.QueryLeasesRequest";
  value: QueryLeasesRequestAmino;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequestSDKType {
  filters: LeaseFiltersSDKType;
  pagination?: PageRequestSDKType;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponse {
  leases: QueryLeaseResponse[];
  pagination?: PageResponse;
}
export interface QueryLeasesResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryLeasesResponse";
  value: Uint8Array;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponseAmino {
  leases?: QueryLeaseResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryLeasesResponseAminoMsg {
  type: "/akash.market.v1beta2.QueryLeasesResponse";
  value: QueryLeasesResponseAmino;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponseSDKType {
  leases: QueryLeaseResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequest {
  id: LeaseID;
}
export interface QueryLeaseRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryLeaseRequest";
  value: Uint8Array;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequestAmino {
  id?: LeaseIDAmino;
}
export interface QueryLeaseRequestAminoMsg {
  type: "/akash.market.v1beta2.QueryLeaseRequest";
  value: QueryLeaseRequestAmino;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequestSDKType {
  id: LeaseIDSDKType;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponse {
  lease: Lease;
  escrowPayment: FractionalPayment;
}
export interface QueryLeaseResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryLeaseResponse";
  value: Uint8Array;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponseAmino {
  lease?: LeaseAmino;
  escrow_payment?: FractionalPaymentAmino;
}
export interface QueryLeaseResponseAminoMsg {
  type: "/akash.market.v1beta2.QueryLeaseResponse";
  value: QueryLeaseResponseAmino;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponseSDKType {
  lease: LeaseSDKType;
  escrow_payment: FractionalPaymentSDKType;
}
function createBaseQueryOrdersRequest(): QueryOrdersRequest {
  return {
    filters: OrderFilters.fromPartial({}),
    pagination: undefined
  };
}
export const QueryOrdersRequest = {
  typeUrl: "/akash.market.v1beta2.QueryOrdersRequest",
  encode(message: QueryOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      OrderFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = OrderFilters.decode(reader, reader.uint32());
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
  fromPartial<I extends Exact<DeepPartial<QueryOrdersRequest>, I>>(object: I): QueryOrdersRequest {
    const message = createBaseQueryOrdersRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = OrderFilters.fromPartial(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryOrdersRequestAmino): QueryOrdersRequest {
    const message = createBaseQueryOrdersRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = OrderFilters.fromAmino(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOrdersRequest): QueryOrdersRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? OrderFilters.toAmino(message.filters) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrdersRequestAminoMsg): QueryOrdersRequest {
    return QueryOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrdersRequestProtoMsg): QueryOrdersRequest {
    return QueryOrdersRequest.decode(message.value);
  },
  toProto(message: QueryOrdersRequest): Uint8Array {
    return QueryOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrdersRequest): QueryOrdersRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryOrdersRequest",
      value: QueryOrdersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOrdersResponse(): QueryOrdersResponse {
  return {
    orders: [],
    pagination: undefined
  };
}
export const QueryOrdersResponse = {
  typeUrl: "/akash.market.v1beta2.QueryOrdersResponse",
  encode(message: QueryOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
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
  fromPartial<I extends Exact<DeepPartial<QueryOrdersResponse>, I>>(object: I): QueryOrdersResponse {
    const message = createBaseQueryOrdersResponse();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryOrdersResponseAmino): QueryOrdersResponse {
    const message = createBaseQueryOrdersResponse();
    message.orders = object.orders?.map(e => Order.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOrdersResponse): QueryOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrdersResponseAminoMsg): QueryOrdersResponse {
    return QueryOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrdersResponseProtoMsg): QueryOrdersResponse {
    return QueryOrdersResponse.decode(message.value);
  },
  toProto(message: QueryOrdersResponse): Uint8Array {
    return QueryOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrdersResponse): QueryOrdersResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryOrdersResponse",
      value: QueryOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOrderRequest(): QueryOrderRequest {
  return {
    id: OrderID.fromPartial({})
  };
}
export const QueryOrderRequest = {
  typeUrl: "/akash.market.v1beta2.QueryOrderRequest",
  encode(message: QueryOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = OrderID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryOrderRequest>, I>>(object: I): QueryOrderRequest {
    const message = createBaseQueryOrderRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = OrderID.fromPartial(object.id);
    }
    return message;
  },
  fromAmino(object: QueryOrderRequestAmino): QueryOrderRequest {
    const message = createBaseQueryOrderRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = OrderID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: QueryOrderRequest): QueryOrderRequestAmino {
    const obj: any = {};
    obj.id = message.id ? OrderID.toAmino(message.id) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderRequestAminoMsg): QueryOrderRequest {
    return QueryOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderRequestProtoMsg): QueryOrderRequest {
    return QueryOrderRequest.decode(message.value);
  },
  toProto(message: QueryOrderRequest): Uint8Array {
    return QueryOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderRequest): QueryOrderRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryOrderRequest",
      value: QueryOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOrderResponse(): QueryOrderResponse {
  return {
    order: Order.fromPartial({})
  };
}
export const QueryOrderResponse = {
  typeUrl: "/akash.market.v1beta2.QueryOrderResponse",
  encode(message: QueryOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryOrderResponse>, I>>(object: I): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromPartial(object.order);
    }
    return message;
  },
  fromAmino(object: QueryOrderResponseAmino): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: QueryOrderResponse): QueryOrderResponseAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderResponseAminoMsg): QueryOrderResponse {
    return QueryOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderResponseProtoMsg): QueryOrderResponse {
    return QueryOrderResponse.decode(message.value);
  },
  toProto(message: QueryOrderResponse): Uint8Array {
    return QueryOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderResponse): QueryOrderResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryOrderResponse",
      value: QueryOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBidsRequest(): QueryBidsRequest {
  return {
    filters: BidFilters.fromPartial({}),
    pagination: undefined
  };
}
export const QueryBidsRequest = {
  typeUrl: "/akash.market.v1beta2.QueryBidsRequest",
  encode(message: QueryBidsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      BidFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBidsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = BidFilters.decode(reader, reader.uint32());
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
  fromPartial<I extends Exact<DeepPartial<QueryBidsRequest>, I>>(object: I): QueryBidsRequest {
    const message = createBaseQueryBidsRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = BidFilters.fromPartial(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryBidsRequestAmino): QueryBidsRequest {
    const message = createBaseQueryBidsRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = BidFilters.fromAmino(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBidsRequest): QueryBidsRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? BidFilters.toAmino(message.filters) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidsRequestAminoMsg): QueryBidsRequest {
    return QueryBidsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBidsRequestProtoMsg): QueryBidsRequest {
    return QueryBidsRequest.decode(message.value);
  },
  toProto(message: QueryBidsRequest): Uint8Array {
    return QueryBidsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBidsRequest): QueryBidsRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryBidsRequest",
      value: QueryBidsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBidsResponse(): QueryBidsResponse {
  return {
    bids: [],
    pagination: undefined
  };
}
export const QueryBidsResponse = {
  typeUrl: "/akash.market.v1beta2.QueryBidsResponse",
  encode(message: QueryBidsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.bids) {
      QueryBidResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBidsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bids.push(QueryBidResponse.decode(reader, reader.uint32()));
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
  fromPartial<I extends Exact<DeepPartial<QueryBidsResponse>, I>>(object: I): QueryBidsResponse {
    const message = createBaseQueryBidsResponse();
    message.bids = object.bids?.map(e => QueryBidResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryBidsResponseAmino): QueryBidsResponse {
    const message = createBaseQueryBidsResponse();
    message.bids = object.bids?.map(e => QueryBidResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBidsResponse): QueryBidsResponseAmino {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map(e => e ? QueryBidResponse.toAmino(e) : undefined);
    } else {
      obj.bids = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidsResponseAminoMsg): QueryBidsResponse {
    return QueryBidsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBidsResponseProtoMsg): QueryBidsResponse {
    return QueryBidsResponse.decode(message.value);
  },
  toProto(message: QueryBidsResponse): Uint8Array {
    return QueryBidsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBidsResponse): QueryBidsResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryBidsResponse",
      value: QueryBidsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBidRequest(): QueryBidRequest {
  return {
    id: BidID.fromPartial({})
  };
}
export const QueryBidRequest = {
  typeUrl: "/akash.market.v1beta2.QueryBidRequest",
  encode(message: QueryBidRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBidRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BidID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBidRequest>, I>>(object: I): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BidID.fromPartial(object.id);
    }
    return message;
  },
  fromAmino(object: QueryBidRequestAmino): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BidID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: QueryBidRequest): QueryBidRequestAmino {
    const obj: any = {};
    obj.id = message.id ? BidID.toAmino(message.id) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidRequestAminoMsg): QueryBidRequest {
    return QueryBidRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBidRequestProtoMsg): QueryBidRequest {
    return QueryBidRequest.decode(message.value);
  },
  toProto(message: QueryBidRequest): Uint8Array {
    return QueryBidRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBidRequest): QueryBidRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryBidRequest",
      value: QueryBidRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBidResponse(): QueryBidResponse {
  return {
    bid: Bid.fromPartial({}),
    escrowAccount: Account.fromPartial({})
  };
}
export const QueryBidResponse = {
  typeUrl: "/akash.market.v1beta2.QueryBidResponse",
  encode(message: QueryBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bid !== undefined) {
      Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
    }
    if (message.escrowAccount !== undefined) {
      Account.encode(message.escrowAccount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bid = Bid.decode(reader, reader.uint32());
          break;
        case 2:
          message.escrowAccount = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBidResponse>, I>>(object: I): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromPartial(object.bid);
    }
    if (object.escrowAccount !== undefined && object.escrowAccount !== null) {
      message.escrowAccount = Account.fromPartial(object.escrowAccount);
    }
    return message;
  },
  fromAmino(object: QueryBidResponseAmino): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromAmino(object.bid);
    }
    if (object.escrow_account !== undefined && object.escrow_account !== null) {
      message.escrowAccount = Account.fromAmino(object.escrow_account);
    }
    return message;
  },
  toAmino(message: QueryBidResponse): QueryBidResponseAmino {
    const obj: any = {};
    obj.bid = message.bid ? Bid.toAmino(message.bid) : undefined;
    obj.escrow_account = message.escrowAccount ? Account.toAmino(message.escrowAccount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidResponseAminoMsg): QueryBidResponse {
    return QueryBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBidResponseProtoMsg): QueryBidResponse {
    return QueryBidResponse.decode(message.value);
  },
  toProto(message: QueryBidResponse): Uint8Array {
    return QueryBidResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBidResponse): QueryBidResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryBidResponse",
      value: QueryBidResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLeasesRequest(): QueryLeasesRequest {
  return {
    filters: LeaseFilters.fromPartial({}),
    pagination: undefined
  };
}
export const QueryLeasesRequest = {
  typeUrl: "/akash.market.v1beta2.QueryLeasesRequest",
  encode(message: QueryLeasesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      LeaseFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLeasesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = LeaseFilters.decode(reader, reader.uint32());
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
  fromPartial<I extends Exact<DeepPartial<QueryLeasesRequest>, I>>(object: I): QueryLeasesRequest {
    const message = createBaseQueryLeasesRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = LeaseFilters.fromPartial(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryLeasesRequestAmino): QueryLeasesRequest {
    const message = createBaseQueryLeasesRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = LeaseFilters.fromAmino(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLeasesRequest): QueryLeasesRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? LeaseFilters.toAmino(message.filters) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLeasesRequestAminoMsg): QueryLeasesRequest {
    return QueryLeasesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLeasesRequestProtoMsg): QueryLeasesRequest {
    return QueryLeasesRequest.decode(message.value);
  },
  toProto(message: QueryLeasesRequest): Uint8Array {
    return QueryLeasesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLeasesRequest): QueryLeasesRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryLeasesRequest",
      value: QueryLeasesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLeasesResponse(): QueryLeasesResponse {
  return {
    leases: [],
    pagination: undefined
  };
}
export const QueryLeasesResponse = {
  typeUrl: "/akash.market.v1beta2.QueryLeasesResponse",
  encode(message: QueryLeasesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.leases) {
      QueryLeaseResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLeasesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leases.push(QueryLeaseResponse.decode(reader, reader.uint32()));
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
  fromPartial<I extends Exact<DeepPartial<QueryLeasesResponse>, I>>(object: I): QueryLeasesResponse {
    const message = createBaseQueryLeasesResponse();
    message.leases = object.leases?.map(e => QueryLeaseResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryLeasesResponseAmino): QueryLeasesResponse {
    const message = createBaseQueryLeasesResponse();
    message.leases = object.leases?.map(e => QueryLeaseResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLeasesResponse): QueryLeasesResponseAmino {
    const obj: any = {};
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? QueryLeaseResponse.toAmino(e) : undefined);
    } else {
      obj.leases = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLeasesResponseAminoMsg): QueryLeasesResponse {
    return QueryLeasesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLeasesResponseProtoMsg): QueryLeasesResponse {
    return QueryLeasesResponse.decode(message.value);
  },
  toProto(message: QueryLeasesResponse): Uint8Array {
    return QueryLeasesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLeasesResponse): QueryLeasesResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryLeasesResponse",
      value: QueryLeasesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLeaseRequest(): QueryLeaseRequest {
  return {
    id: LeaseID.fromPartial({})
  };
}
export const QueryLeaseRequest = {
  typeUrl: "/akash.market.v1beta2.QueryLeaseRequest",
  encode(message: QueryLeaseRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLeaseRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LeaseID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryLeaseRequest>, I>>(object: I): QueryLeaseRequest {
    const message = createBaseQueryLeaseRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = LeaseID.fromPartial(object.id);
    }
    return message;
  },
  fromAmino(object: QueryLeaseRequestAmino): QueryLeaseRequest {
    const message = createBaseQueryLeaseRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = LeaseID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: QueryLeaseRequest): QueryLeaseRequestAmino {
    const obj: any = {};
    obj.id = message.id ? LeaseID.toAmino(message.id) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLeaseRequestAminoMsg): QueryLeaseRequest {
    return QueryLeaseRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLeaseRequestProtoMsg): QueryLeaseRequest {
    return QueryLeaseRequest.decode(message.value);
  },
  toProto(message: QueryLeaseRequest): Uint8Array {
    return QueryLeaseRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLeaseRequest): QueryLeaseRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryLeaseRequest",
      value: QueryLeaseRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLeaseResponse(): QueryLeaseResponse {
  return {
    lease: Lease.fromPartial({}),
    escrowPayment: FractionalPayment.fromPartial({})
  };
}
export const QueryLeaseResponse = {
  typeUrl: "/akash.market.v1beta2.QueryLeaseResponse",
  encode(message: QueryLeaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lease !== undefined) {
      Lease.encode(message.lease, writer.uint32(10).fork()).ldelim();
    }
    if (message.escrowPayment !== undefined) {
      FractionalPayment.encode(message.escrowPayment, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLeaseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lease = Lease.decode(reader, reader.uint32());
          break;
        case 2:
          message.escrowPayment = FractionalPayment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial<I extends Exact<DeepPartial<QueryLeaseResponse>, I>>(object: I): QueryLeaseResponse {
    const message = createBaseQueryLeaseResponse();
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromPartial(object.lease);
    }
    if (object.escrowPayment !== undefined && object.escrowPayment !== null) {
      message.escrowPayment = FractionalPayment.fromPartial(object.escrowPayment);
    }
    return message;
  },
  fromAmino(object: QueryLeaseResponseAmino): QueryLeaseResponse {
    const message = createBaseQueryLeaseResponse();
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromAmino(object.lease);
    }
    if (object.escrow_payment !== undefined && object.escrow_payment !== null) {
      message.escrowPayment = FractionalPayment.fromAmino(object.escrow_payment);
    }
    return message;
  },
  toAmino(message: QueryLeaseResponse): QueryLeaseResponseAmino {
    const obj: any = {};
    obj.lease = message.lease ? Lease.toAmino(message.lease) : undefined;
    obj.escrow_payment = message.escrowPayment ? FractionalPayment.toAmino(message.escrowPayment) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLeaseResponseAminoMsg): QueryLeaseResponse {
    return QueryLeaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLeaseResponseProtoMsg): QueryLeaseResponse {
    return QueryLeaseResponse.decode(message.value);
  },
  toProto(message: QueryLeaseResponse): Uint8Array {
    return QueryLeaseResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLeaseResponse): QueryLeaseResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryLeaseResponse",
      value: QueryLeaseResponse.encode(message).finish()
    };
  }
};