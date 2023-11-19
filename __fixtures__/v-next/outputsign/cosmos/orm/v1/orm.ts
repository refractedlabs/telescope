import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.orm.v1";
/** TableDescriptor describes an ORM table. */
export interface TableDescriptor {
  /** primary_key defines the primary key for the table. */
  primaryKey?: PrimaryKeyDescriptor;
  /** index defines one or more secondary indexes. */
  index: SecondaryIndexDescriptor[];
  /**
   * id is a non-zero integer ID that must be unique within the
   * tables and singletons in this file. It may be deprecated in the future when this
   * can be auto-generated.
   */
  id: number;
}
export interface TableDescriptorProtoMsg {
  typeUrl: "/cosmos.orm.v1.TableDescriptor";
  value: Uint8Array;
}
/** TableDescriptor describes an ORM table. */
export interface TableDescriptorAmino {
  /** primary_key defines the primary key for the table. */
  primary_key?: PrimaryKeyDescriptorAmino;
  /** index defines one or more secondary indexes. */
  index: SecondaryIndexDescriptorAmino[];
  /**
   * id is a non-zero integer ID that must be unique within the
   * tables and singletons in this file. It may be deprecated in the future when this
   * can be auto-generated.
   */
  id: number;
}
export interface TableDescriptorAminoMsg {
  type: "cosmos-sdk/TableDescriptor";
  value: TableDescriptorAmino;
}
/** TableDescriptor describes an ORM table. */
export interface TableDescriptorSDKType {
  primary_key?: PrimaryKeyDescriptorSDKType;
  index: SecondaryIndexDescriptorSDKType[];
  id: number;
}
/** PrimaryKeyDescriptor describes a table primary key. */
export interface PrimaryKeyDescriptor {
  /**
   * fields is a comma-separated list of fields in the primary key. Spaces are
   * not allowed. Supported field types, their encodings, and any applicable constraints
   * are described below.
   *   - uint32 are encoded as 2,3,4 or 5 bytes using a compact encoding that
   *     is suitable for sorted iteration (not varint encoding). This type is
   *     well-suited for small integers.
   *   - uint64 are encoded as 2,4,6 or 9 bytes using a compact encoding that
   *     is suitable for sorted iteration (not varint encoding). This type is
   *     well-suited for small integers such as auto-incrementing sequences.
   *   - fixed32, fixed64 are encoded as big-endian fixed width bytes and support
   *   sorted iteration. These types are well-suited for encoding fixed with
   *   decimals as integers.
   *   - string's are encoded as raw bytes in terminal key segments and null-terminated
   *   in non-terminal segments. Null characters are thus forbidden in strings.
   *   string fields support sorted iteration.
   *   - bytes are encoded as raw bytes in terminal segments and length-prefixed
   *   with a 32-bit unsigned varint in non-terminal segments.
   *   - int32, sint32, int64, sint64, sfixed32, sfixed64 are encoded as fixed width bytes with
   *   an encoding that enables sorted iteration.
   *   - google.protobuf.Timestamp and google.protobuf.Duration are encoded
   *   as 12 bytes using an encoding that enables sorted iteration.
   *   - enum fields are encoded using varint encoding and do not support sorted
   *   iteration.
   *   - bool fields are encoded as a single byte 0 or 1.
   * 
   * All other fields types are unsupported in keys including repeated and
   * oneof fields.
   * 
   * Primary keys are prefixed by the varint encoded table id and the byte 0x0
   * plus any additional prefix specified by the schema.
   */
  fields: string;
  /**
   * auto_increment specifies that the primary key is generated by an
   * auto-incrementing integer. If this is set to true fields must only
   * contain one field of that is of type uint64.
   */
  autoIncrement: boolean;
}
export interface PrimaryKeyDescriptorProtoMsg {
  typeUrl: "/cosmos.orm.v1.PrimaryKeyDescriptor";
  value: Uint8Array;
}
/** PrimaryKeyDescriptor describes a table primary key. */
export interface PrimaryKeyDescriptorAmino {
  /**
   * fields is a comma-separated list of fields in the primary key. Spaces are
   * not allowed. Supported field types, their encodings, and any applicable constraints
   * are described below.
   *   - uint32 are encoded as 2,3,4 or 5 bytes using a compact encoding that
   *     is suitable for sorted iteration (not varint encoding). This type is
   *     well-suited for small integers.
   *   - uint64 are encoded as 2,4,6 or 9 bytes using a compact encoding that
   *     is suitable for sorted iteration (not varint encoding). This type is
   *     well-suited for small integers such as auto-incrementing sequences.
   *   - fixed32, fixed64 are encoded as big-endian fixed width bytes and support
   *   sorted iteration. These types are well-suited for encoding fixed with
   *   decimals as integers.
   *   - string's are encoded as raw bytes in terminal key segments and null-terminated
   *   in non-terminal segments. Null characters are thus forbidden in strings.
   *   string fields support sorted iteration.
   *   - bytes are encoded as raw bytes in terminal segments and length-prefixed
   *   with a 32-bit unsigned varint in non-terminal segments.
   *   - int32, sint32, int64, sint64, sfixed32, sfixed64 are encoded as fixed width bytes with
   *   an encoding that enables sorted iteration.
   *   - google.protobuf.Timestamp and google.protobuf.Duration are encoded
   *   as 12 bytes using an encoding that enables sorted iteration.
   *   - enum fields are encoded using varint encoding and do not support sorted
   *   iteration.
   *   - bool fields are encoded as a single byte 0 or 1.
   * 
   * All other fields types are unsupported in keys including repeated and
   * oneof fields.
   * 
   * Primary keys are prefixed by the varint encoded table id and the byte 0x0
   * plus any additional prefix specified by the schema.
   */
  fields: string;
  /**
   * auto_increment specifies that the primary key is generated by an
   * auto-incrementing integer. If this is set to true fields must only
   * contain one field of that is of type uint64.
   */
  auto_increment: boolean;
}
export interface PrimaryKeyDescriptorAminoMsg {
  type: "cosmos-sdk/PrimaryKeyDescriptor";
  value: PrimaryKeyDescriptorAmino;
}
/** PrimaryKeyDescriptor describes a table primary key. */
export interface PrimaryKeyDescriptorSDKType {
  fields: string;
  auto_increment: boolean;
}
/** PrimaryKeyDescriptor describes a table secondary index. */
export interface SecondaryIndexDescriptor {
  /**
   * fields is a comma-separated list of fields in the index. The supported
   * field types are the same as those for PrimaryKeyDescriptor.fields.
   * Index keys are prefixed by the varint encoded table id and the varint
   * encoded index id plus any additional prefix specified by the schema.
   * 
   * In addition the field segments, non-unique index keys are suffixed with
   * any additional primary key fields not present in the index fields so that the
   * primary key can be reconstructed. Unique indexes instead of being suffixed
   * store the remaining primary key fields in the value..
   */
  fields: string;
  /**
   * id is a non-zero integer ID that must be unique within the indexes for this
   * table and less than 32768. It may be deprecated in the future when this can
   * be auto-generated.
   */
  id: number;
  /** unique specifies that this an unique index. */
  unique: boolean;
}
export interface SecondaryIndexDescriptorProtoMsg {
  typeUrl: "/cosmos.orm.v1.SecondaryIndexDescriptor";
  value: Uint8Array;
}
/** PrimaryKeyDescriptor describes a table secondary index. */
export interface SecondaryIndexDescriptorAmino {
  /**
   * fields is a comma-separated list of fields in the index. The supported
   * field types are the same as those for PrimaryKeyDescriptor.fields.
   * Index keys are prefixed by the varint encoded table id and the varint
   * encoded index id plus any additional prefix specified by the schema.
   * 
   * In addition the field segments, non-unique index keys are suffixed with
   * any additional primary key fields not present in the index fields so that the
   * primary key can be reconstructed. Unique indexes instead of being suffixed
   * store the remaining primary key fields in the value..
   */
  fields: string;
  /**
   * id is a non-zero integer ID that must be unique within the indexes for this
   * table and less than 32768. It may be deprecated in the future when this can
   * be auto-generated.
   */
  id: number;
  /** unique specifies that this an unique index. */
  unique: boolean;
}
export interface SecondaryIndexDescriptorAminoMsg {
  type: "cosmos-sdk/SecondaryIndexDescriptor";
  value: SecondaryIndexDescriptorAmino;
}
/** PrimaryKeyDescriptor describes a table secondary index. */
export interface SecondaryIndexDescriptorSDKType {
  fields: string;
  id: number;
  unique: boolean;
}
/** TableDescriptor describes an ORM singleton table which has at most one instance. */
export interface SingletonDescriptor {
  /**
   * id is a non-zero integer ID that must be unique within the
   * tables and singletons in this file. It may be deprecated in the future when this
   * can be auto-generated.
   */
  id: number;
}
export interface SingletonDescriptorProtoMsg {
  typeUrl: "/cosmos.orm.v1.SingletonDescriptor";
  value: Uint8Array;
}
/** TableDescriptor describes an ORM singleton table which has at most one instance. */
export interface SingletonDescriptorAmino {
  /**
   * id is a non-zero integer ID that must be unique within the
   * tables and singletons in this file. It may be deprecated in the future when this
   * can be auto-generated.
   */
  id: number;
}
export interface SingletonDescriptorAminoMsg {
  type: "cosmos-sdk/SingletonDescriptor";
  value: SingletonDescriptorAmino;
}
/** TableDescriptor describes an ORM singleton table which has at most one instance. */
export interface SingletonDescriptorSDKType {
  id: number;
}
function createBaseTableDescriptor(): TableDescriptor {
  return {
    primaryKey: undefined,
    index: [],
    id: 0
  };
}
export const TableDescriptor = {
  typeUrl: "/cosmos.orm.v1.TableDescriptor",
  encode(message: TableDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.primaryKey !== undefined) {
      PrimaryKeyDescriptor.encode(message.primaryKey, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.index) {
      SecondaryIndexDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== 0) {
      writer.uint32(24).uint32(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TableDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.primaryKey = PrimaryKeyDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.index.push(SecondaryIndexDescriptor.decode(reader, reader.uint32()));
          break;
        case 3:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TableDescriptor>): TableDescriptor {
    const message = createBaseTableDescriptor();
    if (object.primaryKey !== undefined && object.primaryKey !== null) {
      message.primaryKey = PrimaryKeyDescriptor.fromPartial(object.primaryKey);
    }
    message.index = object.index?.map(e => SecondaryIndexDescriptor.fromPartial(e)) || [];
    message.id = object.id ?? 0;
    return message;
  },
  fromAmino(object: TableDescriptorAmino): TableDescriptor {
    return {
      primaryKey: object?.primary_key ? PrimaryKeyDescriptor.fromAmino(object.primary_key) : undefined,
      index: Array.isArray(object?.index) ? object.index.map((e: any) => SecondaryIndexDescriptor.fromAmino(e)) : [],
      id: object.id
    };
  },
  toAmino(message: TableDescriptor): TableDescriptorAmino {
    const obj: any = {};
    obj.primary_key = message.primaryKey ? PrimaryKeyDescriptor.toAmino(message.primaryKey) : undefined;
    if (message.index) {
      obj.index = message.index.map(e => e ? SecondaryIndexDescriptor.toAmino(e) : undefined);
    } else {
      obj.index = [];
    }
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: TableDescriptorAminoMsg): TableDescriptor {
    return TableDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: TableDescriptor): TableDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/TableDescriptor",
      value: TableDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: TableDescriptorProtoMsg): TableDescriptor {
    return TableDescriptor.decode(message.value);
  },
  toProto(message: TableDescriptor): Uint8Array {
    return TableDescriptor.encode(message).finish();
  },
  toProtoMsg(message: TableDescriptor): TableDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.orm.v1.TableDescriptor",
      value: TableDescriptor.encode(message).finish()
    };
  }
};
function createBasePrimaryKeyDescriptor(): PrimaryKeyDescriptor {
  return {
    fields: "",
    autoIncrement: false
  };
}
export const PrimaryKeyDescriptor = {
  typeUrl: "/cosmos.orm.v1.PrimaryKeyDescriptor",
  encode(message: PrimaryKeyDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }
    if (message.autoIncrement === true) {
      writer.uint32(16).bool(message.autoIncrement);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrimaryKeyDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrimaryKeyDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields = reader.string();
          break;
        case 2:
          message.autoIncrement = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PrimaryKeyDescriptor>): PrimaryKeyDescriptor {
    const message = createBasePrimaryKeyDescriptor();
    message.fields = object.fields ?? "";
    message.autoIncrement = object.autoIncrement ?? false;
    return message;
  },
  fromAmino(object: PrimaryKeyDescriptorAmino): PrimaryKeyDescriptor {
    return {
      fields: object.fields,
      autoIncrement: object.auto_increment
    };
  },
  toAmino(message: PrimaryKeyDescriptor): PrimaryKeyDescriptorAmino {
    const obj: any = {};
    obj.fields = message.fields;
    obj.auto_increment = message.autoIncrement;
    return obj;
  },
  fromAminoMsg(object: PrimaryKeyDescriptorAminoMsg): PrimaryKeyDescriptor {
    return PrimaryKeyDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: PrimaryKeyDescriptor): PrimaryKeyDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/PrimaryKeyDescriptor",
      value: PrimaryKeyDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: PrimaryKeyDescriptorProtoMsg): PrimaryKeyDescriptor {
    return PrimaryKeyDescriptor.decode(message.value);
  },
  toProto(message: PrimaryKeyDescriptor): Uint8Array {
    return PrimaryKeyDescriptor.encode(message).finish();
  },
  toProtoMsg(message: PrimaryKeyDescriptor): PrimaryKeyDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.orm.v1.PrimaryKeyDescriptor",
      value: PrimaryKeyDescriptor.encode(message).finish()
    };
  }
};
function createBaseSecondaryIndexDescriptor(): SecondaryIndexDescriptor {
  return {
    fields: "",
    id: 0,
    unique: false
  };
}
export const SecondaryIndexDescriptor = {
  typeUrl: "/cosmos.orm.v1.SecondaryIndexDescriptor",
  encode(message: SecondaryIndexDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    if (message.unique === true) {
      writer.uint32(24).bool(message.unique);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SecondaryIndexDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecondaryIndexDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields = reader.string();
          break;
        case 2:
          message.id = reader.uint32();
          break;
        case 3:
          message.unique = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SecondaryIndexDescriptor>): SecondaryIndexDescriptor {
    const message = createBaseSecondaryIndexDescriptor();
    message.fields = object.fields ?? "";
    message.id = object.id ?? 0;
    message.unique = object.unique ?? false;
    return message;
  },
  fromAmino(object: SecondaryIndexDescriptorAmino): SecondaryIndexDescriptor {
    return {
      fields: object.fields,
      id: object.id,
      unique: object.unique
    };
  },
  toAmino(message: SecondaryIndexDescriptor): SecondaryIndexDescriptorAmino {
    const obj: any = {};
    obj.fields = message.fields;
    obj.id = message.id;
    obj.unique = message.unique;
    return obj;
  },
  fromAminoMsg(object: SecondaryIndexDescriptorAminoMsg): SecondaryIndexDescriptor {
    return SecondaryIndexDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: SecondaryIndexDescriptor): SecondaryIndexDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/SecondaryIndexDescriptor",
      value: SecondaryIndexDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: SecondaryIndexDescriptorProtoMsg): SecondaryIndexDescriptor {
    return SecondaryIndexDescriptor.decode(message.value);
  },
  toProto(message: SecondaryIndexDescriptor): Uint8Array {
    return SecondaryIndexDescriptor.encode(message).finish();
  },
  toProtoMsg(message: SecondaryIndexDescriptor): SecondaryIndexDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.orm.v1.SecondaryIndexDescriptor",
      value: SecondaryIndexDescriptor.encode(message).finish()
    };
  }
};
function createBaseSingletonDescriptor(): SingletonDescriptor {
  return {
    id: 0
  };
}
export const SingletonDescriptor = {
  typeUrl: "/cosmos.orm.v1.SingletonDescriptor",
  encode(message: SingletonDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SingletonDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingletonDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SingletonDescriptor>): SingletonDescriptor {
    const message = createBaseSingletonDescriptor();
    message.id = object.id ?? 0;
    return message;
  },
  fromAmino(object: SingletonDescriptorAmino): SingletonDescriptor {
    return {
      id: object.id
    };
  },
  toAmino(message: SingletonDescriptor): SingletonDescriptorAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: SingletonDescriptorAminoMsg): SingletonDescriptor {
    return SingletonDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: SingletonDescriptor): SingletonDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/SingletonDescriptor",
      value: SingletonDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: SingletonDescriptorProtoMsg): SingletonDescriptor {
    return SingletonDescriptor.decode(message.value);
  },
  toProto(message: SingletonDescriptor): Uint8Array {
    return SingletonDescriptor.encode(message).finish();
  },
  toProtoMsg(message: SingletonDescriptor): SingletonDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.orm.v1.SingletonDescriptor",
      value: SingletonDescriptor.encode(message).finish()
    };
  }
};