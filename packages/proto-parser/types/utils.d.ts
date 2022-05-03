import { ProtoRoot } from './types';
export declare const getNestedProto: (root: ProtoRoot) => any;
export declare const getServices: (root: ProtoRoot) => any[];
export declare const getTypes: (root: ProtoRoot) => any[];
export declare const getEnums: (root: ProtoRoot) => any[];
export declare const getObjectName: (name: string, scope?: string[]) => string;
export declare const NATIVE_TYPES: string[];
export declare const instanceType: (obj: any) => {
    type: string;
    name?: undefined;
} | {
    name: any;
    type: string;
};
