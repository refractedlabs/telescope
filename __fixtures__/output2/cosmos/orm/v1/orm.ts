//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
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
/** TableDescriptor describes an ORM singleton table which has at most one instance. */
export interface SingletonDescriptor {
  /**
   * id is a non-zero integer ID that must be unique within the
   * tables and singletons in this file. It may be deprecated in the future when this
   * can be auto-generated.
   */
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
  encode(message: TableDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): TableDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): TableDescriptor {
    return {
      primaryKey: isSet(object.primaryKey) ? PrimaryKeyDescriptor.fromJSON(object.primaryKey) : undefined,
      index: Array.isArray(object?.index) ? object.index.map((e: any) => SecondaryIndexDescriptor.fromJSON(e)) : [],
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },
  toJSON(message: TableDescriptor): unknown {
    const obj: any = {};
    message.primaryKey !== undefined && (obj.primaryKey = message.primaryKey ? PrimaryKeyDescriptor.toJSON(message.primaryKey) : undefined);
    if (message.index) {
      obj.index = message.index.map(e => e ? SecondaryIndexDescriptor.toJSON(e) : undefined);
    } else {
      obj.index = [];
    }
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },
  fromPartial(object: DeepPartial<TableDescriptor>): TableDescriptor {
    const message = createBaseTableDescriptor();
    message.primaryKey = object.primaryKey !== undefined && object.primaryKey !== null ? PrimaryKeyDescriptor.fromPartial(object.primaryKey) : undefined;
    message.index = object.index?.map(e => SecondaryIndexDescriptor.fromPartial(e)) || [];
    message.id = object.id ?? 0;
    return message;
  }
};
function createBasePrimaryKeyDescriptor(): PrimaryKeyDescriptor {
  return {
    fields: "",
    autoIncrement: false
  };
}
export const PrimaryKeyDescriptor = {
  encode(message: PrimaryKeyDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }
    if (message.autoIncrement === true) {
      writer.uint32(16).bool(message.autoIncrement);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PrimaryKeyDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): PrimaryKeyDescriptor {
    return {
      fields: isSet(object.fields) ? String(object.fields) : "",
      autoIncrement: isSet(object.autoIncrement) ? Boolean(object.autoIncrement) : false
    };
  },
  toJSON(message: PrimaryKeyDescriptor): unknown {
    const obj: any = {};
    message.fields !== undefined && (obj.fields = message.fields);
    message.autoIncrement !== undefined && (obj.autoIncrement = message.autoIncrement);
    return obj;
  },
  fromPartial(object: DeepPartial<PrimaryKeyDescriptor>): PrimaryKeyDescriptor {
    const message = createBasePrimaryKeyDescriptor();
    message.fields = object.fields ?? "";
    message.autoIncrement = object.autoIncrement ?? false;
    return message;
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
  encode(message: SecondaryIndexDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): SecondaryIndexDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): SecondaryIndexDescriptor {
    return {
      fields: isSet(object.fields) ? String(object.fields) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      unique: isSet(object.unique) ? Boolean(object.unique) : false
    };
  },
  toJSON(message: SecondaryIndexDescriptor): unknown {
    const obj: any = {};
    message.fields !== undefined && (obj.fields = message.fields);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.unique !== undefined && (obj.unique = message.unique);
    return obj;
  },
  fromPartial(object: DeepPartial<SecondaryIndexDescriptor>): SecondaryIndexDescriptor {
    const message = createBaseSecondaryIndexDescriptor();
    message.fields = object.fields ?? "";
    message.id = object.id ?? 0;
    message.unique = object.unique ?? false;
    return message;
  }
};
function createBaseSingletonDescriptor(): SingletonDescriptor {
  return {
    id: 0
  };
}
export const SingletonDescriptor = {
  encode(message: SingletonDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SingletonDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): SingletonDescriptor {
    return {
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },
  toJSON(message: SingletonDescriptor): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },
  fromPartial(object: DeepPartial<SingletonDescriptor>): SingletonDescriptor {
    const message = createBaseSingletonDescriptor();
    message.id = object.id ?? 0;
    return message;
  }
};