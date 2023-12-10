import { SourceInfo, SourceInfoAmino, SourceInfoSDKType, Expr, ExprAmino, ExprSDKType, Constant, ConstantAmino, ConstantSDKType } from "./syntax";
import { Empty, EmptyAmino, EmptySDKType } from "../../../protobuf/empty";
import { NullValue, NullValueSDKType, nullValueFromJSON } from "../../../protobuf/struct";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
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
export const Type_PrimitiveTypeAmino = Type_PrimitiveType;
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
export const Type_WellKnownTypeAmino = Type_WellKnownType;
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
  value?: Reference;
}
export interface CheckedExpr_ReferenceMapEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface CheckedExpr_ReferenceMapEntryAmino {
  key?: string;
  value?: ReferenceAmino;
}
export interface CheckedExpr_ReferenceMapEntryAminoMsg {
  type: string;
  value: CheckedExpr_ReferenceMapEntryAmino;
}
export interface CheckedExpr_ReferenceMapEntrySDKType {
  key: bigint;
  value?: ReferenceSDKType;
}
export interface CheckedExpr_TypeMapEntry {
  key: bigint;
  value?: Type;
}
export interface CheckedExpr_TypeMapEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface CheckedExpr_TypeMapEntryAmino {
  key?: string;
  value?: TypeAmino;
}
export interface CheckedExpr_TypeMapEntryAminoMsg {
  type: string;
  value: CheckedExpr_TypeMapEntryAmino;
}
export interface CheckedExpr_TypeMapEntrySDKType {
  key: bigint;
  value?: TypeSDKType;
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
  sourceInfo?: SourceInfo;
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
  expr?: Expr;
}
export interface CheckedExprProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.CheckedExpr";
  value: Uint8Array;
}
/** A CEL expression which has been successfully type checked. */
export interface CheckedExprAmino {
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
  reference_map?: {
    [key: string]: ReferenceAmino;
  };
  /**
   * A map from expression ids to types.
   * 
   * Every expression node which has a type different than DYN has a mapping
   * here. If an expression has type DYN, it is omitted from this map to save
   * space.
   */
  type_map?: {
    [key: string]: TypeAmino;
  };
  /**
   * The source info derived from input that generated the parsed `expr` and
   * any optimizations made during the type-checking pass.
   */
  source_info?: SourceInfoAmino;
  /**
   * The expr version indicates the major / minor version number of the `expr`
   * representation.
   * 
   * The most common reason for a version change will be to indicate to the CEL
   * runtimes that transformations have been performed on the expr during static
   * analysis. In some cases, this will save the runtime the work of applying
   * the same or similar transformations prior to evaluation.
   */
  expr_version?: string;
  /**
   * The checked expression. Semantically equivalent to the parsed `expr`, but
   * may have structural differences.
   */
  expr?: ExprAmino;
}
export interface CheckedExprAminoMsg {
  type: "/google.api.expr.v1alpha1.CheckedExpr";
  value: CheckedExprAmino;
}
/** A CEL expression which has been successfully type checked. */
export interface CheckedExprSDKType {
  reference_map: {
    [key: bigint]: ReferenceSDKType;
  };
  type_map: {
    [key: bigint]: TypeSDKType;
  };
  source_info?: SourceInfoSDKType;
  expr_version: string;
  expr?: ExprSDKType;
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
export interface TypeProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.Type";
  value: Uint8Array;
}
/** Represents a CEL type. */
export interface TypeAmino {
  /** Dynamic type. */
  dyn?: EmptyAmino;
  /** Null value. */
  null?: NullValue;
  /** Primitive types: `true`, `1u`, `-2.0`, `'string'`, `b'bytes'`. */
  primitive?: Type_PrimitiveType;
  /** Wrapper of a primitive type, e.g. `google.protobuf.Int64Value`. */
  wrapper?: Type_PrimitiveType;
  /** Well-known protobuf type such as `google.protobuf.Timestamp`. */
  well_known?: Type_WellKnownType;
  /** Parameterized list with elements of `list_type`, e.g. `list<timestamp>`. */
  list_type?: Type_ListTypeAmino;
  /** Parameterized map with typed keys and values. */
  map_type?: Type_MapTypeAmino;
  /** Function type. */
  function?: Type_FunctionTypeAmino;
  /**
   * Protocol buffer message type.
   * 
   * The `message_type` string specifies the qualified message type name. For
   * example, `google.plus.Profile`.
   */
  message_type?: string;
  /**
   * Type param type.
   * 
   * The `type_param` string specifies the type parameter name, e.g. `list<E>`
   * would be a `list_type` whose element type was a `type_param` type
   * named `E`.
   */
  type_param?: string;
  /**
   * Type type.
   * 
   * The `type` value specifies the target type. e.g. int is type with a
   * target type of `Primitive.INT`.
   */
  type?: TypeAmino;
  /**
   * Error type.
   * 
   * During type-checking if an expression is an error, its type is propagated
   * as the `ERROR` type. This permits the type-checker to discover other
   * errors present in the expression.
   */
  error?: EmptyAmino;
  /** Abstract, application defined type. */
  abstract_type?: Type_AbstractTypeAmino;
}
export interface TypeAminoMsg {
  type: "/google.api.expr.v1alpha1.Type";
  value: TypeAmino;
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
  elemType?: Type;
}
export interface Type_ListTypeProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.ListType";
  value: Uint8Array;
}
/** List type with typed elements, e.g. `list<example.proto.MyMessage>`. */
export interface Type_ListTypeAmino {
  /** The element type. */
  elem_type?: TypeAmino;
}
export interface Type_ListTypeAminoMsg {
  type: "/google.api.expr.v1alpha1.ListType";
  value: Type_ListTypeAmino;
}
/** List type with typed elements, e.g. `list<example.proto.MyMessage>`. */
export interface Type_ListTypeSDKType {
  elem_type?: TypeSDKType;
}
/** Map type with parameterized key and value types, e.g. `map<string, int>`. */
export interface Type_MapType {
  /** The type of the key. */
  keyType?: Type;
  /** The type of the value. */
  valueType?: Type;
}
export interface Type_MapTypeProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.MapType";
  value: Uint8Array;
}
/** Map type with parameterized key and value types, e.g. `map<string, int>`. */
export interface Type_MapTypeAmino {
  /** The type of the key. */
  key_type?: TypeAmino;
  /** The type of the value. */
  value_type?: TypeAmino;
}
export interface Type_MapTypeAminoMsg {
  type: "/google.api.expr.v1alpha1.MapType";
  value: Type_MapTypeAmino;
}
/** Map type with parameterized key and value types, e.g. `map<string, int>`. */
export interface Type_MapTypeSDKType {
  key_type?: TypeSDKType;
  value_type?: TypeSDKType;
}
/** Function type with result and arg types. */
export interface Type_FunctionType {
  /** Result type of the function. */
  resultType?: Type;
  /** Argument types of the function. */
  argTypes: Type[];
}
export interface Type_FunctionTypeProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.FunctionType";
  value: Uint8Array;
}
/** Function type with result and arg types. */
export interface Type_FunctionTypeAmino {
  /** Result type of the function. */
  result_type?: TypeAmino;
  /** Argument types of the function. */
  arg_types?: TypeAmino[];
}
export interface Type_FunctionTypeAminoMsg {
  type: "/google.api.expr.v1alpha1.FunctionType";
  value: Type_FunctionTypeAmino;
}
/** Function type with result and arg types. */
export interface Type_FunctionTypeSDKType {
  result_type?: TypeSDKType;
  arg_types: TypeSDKType[];
}
/** Application defined abstract type. */
export interface Type_AbstractType {
  /** The fully qualified name of this abstract type. */
  name: string;
  /** Parameter types for this abstract type. */
  parameterTypes: Type[];
}
export interface Type_AbstractTypeProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.AbstractType";
  value: Uint8Array;
}
/** Application defined abstract type. */
export interface Type_AbstractTypeAmino {
  /** The fully qualified name of this abstract type. */
  name?: string;
  /** Parameter types for this abstract type. */
  parameter_types?: TypeAmino[];
}
export interface Type_AbstractTypeAminoMsg {
  type: "/google.api.expr.v1alpha1.AbstractType";
  value: Type_AbstractTypeAmino;
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
export interface DeclProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.Decl";
  value: Uint8Array;
}
/**
 * Represents a declaration of a named value or function.
 * 
 * A declaration is part of the contract between the expression, the agent
 * evaluating that expression, and the caller requesting evaluation.
 */
export interface DeclAmino {
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
  name?: string;
  /** Identifier declaration. */
  ident?: Decl_IdentDeclAmino;
  /** Function declaration. */
  function?: Decl_FunctionDeclAmino;
}
export interface DeclAminoMsg {
  type: "/google.api.expr.v1alpha1.Decl";
  value: DeclAmino;
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
  type?: Type;
  /**
   * The constant value of the identifier. If not specified, the identifier
   * must be supplied at evaluation time.
   */
  value?: Constant;
  /** Documentation string for the identifier. */
  doc: string;
}
export interface Decl_IdentDeclProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.IdentDecl";
  value: Uint8Array;
}
/**
 * Identifier declaration which specifies its type and optional `Expr` value.
 * 
 * An identifier without a value is a declaration that must be provided at
 * evaluation time. An identifier with a value should resolve to a constant,
 * but may be used in conjunction with other identifiers bound at evaluation
 * time.
 */
export interface Decl_IdentDeclAmino {
  /** Required. The type of the identifier. */
  type?: TypeAmino;
  /**
   * The constant value of the identifier. If not specified, the identifier
   * must be supplied at evaluation time.
   */
  value?: ConstantAmino;
  /** Documentation string for the identifier. */
  doc?: string;
}
export interface Decl_IdentDeclAminoMsg {
  type: "/google.api.expr.v1alpha1.IdentDecl";
  value: Decl_IdentDeclAmino;
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
  type?: TypeSDKType;
  value?: ConstantSDKType;
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
export interface Decl_FunctionDeclProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.FunctionDecl";
  value: Uint8Array;
}
/**
 * Function declaration specifies one or more overloads which indicate the
 * function's parameter types and return type.
 * 
 * Functions have no observable side-effects (there may be side-effects like
 * logging which are not observable from CEL).
 */
export interface Decl_FunctionDeclAmino {
  /** Required. List of function overloads, must contain at least one overload. */
  overloads?: Decl_FunctionDecl_OverloadAmino[];
}
export interface Decl_FunctionDeclAminoMsg {
  type: "/google.api.expr.v1alpha1.FunctionDecl";
  value: Decl_FunctionDeclAmino;
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
  resultType?: Type;
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
export interface Decl_FunctionDecl_OverloadProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.Overload";
  value: Uint8Array;
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
export interface Decl_FunctionDecl_OverloadAmino {
  /**
   * Required. Globally unique overload name of the function which reflects
   * the function name and argument types.
   * 
   * This will be used by a [Reference][google.api.expr.v1alpha1.Reference] to indicate the `overload_id` that
   * was resolved for the function `name`.
   */
  overload_id?: string;
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
  params?: TypeAmino[];
  /**
   * The type param names associated with the function declaration.
   * 
   * For example, `function ex<K,V>(K key, map<K, V> map) : V` would yield
   * the type params of `K, V`.
   */
  type_params?: string[];
  /**
   * Required. The result type of the function. For example, the operator
   * `string.isEmpty()` would have `result_type` of `kind: BOOL`.
   */
  result_type?: TypeAmino;
  /**
   * Whether the function is to be used in a method call-style `x.f(...)`
   * of a function call-style `f(x, ...)`.
   * 
   * For methods, the first parameter declaration, `params[0]` is the
   * expected type of the target receiver.
   */
  is_instance_function?: boolean;
  /** Documentation string for the overload. */
  doc?: string;
}
export interface Decl_FunctionDecl_OverloadAminoMsg {
  type: "/google.api.expr.v1alpha1.Overload";
  value: Decl_FunctionDecl_OverloadAmino;
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
  result_type?: TypeSDKType;
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
  value?: Constant;
}
export interface ReferenceProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.Reference";
  value: Uint8Array;
}
/** Describes a resolved reference to a declaration. */
export interface ReferenceAmino {
  /** The fully qualified name of the declaration. */
  name?: string;
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
  overload_id?: string[];
  /**
   * For references to constants, this may contain the value of the
   * constant if known at compile time.
   */
  value?: ConstantAmino;
}
export interface ReferenceAminoMsg {
  type: "/google.api.expr.v1alpha1.Reference";
  value: ReferenceAmino;
}
/** Describes a resolved reference to a declaration. */
export interface ReferenceSDKType {
  name: string;
  overload_id: string[];
  value?: ConstantSDKType;
}
function createBaseCheckedExpr_ReferenceMapEntry(): CheckedExpr_ReferenceMapEntry {
  return {
    key: BigInt(0),
    value: undefined
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
  fromAmino(object: CheckedExpr_ReferenceMapEntryAmino): CheckedExpr_ReferenceMapEntry {
    const message = createBaseCheckedExpr_ReferenceMapEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = BigInt(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Reference.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: CheckedExpr_ReferenceMapEntry): CheckedExpr_ReferenceMapEntryAmino {
    const obj: any = {};
    obj.key = message.key ? message.key.toString() : undefined;
    obj.value = message.value ? Reference.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: CheckedExpr_ReferenceMapEntryAminoMsg): CheckedExpr_ReferenceMapEntry {
    return CheckedExpr_ReferenceMapEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: CheckedExpr_ReferenceMapEntryProtoMsg): CheckedExpr_ReferenceMapEntry {
    return CheckedExpr_ReferenceMapEntry.decode(message.value);
  },
  toProto(message: CheckedExpr_ReferenceMapEntry): Uint8Array {
    return CheckedExpr_ReferenceMapEntry.encode(message).finish();
  }
};
function createBaseCheckedExpr_TypeMapEntry(): CheckedExpr_TypeMapEntry {
  return {
    key: BigInt(0),
    value: undefined
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
  fromAmino(object: CheckedExpr_TypeMapEntryAmino): CheckedExpr_TypeMapEntry {
    const message = createBaseCheckedExpr_TypeMapEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = BigInt(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Type.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: CheckedExpr_TypeMapEntry): CheckedExpr_TypeMapEntryAmino {
    const obj: any = {};
    obj.key = message.key ? message.key.toString() : undefined;
    obj.value = message.value ? Type.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: CheckedExpr_TypeMapEntryAminoMsg): CheckedExpr_TypeMapEntry {
    return CheckedExpr_TypeMapEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: CheckedExpr_TypeMapEntryProtoMsg): CheckedExpr_TypeMapEntry {
    return CheckedExpr_TypeMapEntry.decode(message.value);
  },
  toProto(message: CheckedExpr_TypeMapEntry): Uint8Array {
    return CheckedExpr_TypeMapEntry.encode(message).finish();
  }
};
function createBaseCheckedExpr(): CheckedExpr {
  return {
    referenceMap: {},
    typeMap: {},
    sourceInfo: undefined,
    exprVersion: "",
    expr: undefined
  };
}
export const CheckedExpr = {
  typeUrl: "/google.api.expr.v1alpha1.CheckedExpr",
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
  fromAmino(object: CheckedExprAmino): CheckedExpr {
    const message = createBaseCheckedExpr();
    message.referenceMap = Object.entries(object.reference_map ?? {}).reduce<{
      [key: bigint]: Reference;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Reference.fromAmino(value);
      }
      return acc;
    }, {});
    message.typeMap = Object.entries(object.type_map ?? {}).reduce<{
      [key: bigint]: Type;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Type.fromAmino(value);
      }
      return acc;
    }, {});
    if (object.source_info !== undefined && object.source_info !== null) {
      message.sourceInfo = SourceInfo.fromAmino(object.source_info);
    }
    if (object.expr_version !== undefined && object.expr_version !== null) {
      message.exprVersion = object.expr_version;
    }
    if (object.expr !== undefined && object.expr !== null) {
      message.expr = Expr.fromAmino(object.expr);
    }
    return message;
  },
  toAmino(message: CheckedExpr): CheckedExprAmino {
    const obj: any = {};
    obj.reference_map = {};
    if (message.referenceMap) {
      Object.entries(message.referenceMap).forEach(([k, v]) => {
        obj.reference_map[k] = Reference.toAmino(v);
      });
    }
    obj.type_map = {};
    if (message.typeMap) {
      Object.entries(message.typeMap).forEach(([k, v]) => {
        obj.type_map[k] = Type.toAmino(v);
      });
    }
    obj.source_info = message.sourceInfo ? SourceInfo.toAmino(message.sourceInfo) : undefined;
    obj.expr_version = message.exprVersion;
    obj.expr = message.expr ? Expr.toAmino(message.expr) : undefined;
    return obj;
  },
  fromAminoMsg(object: CheckedExprAminoMsg): CheckedExpr {
    return CheckedExpr.fromAmino(object.value);
  },
  fromProtoMsg(message: CheckedExprProtoMsg): CheckedExpr {
    return CheckedExpr.decode(message.value);
  },
  toProto(message: CheckedExpr): Uint8Array {
    return CheckedExpr.encode(message).finish();
  },
  toProtoMsg(message: CheckedExpr): CheckedExprProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.CheckedExpr",
      value: CheckedExpr.encode(message).finish()
    };
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
  typeUrl: "/google.api.expr.v1alpha1.Type",
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
  fromAmino(object: TypeAmino): Type {
    const message = createBaseType();
    if (object.dyn !== undefined && object.dyn !== null) {
      message.dyn = Empty.fromAmino(object.dyn);
    }
    if (object.null !== undefined && object.null !== null) {
      message.null = nullValueFromJSON(object.null);
    }
    if (object.primitive !== undefined && object.primitive !== null) {
      message.primitive = type_PrimitiveTypeFromJSON(object.primitive);
    }
    if (object.wrapper !== undefined && object.wrapper !== null) {
      message.wrapper = type_PrimitiveTypeFromJSON(object.wrapper);
    }
    if (object.well_known !== undefined && object.well_known !== null) {
      message.wellKnown = type_WellKnownTypeFromJSON(object.well_known);
    }
    if (object.list_type !== undefined && object.list_type !== null) {
      message.listType = Type_ListType.fromAmino(object.list_type);
    }
    if (object.map_type !== undefined && object.map_type !== null) {
      message.mapType = Type_MapType.fromAmino(object.map_type);
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = Type_FunctionType.fromAmino(object.function);
    }
    if (object.message_type !== undefined && object.message_type !== null) {
      message.messageType = object.message_type;
    }
    if (object.type_param !== undefined && object.type_param !== null) {
      message.typeParam = object.type_param;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = Type.fromAmino(object.type);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = Empty.fromAmino(object.error);
    }
    if (object.abstract_type !== undefined && object.abstract_type !== null) {
      message.abstractType = Type_AbstractType.fromAmino(object.abstract_type);
    }
    return message;
  },
  toAmino(message: Type): TypeAmino {
    const obj: any = {};
    obj.dyn = message.dyn ? Empty.toAmino(message.dyn) : undefined;
    obj.null = message.null;
    obj.primitive = message.primitive;
    obj.wrapper = message.wrapper;
    obj.well_known = message.wellKnown;
    obj.list_type = message.listType ? Type_ListType.toAmino(message.listType) : undefined;
    obj.map_type = message.mapType ? Type_MapType.toAmino(message.mapType) : undefined;
    obj.function = message.function ? Type_FunctionType.toAmino(message.function) : undefined;
    obj.message_type = message.messageType;
    obj.type_param = message.typeParam;
    obj.type = message.type ? Type.toAmino(message.type) : undefined;
    obj.error = message.error ? Empty.toAmino(message.error) : undefined;
    obj.abstract_type = message.abstractType ? Type_AbstractType.toAmino(message.abstractType) : undefined;
    return obj;
  },
  fromAminoMsg(object: TypeAminoMsg): Type {
    return Type.fromAmino(object.value);
  },
  fromProtoMsg(message: TypeProtoMsg): Type {
    return Type.decode(message.value);
  },
  toProto(message: Type): Uint8Array {
    return Type.encode(message).finish();
  },
  toProtoMsg(message: Type): TypeProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Type",
      value: Type.encode(message).finish()
    };
  }
};
function createBaseType_ListType(): Type_ListType {
  return {
    elemType: undefined
  };
}
export const Type_ListType = {
  typeUrl: "/google.api.expr.v1alpha1.ListType",
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
  fromPartial(object: DeepPartial<Type_ListType>): Type_ListType {
    const message = createBaseType_ListType();
    if (object.elemType !== undefined && object.elemType !== null) {
      message.elemType = Type.fromPartial(object.elemType);
    }
    return message;
  },
  fromAmino(object: Type_ListTypeAmino): Type_ListType {
    const message = createBaseType_ListType();
    if (object.elem_type !== undefined && object.elem_type !== null) {
      message.elemType = Type.fromAmino(object.elem_type);
    }
    return message;
  },
  toAmino(message: Type_ListType): Type_ListTypeAmino {
    const obj: any = {};
    obj.elem_type = message.elemType ? Type.toAmino(message.elemType) : undefined;
    return obj;
  },
  fromAminoMsg(object: Type_ListTypeAminoMsg): Type_ListType {
    return Type_ListType.fromAmino(object.value);
  },
  fromProtoMsg(message: Type_ListTypeProtoMsg): Type_ListType {
    return Type_ListType.decode(message.value);
  },
  toProto(message: Type_ListType): Uint8Array {
    return Type_ListType.encode(message).finish();
  },
  toProtoMsg(message: Type_ListType): Type_ListTypeProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.ListType",
      value: Type_ListType.encode(message).finish()
    };
  }
};
function createBaseType_MapType(): Type_MapType {
  return {
    keyType: undefined,
    valueType: undefined
  };
}
export const Type_MapType = {
  typeUrl: "/google.api.expr.v1alpha1.MapType",
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
  fromAmino(object: Type_MapTypeAmino): Type_MapType {
    const message = createBaseType_MapType();
    if (object.key_type !== undefined && object.key_type !== null) {
      message.keyType = Type.fromAmino(object.key_type);
    }
    if (object.value_type !== undefined && object.value_type !== null) {
      message.valueType = Type.fromAmino(object.value_type);
    }
    return message;
  },
  toAmino(message: Type_MapType): Type_MapTypeAmino {
    const obj: any = {};
    obj.key_type = message.keyType ? Type.toAmino(message.keyType) : undefined;
    obj.value_type = message.valueType ? Type.toAmino(message.valueType) : undefined;
    return obj;
  },
  fromAminoMsg(object: Type_MapTypeAminoMsg): Type_MapType {
    return Type_MapType.fromAmino(object.value);
  },
  fromProtoMsg(message: Type_MapTypeProtoMsg): Type_MapType {
    return Type_MapType.decode(message.value);
  },
  toProto(message: Type_MapType): Uint8Array {
    return Type_MapType.encode(message).finish();
  },
  toProtoMsg(message: Type_MapType): Type_MapTypeProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.MapType",
      value: Type_MapType.encode(message).finish()
    };
  }
};
function createBaseType_FunctionType(): Type_FunctionType {
  return {
    resultType: undefined,
    argTypes: []
  };
}
export const Type_FunctionType = {
  typeUrl: "/google.api.expr.v1alpha1.FunctionType",
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
  fromPartial(object: DeepPartial<Type_FunctionType>): Type_FunctionType {
    const message = createBaseType_FunctionType();
    if (object.resultType !== undefined && object.resultType !== null) {
      message.resultType = Type.fromPartial(object.resultType);
    }
    message.argTypes = object.argTypes?.map(e => Type.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: Type_FunctionTypeAmino): Type_FunctionType {
    const message = createBaseType_FunctionType();
    if (object.result_type !== undefined && object.result_type !== null) {
      message.resultType = Type.fromAmino(object.result_type);
    }
    message.argTypes = object.arg_types?.map(e => Type.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Type_FunctionType): Type_FunctionTypeAmino {
    const obj: any = {};
    obj.result_type = message.resultType ? Type.toAmino(message.resultType) : undefined;
    if (message.argTypes) {
      obj.arg_types = message.argTypes.map(e => e ? Type.toAmino(e) : undefined);
    } else {
      obj.arg_types = [];
    }
    return obj;
  },
  fromAminoMsg(object: Type_FunctionTypeAminoMsg): Type_FunctionType {
    return Type_FunctionType.fromAmino(object.value);
  },
  fromProtoMsg(message: Type_FunctionTypeProtoMsg): Type_FunctionType {
    return Type_FunctionType.decode(message.value);
  },
  toProto(message: Type_FunctionType): Uint8Array {
    return Type_FunctionType.encode(message).finish();
  },
  toProtoMsg(message: Type_FunctionType): Type_FunctionTypeProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.FunctionType",
      value: Type_FunctionType.encode(message).finish()
    };
  }
};
function createBaseType_AbstractType(): Type_AbstractType {
  return {
    name: "",
    parameterTypes: []
  };
}
export const Type_AbstractType = {
  typeUrl: "/google.api.expr.v1alpha1.AbstractType",
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
  fromPartial(object: DeepPartial<Type_AbstractType>): Type_AbstractType {
    const message = createBaseType_AbstractType();
    message.name = object.name ?? "";
    message.parameterTypes = object.parameterTypes?.map(e => Type.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: Type_AbstractTypeAmino): Type_AbstractType {
    const message = createBaseType_AbstractType();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.parameterTypes = object.parameter_types?.map(e => Type.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Type_AbstractType): Type_AbstractTypeAmino {
    const obj: any = {};
    obj.name = message.name;
    if (message.parameterTypes) {
      obj.parameter_types = message.parameterTypes.map(e => e ? Type.toAmino(e) : undefined);
    } else {
      obj.parameter_types = [];
    }
    return obj;
  },
  fromAminoMsg(object: Type_AbstractTypeAminoMsg): Type_AbstractType {
    return Type_AbstractType.fromAmino(object.value);
  },
  fromProtoMsg(message: Type_AbstractTypeProtoMsg): Type_AbstractType {
    return Type_AbstractType.decode(message.value);
  },
  toProto(message: Type_AbstractType): Uint8Array {
    return Type_AbstractType.encode(message).finish();
  },
  toProtoMsg(message: Type_AbstractType): Type_AbstractTypeProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.AbstractType",
      value: Type_AbstractType.encode(message).finish()
    };
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
  typeUrl: "/google.api.expr.v1alpha1.Decl",
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
  fromAmino(object: DeclAmino): Decl {
    const message = createBaseDecl();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.ident !== undefined && object.ident !== null) {
      message.ident = Decl_IdentDecl.fromAmino(object.ident);
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = Decl_FunctionDecl.fromAmino(object.function);
    }
    return message;
  },
  toAmino(message: Decl): DeclAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.ident = message.ident ? Decl_IdentDecl.toAmino(message.ident) : undefined;
    obj.function = message.function ? Decl_FunctionDecl.toAmino(message.function) : undefined;
    return obj;
  },
  fromAminoMsg(object: DeclAminoMsg): Decl {
    return Decl.fromAmino(object.value);
  },
  fromProtoMsg(message: DeclProtoMsg): Decl {
    return Decl.decode(message.value);
  },
  toProto(message: Decl): Uint8Array {
    return Decl.encode(message).finish();
  },
  toProtoMsg(message: Decl): DeclProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Decl",
      value: Decl.encode(message).finish()
    };
  }
};
function createBaseDecl_IdentDecl(): Decl_IdentDecl {
  return {
    type: undefined,
    value: undefined,
    doc: ""
  };
}
export const Decl_IdentDecl = {
  typeUrl: "/google.api.expr.v1alpha1.IdentDecl",
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
  fromAmino(object: Decl_IdentDeclAmino): Decl_IdentDecl {
    const message = createBaseDecl_IdentDecl();
    if (object.type !== undefined && object.type !== null) {
      message.type = Type.fromAmino(object.type);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Constant.fromAmino(object.value);
    }
    if (object.doc !== undefined && object.doc !== null) {
      message.doc = object.doc;
    }
    return message;
  },
  toAmino(message: Decl_IdentDecl): Decl_IdentDeclAmino {
    const obj: any = {};
    obj.type = message.type ? Type.toAmino(message.type) : undefined;
    obj.value = message.value ? Constant.toAmino(message.value) : undefined;
    obj.doc = message.doc;
    return obj;
  },
  fromAminoMsg(object: Decl_IdentDeclAminoMsg): Decl_IdentDecl {
    return Decl_IdentDecl.fromAmino(object.value);
  },
  fromProtoMsg(message: Decl_IdentDeclProtoMsg): Decl_IdentDecl {
    return Decl_IdentDecl.decode(message.value);
  },
  toProto(message: Decl_IdentDecl): Uint8Array {
    return Decl_IdentDecl.encode(message).finish();
  },
  toProtoMsg(message: Decl_IdentDecl): Decl_IdentDeclProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.IdentDecl",
      value: Decl_IdentDecl.encode(message).finish()
    };
  }
};
function createBaseDecl_FunctionDecl(): Decl_FunctionDecl {
  return {
    overloads: []
  };
}
export const Decl_FunctionDecl = {
  typeUrl: "/google.api.expr.v1alpha1.FunctionDecl",
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
  fromPartial(object: DeepPartial<Decl_FunctionDecl>): Decl_FunctionDecl {
    const message = createBaseDecl_FunctionDecl();
    message.overloads = object.overloads?.map(e => Decl_FunctionDecl_Overload.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: Decl_FunctionDeclAmino): Decl_FunctionDecl {
    const message = createBaseDecl_FunctionDecl();
    message.overloads = object.overloads?.map(e => Decl_FunctionDecl_Overload.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Decl_FunctionDecl): Decl_FunctionDeclAmino {
    const obj: any = {};
    if (message.overloads) {
      obj.overloads = message.overloads.map(e => e ? Decl_FunctionDecl_Overload.toAmino(e) : undefined);
    } else {
      obj.overloads = [];
    }
    return obj;
  },
  fromAminoMsg(object: Decl_FunctionDeclAminoMsg): Decl_FunctionDecl {
    return Decl_FunctionDecl.fromAmino(object.value);
  },
  fromProtoMsg(message: Decl_FunctionDeclProtoMsg): Decl_FunctionDecl {
    return Decl_FunctionDecl.decode(message.value);
  },
  toProto(message: Decl_FunctionDecl): Uint8Array {
    return Decl_FunctionDecl.encode(message).finish();
  },
  toProtoMsg(message: Decl_FunctionDecl): Decl_FunctionDeclProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.FunctionDecl",
      value: Decl_FunctionDecl.encode(message).finish()
    };
  }
};
function createBaseDecl_FunctionDecl_Overload(): Decl_FunctionDecl_Overload {
  return {
    overloadId: "",
    params: [],
    typeParams: [],
    resultType: undefined,
    isInstanceFunction: false,
    doc: ""
  };
}
export const Decl_FunctionDecl_Overload = {
  typeUrl: "/google.api.expr.v1alpha1.Overload",
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
  fromAmino(object: Decl_FunctionDecl_OverloadAmino): Decl_FunctionDecl_Overload {
    const message = createBaseDecl_FunctionDecl_Overload();
    if (object.overload_id !== undefined && object.overload_id !== null) {
      message.overloadId = object.overload_id;
    }
    message.params = object.params?.map(e => Type.fromAmino(e)) || [];
    message.typeParams = object.type_params?.map(e => e) || [];
    if (object.result_type !== undefined && object.result_type !== null) {
      message.resultType = Type.fromAmino(object.result_type);
    }
    if (object.is_instance_function !== undefined && object.is_instance_function !== null) {
      message.isInstanceFunction = object.is_instance_function;
    }
    if (object.doc !== undefined && object.doc !== null) {
      message.doc = object.doc;
    }
    return message;
  },
  toAmino(message: Decl_FunctionDecl_Overload): Decl_FunctionDecl_OverloadAmino {
    const obj: any = {};
    obj.overload_id = message.overloadId;
    if (message.params) {
      obj.params = message.params.map(e => e ? Type.toAmino(e) : undefined);
    } else {
      obj.params = [];
    }
    if (message.typeParams) {
      obj.type_params = message.typeParams.map(e => e);
    } else {
      obj.type_params = [];
    }
    obj.result_type = message.resultType ? Type.toAmino(message.resultType) : undefined;
    obj.is_instance_function = message.isInstanceFunction;
    obj.doc = message.doc;
    return obj;
  },
  fromAminoMsg(object: Decl_FunctionDecl_OverloadAminoMsg): Decl_FunctionDecl_Overload {
    return Decl_FunctionDecl_Overload.fromAmino(object.value);
  },
  fromProtoMsg(message: Decl_FunctionDecl_OverloadProtoMsg): Decl_FunctionDecl_Overload {
    return Decl_FunctionDecl_Overload.decode(message.value);
  },
  toProto(message: Decl_FunctionDecl_Overload): Uint8Array {
    return Decl_FunctionDecl_Overload.encode(message).finish();
  },
  toProtoMsg(message: Decl_FunctionDecl_Overload): Decl_FunctionDecl_OverloadProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Overload",
      value: Decl_FunctionDecl_Overload.encode(message).finish()
    };
  }
};
function createBaseReference(): Reference {
  return {
    name: "",
    overloadId: [],
    value: undefined
  };
}
export const Reference = {
  typeUrl: "/google.api.expr.v1alpha1.Reference",
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
  fromPartial(object: DeepPartial<Reference>): Reference {
    const message = createBaseReference();
    message.name = object.name ?? "";
    message.overloadId = object.overloadId?.map(e => e) || [];
    if (object.value !== undefined && object.value !== null) {
      message.value = Constant.fromPartial(object.value);
    }
    return message;
  },
  fromAmino(object: ReferenceAmino): Reference {
    const message = createBaseReference();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.overloadId = object.overload_id?.map(e => e) || [];
    if (object.value !== undefined && object.value !== null) {
      message.value = Constant.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: Reference): ReferenceAmino {
    const obj: any = {};
    obj.name = message.name;
    if (message.overloadId) {
      obj.overload_id = message.overloadId.map(e => e);
    } else {
      obj.overload_id = [];
    }
    obj.value = message.value ? Constant.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: ReferenceAminoMsg): Reference {
    return Reference.fromAmino(object.value);
  },
  fromProtoMsg(message: ReferenceProtoMsg): Reference {
    return Reference.decode(message.value);
  },
  toProto(message: Reference): Uint8Array {
    return Reference.encode(message).finish();
  },
  toProtoMsg(message: Reference): ReferenceProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Reference",
      value: Reference.encode(message).finish()
    };
  }
};