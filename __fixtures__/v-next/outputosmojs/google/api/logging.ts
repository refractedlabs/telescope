import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, isSet } from "../../helpers";
export const protobufPackage = "google.api";
/**
 * Logging configuration of the service.
 * 
 * The following example shows how to configure logs to be sent to the
 * producer and consumer projects. In the example, the `activity_history`
 * log is sent to both the producer and consumer projects, whereas the
 * `purchase_history` log is only sent to the producer project.
 * 
 *     monitored_resources:
 *     - type: library.googleapis.com/branch
 *       labels:
 *       - key: /city
 *         description: The city where the library branch is located in.
 *       - key: /name
 *         description: The name of the branch.
 *     logs:
 *     - name: activity_history
 *       labels:
 *       - key: /customer_id
 *     - name: purchase_history
 *     logging:
 *       producer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 *         - purchase_history
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 */
export interface Logging {
  /**
   * Logging configurations for sending logs to the producer project.
   * There can be multiple producer destinations, each one must have a
   * different monitored resource type. A log can be used in at most
   * one producer destination.
   */
  producerDestinations: Logging_LoggingDestination[];
  /**
   * Logging configurations for sending logs to the consumer project.
   * There can be multiple consumer destinations, each one must have a
   * different monitored resource type. A log can be used in at most
   * one consumer destination.
   */
  consumerDestinations: Logging_LoggingDestination[];
}
/**
 * Logging configuration of the service.
 * 
 * The following example shows how to configure logs to be sent to the
 * producer and consumer projects. In the example, the `activity_history`
 * log is sent to both the producer and consumer projects, whereas the
 * `purchase_history` log is only sent to the producer project.
 * 
 *     monitored_resources:
 *     - type: library.googleapis.com/branch
 *       labels:
 *       - key: /city
 *         description: The city where the library branch is located in.
 *       - key: /name
 *         description: The name of the branch.
 *     logs:
 *     - name: activity_history
 *       labels:
 *       - key: /customer_id
 *     - name: purchase_history
 *     logging:
 *       producer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 *         - purchase_history
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 */
export interface LoggingSDKType {
  producer_destinations: Logging_LoggingDestinationSDKType[];
  consumer_destinations: Logging_LoggingDestinationSDKType[];
}
/**
 * Configuration of a specific logging destination (the producer project
 * or the consumer project).
 */
export interface Logging_LoggingDestination {
  /**
   * The monitored resource type. The type must be defined in the
   * [Service.monitored_resources][google.api.Service.monitored_resources] section.
   */
  monitoredResource: string;
  /**
   * Names of the logs to be sent to this destination. Each name must
   * be defined in the [Service.logs][google.api.Service.logs] section. If the log name is
   * not a domain scoped name, it will be automatically prefixed with
   * the service name followed by "/".
   */
  logs: string[];
}
/**
 * Configuration of a specific logging destination (the producer project
 * or the consumer project).
 */
export interface Logging_LoggingDestinationSDKType {
  monitored_resource: string;
  logs: string[];
}
function createBaseLogging(): Logging {
  return {
    producerDestinations: [],
    consumerDestinations: []
  };
}
export const Logging = {
  encode(message: Logging, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.producerDestinations) {
      Logging_LoggingDestination.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.consumerDestinations) {
      Logging_LoggingDestination.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Logging {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogging();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producerDestinations.push(Logging_LoggingDestination.decode(reader, reader.uint32()));
          break;
        case 2:
          message.consumerDestinations.push(Logging_LoggingDestination.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Logging {
    return {
      producerDestinations: Array.isArray(object?.producerDestinations) ? object.producerDestinations.map((e: any) => Logging_LoggingDestination.fromJSON(e)) : [],
      consumerDestinations: Array.isArray(object?.consumerDestinations) ? object.consumerDestinations.map((e: any) => Logging_LoggingDestination.fromJSON(e)) : []
    };
  },
  toJSON(message: Logging): unknown {
    const obj: any = {};
    if (message.producerDestinations) {
      obj.producerDestinations = message.producerDestinations.map(e => e ? Logging_LoggingDestination.toJSON(e) : undefined);
    } else {
      obj.producerDestinations = [];
    }
    if (message.consumerDestinations) {
      obj.consumerDestinations = message.consumerDestinations.map(e => e ? Logging_LoggingDestination.toJSON(e) : undefined);
    } else {
      obj.consumerDestinations = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Logging>): Logging {
    const message = createBaseLogging();
    message.producerDestinations = object.producerDestinations?.map(e => Logging_LoggingDestination.fromPartial(e)) || [];
    message.consumerDestinations = object.consumerDestinations?.map(e => Logging_LoggingDestination.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: LoggingSDKType): Logging {
    return {
      producerDestinations: Array.isArray(object?.producer_destinations) ? object.producer_destinations.map((e: any) => Logging_LoggingDestination.fromSDK(e)) : [],
      consumerDestinations: Array.isArray(object?.consumer_destinations) ? object.consumer_destinations.map((e: any) => Logging_LoggingDestination.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): LoggingSDKType {
    return {
      producer_destinations: Array.isArray(object?.producer_destinations) ? object.producer_destinations.map((e: any) => Logging_LoggingDestination.fromSDKJSON(e)) : [],
      consumer_destinations: Array.isArray(object?.consumer_destinations) ? object.consumer_destinations.map((e: any) => Logging_LoggingDestination.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Logging): LoggingSDKType {
    const obj: any = {};
    if (message.producerDestinations) {
      obj.producer_destinations = message.producerDestinations.map(e => e ? Logging_LoggingDestination.toSDK(e) : undefined);
    } else {
      obj.producer_destinations = [];
    }
    if (message.consumerDestinations) {
      obj.consumer_destinations = message.consumerDestinations.map(e => e ? Logging_LoggingDestination.toSDK(e) : undefined);
    } else {
      obj.consumer_destinations = [];
    }
    return obj;
  }
};
function createBaseLogging_LoggingDestination(): Logging_LoggingDestination {
  return {
    monitoredResource: "",
    logs: []
  };
}
export const Logging_LoggingDestination = {
  encode(message: Logging_LoggingDestination, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.monitoredResource !== "") {
      writer.uint32(26).string(message.monitoredResource);
    }
    for (const v of message.logs) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Logging_LoggingDestination {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogging_LoggingDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.monitoredResource = reader.string();
          break;
        case 1:
          message.logs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Logging_LoggingDestination {
    return {
      monitoredResource: isSet(object.monitoredResource) ? String(object.monitoredResource) : "",
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Logging_LoggingDestination): unknown {
    const obj: any = {};
    message.monitoredResource !== undefined && (obj.monitoredResource = message.monitoredResource);
    if (message.logs) {
      obj.logs = message.logs.map(e => e);
    } else {
      obj.logs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Logging_LoggingDestination>): Logging_LoggingDestination {
    const message = createBaseLogging_LoggingDestination();
    message.monitoredResource = object.monitoredResource ?? "";
    message.logs = object.logs?.map(e => e) || [];
    return message;
  },
  fromSDK(object: Logging_LoggingDestinationSDKType): Logging_LoggingDestination {
    return {
      monitoredResource: object?.monitored_resource,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): Logging_LoggingDestinationSDKType {
    return {
      monitored_resource: isSet(object.monitored_resource) ? String(object.monitored_resource) : "",
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: Logging_LoggingDestination): Logging_LoggingDestinationSDKType {
    const obj: any = {};
    obj.monitored_resource = message.monitoredResource;
    if (message.logs) {
      obj.logs = message.logs.map(e => e);
    } else {
      obj.logs = [];
    }
    return obj;
  }
};