import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.provider.v1beta2";
/** ProviderInfo */
export interface ProviderInfo {
  email?: string;
  website?: string;
}
/** ProviderInfo */
export interface ProviderInfoSDKType {
  email?: string;
  website?: string;
}
/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProvider {
  owner?: string;
  hostUri?: string;
  attributes: Attribute[];
  info: ProviderInfo;
}
/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProviderSDKType {
  owner?: string;
  host_uri?: string;
  attributes: AttributeSDKType[];
  info: ProviderInfoSDKType;
}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponse {}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponseSDKType {}
/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProvider {
  owner?: string;
  hostUri?: string;
  attributes: Attribute[];
  info: ProviderInfo;
}
/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProviderSDKType {
  owner?: string;
  host_uri?: string;
  attributes: AttributeSDKType[];
  info: ProviderInfoSDKType;
}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponse {}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponseSDKType {}
/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProvider {
  owner?: string;
}
/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProviderSDKType {
  owner?: string;
}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponse {}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponseSDKType {}
/** Provider stores owner and host details */
export interface Provider {
  owner?: string;
  hostUri?: string;
  attributes: Attribute[];
  info: ProviderInfo;
}
/** Provider stores owner and host details */
export interface ProviderSDKType {
  owner?: string;
  host_uri?: string;
  attributes: AttributeSDKType[];
  info: ProviderInfoSDKType;
}
function createBaseProviderInfo(): ProviderInfo {
  return {
    email: undefined,
    website: undefined
  };
}
export const ProviderInfo = {
  typeUrl: "/akash.provider.v1beta2.ProviderInfo",
  encode(message: ProviderInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.email !== undefined) {
      writer.uint32(10).string(message.email);
    }
    if (message.website !== undefined) {
      writer.uint32(18).string(message.website);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProviderInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.website = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProviderInfo {
    const obj = createBaseProviderInfo();
    if (isSet(object.email)) obj.email = String(object.email);
    if (isSet(object.website)) obj.website = String(object.website);
    return obj;
  },
  toJSON(message: ProviderInfo): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.website !== undefined && (obj.website = message.website);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProviderInfo>, I>>(object: I): ProviderInfo {
    const message = createBaseProviderInfo();
    message.email = object.email ?? undefined;
    message.website = object.website ?? undefined;
    return message;
  },
  fromSDK(object: ProviderInfoSDKType): ProviderInfo {
    return {
      email: object?.email,
      website: object?.website
    };
  },
  fromSDKJSON(object: any): ProviderInfoSDKType {
    return {
      email: isSet(object.email) ? String(object.email) : undefined,
      website: isSet(object.website) ? String(object.website) : undefined
    };
  },
  toSDK(message: ProviderInfo): ProviderInfoSDKType {
    const obj: any = {};
    obj.email = message.email;
    obj.website = message.website;
    return obj;
  },
  fromAmino(object: ProviderInfoAmino): ProviderInfo {
    return {
      email: object?.email,
      website: object?.website
    };
  },
  toAmino(message: ProviderInfo): ProviderInfoAmino {
    const obj: any = {};
    obj.email = message.email;
    obj.website = message.website;
    return obj;
  },
  fromAminoMsg(object: ProviderInfoAminoMsg): ProviderInfo {
    return ProviderInfo.fromAmino(object.value);
  },
  toAminoMsg(message: ProviderInfo): ProviderInfoAminoMsg {
    return {
      type: "akash/provider/v1beta2/provider-info",
      value: ProviderInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: ProviderInfoProtoMsg): ProviderInfo {
    return ProviderInfo.decode(message.value);
  },
  toProto(message: ProviderInfo): Uint8Array {
    return ProviderInfo.encode(message).finish();
  },
  toProtoMsg(message: ProviderInfo): ProviderInfoProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta2.ProviderInfo",
      value: ProviderInfo.encode(message).finish()
    };
  }
};
function createBaseMsgCreateProvider(): MsgCreateProvider {
  return {
    owner: undefined,
    hostUri: undefined,
    attributes: [],
    info: ProviderInfo.fromPartial({})
  };
}
export const MsgCreateProvider = {
  typeUrl: "/akash.provider.v1beta2.MsgCreateProvider",
  encode(message: MsgCreateProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    if (message.hostUri !== undefined) {
      writer.uint32(18).string(message.hostUri);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.hostUri = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateProvider {
    const obj = createBaseMsgCreateProvider();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.hostUri)) obj.hostUri = String(object.hostUri);
    if (Array.isArray(object?.attributes)) obj.attributes = object.attributes.map((e: any) => Attribute.fromJSON(e));
    if (isSet(object.info)) obj.info = ProviderInfo.fromJSON(object.info);
    return obj;
  },
  toJSON(message: MsgCreateProvider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.hostUri !== undefined && (obj.hostUri = message.hostUri);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateProvider>, I>>(object: I): MsgCreateProvider {
    const message = createBaseMsgCreateProvider();
    message.owner = object.owner ?? undefined;
    message.hostUri = object.hostUri ?? undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    if (object.info !== undefined && object.info !== null) {
      message.info = ProviderInfo.fromPartial(object.info);
    }
    return message;
  },
  fromSDK(object: MsgCreateProviderSDKType): MsgCreateProvider {
    return {
      owner: object?.owner,
      hostUri: object?.host_uri,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : [],
      info: object.info ? ProviderInfo.fromSDK(object.info) : undefined
    };
  },
  fromSDKJSON(object: any): MsgCreateProviderSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : undefined,
      host_uri: isSet(object.host_uri) ? String(object.host_uri) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDKJSON(e)) : [],
      info: isSet(object.info) ? ProviderInfo.fromSDKJSON(object.info) : undefined
    };
  },
  toSDK(message: MsgCreateProvider): MsgCreateProviderSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.host_uri = message.hostUri;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toSDK(message.info) : undefined);
    return obj;
  },
  fromAmino(object: MsgCreateProviderAmino): MsgCreateProvider {
    return {
      owner: object?.owner,
      hostUri: object?.host_uri,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : [],
      info: object?.info ? ProviderInfo.fromAmino(object.info) : undefined
    };
  },
  toAmino(message: MsgCreateProvider): MsgCreateProviderAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.host_uri = message.hostUri;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    obj.info = message.info ? ProviderInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateProviderAminoMsg): MsgCreateProvider {
    return MsgCreateProvider.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateProvider): MsgCreateProviderAminoMsg {
    return {
      type: "akash/provider/v1beta2/testonly-create-provider",
      value: MsgCreateProvider.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateProviderProtoMsg): MsgCreateProvider {
    return MsgCreateProvider.decode(message.value);
  },
  toProto(message: MsgCreateProvider): Uint8Array {
    return MsgCreateProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProvider): MsgCreateProviderProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta2.MsgCreateProvider",
      value: MsgCreateProvider.encode(message).finish()
    };
  }
};
function createBaseMsgCreateProviderResponse(): MsgCreateProviderResponse {
  return {};
}
export const MsgCreateProviderResponse = {
  typeUrl: "/akash.provider.v1beta2.MsgCreateProviderResponse",
  encode(_: MsgCreateProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProviderResponse();
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
  fromJSON(_: any): MsgCreateProviderResponse {
    const obj = createBaseMsgCreateProviderResponse();
    return obj;
  },
  toJSON(_: MsgCreateProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateProviderResponse>, I>>(_: I): MsgCreateProviderResponse {
    const message = createBaseMsgCreateProviderResponse();
    return message;
  },
  fromSDK(_: MsgCreateProviderResponseSDKType): MsgCreateProviderResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgCreateProviderResponseSDKType {
    return {};
  },
  toSDK(_: MsgCreateProviderResponse): MsgCreateProviderResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateProviderResponseAmino): MsgCreateProviderResponse {
    return {};
  },
  toAmino(_: MsgCreateProviderResponse): MsgCreateProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateProviderResponseAminoMsg): MsgCreateProviderResponse {
    return MsgCreateProviderResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateProviderResponse): MsgCreateProviderResponseAminoMsg {
    return {
      type: "akash/provider/v1beta2/testonly-create-provider-response",
      value: MsgCreateProviderResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateProviderResponseProtoMsg): MsgCreateProviderResponse {
    return MsgCreateProviderResponse.decode(message.value);
  },
  toProto(message: MsgCreateProviderResponse): Uint8Array {
    return MsgCreateProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProviderResponse): MsgCreateProviderResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta2.MsgCreateProviderResponse",
      value: MsgCreateProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProvider(): MsgUpdateProvider {
  return {
    owner: undefined,
    hostUri: undefined,
    attributes: [],
    info: ProviderInfo.fromPartial({})
  };
}
export const MsgUpdateProvider = {
  typeUrl: "/akash.provider.v1beta2.MsgUpdateProvider",
  encode(message: MsgUpdateProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    if (message.hostUri !== undefined) {
      writer.uint32(18).string(message.hostUri);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.hostUri = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateProvider {
    const obj = createBaseMsgUpdateProvider();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.hostUri)) obj.hostUri = String(object.hostUri);
    if (Array.isArray(object?.attributes)) obj.attributes = object.attributes.map((e: any) => Attribute.fromJSON(e));
    if (isSet(object.info)) obj.info = ProviderInfo.fromJSON(object.info);
    return obj;
  },
  toJSON(message: MsgUpdateProvider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.hostUri !== undefined && (obj.hostUri = message.hostUri);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateProvider>, I>>(object: I): MsgUpdateProvider {
    const message = createBaseMsgUpdateProvider();
    message.owner = object.owner ?? undefined;
    message.hostUri = object.hostUri ?? undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    if (object.info !== undefined && object.info !== null) {
      message.info = ProviderInfo.fromPartial(object.info);
    }
    return message;
  },
  fromSDK(object: MsgUpdateProviderSDKType): MsgUpdateProvider {
    return {
      owner: object?.owner,
      hostUri: object?.host_uri,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : [],
      info: object.info ? ProviderInfo.fromSDK(object.info) : undefined
    };
  },
  fromSDKJSON(object: any): MsgUpdateProviderSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : undefined,
      host_uri: isSet(object.host_uri) ? String(object.host_uri) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDKJSON(e)) : [],
      info: isSet(object.info) ? ProviderInfo.fromSDKJSON(object.info) : undefined
    };
  },
  toSDK(message: MsgUpdateProvider): MsgUpdateProviderSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.host_uri = message.hostUri;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toSDK(message.info) : undefined);
    return obj;
  },
  fromAmino(object: MsgUpdateProviderAmino): MsgUpdateProvider {
    return {
      owner: object?.owner,
      hostUri: object?.host_uri,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : [],
      info: object?.info ? ProviderInfo.fromAmino(object.info) : undefined
    };
  },
  toAmino(message: MsgUpdateProvider): MsgUpdateProviderAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.host_uri = message.hostUri;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    obj.info = message.info ? ProviderInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProviderAminoMsg): MsgUpdateProvider {
    return MsgUpdateProvider.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateProvider): MsgUpdateProviderAminoMsg {
    return {
      type: "akash/provider/v1beta2/testonly-update-provider",
      value: MsgUpdateProvider.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateProviderProtoMsg): MsgUpdateProvider {
    return MsgUpdateProvider.decode(message.value);
  },
  toProto(message: MsgUpdateProvider): Uint8Array {
    return MsgUpdateProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProvider): MsgUpdateProviderProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta2.MsgUpdateProvider",
      value: MsgUpdateProvider.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProviderResponse(): MsgUpdateProviderResponse {
  return {};
}
export const MsgUpdateProviderResponse = {
  typeUrl: "/akash.provider.v1beta2.MsgUpdateProviderResponse",
  encode(_: MsgUpdateProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProviderResponse();
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
  fromJSON(_: any): MsgUpdateProviderResponse {
    const obj = createBaseMsgUpdateProviderResponse();
    return obj;
  },
  toJSON(_: MsgUpdateProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateProviderResponse>, I>>(_: I): MsgUpdateProviderResponse {
    const message = createBaseMsgUpdateProviderResponse();
    return message;
  },
  fromSDK(_: MsgUpdateProviderResponseSDKType): MsgUpdateProviderResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgUpdateProviderResponseSDKType {
    return {};
  },
  toSDK(_: MsgUpdateProviderResponse): MsgUpdateProviderResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateProviderResponseAmino): MsgUpdateProviderResponse {
    return {};
  },
  toAmino(_: MsgUpdateProviderResponse): MsgUpdateProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProviderResponseAminoMsg): MsgUpdateProviderResponse {
    return MsgUpdateProviderResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateProviderResponse): MsgUpdateProviderResponseAminoMsg {
    return {
      type: "akash/provider/v1beta2/testonly-update-provider-response",
      value: MsgUpdateProviderResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateProviderResponseProtoMsg): MsgUpdateProviderResponse {
    return MsgUpdateProviderResponse.decode(message.value);
  },
  toProto(message: MsgUpdateProviderResponse): Uint8Array {
    return MsgUpdateProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProviderResponse): MsgUpdateProviderResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta2.MsgUpdateProviderResponse",
      value: MsgUpdateProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteProvider(): MsgDeleteProvider {
  return {
    owner: undefined
  };
}
export const MsgDeleteProvider = {
  typeUrl: "/akash.provider.v1beta2.MsgDeleteProvider",
  encode(message: MsgDeleteProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteProvider {
    const obj = createBaseMsgDeleteProvider();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgDeleteProvider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteProvider>, I>>(object: I): MsgDeleteProvider {
    const message = createBaseMsgDeleteProvider();
    message.owner = object.owner ?? undefined;
    return message;
  },
  fromSDK(object: MsgDeleteProviderSDKType): MsgDeleteProvider {
    return {
      owner: object?.owner
    };
  },
  fromSDKJSON(object: any): MsgDeleteProviderSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : undefined
    };
  },
  toSDK(message: MsgDeleteProvider): MsgDeleteProviderSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: MsgDeleteProviderAmino): MsgDeleteProvider {
    return {
      owner: object?.owner
    };
  },
  toAmino(message: MsgDeleteProvider): MsgDeleteProviderAmino {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteProviderAminoMsg): MsgDeleteProvider {
    return MsgDeleteProvider.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteProvider): MsgDeleteProviderAminoMsg {
    return {
      type: "akash/provider/v1beta2/testonly-delete-provider",
      value: MsgDeleteProvider.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteProviderProtoMsg): MsgDeleteProvider {
    return MsgDeleteProvider.decode(message.value);
  },
  toProto(message: MsgDeleteProvider): Uint8Array {
    return MsgDeleteProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProvider): MsgDeleteProviderProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta2.MsgDeleteProvider",
      value: MsgDeleteProvider.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteProviderResponse(): MsgDeleteProviderResponse {
  return {};
}
export const MsgDeleteProviderResponse = {
  typeUrl: "/akash.provider.v1beta2.MsgDeleteProviderResponse",
  encode(_: MsgDeleteProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProviderResponse();
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
  fromJSON(_: any): MsgDeleteProviderResponse {
    const obj = createBaseMsgDeleteProviderResponse();
    return obj;
  },
  toJSON(_: MsgDeleteProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteProviderResponse>, I>>(_: I): MsgDeleteProviderResponse {
    const message = createBaseMsgDeleteProviderResponse();
    return message;
  },
  fromSDK(_: MsgDeleteProviderResponseSDKType): MsgDeleteProviderResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgDeleteProviderResponseSDKType {
    return {};
  },
  toSDK(_: MsgDeleteProviderResponse): MsgDeleteProviderResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDeleteProviderResponseAmino): MsgDeleteProviderResponse {
    return {};
  },
  toAmino(_: MsgDeleteProviderResponse): MsgDeleteProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteProviderResponseAminoMsg): MsgDeleteProviderResponse {
    return MsgDeleteProviderResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteProviderResponse): MsgDeleteProviderResponseAminoMsg {
    return {
      type: "akash/provider/v1beta2/testonly-delete-provider-response",
      value: MsgDeleteProviderResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteProviderResponseProtoMsg): MsgDeleteProviderResponse {
    return MsgDeleteProviderResponse.decode(message.value);
  },
  toProto(message: MsgDeleteProviderResponse): Uint8Array {
    return MsgDeleteProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProviderResponse): MsgDeleteProviderResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta2.MsgDeleteProviderResponse",
      value: MsgDeleteProviderResponse.encode(message).finish()
    };
  }
};
function createBaseProvider(): Provider {
  return {
    owner: undefined,
    hostUri: undefined,
    attributes: [],
    info: ProviderInfo.fromPartial({})
  };
}
export const Provider = {
  typeUrl: "/akash.provider.v1beta2.Provider",
  encode(message: Provider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    if (message.hostUri !== undefined) {
      writer.uint32(18).string(message.hostUri);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Provider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.hostUri = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Provider {
    const obj = createBaseProvider();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.hostUri)) obj.hostUri = String(object.hostUri);
    if (Array.isArray(object?.attributes)) obj.attributes = object.attributes.map((e: any) => Attribute.fromJSON(e));
    if (isSet(object.info)) obj.info = ProviderInfo.fromJSON(object.info);
    return obj;
  },
  toJSON(message: Provider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.hostUri !== undefined && (obj.hostUri = message.hostUri);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Provider>, I>>(object: I): Provider {
    const message = createBaseProvider();
    message.owner = object.owner ?? undefined;
    message.hostUri = object.hostUri ?? undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    if (object.info !== undefined && object.info !== null) {
      message.info = ProviderInfo.fromPartial(object.info);
    }
    return message;
  },
  fromSDK(object: ProviderSDKType): Provider {
    return {
      owner: object?.owner,
      hostUri: object?.host_uri,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : [],
      info: object.info ? ProviderInfo.fromSDK(object.info) : undefined
    };
  },
  fromSDKJSON(object: any): ProviderSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : undefined,
      host_uri: isSet(object.host_uri) ? String(object.host_uri) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDKJSON(e)) : [],
      info: isSet(object.info) ? ProviderInfo.fromSDKJSON(object.info) : undefined
    };
  },
  toSDK(message: Provider): ProviderSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.host_uri = message.hostUri;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toSDK(message.info) : undefined);
    return obj;
  },
  fromAmino(object: ProviderAmino): Provider {
    return {
      owner: object?.owner,
      hostUri: object?.host_uri,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : [],
      info: object?.info ? ProviderInfo.fromAmino(object.info) : undefined
    };
  },
  toAmino(message: Provider): ProviderAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.host_uri = message.hostUri;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    obj.info = message.info ? ProviderInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProviderAminoMsg): Provider {
    return Provider.fromAmino(object.value);
  },
  toAminoMsg(message: Provider): ProviderAminoMsg {
    return {
      type: "akash/provider/v1beta2/provider",
      value: Provider.toAmino(message)
    };
  },
  fromProtoMsg(message: ProviderProtoMsg): Provider {
    return Provider.decode(message.value);
  },
  toProto(message: Provider): Uint8Array {
    return Provider.encode(message).finish();
  },
  toProtoMsg(message: Provider): ProviderProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta2.Provider",
      value: Provider.encode(message).finish()
    };
  }
};