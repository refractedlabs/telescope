import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, isObject } from "../../../../helpers";
export const protobufPackage = "google.api.expr.v1beta1";
export interface SourceInfo_PositionsEntry {
  key: number;
  value: number;
}
export interface SourceInfo_PositionsEntrySDKType {
  key: number;
  value: number;
}

/** Source information collected at parse time. */
export interface SourceInfo {
  /**
   * The location name. All position information attached to an expression is
   * relative to this location.
   * 
   * The location could be a file, UI element, or similar. For example,
   * `acme/app/AnvilPolicy.cel`.
   */
  location: string;

  /**
   * Monotonically increasing list of character offsets where newlines appear.
   * 
   * The line number of a given position is the index `i` where for a given
   * `id` the `line_offsets[i] < id_positions[id] < line_offsets[i+1]`. The
   * column may be derivd from `id_positions[id] - line_offsets[i]`.
   */
  lineOffsets: number[];

  /**
   * A map from the parse node id (e.g. `Expr.id`) to the character offset
   * within source.
   */
  positions: {
    [key: number]: number;
  };
}

/** Source information collected at parse time. */
export interface SourceInfoSDKType {
  /**
   * The location name. All position information attached to an expression is
   * relative to this location.
   * 
   * The location could be a file, UI element, or similar. For example,
   * `acme/app/AnvilPolicy.cel`.
   */
  location: string;

  /**
   * Monotonically increasing list of character offsets where newlines appear.
   * 
   * The line number of a given position is the index `i` where for a given
   * `id` the `line_offsets[i] < id_positions[id] < line_offsets[i+1]`. The
   * column may be derivd from `id_positions[id] - line_offsets[i]`.
   */
  line_offsets: number[];

  /**
   * A map from the parse node id (e.g. `Expr.id`) to the character offset
   * within source.
   */
  positions: {
    [key: number]: number;
  };
}

/** A specific position in source. */
export interface SourcePosition {
  /** The soucre location name (e.g. file name). */
  location: string;

  /** The character offset. */
  offset: number;

  /**
   * The 1-based index of the starting line in the source text
   * where the issue occurs, or 0 if unknown.
   */
  line: number;

  /**
   * The 0-based index of the starting position within the line of source text
   * where the issue occurs.  Only meaningful if line is nonzer..
   */
  column: number;
}

/** A specific position in source. */
export interface SourcePositionSDKType {
  /** The soucre location name (e.g. file name). */
  location: string;

  /** The character offset. */
  offset: number;

  /**
   * The 1-based index of the starting line in the source text
   * where the issue occurs, or 0 if unknown.
   */
  line: number;

  /**
   * The 0-based index of the starting position within the line of source text
   * where the issue occurs.  Only meaningful if line is nonzer..
   */
  column: number;
}

function createBaseSourceInfo_PositionsEntry(): SourceInfo_PositionsEntry {
  return {
    key: 0,
    value: 0
  };
}

export const SourceInfo_PositionsEntry = {
  encode(message: SourceInfo_PositionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }

    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo_PositionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo_PositionsEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;

        case 2:
          message.value = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SourceInfo_PositionsEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },

  toJSON(message: SourceInfo_PositionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  fromPartial(object: DeepPartial<SourceInfo_PositionsEntry>): SourceInfo_PositionsEntry {
    const message = createBaseSourceInfo_PositionsEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },

  fromSDK(object: SourceInfo_PositionsEntrySDKType): SourceInfo_PositionsEntry {
    return {
      key: isSet(object.key) ? object.key : undefined,
      value: isSet(object.value) ? object.value : undefined
    };
  },

  toSDK(message: SourceInfo_PositionsEntry): SourceInfo_PositionsEntrySDKType {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  }

};

function createBaseSourceInfo(): SourceInfo {
  return {
    location: "",
    lineOffsets: [],
    positions: {}
  };
}

export const SourceInfo = {
  encode(message: SourceInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== "") {
      writer.uint32(18).string(message.location);
    }

    writer.uint32(26).fork();

    for (const v of message.lineOffsets) {
      writer.int32(v);
    }

    writer.ldelim();
    Object.entries(message.positions).forEach(([key, value]) => {
      SourceInfo_PositionsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(32).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.location = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.lineOffsets.push(reader.int32());
            }
          } else {
            message.lineOffsets.push(reader.int32());
          }

          break;

        case 4:
          const entry4 = SourceInfo_PositionsEntry.decode(reader, reader.uint32());

          if (entry4.value !== undefined) {
            message.positions[entry4.key] = entry4.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SourceInfo {
    return {
      location: isSet(object.location) ? String(object.location) : "",
      lineOffsets: Array.isArray(object?.lineOffsets) ? object.lineOffsets.map((e: any) => Number(e)) : [],
      positions: isObject(object.positions) ? Object.entries(object.positions).reduce<{
        [key: number]: number;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Number(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: SourceInfo): unknown {
    const obj: any = {};
    message.location !== undefined && (obj.location = message.location);

    if (message.lineOffsets) {
      obj.lineOffsets = message.lineOffsets.map(e => Math.round(e));
    } else {
      obj.lineOffsets = [];
    }

    obj.positions = {};

    if (message.positions) {
      Object.entries(message.positions).forEach(([k, v]) => {
        obj.positions[k] = Math.round(v);
      });
    }

    return obj;
  },

  fromPartial(object: DeepPartial<SourceInfo>): SourceInfo {
    const message = createBaseSourceInfo();
    message.location = object.location ?? "";
    message.lineOffsets = object.lineOffsets?.map(e => e) || [];
    message.positions = Object.entries(object.positions ?? {}).reduce<{
      [key: number]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }

      return acc;
    }, {});
    return message;
  },

  fromSDK(object: SourceInfoSDKType): SourceInfo {
    return {
      location: isSet(object.location) ? object.location : undefined,
      lineOffsets: Array.isArray(object?.line_offsets) ? object.line_offsets.map((e: any) => e) : [],
      positions: isObject(object.positions) ? Object.entries(object.positions).reduce<{
        [key: number]: number;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Number(value);
        return acc;
      }, {}) : {}
    };
  },

  toSDK(message: SourceInfo): SourceInfoSDKType {
    const obj: any = {};
    message.location !== undefined && (obj.location = message.location);

    if (message.lineOffsets) {
      obj.line_offsets = message.lineOffsets.map(e => e);
    } else {
      obj.line_offsets = [];
    }

    obj.positions = {};

    if (message.positions) {
      Object.entries(message.positions).forEach(([k, v]) => {
        obj.positions[k] = Math.round(v);
      });
    }

    return obj;
  }

};

function createBaseSourcePosition(): SourcePosition {
  return {
    location: "",
    offset: 0,
    line: 0,
    column: 0
  };
}

export const SourcePosition = {
  encode(message: SourcePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== "") {
      writer.uint32(10).string(message.location);
    }

    if (message.offset !== 0) {
      writer.uint32(16).int32(message.offset);
    }

    if (message.line !== 0) {
      writer.uint32(24).int32(message.line);
    }

    if (message.column !== 0) {
      writer.uint32(32).int32(message.column);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourcePosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourcePosition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.location = reader.string();
          break;

        case 2:
          message.offset = reader.int32();
          break;

        case 3:
          message.line = reader.int32();
          break;

        case 4:
          message.column = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SourcePosition {
    return {
      location: isSet(object.location) ? String(object.location) : "",
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      line: isSet(object.line) ? Number(object.line) : 0,
      column: isSet(object.column) ? Number(object.column) : 0
    };
  },

  toJSON(message: SourcePosition): unknown {
    const obj: any = {};
    message.location !== undefined && (obj.location = message.location);
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.line !== undefined && (obj.line = Math.round(message.line));
    message.column !== undefined && (obj.column = Math.round(message.column));
    return obj;
  },

  fromPartial(object: DeepPartial<SourcePosition>): SourcePosition {
    const message = createBaseSourcePosition();
    message.location = object.location ?? "";
    message.offset = object.offset ?? 0;
    message.line = object.line ?? 0;
    message.column = object.column ?? 0;
    return message;
  },

  fromSDK(object: SourcePositionSDKType): SourcePosition {
    return {
      location: isSet(object.location) ? object.location : undefined,
      offset: isSet(object.offset) ? object.offset : undefined,
      line: isSet(object.line) ? object.line : undefined,
      column: isSet(object.column) ? object.column : undefined
    };
  },

  toSDK(message: SourcePosition): SourcePositionSDKType {
    const obj: any = {};
    message.location !== undefined && (obj.location = message.location);
    message.offset !== undefined && (obj.offset = message.offset);
    message.line !== undefined && (obj.line = message.line);
    message.column !== undefined && (obj.column = message.column);
    return obj;
  }

};