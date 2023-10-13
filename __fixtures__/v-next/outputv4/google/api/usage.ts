import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "google.api";
/** Configuration controlling usage of a service. */
export interface Usage {
  /**
   * Requirements that must be satisfied before a consumer project can use the
   * service. Each requirement is of the form <service.name>/<requirement-id>;
   * for example 'serviceusage.googleapis.com/billing-enabled'.
   * 
   * For Google APIs, a Terms of Service requirement must be included here.
   * Google Cloud APIs must include "serviceusage.googleapis.com/tos/cloud".
   * Other Google APIs should include
   * "serviceusage.googleapis.com/tos/universal". Additional ToS can be
   * included based on the business needs.
   */
  requirements?: string[];
  /**
   * A list of usage rules that apply to individual API methods.
   * 
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules?: UsageRule[];
  /**
   * The full resource name of a channel used for sending notifications to the
   * service producer.
   * 
   * Google Service Management currently only supports
   * [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification
   * channel. To use Google Cloud Pub/Sub as the channel, this must be the name
   * of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format
   * documented in https://cloud.google.com/pubsub/docs/overview.
   */
  producerNotificationChannel?: string;
}
/** Configuration controlling usage of a service. */
export interface UsageSDKType {
  requirements?: string[];
  rules?: UsageRuleSDKType[];
  producer_notification_channel?: string;
}
/**
 * Usage configuration rules for the service.
 * 
 * NOTE: Under development.
 * 
 * 
 * Use this rule to configure unregistered calls for the service. Unregistered
 * calls are calls that do not contain consumer project identity.
 * (Example: calls that do not contain an API key).
 * By default, API methods do not allow unregistered calls, and each method call
 * must be identified by a consumer project identity. Use this rule to
 * allow/disallow unregistered calls.
 * 
 * Example of an API that wants to allow unregistered calls for entire service.
 * 
 *     usage:
 *       rules:
 *       - selector: "*"
 *         allow_unregistered_calls: true
 * 
 * Example of a method that wants to allow unregistered calls.
 * 
 *     usage:
 *       rules:
 *       - selector: "google.example.library.v1.LibraryService.CreateBook"
 *         allow_unregistered_calls: true
 */
export interface UsageRule {
  /**
   * Selects the methods to which this rule applies. Use '*' to indicate all
   * methods in all APIs.
   * 
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector?: string;
  /**
   * If true, the selected method allows unregistered calls, e.g. calls
   * that don't identify any user or application.
   */
  allowUnregisteredCalls?: boolean;
  /**
   * If true, the selected method should skip service control and the control
   * plane features, such as quota and billing, will not be available.
   * This flag is used by Google Cloud Endpoints to bypass checks for internal
   * methods, such as service health check methods.
   */
  skipServiceControl?: boolean;
}
/**
 * Usage configuration rules for the service.
 * 
 * NOTE: Under development.
 * 
 * 
 * Use this rule to configure unregistered calls for the service. Unregistered
 * calls are calls that do not contain consumer project identity.
 * (Example: calls that do not contain an API key).
 * By default, API methods do not allow unregistered calls, and each method call
 * must be identified by a consumer project identity. Use this rule to
 * allow/disallow unregistered calls.
 * 
 * Example of an API that wants to allow unregistered calls for entire service.
 * 
 *     usage:
 *       rules:
 *       - selector: "*"
 *         allow_unregistered_calls: true
 * 
 * Example of a method that wants to allow unregistered calls.
 * 
 *     usage:
 *       rules:
 *       - selector: "google.example.library.v1.LibraryService.CreateBook"
 *         allow_unregistered_calls: true
 */
export interface UsageRuleSDKType {
  selector?: string;
  allow_unregistered_calls?: boolean;
  skip_service_control?: boolean;
}
function createBaseUsage(): Usage {
  return {
    requirements: undefined,
    rules: undefined,
    producerNotificationChannel: undefined
  };
}
export const Usage = {
  typeUrl: "/google.api.Usage",
  encode(message: Usage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.requirements) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.rules) {
      UsageRule.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.producerNotificationChannel !== undefined) {
      writer.uint32(58).string(message.producerNotificationChannel);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Usage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requirements.push(reader.string());
          break;
        case 6:
          message.rules.push(UsageRule.decode(reader, reader.uint32()));
          break;
        case 7:
          message.producerNotificationChannel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Usage {
    const obj = createBaseUsage();
    if (Array.isArray(object?.requirements)) obj.requirements = object.requirements.map((e: any) => String(e));
    if (Array.isArray(object?.rules)) obj.rules = object.rules.map((e: any) => UsageRule.fromJSON(e));
    if (isSet(object.producerNotificationChannel)) obj.producerNotificationChannel = String(object.producerNotificationChannel);
    return obj;
  },
  toJSON(message: Usage): unknown {
    const obj: any = {};
    if (message.requirements) {
      obj.requirements = message.requirements.map(e => e);
    } else {
      obj.requirements = [];
    }
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? UsageRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    message.producerNotificationChannel !== undefined && (obj.producerNotificationChannel = message.producerNotificationChannel);
    return obj;
  },
  fromPartial(object: DeepPartial<Usage>): Usage {
    const message = createBaseUsage();
    message.requirements = object.requirements?.map(e => e) || [];
    message.rules = object.rules?.map(e => UsageRule.fromPartial(e)) || [];
    message.producerNotificationChannel = object.producerNotificationChannel ?? undefined;
    return message;
  },
  fromSDK(object: UsageSDKType): Usage {
    return {
      requirements: Array.isArray(object?.requirements) ? object.requirements.map((e: any) => e) : [],
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => UsageRule.fromSDK(e)) : [],
      producerNotificationChannel: object?.producer_notification_channel
    };
  },
  fromSDKJSON(object: any): UsageSDKType {
    return {
      requirements: Array.isArray(object?.requirements) ? object.requirements.map((e: any) => String(e)) : [],
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => UsageRule.fromSDKJSON(e)) : [],
      producer_notification_channel: isSet(object.producer_notification_channel) ? String(object.producer_notification_channel) : undefined
    };
  },
  toSDK(message: Usage): UsageSDKType {
    const obj: any = {};
    if (message.requirements) {
      obj.requirements = message.requirements.map(e => e);
    } else {
      obj.requirements = [];
    }
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? UsageRule.toSDK(e) : undefined);
    } else {
      obj.rules = [];
    }
    obj.producer_notification_channel = message.producerNotificationChannel;
    return obj;
  },
  fromAmino(object: UsageAmino): Usage {
    return {
      requirements: Array.isArray(object?.requirements) ? object.requirements.map((e: any) => e) : [],
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => UsageRule.fromAmino(e)) : [],
      producerNotificationChannel: object?.producer_notification_channel
    };
  },
  toAmino(message: Usage): UsageAmino {
    const obj: any = {};
    if (message.requirements) {
      obj.requirements = message.requirements.map(e => e);
    } else {
      obj.requirements = [];
    }
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? UsageRule.toAmino(e) : undefined);
    } else {
      obj.rules = [];
    }
    obj.producer_notification_channel = message.producerNotificationChannel;
    return obj;
  },
  fromAminoMsg(object: UsageAminoMsg): Usage {
    return Usage.fromAmino(object.value);
  },
  fromProtoMsg(message: UsageProtoMsg): Usage {
    return Usage.decode(message.value);
  },
  toProto(message: Usage): Uint8Array {
    return Usage.encode(message).finish();
  },
  toProtoMsg(message: Usage): UsageProtoMsg {
    return {
      typeUrl: "/google.api.Usage",
      value: Usage.encode(message).finish()
    };
  }
};
function createBaseUsageRule(): UsageRule {
  return {
    selector: undefined,
    allowUnregisteredCalls: undefined,
    skipServiceControl: undefined
  };
}
export const UsageRule = {
  typeUrl: "/google.api.UsageRule",
  encode(message: UsageRule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.selector !== undefined) {
      writer.uint32(10).string(message.selector);
    }
    if (message.allowUnregisteredCalls !== undefined) {
      writer.uint32(16).bool(message.allowUnregisteredCalls);
    }
    if (message.skipServiceControl !== undefined) {
      writer.uint32(24).bool(message.skipServiceControl);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UsageRule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsageRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.allowUnregisteredCalls = reader.bool();
          break;
        case 3:
          message.skipServiceControl = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UsageRule {
    const obj = createBaseUsageRule();
    if (isSet(object.selector)) obj.selector = String(object.selector);
    if (isSet(object.allowUnregisteredCalls)) obj.allowUnregisteredCalls = Boolean(object.allowUnregisteredCalls);
    if (isSet(object.skipServiceControl)) obj.skipServiceControl = Boolean(object.skipServiceControl);
    return obj;
  },
  toJSON(message: UsageRule): unknown {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    message.allowUnregisteredCalls !== undefined && (obj.allowUnregisteredCalls = message.allowUnregisteredCalls);
    message.skipServiceControl !== undefined && (obj.skipServiceControl = message.skipServiceControl);
    return obj;
  },
  fromPartial(object: DeepPartial<UsageRule>): UsageRule {
    const message = createBaseUsageRule();
    message.selector = object.selector ?? undefined;
    message.allowUnregisteredCalls = object.allowUnregisteredCalls ?? undefined;
    message.skipServiceControl = object.skipServiceControl ?? undefined;
    return message;
  },
  fromSDK(object: UsageRuleSDKType): UsageRule {
    return {
      selector: object?.selector,
      allowUnregisteredCalls: object?.allow_unregistered_calls,
      skipServiceControl: object?.skip_service_control
    };
  },
  fromSDKJSON(object: any): UsageRuleSDKType {
    return {
      selector: isSet(object.selector) ? String(object.selector) : undefined,
      allow_unregistered_calls: isSet(object.allow_unregistered_calls) ? Boolean(object.allow_unregistered_calls) : undefined,
      skip_service_control: isSet(object.skip_service_control) ? Boolean(object.skip_service_control) : undefined
    };
  },
  toSDK(message: UsageRule): UsageRuleSDKType {
    const obj: any = {};
    obj.selector = message.selector;
    obj.allow_unregistered_calls = message.allowUnregisteredCalls;
    obj.skip_service_control = message.skipServiceControl;
    return obj;
  },
  fromAmino(object: UsageRuleAmino): UsageRule {
    return {
      selector: object?.selector,
      allowUnregisteredCalls: object?.allow_unregistered_calls,
      skipServiceControl: object?.skip_service_control
    };
  },
  toAmino(message: UsageRule): UsageRuleAmino {
    const obj: any = {};
    obj.selector = message.selector;
    obj.allow_unregistered_calls = message.allowUnregisteredCalls;
    obj.skip_service_control = message.skipServiceControl;
    return obj;
  },
  fromAminoMsg(object: UsageRuleAminoMsg): UsageRule {
    return UsageRule.fromAmino(object.value);
  },
  fromProtoMsg(message: UsageRuleProtoMsg): UsageRule {
    return UsageRule.decode(message.value);
  },
  toProto(message: UsageRule): Uint8Array {
    return UsageRule.encode(message).finish();
  },
  toProtoMsg(message: UsageRule): UsageRuleProtoMsg {
    return {
      typeUrl: "/google.api.UsageRule",
      value: UsageRule.encode(message).finish()
    };
  }
};