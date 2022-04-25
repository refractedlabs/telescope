import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { ResourceValue } from "../../../akash/base/v1beta1/resourcevalue";
import { Attribute } from "../../../akash/base/v1beta1/attribute";
import { Endpoint } from "../../../akash/base/v1beta1/endpoint";
/** CPU stores resource units and cpu config attributes */
export interface CPU {
    units: ResourceValue;
    attributes: Attribute[];
}
/** Memory stores resource quantity and memory attributes */
export interface Memory {
    quantity: ResourceValue;
    attributes: Attribute[];
}
/** Storage stores resource quantity and storage attributes */
export interface Storage {
    quantity: ResourceValue;
    attributes: Attribute[];
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
    cpu: CPU;
    memory: Memory;
    storage: Storage;
    endpoints: Endpoint[];
}
export declare const CPU: {
    encode(message: CPU, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CPU;
    fromJSON(object: any): CPU;
    toJSON(message: CPU): unknown;
    fromPartial<I extends unknown>(object: I): CPU;
};
export declare const Memory: {
    encode(message: Memory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Memory;
    fromJSON(object: any): Memory;
    toJSON(message: Memory): unknown;
    fromPartial<I extends unknown>(object: I): Memory;
};
export declare const Storage: {
    encode(message: Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Storage;
    fromJSON(object: any): Storage;
    toJSON(message: Storage): unknown;
    fromPartial<I extends unknown>(object: I): Storage;
};
export declare const ResourceUnits: {
    encode(message: ResourceUnits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUnits;
    fromJSON(object: any): ResourceUnits;
    toJSON(message: ResourceUnits): unknown;
    fromPartial<I extends unknown>(object: I): ResourceUnits;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
