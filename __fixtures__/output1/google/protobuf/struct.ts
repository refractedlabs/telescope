import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, isObject } from "@osmonauts/helpers";
export interface Struct_FieldsEntry {
  key: string;
  value: Value;
}

function createBaseStruct_FieldsEntry(): Struct_FieldsEntry {
  return {
    key: "",
    value: undefined
  };
}

export const Struct_FieldsEntry = {
  encode(message: Struct_FieldsEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Struct_FieldsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct_FieldsEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = Value.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Struct_FieldsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: Struct_FieldsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Struct_FieldsEntry>, I>>(object: I): Struct_FieldsEntry {
    const message = createBaseStruct_FieldsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Value.fromPartial(object.value) : undefined;
    return message;
  }

};
export interface Struct {
  fields: {
    [key: string]: Value;
  };
}

function createBaseStruct(): Struct {
  return {
    fields: {}
  };
}

export const Struct = {
  encode(message: Struct, writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.fields).forEach(([key, value]) => {
      Struct_FieldsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Struct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          const entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());

          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Struct {
    return {
      fields: isObject(object.fields) ? Object.entries(object.fields).reduce<{
        [key: string]: Value;
      }>((acc, [key, value]) => {
        acc[key] = Value.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: Struct): unknown {
    const obj: any = {};
    obj.fields = {};

    if (message.fields) {
      Object.entries(message.fields).forEach(([k, v]) => {
        obj.fields[k] = Value.toJSON(v);
      });
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Struct>, I>>(object: I): Struct {
    const message = createBaseStruct();
    message.fields = Object.entries(object.fields ?? {}).reduce<{
      [key: string]: Value;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Value.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  }

};
export interface Value {
  nullValue?: NullValue;
  numberValue?: number;
  stringValue?: string;
  boolValue?: boolean;
  structValue?: Struct;
  listValue?: ListValue;
}

function createBaseValue(): Value {
  return {
    nullValue: undefined,
    numberValue: 0,
    stringValue: "",
    boolValue: false,
    structValue: undefined,
    listValue: undefined
  };
}

export const Value = {
  encode(message: Value, writer = _m0.Writer.create()): _m0.Writer {
    if (message.nullValue !== 0) {
      writer.uint32(8).int32(message.nullValue);
    }

    if (message.numberValue !== 0) {
      writer.uint32(17).double(message.numberValue);
    }

    if (message.stringValue !== "") {
      writer.uint32(26).string(message.stringValue);
    }

    if (message.boolValue === true) {
      writer.uint32(32).bool(message.boolValue);
    }

    if (message.structValue !== undefined) {
      Struct.encode(message.structValue, writer.uint32(42).fork()).ldelim();
    }

    if (message.listValue !== undefined) {
      ListValue.encode(message.listValue, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nullValue = (reader.int32() as any);
          break;

        case 2:
          message.numberValue = reader.double();
          break;

        case 3:
          message.stringValue = reader.string();
          break;

        case 4:
          message.boolValue = reader.bool();
          break;

        case 5:
          message.structValue = Struct.decode(reader, reader.uint32());
          break;

        case 6:
          message.listValue = ListValue.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Value {
    return {
      nullValue: isSet(object.nullValue) ? nullValueFromJSON(object.nullValue) : 0,
      numberValue: isSet(object.numberValue) ? Number(object.numberValue) : 0,
      stringValue: isSet(object.stringValue) ? String(object.stringValue) : "",
      boolValue: isSet(object.boolValue) ? Boolean(object.boolValue) : false,
      structValue: isSet(object.structValue) ? Struct.fromJSON(object.structValue) : undefined,
      listValue: isSet(object.listValue) ? ListValue.fromJSON(object.listValue) : undefined
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    message.nullValue !== undefined && (obj.nullValue = nullValueToJSON(message.nullValue));
    message.numberValue !== undefined && (obj.numberValue = message.numberValue);
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.structValue !== undefined && (obj.structValue = message.structValue ? Struct.toJSON(message.structValue) : undefined);
    message.listValue !== undefined && (obj.listValue = message.listValue ? ListValue.toJSON(message.listValue) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Value>, I>>(object: I): Value {
    const message = createBaseValue();
    message.nullValue = object.nullValue ?? 0;
    message.numberValue = object.numberValue ?? 0;
    message.stringValue = object.stringValue ?? "";
    message.boolValue = object.boolValue ?? false;
    message.structValue = object.structValue !== undefined && object.structValue !== null ? Struct.fromPartial(object.structValue) : undefined;
    message.listValue = object.listValue !== undefined && object.listValue !== null ? ListValue.fromPartial(object.listValue) : undefined;
    return message;
  }

};
export enum NullValue {
  /*Null value.*/
  NULL_VALUE = 0,
  UNRECOGNIZED = -1,
}
export function nullValueFromJSON(object: any): NullValue {
  switch (object) {
    case "NULL_VALUE":
      return NullValue.NULL_VALUE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return NullValue.UNRECOGNIZED;
  }
}
export function nullValueToJSON(object: NullValue): string {
  switch (object) {
    case NullValue.NULL_VALUE:
      return "NULL_VALUE";

    default:
      return "UNKNOWN";
  }
}
export interface ListValue {
  values: Value[];
}

function createBaseListValue(): ListValue {
  return {
    values: []
  };
}

export const ListValue = {
  encode(message: ListValue, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      Value.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.values.push(Value.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListValue {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => Value.fromJSON(e)) : []
    };
  },

  toJSON(message: ListValue): unknown {
    const obj: any = {};

    if (message.values) {
      obj.values = message.values.map(e => e ? Value.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListValue>, I>>(object: I): ListValue {
    const message = createBaseListValue();
    message.values = object.values?.map(e => Value.fromPartial(e)) || [];
    return message;
  }

};