import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./audit";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.audit.v1beta2";
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
  providers: Provider[];
  pagination?: PageResponse;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponseSDKType {
  providers: ProviderSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
  auditor?: string;
  owner?: string;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequestSDKType {
  auditor?: string;
  owner?: string;
}
/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequest {
  pagination?: PageRequest;
}
/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequest {
  owner?: string;
  pagination?: PageRequest;
}
/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequestSDKType {
  owner?: string;
  pagination?: PageRequestSDKType;
}
/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequest {
  auditor?: string;
  owner?: string;
}
/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequestSDKType {
  auditor?: string;
  owner?: string;
}
/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequest {
  auditor?: string;
  pagination?: PageRequest;
}
/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequestSDKType {
  auditor?: string;
  pagination?: PageRequestSDKType;
}
function createBaseQueryProvidersResponse(): QueryProvidersResponse {
  return {
    providers: [],
    pagination: undefined
  };
}
export const QueryProvidersResponse = {
  typeUrl: "/akash.audit.v1beta2.QueryProvidersResponse",
  encode(message: QueryProvidersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProvidersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(Provider.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryProvidersResponse {
    const obj = createBaseQueryProvidersResponse();
    if (Array.isArray(object?.providers)) obj.providers = object.providers.map((e: any) => Provider.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryProvidersResponse): unknown {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toJSON(e) : undefined);
    } else {
      obj.providers = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProvidersResponse>, I>>(object: I): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.providers = object.providers?.map(e => Provider.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryProvidersResponseSDKType): QueryProvidersResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryProvidersResponseSDKType {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProvidersResponse): QueryProvidersResponseSDKType {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toSDK(e) : undefined);
    } else {
      obj.providers = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProvidersResponseAmino): QueryProvidersResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryProvidersResponse): QueryProvidersResponseAmino {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toAmino(e) : undefined);
    } else {
      obj.providers = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProvidersResponseAminoMsg): QueryProvidersResponse {
    return QueryProvidersResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProvidersResponse): QueryProvidersResponseAminoMsg {
    return {
      type: "akash/audit/v1beta2/query-providers-response",
      value: QueryProvidersResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProvidersResponseProtoMsg): QueryProvidersResponse {
    return QueryProvidersResponse.decode(message.value);
  },
  toProto(message: QueryProvidersResponse): Uint8Array {
    return QueryProvidersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProvidersResponse): QueryProvidersResponseProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.QueryProvidersResponse",
      value: QueryProvidersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProviderRequest(): QueryProviderRequest {
  return {
    auditor: undefined,
    owner: undefined
  };
}
export const QueryProviderRequest = {
  typeUrl: "/akash.audit.v1beta2.QueryProviderRequest",
  encode(message: QueryProviderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auditor !== undefined) {
      writer.uint32(10).string(message.auditor);
    }
    if (message.owner !== undefined) {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditor = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderRequest {
    const obj = createBaseQueryProviderRequest();
    if (isSet(object.auditor)) obj.auditor = String(object.auditor);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QueryProviderRequest): unknown {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderRequest>, I>>(object: I): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    message.auditor = object.auditor ?? undefined;
    message.owner = object.owner ?? undefined;
    return message;
  },
  fromSDK(object: QueryProviderRequestSDKType): QueryProviderRequest {
    return {
      auditor: object?.auditor,
      owner: object?.owner
    };
  },
  fromSDKJSON(object: any): QueryProviderRequestSDKType {
    return {
      auditor: isSet(object.auditor) ? String(object.auditor) : undefined,
      owner: isSet(object.owner) ? String(object.owner) : undefined
    };
  },
  toSDK(message: QueryProviderRequest): QueryProviderRequestSDKType {
    const obj: any = {};
    obj.auditor = message.auditor;
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: QueryProviderRequestAmino): QueryProviderRequest {
    return {
      auditor: object?.auditor,
      owner: object?.owner
    };
  },
  toAmino(message: QueryProviderRequest): QueryProviderRequestAmino {
    const obj: any = {};
    obj.auditor = message.auditor;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryProviderRequestAminoMsg): QueryProviderRequest {
    return QueryProviderRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProviderRequest): QueryProviderRequestAminoMsg {
    return {
      type: "akash/audit/v1beta2/query-provider-request",
      value: QueryProviderRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProviderRequestProtoMsg): QueryProviderRequest {
    return QueryProviderRequest.decode(message.value);
  },
  toProto(message: QueryProviderRequest): Uint8Array {
    return QueryProviderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderRequest): QueryProviderRequestProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.QueryProviderRequest",
      value: QueryProviderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllProvidersAttributesRequest(): QueryAllProvidersAttributesRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllProvidersAttributesRequest = {
  typeUrl: "/akash.audit.v1beta2.QueryAllProvidersAttributesRequest",
  encode(message: QueryAllProvidersAttributesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllProvidersAttributesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProvidersAttributesRequest();
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
  fromJSON(object: any): QueryAllProvidersAttributesRequest {
    const obj = createBaseQueryAllProvidersAttributesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllProvidersAttributesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllProvidersAttributesRequest>, I>>(object: I): QueryAllProvidersAttributesRequest {
    const message = createBaseQueryAllProvidersAttributesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllProvidersAttributesRequestSDKType): QueryAllProvidersAttributesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryAllProvidersAttributesRequestSDKType {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllProvidersAttributesRequest): QueryAllProvidersAttributesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllProvidersAttributesRequestAmino): QueryAllProvidersAttributesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllProvidersAttributesRequest): QueryAllProvidersAttributesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllProvidersAttributesRequestAminoMsg): QueryAllProvidersAttributesRequest {
    return QueryAllProvidersAttributesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllProvidersAttributesRequest): QueryAllProvidersAttributesRequestAminoMsg {
    return {
      type: "akash/audit/v1beta2/query-all-providers-attributes-request",
      value: QueryAllProvidersAttributesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllProvidersAttributesRequestProtoMsg): QueryAllProvidersAttributesRequest {
    return QueryAllProvidersAttributesRequest.decode(message.value);
  },
  toProto(message: QueryAllProvidersAttributesRequest): Uint8Array {
    return QueryAllProvidersAttributesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllProvidersAttributesRequest): QueryAllProvidersAttributesRequestProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.QueryAllProvidersAttributesRequest",
      value: QueryAllProvidersAttributesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProviderAttributesRequest(): QueryProviderAttributesRequest {
  return {
    owner: undefined,
    pagination: undefined
  };
}
export const QueryProviderAttributesRequest = {
  typeUrl: "/akash.audit.v1beta2.QueryProviderAttributesRequest",
  encode(message: QueryProviderAttributesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderAttributesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderAttributesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
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
  fromJSON(object: any): QueryProviderAttributesRequest {
    const obj = createBaseQueryProviderAttributesRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryProviderAttributesRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderAttributesRequest>, I>>(object: I): QueryProviderAttributesRequest {
    const message = createBaseQueryProviderAttributesRequest();
    message.owner = object.owner ?? undefined;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryProviderAttributesRequestSDKType): QueryProviderAttributesRequest {
    return {
      owner: object?.owner,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryProviderAttributesRequestSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProviderAttributesRequest): QueryProviderAttributesRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProviderAttributesRequestAmino): QueryProviderAttributesRequest {
    return {
      owner: object?.owner,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryProviderAttributesRequest): QueryProviderAttributesRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProviderAttributesRequestAminoMsg): QueryProviderAttributesRequest {
    return QueryProviderAttributesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProviderAttributesRequest): QueryProviderAttributesRequestAminoMsg {
    return {
      type: "akash/audit/v1beta2/query-provider-attributes-request",
      value: QueryProviderAttributesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProviderAttributesRequestProtoMsg): QueryProviderAttributesRequest {
    return QueryProviderAttributesRequest.decode(message.value);
  },
  toProto(message: QueryProviderAttributesRequest): Uint8Array {
    return QueryProviderAttributesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderAttributesRequest): QueryProviderAttributesRequestProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.QueryProviderAttributesRequest",
      value: QueryProviderAttributesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProviderAuditorRequest(): QueryProviderAuditorRequest {
  return {
    auditor: undefined,
    owner: undefined
  };
}
export const QueryProviderAuditorRequest = {
  typeUrl: "/akash.audit.v1beta2.QueryProviderAuditorRequest",
  encode(message: QueryProviderAuditorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auditor !== undefined) {
      writer.uint32(10).string(message.auditor);
    }
    if (message.owner !== undefined) {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderAuditorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderAuditorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditor = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderAuditorRequest {
    const obj = createBaseQueryProviderAuditorRequest();
    if (isSet(object.auditor)) obj.auditor = String(object.auditor);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QueryProviderAuditorRequest): unknown {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderAuditorRequest>, I>>(object: I): QueryProviderAuditorRequest {
    const message = createBaseQueryProviderAuditorRequest();
    message.auditor = object.auditor ?? undefined;
    message.owner = object.owner ?? undefined;
    return message;
  },
  fromSDK(object: QueryProviderAuditorRequestSDKType): QueryProviderAuditorRequest {
    return {
      auditor: object?.auditor,
      owner: object?.owner
    };
  },
  fromSDKJSON(object: any): QueryProviderAuditorRequestSDKType {
    return {
      auditor: isSet(object.auditor) ? String(object.auditor) : undefined,
      owner: isSet(object.owner) ? String(object.owner) : undefined
    };
  },
  toSDK(message: QueryProviderAuditorRequest): QueryProviderAuditorRequestSDKType {
    const obj: any = {};
    obj.auditor = message.auditor;
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: QueryProviderAuditorRequestAmino): QueryProviderAuditorRequest {
    return {
      auditor: object?.auditor,
      owner: object?.owner
    };
  },
  toAmino(message: QueryProviderAuditorRequest): QueryProviderAuditorRequestAmino {
    const obj: any = {};
    obj.auditor = message.auditor;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryProviderAuditorRequestAminoMsg): QueryProviderAuditorRequest {
    return QueryProviderAuditorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProviderAuditorRequest): QueryProviderAuditorRequestAminoMsg {
    return {
      type: "akash/audit/v1beta2/query-provider-auditor-request",
      value: QueryProviderAuditorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProviderAuditorRequestProtoMsg): QueryProviderAuditorRequest {
    return QueryProviderAuditorRequest.decode(message.value);
  },
  toProto(message: QueryProviderAuditorRequest): Uint8Array {
    return QueryProviderAuditorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderAuditorRequest): QueryProviderAuditorRequestProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.QueryProviderAuditorRequest",
      value: QueryProviderAuditorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuditorAttributesRequest(): QueryAuditorAttributesRequest {
  return {
    auditor: undefined,
    pagination: undefined
  };
}
export const QueryAuditorAttributesRequest = {
  typeUrl: "/akash.audit.v1beta2.QueryAuditorAttributesRequest",
  encode(message: QueryAuditorAttributesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auditor !== undefined) {
      writer.uint32(10).string(message.auditor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuditorAttributesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuditorAttributesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditor = reader.string();
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
  fromJSON(object: any): QueryAuditorAttributesRequest {
    const obj = createBaseQueryAuditorAttributesRequest();
    if (isSet(object.auditor)) obj.auditor = String(object.auditor);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAuditorAttributesRequest): unknown {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuditorAttributesRequest>, I>>(object: I): QueryAuditorAttributesRequest {
    const message = createBaseQueryAuditorAttributesRequest();
    message.auditor = object.auditor ?? undefined;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAuditorAttributesRequestSDKType): QueryAuditorAttributesRequest {
    return {
      auditor: object?.auditor,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryAuditorAttributesRequestSDKType {
    return {
      auditor: isSet(object.auditor) ? String(object.auditor) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAuditorAttributesRequest): QueryAuditorAttributesRequestSDKType {
    const obj: any = {};
    obj.auditor = message.auditor;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAuditorAttributesRequestAmino): QueryAuditorAttributesRequest {
    return {
      auditor: object?.auditor,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAuditorAttributesRequest): QueryAuditorAttributesRequestAmino {
    const obj: any = {};
    obj.auditor = message.auditor;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuditorAttributesRequestAminoMsg): QueryAuditorAttributesRequest {
    return QueryAuditorAttributesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAuditorAttributesRequest): QueryAuditorAttributesRequestAminoMsg {
    return {
      type: "akash/audit/v1beta2/query-auditor-attributes-request",
      value: QueryAuditorAttributesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAuditorAttributesRequestProtoMsg): QueryAuditorAttributesRequest {
    return QueryAuditorAttributesRequest.decode(message.value);
  },
  toProto(message: QueryAuditorAttributesRequest): Uint8Array {
    return QueryAuditorAttributesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuditorAttributesRequest): QueryAuditorAttributesRequestProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.QueryAuditorAttributesRequest",
      value: QueryAuditorAttributesRequest.encode(message).finish()
    };
  }
};