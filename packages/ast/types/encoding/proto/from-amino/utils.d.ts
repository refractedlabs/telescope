import * as t from '@babel/types';
import { FromAminoJSONMethod } from './index';
import { ProtoParseContext } from '../../context';
import { ProtoType } from '@cosmology/types';
export declare const fromAminoJSON: {
    scalar(args: FromAminoJSONMethod): t.ObjectProperty;
    string(args: FromAminoJSONMethod): t.ObjectProperty;
    number(args: FromAminoJSONMethod): t.ObjectProperty;
    double(args: FromAminoJSONMethod): t.ObjectProperty;
    float(args: FromAminoJSONMethod): t.ObjectProperty;
    int32(args: FromAminoJSONMethod): t.ObjectProperty;
    sint32(args: FromAminoJSONMethod): t.ObjectProperty;
    uint32(args: FromAminoJSONMethod): t.ObjectProperty;
    fixed32(args: FromAminoJSONMethod): t.ObjectProperty;
    sfixed32(args: FromAminoJSONMethod): t.ObjectProperty;
    bool(args: FromAminoJSONMethod): t.ObjectProperty;
    long(args: FromAminoJSONMethod): t.ObjectProperty;
    int64(args: FromAminoJSONMethod): t.ObjectProperty;
    uint64(args: FromAminoJSONMethod): t.ObjectProperty;
    sint64(args: FromAminoJSONMethod): t.ObjectProperty;
    fixed64(args: FromAminoJSONMethod): t.ObjectProperty;
    sfixed64(args: FromAminoJSONMethod): t.ObjectProperty;
    rawBytes(args: FromAminoJSONMethod): t.ObjectProperty;
    wasmByteCode(args: FromAminoJSONMethod): t.ObjectProperty;
    pubkey(args: FromAminoJSONMethod): t.ObjectProperty;
    protoType(args: FromAminoJSONMethod): t.ObjectProperty;
    anyType(args: FromAminoJSONMethod): t.ObjectProperty;
    type(args: FromAminoJSONMethod): t.ObjectProperty;
    enum(args: FromAminoJSONMethod): t.ObjectProperty;
    bytes(args: FromAminoJSONMethod): t.ObjectProperty;
    duration(args: FromAminoJSONMethod): t.ObjectProperty;
    timestamp(args: FromAminoJSONMethod): t.ObjectProperty;
    timestampDate(args: FromAminoJSONMethod): t.ObjectProperty;
    keyHash(args: FromAminoJSONMethod): t.ObjectProperty;
    array(args: FromAminoJSONMethod, expr: t.Expression): t.ObjectProperty;
};
export declare const arrayTypes: {
    scalar(): t.Identifier;
    string(): t.Identifier;
    bool(): t.Identifier;
    bytes(args: FromAminoJSONMethod): t.CallExpression;
    long(args: FromAminoJSONMethod): t.Expression;
    uint64(args: FromAminoJSONMethod): t.Expression;
    int64(args: FromAminoJSONMethod): t.Expression;
    sint64(args: FromAminoJSONMethod): t.Expression;
    fixed64(args: FromAminoJSONMethod): t.Expression;
    sfixed64(args: FromAminoJSONMethod): t.Expression;
    number(): t.Identifier;
    uint32(): t.Identifier;
    int32(): t.Identifier;
    sint32(): t.Identifier;
    fixed32(): t.Identifier;
    sfixed32(): t.Identifier;
    double(): t.Identifier;
    float(): t.Identifier;
    enum(args: FromAminoJSONMethod): t.CallExpression;
    anyType(args: FromAminoJSONMethod): t.CallExpression;
    protoType(args: FromAminoJSONMethod): t.CallExpression;
    type(args: FromAminoJSONMethod): t.CallExpression;
};
export declare const fromAminoMessages: {
    anyType(): t.ReturnStatement[];
    timestamp(context: ProtoParseContext, name: string, proto: ProtoType): t.ReturnStatement[];
    height(context: ProtoParseContext, name: string, proto: ProtoType): t.ReturnStatement[];
    duration(context: ProtoParseContext, name: string, proto: ProtoType): (t.VariableDeclaration | t.ReturnStatement)[];
};
