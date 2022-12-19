import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { DepositDeploymentAuthorization as DepositDeploymentAuthorization1 } from "../../../akash/deployment/v1beta1/authz";
import { DepositDeploymentAuthorizationAmino as DepositDeploymentAuthorization1Amino } from "../../../akash/deployment/v1beta1/authz";
import { DepositDeploymentAuthorizationSDKType as DepositDeploymentAuthorization1SDKType } from "../../../akash/deployment/v1beta1/authz";
import { DepositDeploymentAuthorization as DepositDeploymentAuthorization2 } from "../../../akash/deployment/v1beta2/authz";
import { DepositDeploymentAuthorizationAmino as DepositDeploymentAuthorization2Amino } from "../../../akash/deployment/v1beta2/authz";
import { DepositDeploymentAuthorizationSDKType as DepositDeploymentAuthorization2SDKType } from "../../../akash/deployment/v1beta2/authz";
import { SendAuthorization, SendAuthorizationAmino, SendAuthorizationSDKType } from "../../bank/v1beta1/authz";
import { StakeAuthorization, StakeAuthorizationAmino, StakeAuthorizationSDKType } from "../../staking/v1beta1/authz";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
export const protobufPackage = "cosmos.authz.v1beta1";

/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
  /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
  msg: string;
}

/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationAmino {
  /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
  msg: string;
}

/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationSDKType {
  msg: string;
}

/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
  authorization?: (GenericAuthorization & DepositDeploymentAuthorization1 & DepositDeploymentAuthorization2 & SendAuthorization & StakeAuthorization & Any) | undefined;

  /**
   * time when the grant will expire and will be pruned. If null, then the grant
   * doesn't have a time expiration (other conditions  in `authorization`
   * may apply to invalidate the grant)
   */
  expiration?: Date;
}

/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantAmino {
  authorization?: AnyAmino;

  /**
   * time when the grant will expire and will be pruned. If null, then the grant
   * doesn't have a time expiration (other conditions  in `authorization`
   * may apply to invalidate the grant)
   */
  expiration?: Date;
}

/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantSDKType {
  authorization?: AnySDKType;
  expiration?: Date;
}

/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorization {
  granter: string;
  grantee: string;
  authorization?: (GenericAuthorization & DepositDeploymentAuthorization1 & DepositDeploymentAuthorization2 & SendAuthorization & StakeAuthorization & Any) | undefined;
  expiration?: Date;
}

/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorizationAmino {
  granter: string;
  grantee: string;
  authorization?: AnyAmino;
  expiration?: Date;
}

/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorizationSDKType {
  granter: string;
  grantee: string;
  authorization?: AnySDKType;
  expiration?: Date;
}

/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItem {
  /** msg_type_urls contains the list of TypeURL of a sdk.Msg. */
  msgTypeUrls: string[];
}

/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItemAmino {
  /** msg_type_urls contains the list of TypeURL of a sdk.Msg. */
  msg_type_urls: string[];
}

/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItemSDKType {
  msg_type_urls: string[];
}

function createBaseGenericAuthorization(): GenericAuthorization {
  return {
    msg: ""
  };
}

export const GenericAuthorization = {
  encode(message: GenericAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenericAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericAuthorization();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenericAuthorization {
    return {
      msg: isSet(object.msg) ? String(object.msg) : ""
    };
  },

  toJSON(message: GenericAuthorization): unknown {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(object: DeepPartial<GenericAuthorization>): GenericAuthorization {
    const message = createBaseGenericAuthorization();
    message.msg = object.msg ?? "";
    return message;
  },

  fromSDK(object: GenericAuthorizationSDKType): GenericAuthorization {
    return {
      msg: object?.msg
    };
  },

  toSDK(message: GenericAuthorization): GenericAuthorizationSDKType {
    const obj: any = {};
    obj.msg = message.msg;
    return obj;
  },

  fromAmino(object: GenericAuthorizationAmino): GenericAuthorization {
    return {
      msg: object.msg
    };
  },

  toAmino(message: GenericAuthorization): GenericAuthorizationAmino {
    const obj: any = {};
    obj.msg = message.msg;
    return obj;
  }

};

function createBaseGrant(): Grant {
  return {
    authorization: undefined,
    expiration: undefined
  };
}

export const Grant = {
  encode(message: Grant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authorization !== undefined) {
      Any.encode((message.authorization as Any), writer.uint32(10).fork()).ldelim();
    }

    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Grant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authorization = (Authorization_InterfaceDecoder(reader) as Any);
          break;

        case 2:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Grant {
    return {
      authorization: isSet(object.authorization) ? Any.fromJSON(object.authorization) : undefined,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },

  toJSON(message: Grant): unknown {
    const obj: any = {};
    message.authorization !== undefined && (obj.authorization = message.authorization ? Any.toJSON(message.authorization) : undefined);
    message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Grant>): Grant {
    const message = createBaseGrant();
    message.authorization = object.authorization !== undefined && object.authorization !== null ? Any.fromPartial(object.authorization) : undefined;
    message.expiration = object.expiration ?? undefined;
    return message;
  },

  fromSDK(object: GrantSDKType): Grant {
    return {
      authorization: object.authorization ? Any.fromSDK(object.authorization) : undefined,
      expiration: object.expiration ? Timestamp.fromSDK(object.expiration) : undefined
    };
  },

  toSDK(message: Grant): GrantSDKType {
    const obj: any = {};
    message.authorization !== undefined && (obj.authorization = message.authorization ? Any.toSDK(message.authorization) : undefined);
    message.expiration !== undefined && (obj.expiration = message.expiration ? Timestamp.toSDK(message.expiration) : undefined);
    return obj;
  },

  fromAmino(object: GrantAmino): Grant {
    return {
      authorization: object?.authorization ? Authorization_FromAmino(object.authorization) : undefined,
      expiration: object?.expiration ? Timestamp.fromAmino(object.expiration) : undefined
    };
  },

  toAmino(message: Grant): GrantAmino {
    const obj: any = {};
    obj.authorization = message.authorization ? Authorization_ToAmino((message.authorization as Any)) : undefined;
    obj.expiration = message.expiration ? Timestamp.toAmino(message.expiration) : undefined;
    return obj;
  }

};

function createBaseGrantAuthorization(): GrantAuthorization {
  return {
    granter: "",
    grantee: "",
    authorization: undefined,
    expiration: undefined
  };
}

export const GrantAuthorization = {
  encode(message: GrantAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    if (message.authorization !== undefined) {
      Any.encode((message.authorization as Any), writer.uint32(26).fork()).ldelim();
    }

    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrantAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantAuthorization();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.authorization = (Authorization_InterfaceDecoder(reader) as Any);
          break;

        case 4:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GrantAuthorization {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      authorization: isSet(object.authorization) ? Any.fromJSON(object.authorization) : undefined,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },

  toJSON(message: GrantAuthorization): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.authorization !== undefined && (obj.authorization = message.authorization ? Any.toJSON(message.authorization) : undefined);
    message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<GrantAuthorization>): GrantAuthorization {
    const message = createBaseGrantAuthorization();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.authorization = object.authorization !== undefined && object.authorization !== null ? Any.fromPartial(object.authorization) : undefined;
    message.expiration = object.expiration ?? undefined;
    return message;
  },

  fromSDK(object: GrantAuthorizationSDKType): GrantAuthorization {
    return {
      granter: object?.granter,
      grantee: object?.grantee,
      authorization: object.authorization ? Any.fromSDK(object.authorization) : undefined,
      expiration: object.expiration ? Timestamp.fromSDK(object.expiration) : undefined
    };
  },

  toSDK(message: GrantAuthorization): GrantAuthorizationSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    message.authorization !== undefined && (obj.authorization = message.authorization ? Any.toSDK(message.authorization) : undefined);
    message.expiration !== undefined && (obj.expiration = message.expiration ? Timestamp.toSDK(message.expiration) : undefined);
    return obj;
  },

  fromAmino(object: GrantAuthorizationAmino): GrantAuthorization {
    return {
      granter: object.granter,
      grantee: object.grantee,
      authorization: object?.authorization ? Authorization_FromAmino(object.authorization) : undefined,
      expiration: object?.expiration ? Timestamp.fromAmino(object.expiration) : undefined
    };
  },

  toAmino(message: GrantAuthorization): GrantAuthorizationAmino {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.authorization = message.authorization ? Authorization_ToAmino((message.authorization as Any)) : undefined;
    obj.expiration = message.expiration ? Timestamp.toAmino(message.expiration) : undefined;
    return obj;
  }

};

function createBaseGrantQueueItem(): GrantQueueItem {
  return {
    msgTypeUrls: []
  };
}

export const GrantQueueItem = {
  encode(message: GrantQueueItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.msgTypeUrls) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrantQueueItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantQueueItem();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrls.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GrantQueueItem {
    return {
      msgTypeUrls: Array.isArray(object?.msgTypeUrls) ? object.msgTypeUrls.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: GrantQueueItem): unknown {
    const obj: any = {};

    if (message.msgTypeUrls) {
      obj.msgTypeUrls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msgTypeUrls = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GrantQueueItem>): GrantQueueItem {
    const message = createBaseGrantQueueItem();
    message.msgTypeUrls = object.msgTypeUrls?.map(e => e) || [];
    return message;
  },

  fromSDK(object: GrantQueueItemSDKType): GrantQueueItem {
    return {
      msgTypeUrls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e: any) => e) : []
    };
  },

  toSDK(message: GrantQueueItem): GrantQueueItemSDKType {
    const obj: any = {};

    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = [];
    }

    return obj;
  },

  fromAmino(object: GrantQueueItemAmino): GrantQueueItem {
    return {
      msgTypeUrls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e: any) => e) : []
    };
  },

  toAmino(message: GrantQueueItem): GrantQueueItemAmino {
    const obj: any = {};

    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = [];
    }

    return obj;
  }

};
export const Authorization_InterfaceDecoder = (input: _m0.Reader | Uint8Array): DepositDeploymentAuthorization1 | DepositDeploymentAuthorization2 | GenericAuthorization | SendAuthorization | StakeAuthorization | Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32());

  switch (data.typeUrl) {
    case "/akash.deployment.v1beta1.DepositDeploymentAuthorization":
      return DepositDeploymentAuthorization1.decode(data.value);

    case "/akash.deployment.v1beta2.DepositDeploymentAuthorization":
      return DepositDeploymentAuthorization2.decode(data.value);

    case "/cosmos.authz.v1beta1.GenericAuthorization":
      return GenericAuthorization.decode(data.value);

    case "/cosmos.bank.v1beta1.SendAuthorization":
      return SendAuthorization.decode(data.value);

    case "/cosmos.staking.v1beta1.StakeAuthorization":
      return StakeAuthorization.decode(data.value);

    default:
      return data;
  }
};
export const Authorization_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "/akash.deployment.v1beta1.DepositDeploymentAuthorization":
      return Any.fromPartial({
        typeUrl: "/akash.deployment.v1beta1.DepositDeploymentAuthorization",
        value: DepositDeploymentAuthorization1.encode(DepositDeploymentAuthorization1.fromPartial((content.value as DeepPartial<DepositDeploymentAuthorization1>))).finish()
      });

    case "/akash.deployment.v1beta2.DepositDeploymentAuthorization":
      return Any.fromPartial({
        typeUrl: "/akash.deployment.v1beta2.DepositDeploymentAuthorization",
        value: DepositDeploymentAuthorization2.encode(DepositDeploymentAuthorization2.fromPartial((content.value as DeepPartial<DepositDeploymentAuthorization2>))).finish()
      });

    case "cosmos-sdk/GenericAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        value: GenericAuthorization.encode(GenericAuthorization.fromPartial((content.value as DeepPartial<GenericAuthorization>))).finish()
      });

    case "cosmos-sdk/SendAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
        value: SendAuthorization.encode(SendAuthorization.fromPartial((content.value as DeepPartial<SendAuthorization>))).finish()
      });

    case "cosmos-sdk/StakeAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
        value: StakeAuthorization.encode(StakeAuthorization.fromPartial((content.value as DeepPartial<StakeAuthorization>))).finish()
      });

    default:
      return Any.fromAmino(content);
  }
};
export const Authorization_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/akash.deployment.v1beta1.DepositDeploymentAuthorization":
      return {
        type: "/akash.deployment.v1beta1.DepositDeploymentAuthorization",
        value: DepositDeploymentAuthorization1.toAmino(DepositDeploymentAuthorization1.decode(content.value))
      };

    case "/akash.deployment.v1beta2.DepositDeploymentAuthorization":
      return {
        type: "/akash.deployment.v1beta2.DepositDeploymentAuthorization",
        value: DepositDeploymentAuthorization2.toAmino(DepositDeploymentAuthorization2.decode(content.value))
      };

    case "/cosmos.authz.v1beta1.GenericAuthorization":
      return {
        type: "cosmos-sdk/GenericAuthorization",
        value: GenericAuthorization.toAmino(GenericAuthorization.decode(content.value))
      };

    case "/cosmos.bank.v1beta1.SendAuthorization":
      return {
        type: "cosmos-sdk/SendAuthorization",
        value: SendAuthorization.toAmino(SendAuthorization.decode(content.value))
      };

    case "/cosmos.staking.v1beta1.StakeAuthorization":
      return {
        type: "cosmos-sdk/StakeAuthorization",
        value: StakeAuthorization.toAmino(StakeAuthorization.decode(content.value))
      };

    default:
      return Any.toAmino(content);
  }
};