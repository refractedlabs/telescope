/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { ConfigChange } from "../../../../google/api/config_change";

/**
 * The full representation of a Service that is managed by
 * Google Service Management.
 */
export interface ManagedService {
  /**
   * The name of the service. See the [overview](/service-management/overview)
   * for naming requirements.
   */
  serviceName: string;
  /** ID of the project that produces and owns this service. */

  producerProjectId: string;
}
/** The metadata associated with a long running operation resource. */

export interface OperationMetadata {
  /**
   * The full name of the resources that this operation is directly
   * associated with.
   */
  resourceNames: string[];
  /** Detailed status information for each step. The order is undetermined. */

  steps: OperationMetadata_Step[];
  /** Percentage of completion of this operation, ranging from 0 to 100. */

  progressPercentage: number;
  /** The start time of the operation. */

  startTime: Date;
}
/** Code describes the status of the operation (or one of its steps). */

export enum OperationMetadata_Status {
  /** STATUS_UNSPECIFIED - Unspecifed code. */
  STATUS_UNSPECIFIED = 0,

  /** DONE - The operation or step has completed without errors. */
  DONE = 1,

  /** NOT_STARTED - The operation or step has not started yet. */
  NOT_STARTED = 2,

  /** IN_PROGRESS - The operation or step is in progress. */
  IN_PROGRESS = 3,

  /**
   * FAILED - The operation or step has completed with errors. If the operation is
   * rollbackable, the rollback completed with errors too.
   */
  FAILED = 4,

  /** CANCELLED - The operation or step has completed with cancellation. */
  CANCELLED = 5,
  UNRECOGNIZED = -1,
}
export function operationMetadata_StatusFromJSON(object: any): OperationMetadata_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return OperationMetadata_Status.STATUS_UNSPECIFIED;

    case 1:
    case "DONE":
      return OperationMetadata_Status.DONE;

    case 2:
    case "NOT_STARTED":
      return OperationMetadata_Status.NOT_STARTED;

    case 3:
    case "IN_PROGRESS":
      return OperationMetadata_Status.IN_PROGRESS;

    case 4:
    case "FAILED":
      return OperationMetadata_Status.FAILED;

    case 5:
    case "CANCELLED":
      return OperationMetadata_Status.CANCELLED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return OperationMetadata_Status.UNRECOGNIZED;
  }
}
export function operationMetadata_StatusToJSON(object: OperationMetadata_Status): string {
  switch (object) {
    case OperationMetadata_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";

    case OperationMetadata_Status.DONE:
      return "DONE";

    case OperationMetadata_Status.NOT_STARTED:
      return "NOT_STARTED";

    case OperationMetadata_Status.IN_PROGRESS:
      return "IN_PROGRESS";

    case OperationMetadata_Status.FAILED:
      return "FAILED";

    case OperationMetadata_Status.CANCELLED:
      return "CANCELLED";

    default:
      return "UNKNOWN";
  }
}
/** Represents the status of one operation step. */

export interface OperationMetadata_Step {
  /** The short description of the step. */
  description: string;
  /** The status code. */

  status: OperationMetadata_Status;
}
/** Represents a diagnostic message (error or warning) */

export interface Diagnostic {
  /** File name and line number of the error or warning. */
  location: string;
  /** The kind of diagnostic information provided. */

  kind: Diagnostic_Kind;
  /** Message describing the error or warning. */

  message: string;
}
/** The kind of diagnostic information possible. */

export enum Diagnostic_Kind {
  /** WARNING - Warnings and errors */
  WARNING = 0,

  /** ERROR - Only errors */
  ERROR = 1,
  UNRECOGNIZED = -1,
}
export function diagnostic_KindFromJSON(object: any): Diagnostic_Kind {
  switch (object) {
    case 0:
    case "WARNING":
      return Diagnostic_Kind.WARNING;

    case 1:
    case "ERROR":
      return Diagnostic_Kind.ERROR;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Diagnostic_Kind.UNRECOGNIZED;
  }
}
export function diagnostic_KindToJSON(object: Diagnostic_Kind): string {
  switch (object) {
    case Diagnostic_Kind.WARNING:
      return "WARNING";

    case Diagnostic_Kind.ERROR:
      return "ERROR";

    default:
      return "UNKNOWN";
  }
}
/**
 * Represents a source file which is used to generate the service configuration
 * defined by `google.api.Service`.
 */

export interface ConfigSource {
  /**
   * A unique ID for a specific instance of this message, typically assigned
   * by the client for tracking purpose. If empty, the server may choose to
   * generate one instead.
   */
  id: string;
  /**
   * Set of source configuration files that are used to generate a service
   * configuration (`google.api.Service`).
   */

  files: ConfigFile[];
}
/** Generic specification of a source configuration file */

export interface ConfigFile {
  /** The file name of the configuration file (full or relative path). */
  filePath: string;
  /** The bytes that constitute the file. */

  fileContents: Uint8Array;
  /** The type of configuration file this represents. */

  fileType: ConfigFile_FileType;
}
export enum ConfigFile_FileType {
  /** FILE_TYPE_UNSPECIFIED - Unknown file type. */
  FILE_TYPE_UNSPECIFIED = 0,

  /** SERVICE_CONFIG_YAML - YAML-specification of service. */
  SERVICE_CONFIG_YAML = 1,

  /** OPEN_API_JSON - OpenAPI specification, serialized in JSON. */
  OPEN_API_JSON = 2,

  /** OPEN_API_YAML - OpenAPI specification, serialized in YAML. */
  OPEN_API_YAML = 3,

  /**
   * FILE_DESCRIPTOR_SET_PROTO - FileDescriptorSet, generated by protoc.
   *
   * To generate, use protoc with imports and source info included.
   * For an example test.proto file, the following command would put the value
   * in a new file named out.pb.
   *
   * $protoc --include_imports --include_source_info test.proto -o out.pb
   */
  FILE_DESCRIPTOR_SET_PROTO = 4,

  /**
   * PROTO_FILE - Uncompiled Proto file. Used for storage and display purposes only,
   * currently server-side compilation is not supported. Should match the
   * inputs to 'protoc' command used to generated FILE_DESCRIPTOR_SET_PROTO. A
   * file of this type can only be included if at least one file of type
   * FILE_DESCRIPTOR_SET_PROTO is included.
   */
  PROTO_FILE = 6,
  UNRECOGNIZED = -1,
}
export function configFile_FileTypeFromJSON(object: any): ConfigFile_FileType {
  switch (object) {
    case 0:
    case "FILE_TYPE_UNSPECIFIED":
      return ConfigFile_FileType.FILE_TYPE_UNSPECIFIED;

    case 1:
    case "SERVICE_CONFIG_YAML":
      return ConfigFile_FileType.SERVICE_CONFIG_YAML;

    case 2:
    case "OPEN_API_JSON":
      return ConfigFile_FileType.OPEN_API_JSON;

    case 3:
    case "OPEN_API_YAML":
      return ConfigFile_FileType.OPEN_API_YAML;

    case 4:
    case "FILE_DESCRIPTOR_SET_PROTO":
      return ConfigFile_FileType.FILE_DESCRIPTOR_SET_PROTO;

    case 6:
    case "PROTO_FILE":
      return ConfigFile_FileType.PROTO_FILE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ConfigFile_FileType.UNRECOGNIZED;
  }
}
export function configFile_FileTypeToJSON(object: ConfigFile_FileType): string {
  switch (object) {
    case ConfigFile_FileType.FILE_TYPE_UNSPECIFIED:
      return "FILE_TYPE_UNSPECIFIED";

    case ConfigFile_FileType.SERVICE_CONFIG_YAML:
      return "SERVICE_CONFIG_YAML";

    case ConfigFile_FileType.OPEN_API_JSON:
      return "OPEN_API_JSON";

    case ConfigFile_FileType.OPEN_API_YAML:
      return "OPEN_API_YAML";

    case ConfigFile_FileType.FILE_DESCRIPTOR_SET_PROTO:
      return "FILE_DESCRIPTOR_SET_PROTO";

    case ConfigFile_FileType.PROTO_FILE:
      return "PROTO_FILE";

    default:
      return "UNKNOWN";
  }
}
/** Represents a service configuration with its name and id. */

export interface ConfigRef {
  /**
   * Resource name of a service config. It must have the following
   * format: "services/{service name}/configs/{config id}".
   */
  name: string;
}
/**
 * Change report associated with a particular service configuration.
 *
 * It contains a list of ConfigChanges based on the comparison between
 * two service configurations.
 */

export interface ChangeReport {
  /**
   * List of changes between two service configurations.
   * The changes will be alphabetically sorted based on the identifier
   * of each change.
   * A ConfigChange identifier is a dot separated path to the configuration.
   * Example: visibility.rules[selector='LibraryService.CreateBook'].restriction
   */
  configChanges: ConfigChange[];
}
/**
 * A rollout resource that defines how service configuration versions are pushed
 * to control plane systems. Typically, you create a new version of the
 * service config, and then create a Rollout to push the service config.
 */

export interface Rollout {
  /**
   * Optional. Unique identifier of this Rollout. Must be no longer than 63 characters
   * and only lower case letters, digits, '.', '_' and '-' are allowed.
   *
   * If not specified by client, the server will generate one. The generated id
   * will have the form of <date><revision number>, where "date" is the create
   * date in ISO 8601 format.  "revision number" is a monotonically increasing
   * positive number that is reset every day for each service.
   * An example of the generated rollout_id is '2016-02-16r1'
   */
  rolloutId: string;
  /** Creation time of the rollout. Readonly. */

  createTime: Date;
  /** The user who created the Rollout. Readonly. */

  createdBy: string;
  /**
   * The status of this rollout. Readonly. In case of a failed rollout,
   * the system will automatically rollback to the current Rollout
   * version. Readonly.
   */

  status: Rollout_RolloutStatus;
  /**
   * Google Service Control selects service configurations based on
   * traffic percentage.
   */

  trafficPercentStrategy: Rollout_TrafficPercentStrategy | undefined;
  /**
   * The strategy associated with a rollout to delete a `ManagedService`.
   * Readonly.
   */

  deleteServiceStrategy: Rollout_DeleteServiceStrategy | undefined;
  /** The name of the service associated with this Rollout. */

  serviceName: string;
}
/** Status of a Rollout. */

export enum Rollout_RolloutStatus {
  /** ROLLOUT_STATUS_UNSPECIFIED - No status specified. */
  ROLLOUT_STATUS_UNSPECIFIED = 0,

  /** IN_PROGRESS - The Rollout is in progress. */
  IN_PROGRESS = 1,

  /** SUCCESS - The Rollout has completed successfully. */
  SUCCESS = 2,

  /**
   * CANCELLED - The Rollout has been cancelled. This can happen if you have overlapping
   * Rollout pushes, and the previous ones will be cancelled.
   */
  CANCELLED = 3,

  /** FAILED - The Rollout has failed and the rollback attempt has failed too. */
  FAILED = 4,

  /** PENDING - The Rollout has not started yet and is pending for execution. */
  PENDING = 5,

  /**
   * FAILED_ROLLED_BACK - The Rollout has failed and rolled back to the previous successful
   * Rollout.
   */
  FAILED_ROLLED_BACK = 6,
  UNRECOGNIZED = -1,
}
export function rollout_RolloutStatusFromJSON(object: any): Rollout_RolloutStatus {
  switch (object) {
    case 0:
    case "ROLLOUT_STATUS_UNSPECIFIED":
      return Rollout_RolloutStatus.ROLLOUT_STATUS_UNSPECIFIED;

    case 1:
    case "IN_PROGRESS":
      return Rollout_RolloutStatus.IN_PROGRESS;

    case 2:
    case "SUCCESS":
      return Rollout_RolloutStatus.SUCCESS;

    case 3:
    case "CANCELLED":
      return Rollout_RolloutStatus.CANCELLED;

    case 4:
    case "FAILED":
      return Rollout_RolloutStatus.FAILED;

    case 5:
    case "PENDING":
      return Rollout_RolloutStatus.PENDING;

    case 6:
    case "FAILED_ROLLED_BACK":
      return Rollout_RolloutStatus.FAILED_ROLLED_BACK;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Rollout_RolloutStatus.UNRECOGNIZED;
  }
}
export function rollout_RolloutStatusToJSON(object: Rollout_RolloutStatus): string {
  switch (object) {
    case Rollout_RolloutStatus.ROLLOUT_STATUS_UNSPECIFIED:
      return "ROLLOUT_STATUS_UNSPECIFIED";

    case Rollout_RolloutStatus.IN_PROGRESS:
      return "IN_PROGRESS";

    case Rollout_RolloutStatus.SUCCESS:
      return "SUCCESS";

    case Rollout_RolloutStatus.CANCELLED:
      return "CANCELLED";

    case Rollout_RolloutStatus.FAILED:
      return "FAILED";

    case Rollout_RolloutStatus.PENDING:
      return "PENDING";

    case Rollout_RolloutStatus.FAILED_ROLLED_BACK:
      return "FAILED_ROLLED_BACK";

    default:
      return "UNKNOWN";
  }
}
/**
 * Strategy that specifies how clients of Google Service Controller want to
 * send traffic to use different config versions. This is generally
 * used by API proxy to split traffic based on your configured percentage for
 * each config version.
 *
 * One example of how to gradually rollout a new service configuration using
 * this
 * strategy:
 * Day 1
 *
 *     Rollout {
 *       id: "example.googleapis.com/rollout_20160206"
 *       traffic_percent_strategy {
 *         percentages: {
 *           "example.googleapis.com/20160201": 70.00
 *           "example.googleapis.com/20160206": 30.00
 *         }
 *       }
 *     }
 *
 * Day 2
 *
 *     Rollout {
 *       id: "example.googleapis.com/rollout_20160207"
 *       traffic_percent_strategy: {
 *         percentages: {
 *           "example.googleapis.com/20160206": 100.00
 *         }
 *       }
 *     }
 */

export interface Rollout_TrafficPercentStrategy {
  /**
   * Maps service configuration IDs to their corresponding traffic percentage.
   * Key is the service configuration ID, Value is the traffic percentage
   * which must be greater than 0.0 and the sum must equal to 100.0.
   */
  percentages: {
    [key: string]: number;
  };
}
export interface Rollout_TrafficPercentStrategy_PercentagesEntry {
  key: string;
  value: number;
}
/**
 * Strategy used to delete a service. This strategy is a placeholder only
 * used by the system generated rollout to delete a service.
 */

export interface Rollout_DeleteServiceStrategy {}

function createBaseManagedService(): ManagedService {
  return {
    serviceName: "",
    producerProjectId: ""
  };
}

export const ManagedService = {
  encode(message: ManagedService, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(18).string(message.serviceName);
    }

    if (message.producerProjectId !== "") {
      writer.uint32(26).string(message.producerProjectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ManagedService {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseManagedService();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.serviceName = reader.string();
          break;

        case 3:
          message.producerProjectId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ManagedService {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      producerProjectId: isSet(object.producerProjectId) ? String(object.producerProjectId) : ""
    };
  },

  toJSON(message: ManagedService): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.producerProjectId !== undefined && (obj.producerProjectId = message.producerProjectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ManagedService>, I>>(object: I): ManagedService {
    const message = createBaseManagedService();
    message.serviceName = object.serviceName ?? "";
    message.producerProjectId = object.producerProjectId ?? "";
    return message;
  }

};

function createBaseOperationMetadata(): OperationMetadata {
  return {
    resourceNames: [],
    steps: [],
    progressPercentage: 0,
    startTime: undefined
  };
}

export const OperationMetadata = {
  encode(message: OperationMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resourceNames) {
      writer.uint32(10).string(v!);
    }

    for (const v of message.steps) {
      OperationMetadata_Step.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.progressPercentage !== 0) {
      writer.uint32(24).int32(message.progressPercentage);
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.resourceNames.push(reader.string());
          break;

        case 2:
          message.steps.push(OperationMetadata_Step.decode(reader, reader.uint32()));
          break;

        case 3:
          message.progressPercentage = reader.int32();
          break;

        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OperationMetadata {
    return {
      resourceNames: Array.isArray(object?.resourceNames) ? object.resourceNames.map((e: any) => String(e)) : [],
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => OperationMetadata_Step.fromJSON(e)) : [],
      progressPercentage: isSet(object.progressPercentage) ? Number(object.progressPercentage) : 0,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined
    };
  },

  toJSON(message: OperationMetadata): unknown {
    const obj: any = {};

    if (message.resourceNames) {
      obj.resourceNames = message.resourceNames.map(e => e);
    } else {
      obj.resourceNames = [];
    }

    if (message.steps) {
      obj.steps = message.steps.map(e => e ? OperationMetadata_Step.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }

    message.progressPercentage !== undefined && (obj.progressPercentage = Math.round(message.progressPercentage));
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OperationMetadata>, I>>(object: I): OperationMetadata {
    const message = createBaseOperationMetadata();
    message.resourceNames = object.resourceNames?.map(e => e) || [];
    message.steps = object.steps?.map(e => OperationMetadata_Step.fromPartial(e)) || [];
    message.progressPercentage = object.progressPercentage ?? 0;
    message.startTime = object.startTime ?? undefined;
    return message;
  }

};

function createBaseOperationMetadata_Step(): OperationMetadata_Step {
  return {
    description: "",
    status: 0
  };
}

export const OperationMetadata_Step = {
  encode(message: OperationMetadata_Step, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationMetadata_Step {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationMetadata_Step();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.description = reader.string();
          break;

        case 4:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OperationMetadata_Step {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      status: isSet(object.status) ? operationMetadata_StatusFromJSON(object.status) : 0
    };
  },

  toJSON(message: OperationMetadata_Step): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.status !== undefined && (obj.status = operationMetadata_StatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OperationMetadata_Step>, I>>(object: I): OperationMetadata_Step {
    const message = createBaseOperationMetadata_Step();
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    return message;
  }

};

function createBaseDiagnostic(): Diagnostic {
  return {
    location: "",
    kind: 0,
    message: ""
  };
}

export const Diagnostic = {
  encode(message: Diagnostic, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== "") {
      writer.uint32(10).string(message.location);
    }

    if (message.kind !== 0) {
      writer.uint32(16).int32(message.kind);
    }

    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Diagnostic {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiagnostic();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.location = reader.string();
          break;

        case 2:
          message.kind = (reader.int32() as any);
          break;

        case 3:
          message.message = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Diagnostic {
    return {
      location: isSet(object.location) ? String(object.location) : "",
      kind: isSet(object.kind) ? diagnostic_KindFromJSON(object.kind) : 0,
      message: isSet(object.message) ? String(object.message) : ""
    };
  },

  toJSON(message: Diagnostic): unknown {
    const obj: any = {};
    message.location !== undefined && (obj.location = message.location);
    message.kind !== undefined && (obj.kind = diagnostic_KindToJSON(message.kind));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Diagnostic>, I>>(object: I): Diagnostic {
    const message = createBaseDiagnostic();
    message.location = object.location ?? "";
    message.kind = object.kind ?? 0;
    message.message = object.message ?? "";
    return message;
  }

};

function createBaseConfigSource(): ConfigSource {
  return {
    id: "",
    files: []
  };
}

export const ConfigSource = {
  encode(message: ConfigSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(42).string(message.id);
    }

    for (const v of message.files) {
      ConfigFile.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigSource();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 5:
          message.id = reader.string();
          break;

        case 2:
          message.files.push(ConfigFile.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConfigSource {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      files: Array.isArray(object?.files) ? object.files.map((e: any) => ConfigFile.fromJSON(e)) : []
    };
  },

  toJSON(message: ConfigSource): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);

    if (message.files) {
      obj.files = message.files.map(e => e ? ConfigFile.toJSON(e) : undefined);
    } else {
      obj.files = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigSource>, I>>(object: I): ConfigSource {
    const message = createBaseConfigSource();
    message.id = object.id ?? "";
    message.files = object.files?.map(e => ConfigFile.fromPartial(e)) || [];
    return message;
  }

};

function createBaseConfigFile(): ConfigFile {
  return {
    filePath: "",
    fileContents: new Uint8Array(),
    fileType: 0
  };
}

export const ConfigFile = {
  encode(message: ConfigFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filePath !== "") {
      writer.uint32(10).string(message.filePath);
    }

    if (message.fileContents.length !== 0) {
      writer.uint32(26).bytes(message.fileContents);
    }

    if (message.fileType !== 0) {
      writer.uint32(32).int32(message.fileType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigFile();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.filePath = reader.string();
          break;

        case 3:
          message.fileContents = reader.bytes();
          break;

        case 4:
          message.fileType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConfigFile {
    return {
      filePath: isSet(object.filePath) ? String(object.filePath) : "",
      fileContents: isSet(object.fileContents) ? bytesFromBase64(object.fileContents) : new Uint8Array(),
      fileType: isSet(object.fileType) ? configFile_FileTypeFromJSON(object.fileType) : 0
    };
  },

  toJSON(message: ConfigFile): unknown {
    const obj: any = {};
    message.filePath !== undefined && (obj.filePath = message.filePath);
    message.fileContents !== undefined && (obj.fileContents = base64FromBytes(message.fileContents !== undefined ? message.fileContents : new Uint8Array()));
    message.fileType !== undefined && (obj.fileType = configFile_FileTypeToJSON(message.fileType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigFile>, I>>(object: I): ConfigFile {
    const message = createBaseConfigFile();
    message.filePath = object.filePath ?? "";
    message.fileContents = object.fileContents ?? new Uint8Array();
    message.fileType = object.fileType ?? 0;
    return message;
  }

};

function createBaseConfigRef(): ConfigRef {
  return {
    name: ""
  };
}

export const ConfigRef = {
  encode(message: ConfigRef, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRef {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRef();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConfigRef {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: ConfigRef): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigRef>, I>>(object: I): ConfigRef {
    const message = createBaseConfigRef();
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseChangeReport(): ChangeReport {
  return {
    configChanges: []
  };
}

export const ChangeReport = {
  encode(message: ChangeReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.configChanges) {
      ConfigChange.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeReport();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.configChanges.push(ConfigChange.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChangeReport {
    return {
      configChanges: Array.isArray(object?.configChanges) ? object.configChanges.map((e: any) => ConfigChange.fromJSON(e)) : []
    };
  },

  toJSON(message: ChangeReport): unknown {
    const obj: any = {};

    if (message.configChanges) {
      obj.configChanges = message.configChanges.map(e => e ? ConfigChange.toJSON(e) : undefined);
    } else {
      obj.configChanges = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChangeReport>, I>>(object: I): ChangeReport {
    const message = createBaseChangeReport();
    message.configChanges = object.configChanges?.map(e => ConfigChange.fromPartial(e)) || [];
    return message;
  }

};

function createBaseRollout(): Rollout {
  return {
    rolloutId: "",
    createTime: undefined,
    createdBy: "",
    status: 0,
    trafficPercentStrategy: undefined,
    deleteServiceStrategy: undefined,
    serviceName: ""
  };
}

export const Rollout = {
  encode(message: Rollout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rolloutId !== "") {
      writer.uint32(10).string(message.rolloutId);
    }

    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(18).fork()).ldelim();
    }

    if (message.createdBy !== "") {
      writer.uint32(26).string(message.createdBy);
    }

    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }

    if (message.trafficPercentStrategy !== undefined) {
      Rollout_TrafficPercentStrategy.encode(message.trafficPercentStrategy, writer.uint32(42).fork()).ldelim();
    }

    if (message.deleteServiceStrategy !== undefined) {
      Rollout_DeleteServiceStrategy.encode(message.deleteServiceStrategy, writer.uint32(1602).fork()).ldelim();
    }

    if (message.serviceName !== "") {
      writer.uint32(66).string(message.serviceName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rollout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRollout();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rolloutId = reader.string();
          break;

        case 2:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.createdBy = reader.string();
          break;

        case 4:
          message.status = (reader.int32() as any);
          break;

        case 5:
          message.trafficPercentStrategy = Rollout_TrafficPercentStrategy.decode(reader, reader.uint32());
          break;

        case 200:
          message.deleteServiceStrategy = Rollout_DeleteServiceStrategy.decode(reader, reader.uint32());
          break;

        case 8:
          message.serviceName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Rollout {
    return {
      rolloutId: isSet(object.rolloutId) ? String(object.rolloutId) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      createdBy: isSet(object.createdBy) ? String(object.createdBy) : "",
      status: isSet(object.status) ? rollout_RolloutStatusFromJSON(object.status) : 0,
      trafficPercentStrategy: isSet(object.trafficPercentStrategy) ? Rollout_TrafficPercentStrategy.fromJSON(object.trafficPercentStrategy) : undefined,
      deleteServiceStrategy: isSet(object.deleteServiceStrategy) ? Rollout_DeleteServiceStrategy.fromJSON(object.deleteServiceStrategy) : undefined,
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : ""
    };
  },

  toJSON(message: Rollout): unknown {
    const obj: any = {};
    message.rolloutId !== undefined && (obj.rolloutId = message.rolloutId);
    message.createTime !== undefined && (obj.createTime = message.createTime.toISOString());
    message.createdBy !== undefined && (obj.createdBy = message.createdBy);
    message.status !== undefined && (obj.status = rollout_RolloutStatusToJSON(message.status));
    message.trafficPercentStrategy !== undefined && (obj.trafficPercentStrategy = message.trafficPercentStrategy ? Rollout_TrafficPercentStrategy.toJSON(message.trafficPercentStrategy) : undefined);
    message.deleteServiceStrategy !== undefined && (obj.deleteServiceStrategy = message.deleteServiceStrategy ? Rollout_DeleteServiceStrategy.toJSON(message.deleteServiceStrategy) : undefined);
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Rollout>, I>>(object: I): Rollout {
    const message = createBaseRollout();
    message.rolloutId = object.rolloutId ?? "";
    message.createTime = object.createTime ?? undefined;
    message.createdBy = object.createdBy ?? "";
    message.status = object.status ?? 0;
    message.trafficPercentStrategy = object.trafficPercentStrategy !== undefined && object.trafficPercentStrategy !== null ? Rollout_TrafficPercentStrategy.fromPartial(object.trafficPercentStrategy) : undefined;
    message.deleteServiceStrategy = object.deleteServiceStrategy !== undefined && object.deleteServiceStrategy !== null ? Rollout_DeleteServiceStrategy.fromPartial(object.deleteServiceStrategy) : undefined;
    message.serviceName = object.serviceName ?? "";
    return message;
  }

};

function createBaseRollout_TrafficPercentStrategy(): Rollout_TrafficPercentStrategy {
  return {
    percentages: {}
  };
}

export const Rollout_TrafficPercentStrategy = {
  encode(message: Rollout_TrafficPercentStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.percentages).forEach(([key, value]) => {
      Rollout_TrafficPercentStrategy_PercentagesEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rollout_TrafficPercentStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRollout_TrafficPercentStrategy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          const entry1 = Rollout_TrafficPercentStrategy_PercentagesEntry.decode(reader, reader.uint32());

          if (entry1.value !== undefined) {
            message.percentages[entry1.key] = entry1.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Rollout_TrafficPercentStrategy {
    return {
      percentages: isObject(object.percentages) ? Object.entries(object.percentages).reduce<{
        [key: string]: number;
      }>((acc, [key, value]) => {
        acc[key] = Number(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: Rollout_TrafficPercentStrategy): unknown {
    const obj: any = {};
    obj.percentages = {};

    if (message.percentages) {
      Object.entries(message.percentages).forEach(([k, v]) => {
        obj.percentages[k] = v;
      });
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Rollout_TrafficPercentStrategy>, I>>(object: I): Rollout_TrafficPercentStrategy {
    const message = createBaseRollout_TrafficPercentStrategy();
    message.percentages = Object.entries(object.percentages ?? {}).reduce<{
      [key: string]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Number(value);
      }

      return acc;
    }, {});
    return message;
  }

};

function createBaseRollout_TrafficPercentStrategy_PercentagesEntry(): Rollout_TrafficPercentStrategy_PercentagesEntry {
  return {
    key: "",
    value: 0
  };
}

export const Rollout_TrafficPercentStrategy_PercentagesEntry = {
  encode(message: Rollout_TrafficPercentStrategy_PercentagesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rollout_TrafficPercentStrategy_PercentagesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRollout_TrafficPercentStrategy_PercentagesEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.double();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Rollout_TrafficPercentStrategy_PercentagesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },

  toJSON(message: Rollout_TrafficPercentStrategy_PercentagesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Rollout_TrafficPercentStrategy_PercentagesEntry>, I>>(object: I): Rollout_TrafficPercentStrategy_PercentagesEntry {
    const message = createBaseRollout_TrafficPercentStrategy_PercentagesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  }

};

function createBaseRollout_DeleteServiceStrategy(): Rollout_DeleteServiceStrategy {
  return {};
}

export const Rollout_DeleteServiceStrategy = {
  encode(_: Rollout_DeleteServiceStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rollout_DeleteServiceStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRollout_DeleteServiceStrategy();

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

  fromJSON(_: any): Rollout_DeleteServiceStrategy {
    return {};
  },

  toJSON(_: Rollout_DeleteServiceStrategy): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Rollout_DeleteServiceStrategy>, I>>(_: I): Rollout_DeleteServiceStrategy {
    const message = createBaseRollout_DeleteServiceStrategy();
    return message;
  }

};
declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;

var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string = globalThis.atob || (b64 => globalThis.Buffer.from(b64, "base64").toString("binary"));

function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);

  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }

  return arr;
}

const btoa: (bin: string) => string = globalThis.btoa || (bin => globalThis.Buffer.from(bin, "binary").toString("base64"));

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach(byte => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> } : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = date.getTime() % 1_000 * 1_000_000;
  return {
    seconds,
    nanos
  };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = (Long as any);

  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}