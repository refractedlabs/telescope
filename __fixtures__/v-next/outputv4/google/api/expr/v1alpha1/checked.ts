import { SourceInfo, SourceInfoSDKType, Expr, ExprSDKType, Constant, ConstantSDKType } from "./syntax";
import { Empty, EmptySDKType } from "../../../protobuf/empty";
import { NullValue, NullValueSDKType, nullValueFromJSON, nullValueToJSON } from "../../../protobuf/struct";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, isObject } from "../../../../helpers";
export const protobufPackage = "google.api.expr.v1alpha1";
/** CEL primitive types. */
export enum Type_PrimitiveType {
  /** PRIMITIVE_TYPE_UNSPECIFIED - Unspecified type. */
  PRIMITIVE_TYPE_UNSPECIFIED = 0,
  /** BOOL - Boolean type. */
  BOOL = 1,
  /**
   * INT64 - Int64 type.
   * 
   * Proto-based integer values are widened to int64.
   */
  INT64 = 2,
  /**
   * UINT64 - Uint64 type.
   * 
   * Proto-based unsigned integer values are widened to uint64.
   */
  UINT64 = 3,
  /**
   * DOUBLE - Double type.
   * 
   * Proto-based float values are widened to double values.
   */
  DOUBLE = 4,
  /** STRING - String type. */
  STRING = 5,
  /** BYTES - Bytes type. */
  BYTES = 6,
  UNRECOGNIZED = -1,
}
export const Type_PrimitiveTypeSDKType = Type_PrimitiveType;
export function type_PrimitiveTypeFromJSON(object: any): Type_PrimitiveType {
  switch (object) {
    case 0:
    case "PRIMITIVE_TYPE_UNSPECIFIED":
      return Type_PrimitiveType.PRIMITIVE_TYPE_UNSPECIFIED;
    case 1:
    case "BOOL":
      return Type_PrimitiveType.BOOL;
    case 2:
    case "INT64":
      return Type_PrimitiveType.INT64;
    case 3:
    case "UINT64":
      return Type_PrimitiveType.UINT64;
    case 4:
    case "DOUBLE":
      return Type_PrimitiveType.DOUBLE;
    case 5:
    case "STRING":
      return Type_PrimitiveType.STRING;
    case 6:
    case "BYTES":
      return Type_PrimitiveType.BYTES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Type_PrimitiveType.UNRECOGNIZED;
  }
}
export function type_PrimitiveTypeToJSON(object: Type_PrimitiveType): string {
  switch (object) {
    case Type_PrimitiveType.PRIMITIVE_TYPE_UNSPECIFIED:
      return "PRIMITIVE_TYPE_UNSPECIFIED";
    case Type_PrimitiveType.BOOL:
      return "BOOL";
    case Type_PrimitiveType.INT64:
      return "INT64";
    case Type_PrimitiveType.UINT64:
      return "UINT64";
    case Type_PrimitiveType.DOUBLE:
      return "DOUBLE";
    case Type_PrimitiveType.STRING:
      return "STRING";
    case Type_PrimitiveType.BYTES:
      return "BYTES";
    case Type_PrimitiveType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Well-known protobuf types treated with first-class support in CEL. */
export enum Type_WellKnownType {
  /** WELL_KNOWN_TYPE_UNSPECIFIED - Unspecified type. */
  WELL_KNOWN_TYPE_UNSPECIFIED = 0,
  /**
   * ANY - Well-known protobuf.Any type.
   * 
   * Any types are a polymorphic message type. During type-checking they are
   * treated like `DYN` types, but at runtime they are resolved to a specific
   * message type specified at evaluation time.
   */
  ANY = 1,
  /** TIMESTAMP - Well-known protobuf.Timestamp type, internally referenced as `timestamp`. */
  TIMESTAMP = 2,
  /** DURATION - Well-known protobuf.Duration type, internally referenced as `duration`. */
  DURATION = 3,
  UNRECOGNIZED = -1,
}
export const Type_WellKnownTypeSDKType = Type_WellKnownType;
export function type_WellKnownTypeFromJSON(object: any): Type_WellKnownType {
  switch (object) {
    case 0:
    case "WELL_KNOWN_TYPE_UNSPECIFIED":
      return Type_WellKnownType.WELL_KNOWN_TYPE_UNSPECIFIED;
    case 1:
    case "ANY":
      return Type_WellKnownType.ANY;
    case 2:
    case "TIMESTAMP":
      return Type_WellKnownType.TIMESTAMP;
    case 3:
    case "DURATION":
      return Type_WellKnownType.DURATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Type_WellKnownType.UNRECOGNIZED;
  }
}
export function type_WellKnownTypeToJSON(object: Type_WellKnownType): string {
  switch (object) {
    case Type_WellKnownType.WELL_KNOWN_TYPE_UNSPECIFIED:
      return "WELL_KNOWN_TYPE_UNSPECIFIED";
    case Type_WellKnownType.ANY:
      return "ANY";
    case Type_WellKnownType.TIMESTAMP:
      return "TIMESTAMP";
    case Type_WellKnownType.DURATION:
      return "DURATION";
    case Type_WellKnownType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface CheckedExpr_ReferenceMapEntry {
  key: bigint;
  value: Reference;
}
export interface CheckedExpr_ReferenceMapEntrySDKType {
  key: bigint;
  value: ReferenceSDKType;
}
export interface CheckedExpr_TypeMapEntry {
  key: bigint;
  value: Type;
}
export interface CheckedExpr_TypeMapEntrySDKType {
  key: bigint;
  value: TypeSDKType;
}
/** A CEL expression which has been successfully type checked. */
export interface CheckedExpr {
  /**
   * A map from expression ids to resolved references.
   * 
   * The following entries are in this table:
   * 
   * - An Ident or Select expression is represented here if it resolves to a
   *   declaration. For instance, if `a.b.c` is represented by
   *   `select(select(id(a), b), c)`, and `a.b` resolves to a declaration,
   *   while `c` is a field selection, then the reference is attached to the
   *   nested select expression (but not to the id or or the outer select).
   *   In turn, if `a` resolves to a declaration and `b.c` are field selections,
   *   the reference is attached to the ident expression.
   * - Every Call expression has an entry here, identifying the function being
   *   called.
   * - Every CreateStruct expression for a message has an entry, identifying
   *   the message.
   */
  referenceMap: {
    [key: bigint]: Reference;
  };
  /**
   * A map from expression ids to types.
   * 
   * Every expression node which has a type different than DYN has a mapping
   * here. If an expression has type DYN, it is omitted from this map to save
   * space.
   */
  typeMap: {
    [key: bigint]: Type;
  };
  /**
   * The source info derived from input that generated the parsed `expr` and
   * any optimizations made during the type-checking pass.
   */
  sourceInfo: SourceInfo;
  /**
   * The expr version indicates the major / minor version number of the `expr`
   * representation.
   * 
   * The most common reason for a version change will be to indicate to the CEL
   * runtimes that transformations have been performed on the expr during static
   * analysis. In some cases, this will save the runtime the work of applying
   * the same or similar transformations prior to evaluation.
   */
  exprVersion: string;
  /**
   * The checked expression. Semantically equivalent to the parsed `expr`, but
   * may have structural differences.
   */
  expr: Expr;
}
/** A CEL expression which has been successfully type checked. */
export interface CheckedExprSDKType {
  reference_map: {
    [key: bigint]: ReferenceSDKType;
  };
  type_map: {
    [key: bigint]: TypeSDKType;
  };
  source_info: SourceInfoSDKType;
  expr_version: string;
  expr: ExprSDKType;
}
/** Represents a CEL type. */
export interface Type {
  /** Dynamic type. */
  dyn?: Empty;
  /** Null value. */
  null?: NullValue;
  /** Primitive types: `true`, `1u`, `-2.0`, `'string'`, `b'bytes'`. */
  primitive?: Type_PrimitiveType;
  /** Wrapper of a primitive type, e.g. `google.protobuf.Int64Value`. */
  wrapper?: Type_PrimitiveType;
  /** Well-known protobuf type such as `google.protobuf.Timestamp`. */
  wellKnown?: Type_WellKnownType;
  /** Parameterized list with elements of `list_type`, e.g. `list<timestamp>`. */
  listType?: Type_ListType;
  /** Parameterized map with typed keys and values. */
  mapType?: Type_MapType;
  /** Function type. */
  function?: Type_FunctionType;
  /**
   * Protocol buffer message type.
   * 
   * The `message_type` string specifies the qualified message type name. For
   * example, `google.plus.Profile`.
   */
  messageType?: string;
  /**
   * Type param type.
   * 
   * The `type_param` string specifies the type parameter name, e.g. `list<E>`
   * would be a `list_type` whose element type was a `type_param` type
   * named `E`.
   */
  typeParam?: string;
  /**
   * Type type.
   * 
   * The `type` value specifies the target type. e.g. int is type with a
   * target type of `Primitive.INT`.
   */
  type?: Type;
  /**
   * Error type.
   * 
   * During type-checking if an expression is an error, its type is propagated
   * as the `ERROR` type. This permits the type-checker to discover other
   * errors present in the expression.
   */
  error?: Empty;
  /** Abstract, application defined type. */
  abstractType?: Type_AbstractType;
}
/** Represents a CEL type. */
export interface TypeSDKType {
  dyn?: EmptySDKType;
  null?: NullValue;
  primitive?: Type_PrimitiveType;
  wrapper?: Type_PrimitiveType;
  well_known?: Type_WellKnownType;
  list_type?: Type_ListTypeSDKType;
  map_type?: Type_MapTypeSDKType;
  function?: Type_FunctionTypeSDKType;
  message_type?: string;
  type_param?: string;
  type?: TypeSDKType;
  error?: EmptySDKType;
  abstract_type?: Type_AbstractTypeSDKType;
}
/** List type with typed elements, e.g. `list<example.proto.MyMessage>`. */
export interface Type_ListType {
  /** The element type. */
  elemType: Type;
}
/** List type with typed elements, e.g. `list<example.proto.MyMessage>`. */
export interface Type_ListTypeSDKType {
  elem_type: TypeSDKType;
}
/** Map type with parameterized key and value types, e.g. `map<string, int>`. */
export interface Type_MapType {
  /** The type of the key. */
  keyType: Type;
  /** The type of the value. */
  valueType: Type;
}
/** Map type with parameterized key and value types, e.g. `map<string, int>`. */
export interface Type_MapTypeSDKType {
  key_type: TypeSDKType;
  value_type: TypeSDKType;
}
/** Function type with result and arg types. */
export interface Type_FunctionType {
  /** Result type of the function. */
  resultType: Type;
  /** Argument types of the function. */
  argTypes: Type[];
}
/** Function type with result and arg types. */
export interface Type_FunctionTypeSDKType {
  result_type: TypeSDKType;
  arg_types: TypeSDKType[];
}
/** Application defined abstract type. */
export interface Type_AbstractType {
  /** The fully qualified name of this abstract type. */
  name: string;
  /** Parameter types for this abstract type. */
  parameterTypes: Type[];
}
/** Application defined abstract type. */
export interface Type_AbstractTypeSDKType {
  name: string;
  parameter_types: TypeSDKType[];
}
/**
 * Represents a declaration of a named value or function.
 * 
 * A declaration is part of the contract between the expression, the agent
 * evaluating that expression, and the caller requesting evaluation.
 */
export interface Decl {
  /**
   * The fully qualified name of the declaration.
   * 
   * Declarations are organized in containers and this represents the full path
   * to the declaration in its container, as in `google.api.expr.Decl`.
   * 
   * Declarations used as [FunctionDecl.Overload][google.api.expr.v1alpha1.Decl.FunctionDecl.Overload] parameters may or may not
   * have a name depending on whether the overload is function declaration or a
   * function definition containing a result [Expr][google.api.expr.v1alpha1.Expr].
   */
  name: string;
  /** Identifier declaration. */
  ident?: Decl_IdentDecl;
  /** Function declaration. */
  function?: Decl_FunctionDecl;
}
/**
 * Represents a declaration of a named value or function.
 * 
 * A declaration is part of the contract between the expression, the agent
 * evaluating that expression, and the caller requesting evaluation.
 */
export interface DeclSDKType {
  name: string;
  ident?: Decl_IdentDeclSDKType;
  function?: Decl_FunctionDeclSDKType;
}
/**
 * Identifier declaration which specifies its type and optional `Expr` value.
 * 
 * An identifier without a value is a declaration that must be provided at
 * evaluation time. An identifier with a value should resolve to a constant,
 * but may be used in conjunction with other identifiers bound at evaluation
 * time.
 */
export interface Decl_IdentDecl {
  /** Required. The type of the identifier. */
  type: Type;
  /**
   * The constant value of the identifier. If not specified, the identifier
   * must be supplied at evaluation time.
   */
  value: Constant;
  /** Documentation string for the identifier. */
  doc: string;
}
/**
 * Identifier declaration which specifies its type and optional `Expr` value.
 * 
 * An identifier without a value is a declaration that must be provided at
 * evaluation time. An identifier with a value should resolve to a constant,
 * but may be used in conjunction with other identifiers bound at evaluation
 * time.
 */
export interface Decl_IdentDeclSDKType {
  type: TypeSDKType;
  value: ConstantSDKType;
  doc: string;
}
/**
 * Function declaration specifies one or more overloads which indicate the
 * function's parameter types and return type.
 * 
 * Functions have no observable side-effects (there may be side-effects like
 * logging which are not observable from CEL).
 */
export interface Decl_FunctionDecl {
  /** Required. List of function overloads, must contain at least one overload. */
  overloads: Decl_FunctionDecl_Overload[];
}
/**
 * Function declaration specifies one or more overloads which indicate the
 * function's parameter types and return type.
 * 
 * Functions have no observable side-effects (there may be side-effects like
 * logging which are not observable from CEL).
 */
export interface Decl_FunctionDeclSDKType {
  overloads: Decl_FunctionDecl_OverloadSDKType[];
}
/**
 * An overload indicates a function's parameter types and return type, and
 * may optionally include a function body described in terms of [Expr][google.api.expr.v1alpha1.Expr]
 * values.
 * 
 * Functions overloads are declared in either a function or method
 * call-style. For methods, the `params[0]` is the expected type of the
 * target receiver.
 * 
 * Overloads must have non-overlapping argument types after erasure of all
 * parameterized type variables (similar as type erasure in Java).
 */
export interface Decl_FunctionDecl_Overload {
  /**
   * Required. Globally unique overload name of the function which reflects
   * the function name and argument types.
   * 
   * This will be used by a [Reference][google.api.expr.v1alpha1.Reference] to indicate the `overload_id` that
   * was resolved for the function `name`.
   */
  overloadId: string;
  /**
   * List of function parameter [Type][google.api.expr.v1alpha1.Type] values.
   * 
   * Param types are disjoint after generic type parameters have been
   * replaced with the type `DYN`. Since the `DYN` type is compatible with
   * any other type, this means that if `A` is a type parameter, the
   * function types `int<A>` and `int<int>` are not disjoint. Likewise,
   * `map<string, string>` is not disjoint from `map<K, V>`.
   * 
   * When the `result_type` of a function is a generic type param, the
   * type param name also appears as the `type` of on at least one params.
   */
  params: Type[];
  /**
   * The type param names associated with the function declaration.
   * 
   * For example, `function ex<K,V>(K key, map<K, V> map) : V` would yield
   * the type params of `K, V`.
   */
  typeParams: string[];
  /**
   * Required. The result type of the function. For example, the operator
   * `string.isEmpty()` would have `result_type` of `kind: BOOL`.
   */
  resultType: Type;
  /**
   * Whether the function is to be used in a method call-style `x.f(...)`
   * of a function call-style `f(x, ...)`.
   * 
   * For methods, the first parameter declaration, `params[0]` is the
   * expected type of the target receiver.
   */
  isInstanceFunction: boolean;
  /** Documentation string for the overload. */
  doc: string;
}
/**
 * An overload indicates a function's parameter types and return type, and
 * may optionally include a function body described in terms of [Expr][google.api.expr.v1alpha1.Expr]
 * values.
 * 
 * Functions overloads are declared in either a function or method
 * call-style. For methods, the `params[0]` is the expected type of the
 * target receiver.
 * 
 * Overloads must have non-overlapping argument types after erasure of all
 * parameterized type variables (similar as type erasure in Java).
 */
export interface Decl_FunctionDecl_OverloadSDKType {
  overload_id: string;
  params: TypeSDKType[];
  type_params: string[];
  result_type: TypeSDKType;
  is_instance_function: boolean;
  doc: string;
}
/** Describes a resolved reference to a declaration. */
export interface Reference {
  /** The fully qualified name of the declaration. */
  name: string;
  /**
   * For references to functions, this is a list of `Overload.overload_id`
   * values which match according to typing rules.
   * 
   * If the list has more than one element, overload resolution among the
   * presented candidates must happen at runtime because of dynamic types. The
   * type checker attempts to narrow down this list as much as possible.
   * 
   * Empty if this is not a reference to a [Decl.FunctionDecl][google.api.expr.v1alpha1.Decl.FunctionDecl].
   */
  overloadId: string[];
  /**
   * For references to constants, this may contain the value of the
   * constant if known at compile time.
   */
  value: Constant;
}
/** Describes a resolved reference to a declaration. */
export interface ReferenceSDKType {
  name: string;
  overload_id: string[];
  value: ConstantSDKType;
}
function createBaseCheckedExpr_ReferenceMapEntry(): CheckedExpr_ReferenceMapEntry {
  return {
    key: BigInt(0),
    value: Reference.fromPartial({})
  };
}
export const CheckedExpr_ReferenceMapEntry = {
  encode(message: CheckedExpr_ReferenceMapEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== BigInt(0)) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Reference.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CheckedExpr_ReferenceMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckedExpr_ReferenceMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int64();
          break;
        case 2:
          message.value = Reference.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CheckedExpr_ReferenceMapEntry {
    const obj = createBaseCheckedExpr_ReferenceMapEntry();
    if (isSet(object.key)) obj.key = BigInt(object.key.toString());
    if (isSet(object.value)) obj.value = Reference.fromJSON(object.value);
    return obj;
  },
  toJSON(message: CheckedExpr_ReferenceMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || BigInt(0)).toString());
    message.value !== undefined && (obj.value = message.value ? Reference.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CheckedExpr_ReferenceMapEntry>): CheckedExpr_ReferenceMapEntry {
    const message = createBaseCheckedExpr_ReferenceMapEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = BigInt(object.key.toString());
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Reference.fromPartial(object.value);
    }
    return message;
  },
  fromSDK(object: CheckedExpr_ReferenceMapEntrySDKType): CheckedExpr_ReferenceMapEntry {
    return {
      key: object?.key,
      value: object.value ? Reference.fromSDK(object.value) : undefined
    };
  },
  fromSDKJSON(object: any): CheckedExpr_ReferenceMapEntrySDKType {
    return {
      key: isSet(object.key) ? BigInt(object.key.toString()) : BigInt(0),
      value: isSet(object.value) ? Reference.fromSDKJSON(object.value) : undefined
    };
  },
  toSDK(message: CheckedExpr_ReferenceMapEntry): CheckedExpr_ReferenceMapEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    message.value !== undefined && (obj.value = message.value ? Reference.toSDK(message.value) : undefined);
    return obj;
  }
};
function createBaseCheckedExpr_TypeMapEntry(): CheckedExpr_TypeMapEntry {
  return {
    key: BigInt(0),
    value: Type.fromPartial({})
  };
}
export const CheckedExpr_TypeMapEntry = {
  encode(message: CheckedExpr_TypeMapEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== BigInt(0)) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Type.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CheckedExpr_TypeMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckedExpr_TypeMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int64();
          break;
        case 2:
          message.value = Type.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CheckedExpr_TypeMapEntry {
    const obj = createBaseCheckedExpr_TypeMapEntry();
    if (isSet(object.key)) obj.key = BigInt(object.key.toString());
    if (isSet(object.value)) obj.value = Type.fromJSON(object.value);
    return obj;
  },
  toJSON(message: CheckedExpr_TypeMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || BigInt(0)).toString());
    message.value !== undefined && (obj.value = message.value ? Type.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CheckedExpr_TypeMapEntry>): CheckedExpr_TypeMapEntry {
    const message = createBaseCheckedExpr_TypeMapEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = BigInt(object.key.toString());
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Type.fromPartial(object.value);
    }
    return message;
  },
  fromSDK(object: CheckedExpr_TypeMapEntrySDKType): CheckedExpr_TypeMapEntry {
    return {
      key: object?.key,
      value: object.value ? Type.fromSDK(object.value) : undefined
    };
  },
  fromSDKJSON(object: any): CheckedExpr_TypeMapEntrySDKType {
    return {
      key: isSet(object.key) ? BigInt(object.key.toString()) : BigInt(0),
      value: isSet(object.value) ? Type.fromSDKJSON(object.value) : undefined
    };
  },
  toSDK(message: CheckedExpr_TypeMapEntry): CheckedExpr_TypeMapEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    message.value !== undefined && (obj.value = message.value ? Type.toSDK(message.value) : undefined);
    return obj;
  }
};
function createBaseCheckedExpr(): CheckedExpr {
  return {
    referenceMap: {},
    typeMap: {},
    sourceInfo: SourceInfo.fromPartial({}),
    exprVersion: "",
    expr: Expr.fromPartial({})
  };
}
export const CheckedExpr = {
  encode(message: CheckedExpr, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.referenceMap).forEach(([key, value]) => {
      CheckedExpr_ReferenceMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    Object.entries(message.typeMap).forEach(([key, value]) => {
      CheckedExpr_TypeMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(42).fork()).ldelim();
    }
    if (message.exprVersion !== "") {
      writer.uint32(50).string(message.exprVersion);
    }
    if (message.expr !== undefined) {
      Expr.encode(message.expr, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CheckedExpr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckedExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          const entry2 = CheckedExpr_ReferenceMapEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.referenceMap[entry2.key] = entry2.value;
          }
          break;
        case 3:
          const entry3 = CheckedExpr_TypeMapEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.typeMap[entry3.key] = entry3.value;
          }
          break;
        case 5:
          message.sourceInfo = SourceInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.exprVersion = reader.string();
          break;
        case 4:
          message.expr = Expr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CheckedExpr {
    const obj = createBaseCheckedExpr();
    if (isObject(object.referenceMap)) obj.referenceMap = Object.entries(object.referenceMap).reduce<{
      [key: bigint]: Reference;
    }>((acc, [key, value]) => {
      acc[Number(key)] = Reference.fromJSON(value);
      return acc;
    }, {});
    if (isObject(object.typeMap)) obj.typeMap = Object.entries(object.typeMap).reduce<{
      [key: bigint]: Type;
    }>((acc, [key, value]) => {
      acc[Number(key)] = Type.fromJSON(value);
      return acc;
    }, {});
    if (isSet(object.sourceInfo)) obj.sourceInfo = SourceInfo.fromJSON(object.sourceInfo);
    if (isSet(object.exprVersion)) obj.exprVersion = String(object.exprVersion);
    if (isSet(object.expr)) obj.expr = Expr.fromJSON(object.expr);
    return obj;
  },
  toJSON(message: CheckedExpr): unknown {
    const obj: any = {};
    obj.referenceMap = {};
    if (message.referenceMap) {
      Object.entries(message.referenceMap).forEach(([k, v]) => {
        obj.referenceMap[k] = Reference.toJSON(v);
      });
    }
    obj.typeMap = {};
    if (message.typeMap) {
      Object.entries(message.typeMap).forEach(([k, v]) => {
        obj.typeMap[k] = Type.toJSON(v);
      });
    }
    message.sourceInfo !== undefined && (obj.sourceInfo = message.sourceInfo ? SourceInfo.toJSON(message.sourceInfo) : undefined);
    message.exprVersion !== undefined && (obj.exprVersion = message.exprVersion);
    message.expr !== undefined && (obj.expr = message.expr ? Expr.toJSON(message.expr) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CheckedExpr>): CheckedExpr {
    const message = createBaseCheckedExpr();
    message.referenceMap = Object.entries(object.referenceMap ?? {}).reduce<{
      [key: bigint]: Reference;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Reference.fromPartial(value);
      }
      return acc;
    }, {});
    message.typeMap = Object.entries(object.typeMap ?? {}).reduce<{
      [key: bigint]: Type;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Type.fromPartial(value);
      }
      return acc;
    }, {});
    if (object.sourceInfo !== undefined && object.sourceInfo !== null) {
      message.sourceInfo = SourceInfo.fromPartial(object.sourceInfo);
    }
    message.exprVersion = object.exprVersion ?? "";
    if (object.expr !== undefined && object.expr !== null) {
      message.expr = Expr.fromPartial(object.expr);
    }
    return message;
  },
  fromSDK(object: CheckedExprSDKType): CheckedExpr {
    return {
      referenceMap: isObject(object.reference_map) ? Object.entries(object.reference_map).reduce<{
        [key: bigint]: Reference;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Reference.fromSDK(value);
        return acc;
      }, {}) : {},
      typeMap: isObject(object.type_map) ? Object.entries(object.type_map).reduce<{
        [key: bigint]: Type;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Type.fromSDK(value);
        return acc;
      }, {}) : {},
      sourceInfo: object.source_info ? SourceInfo.fromSDK(object.source_info) : undefined,
      exprVersion: object?.expr_version,
      expr: object.expr ? Expr.fromSDK(object.expr) : undefined
    };
  },
  fromSDKJSON(object: any): CheckedExprSDKType {
    return {
      reference_map: isObject(object.reference_map) ? Object.entries(object.reference_map).reduce<{
        [key: bigint]: Reference;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Reference.fromSDKJSON(value);
        return acc;
      }, {}) : {},
      type_map: isObject(object.type_map) ? Object.entries(object.type_map).reduce<{
        [key: bigint]: Type;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Type.fromSDKJSON(value);
        return acc;
      }, {}) : {},
      source_info: isSet(object.source_info) ? SourceInfo.fromSDKJSON(object.source_info) : undefined,
      expr_version: isSet(object.expr_version) ? String(object.expr_version) : "",
      expr: isSet(object.expr) ? Expr.fromSDKJSON(object.expr) : undefined
    };
  },
  toSDK(message: CheckedExpr): CheckedExprSDKType {
    const obj: any = {};
    obj.reference_map = {};
    if (message.referenceMap) {
      Object.entries(message.referenceMap).forEach(([k, v]) => {
        obj.reference_map[k] = Reference.toSDK(v);
      });
    }
    obj.type_map = {};
    if (message.typeMap) {
      Object.entries(message.typeMap).forEach(([k, v]) => {
        obj.type_map[k] = Type.toSDK(v);
      });
    }
    message.sourceInfo !== undefined && (obj.source_info = message.sourceInfo ? SourceInfo.toSDK(message.sourceInfo) : undefined);
    obj.expr_version = message.exprVersion;
    message.expr !== undefined && (obj.expr = message.expr ? Expr.toSDK(message.expr) : undefined);
    return obj;
  }
};
function createBaseType(): Type {
  return {
    dyn: undefined,
    null: undefined,
    primitive: undefined,
    wrapper: undefined,
    wellKnown: undefined,
    listType: undefined,
    mapType: undefined,
    function: undefined,
    messageType: undefined,
    typeParam: undefined,
    type: undefined,
    error: undefined,
    abstractType: undefined
  };
}
export const Type = {
  encode(message: Type, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dyn !== undefined) {
      Empty.encode(message.dyn, writer.uint32(10).fork()).ldelim();
    }
    if (message.null !== undefined) {
      writer.uint32(16).int32(message.null);
    }
    if (message.primitive !== undefined) {
      writer.uint32(24).int32(message.primitive);
    }
    if (message.wrapper !== undefined) {
      writer.uint32(32).int32(message.wrapper);
    }
    if (message.wellKnown !== undefined) {
      writer.uint32(40).int32(message.wellKnown);
    }
    if (message.listType !== undefined) {
      Type_ListType.encode(message.listType, writer.uint32(50).fork()).ldelim();
    }
    if (message.mapType !== undefined) {
      Type_MapType.encode(message.mapType, writer.uint32(58).fork()).ldelim();
    }
    if (message.function !== undefined) {
      Type_FunctionType.encode(message.function, writer.uint32(66).fork()).ldelim();
    }
    if (message.messageType !== undefined) {
      writer.uint32(74).string(message.messageType);
    }
    if (message.typeParam !== undefined) {
      writer.uint32(82).string(message.typeParam);
    }
    if (message.type !== undefined) {
      Type.encode(message.type, writer.uint32(90).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Empty.encode(message.error, writer.uint32(98).fork()).ldelim();
    }
    if (message.abstractType !== undefined) {
      Type_AbstractType.encode(message.abstractType, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Type {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dyn = Empty.decode(reader, reader.uint32());
          break;
        case 2:
          message.null = (reader.int32() as any);
          break;
        case 3:
          message.primitive = (reader.int32() as any);
          break;
        case 4:
          message.wrapper = (reader.int32() as any);
          break;
        case 5:
          message.wellKnown = (reader.int32() as any);
          break;
        case 6:
          message.listType = Type_ListType.decode(reader, reader.uint32());
          break;
        case 7:
          message.mapType = Type_MapType.decode(reader, reader.uint32());
          break;
        case 8:
          message.function = Type_FunctionType.decode(reader, reader.uint32());
          break;
        case 9:
          message.messageType = reader.string();
          break;
        case 10:
          message.typeParam = reader.string();
          break;
        case 11:
          message.type = Type.decode(reader, reader.uint32());
          break;
        case 12:
          message.error = Empty.decode(reader, reader.uint32());
          break;
        case 14:
          message.abstractType = Type_AbstractType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Type {
    const obj = createBaseType();
    if (isSet(object.dyn)) obj.dyn = Empty.fromJSON(object.dyn);
    if (isSet(object.null)) obj.null = nullValueFromJSON(object.null);
    if (isSet(object.primitive)) obj.primitive = type_PrimitiveTypeFromJSON(object.primitive);
    if (isSet(object.wrapper)) obj.wrapper = type_PrimitiveTypeFromJSON(object.wrapper);
    if (isSet(object.wellKnown)) obj.wellKnown = type_WellKnownTypeFromJSON(object.wellKnown);
    if (isSet(object.listType)) obj.listType = Type_ListType.fromJSON(object.listType);
    if (isSet(object.mapType)) obj.mapType = Type_MapType.fromJSON(object.mapType);
    if (isSet(object.function)) obj.function = Type_FunctionType.fromJSON(object.function);
    if (isSet(object.messageType)) obj.messageType = String(object.messageType);
    if (isSet(object.typeParam)) obj.typeParam = String(object.typeParam);
    if (isSet(object.type)) obj.type = Type.fromJSON(object.type);
    if (isSet(object.error)) obj.error = Empty.fromJSON(object.error);
    if (isSet(object.abstractType)) obj.abstractType = Type_AbstractType.fromJSON(object.abstractType);
    return obj;
  },
  toJSON(message: Type): unknown {
    const obj: any = {};
    message.dyn !== undefined && (obj.dyn = message.dyn ? Empty.toJSON(message.dyn) : undefined);
    message.null !== undefined && (obj.null = nullValueToJSON(message.null));
    message.primitive !== undefined && (obj.primitive = type_PrimitiveTypeToJSON(message.primitive));
    message.wrapper !== undefined && (obj.wrapper = type_PrimitiveTypeToJSON(message.wrapper));
    message.wellKnown !== undefined && (obj.wellKnown = type_WellKnownTypeToJSON(message.wellKnown));
    message.listType !== undefined && (obj.listType = message.listType ? Type_ListType.toJSON(message.listType) : undefined);
    message.mapType !== undefined && (obj.mapType = message.mapType ? Type_MapType.toJSON(message.mapType) : undefined);
    message.function !== undefined && (obj.function = message.function ? Type_FunctionType.toJSON(message.function) : undefined);
    message.messageType !== undefined && (obj.messageType = message.messageType);
    message.typeParam !== undefined && (obj.typeParam = message.typeParam);
    message.type !== undefined && (obj.type = message.type ? Type.toJSON(message.type) : undefined);
    message.error !== undefined && (obj.error = message.error ? Empty.toJSON(message.error) : undefined);
    message.abstractType !== undefined && (obj.abstractType = message.abstractType ? Type_AbstractType.toJSON(message.abstractType) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Type>): Type {
    const message = createBaseType();
    if (object.dyn !== undefined && object.dyn !== null) {
      message.dyn = Empty.fromPartial(object.dyn);
    }
    message.null = object.null ?? undefined;
    message.primitive = object.primitive ?? undefined;
    message.wrapper = object.wrapper ?? undefined;
    message.wellKnown = object.wellKnown ?? undefined;
    if (object.listType !== undefined && object.listType !== null) {
      message.listType = Type_ListType.fromPartial(object.listType);
    }
    if (object.mapType !== undefined && object.mapType !== null) {
      message.mapType = Type_MapType.fromPartial(object.mapType);
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = Type_FunctionType.fromPartial(object.function);
    }
    message.messageType = object.messageType ?? undefined;
    message.typeParam = object.typeParam ?? undefined;
    if (object.type !== undefined && object.type !== null) {
      message.type = Type.fromPartial(object.type);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = Empty.fromPartial(object.error);
    }
    if (object.abstractType !== undefined && object.abstractType !== null) {
      message.abstractType = Type_AbstractType.fromPartial(object.abstractType);
    }
    return message;
  },
  fromSDK(object: TypeSDKType): Type {
    return {
      dyn: object.dyn ? Empty.fromSDK(object.dyn) : undefined,
      null: isSet(object.null) ? nullValueFromJSON(object.null) : undefined,
      primitive: isSet(object.primitive) ? type_PrimitiveTypeFromJSON(object.primitive) : undefined,
      wrapper: isSet(object.wrapper) ? type_PrimitiveTypeFromJSON(object.wrapper) : undefined,
      wellKnown: isSet(object.well_known) ? type_WellKnownTypeFromJSON(object.well_known) : undefined,
      listType: object.list_type ? Type_ListType.fromSDK(object.list_type) : undefined,
      mapType: object.map_type ? Type_MapType.fromSDK(object.map_type) : undefined,
      function: object.function ? Type_FunctionType.fromSDK(object.function) : undefined,
      messageType: object?.message_type,
      typeParam: object?.type_param,
      type: object.type ? Type.fromSDK(object.type) : undefined,
      error: object.error ? Empty.fromSDK(object.error) : undefined,
      abstractType: object.abstract_type ? Type_AbstractType.fromSDK(object.abstract_type) : undefined
    };
  },
  fromSDKJSON(object: any): TypeSDKType {
    return {
      dyn: isSet(object.dyn) ? Empty.fromSDKJSON(object.dyn) : undefined,
      null: isSet(object.null) ? nullValueFromJSON(object.null) : undefined,
      primitive: isSet(object.primitive) ? type_PrimitiveTypeFromJSON(object.primitive) : undefined,
      wrapper: isSet(object.wrapper) ? type_PrimitiveTypeFromJSON(object.wrapper) : undefined,
      well_known: isSet(object.well_known) ? type_WellKnownTypeFromJSON(object.well_known) : undefined,
      list_type: isSet(object.list_type) ? Type_ListType.fromSDKJSON(object.list_type) : undefined,
      map_type: isSet(object.map_type) ? Type_MapType.fromSDKJSON(object.map_type) : undefined,
      function: isSet(object.function) ? Type_FunctionType.fromSDKJSON(object.function) : undefined,
      message_type: isSet(object.message_type) ? String(object.message_type) : undefined,
      type_param: isSet(object.type_param) ? String(object.type_param) : undefined,
      type: isSet(object.type) ? Type.fromSDKJSON(object.type) : undefined,
      error: isSet(object.error) ? Empty.fromSDKJSON(object.error) : undefined,
      abstract_type: isSet(object.abstract_type) ? Type_AbstractType.fromSDKJSON(object.abstract_type) : undefined
    };
  },
  toSDK(message: Type): TypeSDKType {
    const obj: any = {};
    message.dyn !== undefined && (obj.dyn = message.dyn ? Empty.toSDK(message.dyn) : undefined);
    message.null !== undefined && (obj.null = nullValueToJSON(message.null));
    message.primitive !== undefined && (obj.primitive = type_PrimitiveTypeToJSON(message.primitive));
    message.wrapper !== undefined && (obj.wrapper = type_PrimitiveTypeToJSON(message.wrapper));
    message.wellKnown !== undefined && (obj.well_known = type_WellKnownTypeToJSON(message.wellKnown));
    message.listType !== undefined && (obj.list_type = message.listType ? Type_ListType.toSDK(message.listType) : undefined);
    message.mapType !== undefined && (obj.map_type = message.mapType ? Type_MapType.toSDK(message.mapType) : undefined);
    message.function !== undefined && (obj.function = message.function ? Type_FunctionType.toSDK(message.function) : undefined);
    obj.message_type = message.messageType;
    obj.type_param = message.typeParam;
    message.type !== undefined && (obj.type = message.type ? Type.toSDK(message.type) : undefined);
    message.error !== undefined && (obj.error = message.error ? Empty.toSDK(message.error) : undefined);
    message.abstractType !== undefined && (obj.abstract_type = message.abstractType ? Type_AbstractType.toSDK(message.abstractType) : undefined);
    return obj;
  }
};
function createBaseType_ListType(): Type_ListType {
  return {
    elemType: Type.fromPartial({})
  };
}
export const Type_ListType = {
  encode(message: Type_ListType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.elemType !== undefined) {
      Type.encode(message.elemType, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Type_ListType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_ListType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elemType = Type.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Type_ListType {
    const obj = createBaseType_ListType();
    if (isSet(object.elemType)) obj.elemType = Type.fromJSON(object.elemType);
    return obj;
  },
  toJSON(message: Type_ListType): unknown {
    const obj: any = {};
    message.elemType !== undefined && (obj.elemType = message.elemType ? Type.toJSON(message.elemType) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Type_ListType>): Type_ListType {
    const message = createBaseType_ListType();
    if (object.elemType !== undefined && object.elemType !== null) {
      message.elemType = Type.fromPartial(object.elemType);
    }
    return message;
  },
  fromSDK(object: Type_ListTypeSDKType): Type_ListType {
    return {
      elemType: object.elem_type ? Type.fromSDK(object.elem_type) : undefined
    };
  },
  fromSDKJSON(object: any): Type_ListTypeSDKType {
    return {
      elem_type: isSet(object.elem_type) ? Type.fromSDKJSON(object.elem_type) : undefined
    };
  },
  toSDK(message: Type_ListType): Type_ListTypeSDKType {
    const obj: any = {};
    message.elemType !== undefined && (obj.elem_type = message.elemType ? Type.toSDK(message.elemType) : undefined);
    return obj;
  }
};
function createBaseType_MapType(): Type_MapType {
  return {
    keyType: Type.fromPartial({}),
    valueType: Type.fromPartial({})
  };
}
export const Type_MapType = {
  encode(message: Type_MapType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyType !== undefined) {
      Type.encode(message.keyType, writer.uint32(10).fork()).ldelim();
    }
    if (message.valueType !== undefined) {
      Type.encode(message.valueType, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Type_MapType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_MapType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyType = Type.decode(reader, reader.uint32());
          break;
        case 2:
          message.valueType = Type.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Type_MapType {
    const obj = createBaseType_MapType();
    if (isSet(object.keyType)) obj.keyType = Type.fromJSON(object.keyType);
    if (isSet(object.valueType)) obj.valueType = Type.fromJSON(object.valueType);
    return obj;
  },
  toJSON(message: Type_MapType): unknown {
    const obj: any = {};
    message.keyType !== undefined && (obj.keyType = message.keyType ? Type.toJSON(message.keyType) : undefined);
    message.valueType !== undefined && (obj.valueType = message.valueType ? Type.toJSON(message.valueType) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Type_MapType>): Type_MapType {
    const message = createBaseType_MapType();
    if (object.keyType !== undefined && object.keyType !== null) {
      message.keyType = Type.fromPartial(object.keyType);
    }
    if (object.valueType !== undefined && object.valueType !== null) {
      message.valueType = Type.fromPartial(object.valueType);
    }
    return message;
  },
  fromSDK(object: Type_MapTypeSDKType): Type_MapType {
    return {
      keyType: object.key_type ? Type.fromSDK(object.key_type) : undefined,
      valueType: object.value_type ? Type.fromSDK(object.value_type) : undefined
    };
  },
  fromSDKJSON(object: any): Type_MapTypeSDKType {
    return {
      key_type: isSet(object.key_type) ? Type.fromSDKJSON(object.key_type) : undefined,
      value_type: isSet(object.value_type) ? Type.fromSDKJSON(object.value_type) : undefined
    };
  },
  toSDK(message: Type_MapType): Type_MapTypeSDKType {
    const obj: any = {};
    message.keyType !== undefined && (obj.key_type = message.keyType ? Type.toSDK(message.keyType) : undefined);
    message.valueType !== undefined && (obj.value_type = message.valueType ? Type.toSDK(message.valueType) : undefined);
    return obj;
  }
};
function createBaseType_FunctionType(): Type_FunctionType {
  return {
    resultType: Type.fromPartial({}),
    argTypes: []
  };
}
export const Type_FunctionType = {
  encode(message: Type_FunctionType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resultType !== undefined) {
      Type.encode(message.resultType, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.argTypes) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Type_FunctionType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_FunctionType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resultType = Type.decode(reader, reader.uint32());
          break;
        case 2:
          message.argTypes.push(Type.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Type_FunctionType {
    const obj = createBaseType_FunctionType();
    if (isSet(object.resultType)) obj.resultType = Type.fromJSON(object.resultType);
    if (Array.isArray(object?.argTypes)) object.argTypes.map((e: any) => Type.fromJSON(e));
    return obj;
  },
  toJSON(message: Type_FunctionType): unknown {
    const obj: any = {};
    message.resultType !== undefined && (obj.resultType = message.resultType ? Type.toJSON(message.resultType) : undefined);
    if (message.argTypes) {
      obj.argTypes = message.argTypes.map(e => e ? Type.toJSON(e) : undefined);
    } else {
      obj.argTypes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Type_FunctionType>): Type_FunctionType {
    const message = createBaseType_FunctionType();
    if (object.resultType !== undefined && object.resultType !== null) {
      message.resultType = Type.fromPartial(object.resultType);
    }
    message.argTypes = object.argTypes?.map(e => Type.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: Type_FunctionTypeSDKType): Type_FunctionType {
    return {
      resultType: object.result_type ? Type.fromSDK(object.result_type) : undefined,
      argTypes: Array.isArray(object?.arg_types) ? object.arg_types.map((e: any) => Type.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): Type_FunctionTypeSDKType {
    return {
      result_type: isSet(object.result_type) ? Type.fromSDKJSON(object.result_type) : undefined,
      arg_types: Array.isArray(object?.arg_types) ? object.arg_types.map((e: any) => Type.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Type_FunctionType): Type_FunctionTypeSDKType {
    const obj: any = {};
    message.resultType !== undefined && (obj.result_type = message.resultType ? Type.toSDK(message.resultType) : undefined);
    if (message.argTypes) {
      obj.arg_types = message.argTypes.map(e => e ? Type.toSDK(e) : undefined);
    } else {
      obj.arg_types = [];
    }
    return obj;
  }
};
function createBaseType_AbstractType(): Type_AbstractType {
  return {
    name: "",
    parameterTypes: []
  };
}
export const Type_AbstractType = {
  encode(message: Type_AbstractType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.parameterTypes) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Type_AbstractType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_AbstractType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.parameterTypes.push(Type.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Type_AbstractType {
    const obj = createBaseType_AbstractType();
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.parameterTypes)) object.parameterTypes.map((e: any) => Type.fromJSON(e));
    return obj;
  },
  toJSON(message: Type_AbstractType): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.parameterTypes) {
      obj.parameterTypes = message.parameterTypes.map(e => e ? Type.toJSON(e) : undefined);
    } else {
      obj.parameterTypes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Type_AbstractType>): Type_AbstractType {
    const message = createBaseType_AbstractType();
    message.name = object.name ?? "";
    message.parameterTypes = object.parameterTypes?.map(e => Type.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: Type_AbstractTypeSDKType): Type_AbstractType {
    return {
      name: object?.name,
      parameterTypes: Array.isArray(object?.parameter_types) ? object.parameter_types.map((e: any) => Type.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): Type_AbstractTypeSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      parameter_types: Array.isArray(object?.parameter_types) ? object.parameter_types.map((e: any) => Type.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Type_AbstractType): Type_AbstractTypeSDKType {
    const obj: any = {};
    obj.name = message.name;
    if (message.parameterTypes) {
      obj.parameter_types = message.parameterTypes.map(e => e ? Type.toSDK(e) : undefined);
    } else {
      obj.parameter_types = [];
    }
    return obj;
  }
};
function createBaseDecl(): Decl {
  return {
    name: "",
    ident: undefined,
    function: undefined
  };
}
export const Decl = {
  encode(message: Decl, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.ident !== undefined) {
      Decl_IdentDecl.encode(message.ident, writer.uint32(18).fork()).ldelim();
    }
    if (message.function !== undefined) {
      Decl_FunctionDecl.encode(message.function, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Decl {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.ident = Decl_IdentDecl.decode(reader, reader.uint32());
          break;
        case 3:
          message.function = Decl_FunctionDecl.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Decl {
    const obj = createBaseDecl();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.ident)) obj.ident = Decl_IdentDecl.fromJSON(object.ident);
    if (isSet(object.function)) obj.function = Decl_FunctionDecl.fromJSON(object.function);
    return obj;
  },
  toJSON(message: Decl): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.ident !== undefined && (obj.ident = message.ident ? Decl_IdentDecl.toJSON(message.ident) : undefined);
    message.function !== undefined && (obj.function = message.function ? Decl_FunctionDecl.toJSON(message.function) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Decl>): Decl {
    const message = createBaseDecl();
    message.name = object.name ?? "";
    if (object.ident !== undefined && object.ident !== null) {
      message.ident = Decl_IdentDecl.fromPartial(object.ident);
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = Decl_FunctionDecl.fromPartial(object.function);
    }
    return message;
  },
  fromSDK(object: DeclSDKType): Decl {
    return {
      name: object?.name,
      ident: object.ident ? Decl_IdentDecl.fromSDK(object.ident) : undefined,
      function: object.function ? Decl_FunctionDecl.fromSDK(object.function) : undefined
    };
  },
  fromSDKJSON(object: any): DeclSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      ident: isSet(object.ident) ? Decl_IdentDecl.fromSDKJSON(object.ident) : undefined,
      function: isSet(object.function) ? Decl_FunctionDecl.fromSDKJSON(object.function) : undefined
    };
  },
  toSDK(message: Decl): DeclSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.ident !== undefined && (obj.ident = message.ident ? Decl_IdentDecl.toSDK(message.ident) : undefined);
    message.function !== undefined && (obj.function = message.function ? Decl_FunctionDecl.toSDK(message.function) : undefined);
    return obj;
  }
};
function createBaseDecl_IdentDecl(): Decl_IdentDecl {
  return {
    type: Type.fromPartial({}),
    value: Constant.fromPartial({}),
    doc: ""
  };
}
export const Decl_IdentDecl = {
  encode(message: Decl_IdentDecl, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== undefined) {
      Type.encode(message.type, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Constant.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    if (message.doc !== "") {
      writer.uint32(26).string(message.doc);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Decl_IdentDecl {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl_IdentDecl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = Type.decode(reader, reader.uint32());
          break;
        case 2:
          message.value = Constant.decode(reader, reader.uint32());
          break;
        case 3:
          message.doc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Decl_IdentDecl {
    const obj = createBaseDecl_IdentDecl();
    if (isSet(object.type)) obj.type = Type.fromJSON(object.type);
    if (isSet(object.value)) obj.value = Constant.fromJSON(object.value);
    if (isSet(object.doc)) obj.doc = String(object.doc);
    return obj;
  },
  toJSON(message: Decl_IdentDecl): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type ? Type.toJSON(message.type) : undefined);
    message.value !== undefined && (obj.value = message.value ? Constant.toJSON(message.value) : undefined);
    message.doc !== undefined && (obj.doc = message.doc);
    return obj;
  },
  fromPartial(object: DeepPartial<Decl_IdentDecl>): Decl_IdentDecl {
    const message = createBaseDecl_IdentDecl();
    if (object.type !== undefined && object.type !== null) {
      message.type = Type.fromPartial(object.type);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Constant.fromPartial(object.value);
    }
    message.doc = object.doc ?? "";
    return message;
  },
  fromSDK(object: Decl_IdentDeclSDKType): Decl_IdentDecl {
    return {
      type: object.type ? Type.fromSDK(object.type) : undefined,
      value: object.value ? Constant.fromSDK(object.value) : undefined,
      doc: object?.doc
    };
  },
  fromSDKJSON(object: any): Decl_IdentDeclSDKType {
    return {
      type: isSet(object.type) ? Type.fromSDKJSON(object.type) : undefined,
      value: isSet(object.value) ? Constant.fromSDKJSON(object.value) : undefined,
      doc: isSet(object.doc) ? String(object.doc) : ""
    };
  },
  toSDK(message: Decl_IdentDecl): Decl_IdentDeclSDKType {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type ? Type.toSDK(message.type) : undefined);
    message.value !== undefined && (obj.value = message.value ? Constant.toSDK(message.value) : undefined);
    obj.doc = message.doc;
    return obj;
  }
};
function createBaseDecl_FunctionDecl(): Decl_FunctionDecl {
  return {
    overloads: []
  };
}
export const Decl_FunctionDecl = {
  encode(message: Decl_FunctionDecl, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.overloads) {
      Decl_FunctionDecl_Overload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Decl_FunctionDecl {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl_FunctionDecl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overloads.push(Decl_FunctionDecl_Overload.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Decl_FunctionDecl {
    const obj = createBaseDecl_FunctionDecl();
    if (Array.isArray(object?.overloads)) object.overloads.map((e: any) => Decl_FunctionDecl_Overload.fromJSON(e));
    return obj;
  },
  toJSON(message: Decl_FunctionDecl): unknown {
    const obj: any = {};
    if (message.overloads) {
      obj.overloads = message.overloads.map(e => e ? Decl_FunctionDecl_Overload.toJSON(e) : undefined);
    } else {
      obj.overloads = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Decl_FunctionDecl>): Decl_FunctionDecl {
    const message = createBaseDecl_FunctionDecl();
    message.overloads = object.overloads?.map(e => Decl_FunctionDecl_Overload.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: Decl_FunctionDeclSDKType): Decl_FunctionDecl {
    return {
      overloads: Array.isArray(object?.overloads) ? object.overloads.map((e: any) => Decl_FunctionDecl_Overload.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): Decl_FunctionDeclSDKType {
    return {
      overloads: Array.isArray(object?.overloads) ? object.overloads.map((e: any) => Decl_FunctionDecl_Overload.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Decl_FunctionDecl): Decl_FunctionDeclSDKType {
    const obj: any = {};
    if (message.overloads) {
      obj.overloads = message.overloads.map(e => e ? Decl_FunctionDecl_Overload.toSDK(e) : undefined);
    } else {
      obj.overloads = [];
    }
    return obj;
  }
};
function createBaseDecl_FunctionDecl_Overload(): Decl_FunctionDecl_Overload {
  return {
    overloadId: "",
    params: [],
    typeParams: [],
    resultType: Type.fromPartial({}),
    isInstanceFunction: false,
    doc: ""
  };
}
export const Decl_FunctionDecl_Overload = {
  encode(message: Decl_FunctionDecl_Overload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.overloadId !== "") {
      writer.uint32(10).string(message.overloadId);
    }
    for (const v of message.params) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.typeParams) {
      writer.uint32(26).string(v!);
    }
    if (message.resultType !== undefined) {
      Type.encode(message.resultType, writer.uint32(34).fork()).ldelim();
    }
    if (message.isInstanceFunction === true) {
      writer.uint32(40).bool(message.isInstanceFunction);
    }
    if (message.doc !== "") {
      writer.uint32(50).string(message.doc);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Decl_FunctionDecl_Overload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl_FunctionDecl_Overload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overloadId = reader.string();
          break;
        case 2:
          message.params.push(Type.decode(reader, reader.uint32()));
          break;
        case 3:
          message.typeParams.push(reader.string());
          break;
        case 4:
          message.resultType = Type.decode(reader, reader.uint32());
          break;
        case 5:
          message.isInstanceFunction = reader.bool();
          break;
        case 6:
          message.doc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Decl_FunctionDecl_Overload {
    const obj = createBaseDecl_FunctionDecl_Overload();
    if (isSet(object.overloadId)) obj.overloadId = String(object.overloadId);
    if (Array.isArray(object?.params)) object.params.map((e: any) => Type.fromJSON(e));
    if (Array.isArray(object?.typeParams)) object.typeParams.map((e: any) => String(e));
    if (isSet(object.resultType)) obj.resultType = Type.fromJSON(object.resultType);
    if (isSet(object.isInstanceFunction)) obj.isInstanceFunction = Boolean(object.isInstanceFunction);
    if (isSet(object.doc)) obj.doc = String(object.doc);
    return obj;
  },
  toJSON(message: Decl_FunctionDecl_Overload): unknown {
    const obj: any = {};
    message.overloadId !== undefined && (obj.overloadId = message.overloadId);
    if (message.params) {
      obj.params = message.params.map(e => e ? Type.toJSON(e) : undefined);
    } else {
      obj.params = [];
    }
    if (message.typeParams) {
      obj.typeParams = message.typeParams.map(e => e);
    } else {
      obj.typeParams = [];
    }
    message.resultType !== undefined && (obj.resultType = message.resultType ? Type.toJSON(message.resultType) : undefined);
    message.isInstanceFunction !== undefined && (obj.isInstanceFunction = message.isInstanceFunction);
    message.doc !== undefined && (obj.doc = message.doc);
    return obj;
  },
  fromPartial(object: DeepPartial<Decl_FunctionDecl_Overload>): Decl_FunctionDecl_Overload {
    const message = createBaseDecl_FunctionDecl_Overload();
    message.overloadId = object.overloadId ?? "";
    message.params = object.params?.map(e => Type.fromPartial(e)) || [];
    message.typeParams = object.typeParams?.map(e => e) || [];
    if (object.resultType !== undefined && object.resultType !== null) {
      message.resultType = Type.fromPartial(object.resultType);
    }
    message.isInstanceFunction = object.isInstanceFunction ?? false;
    message.doc = object.doc ?? "";
    return message;
  },
  fromSDK(object: Decl_FunctionDecl_OverloadSDKType): Decl_FunctionDecl_Overload {
    return {
      overloadId: object?.overload_id,
      params: Array.isArray(object?.params) ? object.params.map((e: any) => Type.fromSDK(e)) : [],
      typeParams: Array.isArray(object?.type_params) ? object.type_params.map((e: any) => e) : [],
      resultType: object.result_type ? Type.fromSDK(object.result_type) : undefined,
      isInstanceFunction: object?.is_instance_function,
      doc: object?.doc
    };
  },
  fromSDKJSON(object: any): Decl_FunctionDecl_OverloadSDKType {
    return {
      overload_id: isSet(object.overload_id) ? String(object.overload_id) : "",
      params: Array.isArray(object?.params) ? object.params.map((e: any) => Type.fromSDKJSON(e)) : [],
      type_params: Array.isArray(object?.type_params) ? object.type_params.map((e: any) => String(e)) : [],
      result_type: isSet(object.result_type) ? Type.fromSDKJSON(object.result_type) : undefined,
      is_instance_function: isSet(object.is_instance_function) ? Boolean(object.is_instance_function) : false,
      doc: isSet(object.doc) ? String(object.doc) : ""
    };
  },
  toSDK(message: Decl_FunctionDecl_Overload): Decl_FunctionDecl_OverloadSDKType {
    const obj: any = {};
    obj.overload_id = message.overloadId;
    if (message.params) {
      obj.params = message.params.map(e => e ? Type.toSDK(e) : undefined);
    } else {
      obj.params = [];
    }
    if (message.typeParams) {
      obj.type_params = message.typeParams.map(e => e);
    } else {
      obj.type_params = [];
    }
    message.resultType !== undefined && (obj.result_type = message.resultType ? Type.toSDK(message.resultType) : undefined);
    obj.is_instance_function = message.isInstanceFunction;
    obj.doc = message.doc;
    return obj;
  }
};
function createBaseReference(): Reference {
  return {
    name: "",
    overloadId: [],
    value: Constant.fromPartial({})
  };
}
export const Reference = {
  encode(message: Reference, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.overloadId) {
      writer.uint32(26).string(v!);
    }
    if (message.value !== undefined) {
      Constant.encode(message.value, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Reference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.overloadId.push(reader.string());
          break;
        case 4:
          message.value = Constant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Reference {
    const obj = createBaseReference();
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.overloadId)) object.overloadId.map((e: any) => String(e));
    if (isSet(object.value)) obj.value = Constant.fromJSON(object.value);
    return obj;
  },
  toJSON(message: Reference): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.overloadId) {
      obj.overloadId = message.overloadId.map(e => e);
    } else {
      obj.overloadId = [];
    }
    message.value !== undefined && (obj.value = message.value ? Constant.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Reference>): Reference {
    const message = createBaseReference();
    message.name = object.name ?? "";
    message.overloadId = object.overloadId?.map(e => e) || [];
    if (object.value !== undefined && object.value !== null) {
      message.value = Constant.fromPartial(object.value);
    }
    return message;
  },
  fromSDK(object: ReferenceSDKType): Reference {
    return {
      name: object?.name,
      overloadId: Array.isArray(object?.overload_id) ? object.overload_id.map((e: any) => e) : [],
      value: object.value ? Constant.fromSDK(object.value) : undefined
    };
  },
  fromSDKJSON(object: any): ReferenceSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      overload_id: Array.isArray(object?.overload_id) ? object.overload_id.map((e: any) => String(e)) : [],
      value: isSet(object.value) ? Constant.fromSDKJSON(object.value) : undefined
    };
  },
  toSDK(message: Reference): ReferenceSDKType {
    const obj: any = {};
    obj.name = message.name;
    if (message.overloadId) {
      obj.overload_id = message.overloadId.map(e => e);
    } else {
      obj.overload_id = [];
    }
    message.value !== undefined && (obj.value = message.value ? Constant.toSDK(message.value) : undefined);
    return obj;
  }
};