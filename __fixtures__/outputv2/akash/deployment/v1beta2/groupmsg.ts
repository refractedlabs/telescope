import { GroupID, GroupIDAmino, GroupIDSDKType } from "./groupid";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta2";

/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroup {
  id?: GroupID;
}
export interface MsgCloseGroupProtoType {
  typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup";
  value: Uint8Array;
}

/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroupAmino {
  id?: GroupIDAmino;
}
export interface MsgCloseGroupAminoType {
  type: "/akash.deployment.v1beta2.MsgCloseGroup";
  value: MsgCloseGroupAmino;
}

/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroupSDKType {
  id?: GroupIDSDKType;
}

/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponse {}
export interface MsgCloseGroupResponseProtoType {
  typeUrl: "/akash.deployment.v1beta2.MsgCloseGroupResponse";
  value: Uint8Array;
}

/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponseAmino {}
export interface MsgCloseGroupResponseAminoType {
  type: "/akash.deployment.v1beta2.MsgCloseGroupResponse";
  value: MsgCloseGroupResponseAmino;
}

/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponseSDKType {}

/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroup {
  id?: GroupID;
}
export interface MsgPauseGroupProtoType {
  typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup";
  value: Uint8Array;
}

/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroupAmino {
  id?: GroupIDAmino;
}
export interface MsgPauseGroupAminoType {
  type: "/akash.deployment.v1beta2.MsgPauseGroup";
  value: MsgPauseGroupAmino;
}

/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroupSDKType {
  id?: GroupIDSDKType;
}

/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponse {}
export interface MsgPauseGroupResponseProtoType {
  typeUrl: "/akash.deployment.v1beta2.MsgPauseGroupResponse";
  value: Uint8Array;
}

/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponseAmino {}
export interface MsgPauseGroupResponseAminoType {
  type: "/akash.deployment.v1beta2.MsgPauseGroupResponse";
  value: MsgPauseGroupResponseAmino;
}

/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponseSDKType {}

/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroup {
  id?: GroupID;
}
export interface MsgStartGroupProtoType {
  typeUrl: "/akash.deployment.v1beta2.MsgStartGroup";
  value: Uint8Array;
}

/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroupAmino {
  id?: GroupIDAmino;
}
export interface MsgStartGroupAminoType {
  type: "/akash.deployment.v1beta2.MsgStartGroup";
  value: MsgStartGroupAmino;
}

/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroupSDKType {
  id?: GroupIDSDKType;
}

/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponse {}
export interface MsgStartGroupResponseProtoType {
  typeUrl: "/akash.deployment.v1beta2.MsgStartGroupResponse";
  value: Uint8Array;
}

/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponseAmino {}
export interface MsgStartGroupResponseAminoType {
  type: "/akash.deployment.v1beta2.MsgStartGroupResponse";
  value: MsgStartGroupResponseAmino;
}

/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponseSDKType {}

function createBaseMsgCloseGroup(): MsgCloseGroup {
  return {
    id: undefined
  };
}

export const MsgCloseGroup = {
  encode(message: MsgCloseGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCloseGroup {
    return {
      id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined
    };
  },

  toJSON(message: MsgCloseGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCloseGroup>): MsgCloseGroup {
    const message = createBaseMsgCloseGroup();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  },

  fromSDK(object: MsgCloseGroupSDKType): MsgCloseGroup {
    return {
      id: object.id ? GroupID.fromSDK(object.id) : undefined
    };
  },

  toSDK(message: MsgCloseGroup): MsgCloseGroupSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toSDK(message.id) : undefined);
    return obj;
  },

  fromAmino(object: MsgCloseGroupAmino): MsgCloseGroup {
    return {
      id: object?.id ? GroupID.fromAmino(object.id) : undefined
    };
  },

  toAmino(message: MsgCloseGroup): MsgCloseGroupAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id) : undefined;
    return obj;
  }

};

function createBaseMsgCloseGroupResponse(): MsgCloseGroupResponse {
  return {};
}

export const MsgCloseGroupResponse = {
  encode(_: MsgCloseGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseGroupResponse();

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

  fromJSON(_: any): MsgCloseGroupResponse {
    return {};
  },

  toJSON(_: MsgCloseGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCloseGroupResponse>): MsgCloseGroupResponse {
    const message = createBaseMsgCloseGroupResponse();
    return message;
  },

  fromSDK(_: MsgCloseGroupResponseSDKType): MsgCloseGroupResponse {
    return {};
  },

  toSDK(_: MsgCloseGroupResponse): MsgCloseGroupResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: MsgCloseGroupResponseAmino): MsgCloseGroupResponse {
    return {};
  },

  toAmino(_: MsgCloseGroupResponse): MsgCloseGroupResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgPauseGroup(): MsgPauseGroup {
  return {
    id: undefined
  };
}

export const MsgPauseGroup = {
  encode(message: MsgPauseGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgPauseGroup {
    return {
      id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined
    };
  },

  toJSON(message: MsgPauseGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPauseGroup>): MsgPauseGroup {
    const message = createBaseMsgPauseGroup();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  },

  fromSDK(object: MsgPauseGroupSDKType): MsgPauseGroup {
    return {
      id: object.id ? GroupID.fromSDK(object.id) : undefined
    };
  },

  toSDK(message: MsgPauseGroup): MsgPauseGroupSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toSDK(message.id) : undefined);
    return obj;
  },

  fromAmino(object: MsgPauseGroupAmino): MsgPauseGroup {
    return {
      id: object?.id ? GroupID.fromAmino(object.id) : undefined
    };
  },

  toAmino(message: MsgPauseGroup): MsgPauseGroupAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id) : undefined;
    return obj;
  }

};

function createBaseMsgPauseGroupResponse(): MsgPauseGroupResponse {
  return {};
}

export const MsgPauseGroupResponse = {
  encode(_: MsgPauseGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseGroupResponse();

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

  fromJSON(_: any): MsgPauseGroupResponse {
    return {};
  },

  toJSON(_: MsgPauseGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgPauseGroupResponse>): MsgPauseGroupResponse {
    const message = createBaseMsgPauseGroupResponse();
    return message;
  },

  fromSDK(_: MsgPauseGroupResponseSDKType): MsgPauseGroupResponse {
    return {};
  },

  toSDK(_: MsgPauseGroupResponse): MsgPauseGroupResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: MsgPauseGroupResponseAmino): MsgPauseGroupResponse {
    return {};
  },

  toAmino(_: MsgPauseGroupResponse): MsgPauseGroupResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgStartGroup(): MsgStartGroup {
  return {
    id: undefined
  };
}

export const MsgStartGroup = {
  encode(message: MsgStartGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgStartGroup {
    return {
      id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined
    };
  },

  toJSON(message: MsgStartGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgStartGroup>): MsgStartGroup {
    const message = createBaseMsgStartGroup();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  },

  fromSDK(object: MsgStartGroupSDKType): MsgStartGroup {
    return {
      id: object.id ? GroupID.fromSDK(object.id) : undefined
    };
  },

  toSDK(message: MsgStartGroup): MsgStartGroupSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toSDK(message.id) : undefined);
    return obj;
  },

  fromAmino(object: MsgStartGroupAmino): MsgStartGroup {
    return {
      id: object?.id ? GroupID.fromAmino(object.id) : undefined
    };
  },

  toAmino(message: MsgStartGroup): MsgStartGroupAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id) : undefined;
    return obj;
  }

};

function createBaseMsgStartGroupResponse(): MsgStartGroupResponse {
  return {};
}

export const MsgStartGroupResponse = {
  encode(_: MsgStartGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartGroupResponse();

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

  fromJSON(_: any): MsgStartGroupResponse {
    return {};
  },

  toJSON(_: MsgStartGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgStartGroupResponse>): MsgStartGroupResponse {
    const message = createBaseMsgStartGroupResponse();
    return message;
  },

  fromSDK(_: MsgStartGroupResponseSDKType): MsgStartGroupResponse {
    return {};
  },

  toSDK(_: MsgStartGroupResponse): MsgStartGroupResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: MsgStartGroupResponseAmino): MsgStartGroupResponse {
    return {};
  },

  toAmino(_: MsgStartGroupResponse): MsgStartGroupResponseAmino {
    const obj: any = {};
    return obj;
  }

};