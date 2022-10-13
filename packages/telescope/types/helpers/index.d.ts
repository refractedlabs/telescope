export declare const helpers = "import * as _m0 from \"protobufjs/minimal\";\nimport * as Long from 'long';\n\nif (_m0.util.Long !== Long) {\n    _m0.util.Long = (Long as any);\n\n    _m0.configure();\n}\n\nexport { Long };\n\ndeclare var self: any | undefined;\ndeclare var window: any | undefined;\ndeclare var global: any | undefined;\nvar globalThis: any = (() => {\n    if (typeof globalThis !== 'undefined') return globalThis;\n    if (typeof self !== 'undefined') return self;\n    if (typeof window !== 'undefined') return window;\n    if (typeof global !== 'undefined') return global;\n    throw 'Unable to locate global object';\n})();\n\nconst atob: (b64: string) => string =\n    globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));\n\nexport function bytesFromBase64(b64: string): Uint8Array {\n    const bin = atob(b64);\n    const arr = new Uint8Array(bin.length);\n    for (let i = 0; i < bin.length; ++i) {\n        arr[i] = bin.charCodeAt(i);\n    }\n    return arr;\n}\n\nconst btoa: (bin: string) => string =\n    globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));\n\nexport function base64FromBytes(arr: Uint8Array): string {\n    const bin: string[] = [];\n    arr.forEach((byte) => {\n        bin.push(String.fromCharCode(byte));\n    });\n    return btoa(bin.join(''));\n}\n\nexport interface AminoHeight {\n    readonly revision_number?: string;\n    readonly revision_height?: string;\n};\n\nexport function omitDefault<T extends string | number | Long>(input: T): T | undefined {\n    if (typeof input === \"string\") {\n        return input === \"\" ? undefined : input;\n    }\n\n    if (typeof input === \"number\") {\n        return input === 0 ? undefined : input;\n    }\n\n    if (Long.isLong(input)) {\n        return input.isZero() ? undefined : input;\n    }\n\n    throw new Error(`Got unsupported type ${typeof input}`);\n};\n\ninterface Duration {\n    /**\n     * Signed seconds of the span of time. Must be from -315,576,000,000\n     * to +315,576,000,000 inclusive. Note: these bounds are computed from:\n     * 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years\n     */\n    seconds: Long;\n    /**\n     * Signed fractions of a second at nanosecond resolution of the span\n     * of time. Durations less than one second are represented with a 0\n     * `seconds` field and a positive or negative `nanos` field. For durations\n     * of one second or more, a non-zero value for the `nanos` field must be\n     * of the same sign as the `seconds` field. Must be from -999,999,999\n     * to +999,999,999 inclusive.\n     */\n\n    nanos: number;\n}\n\nexport function toDuration(duration: string): Duration {\n    return {\n        seconds: Long.fromNumber(Math.floor(parseInt(duration) / 1000000000)),\n        nanos: parseInt(duration) % 1000000000\n    };\n};\n\nexport function fromDuration(duration: Duration): string {\n    return (parseInt(duration.seconds) * 1000000000 + duration.nanos).toString();\n};\n\nexport function isSet(value: any): boolean {\n    return value !== null && value !== undefined;\n};\n\nexport function isObject(value: any): boolean {\n    return typeof value === 'object' && value !== null;\n};\n\nexport interface PageRequest {\n    key: Uint8Array;\n    offset: Long;\n    limit: Long;\n    countTotal: boolean;\n    reverse: boolean;\n};\n\nexport interface PageRequestParams {\n    \"pagination.key\"?: string;\n    \"pagination.offset\"?: string;\n    \"pagination.limit\"?: string;\n    \"pagination.count_total\"?: boolean;\n    \"pagination.reverse\"?: boolean;\n};\n\nexport interface Params {\n    params: PageRequestParams;\n};\n\nexport const setPaginationParams = (options: Params, pagination?: PageRequest) => {\n\n    if (!pagination) {\n        return options;\n    }\n\n    if (typeof pagination?.countTotal !== \"undefined\") {\n        options.params['pagination.count_total'] = pagination.countTotal;\n    }\n    if (typeof pagination?.key !== \"undefined\") {\n        // String to Uint8Array\n        // let uint8arr = new Uint8Array(Buffer.from(data,'base64')); \n\n        // Uint8Array to String\n        options.params['pagination.key'] = Buffer.from(pagination.key).toString('base64');\n    }\n    if (typeof pagination?.limit !== \"undefined\") {\n      options.params[\"pagination.limit\"] = pagination.limit.toString()\n    }\n    if (typeof pagination?.offset !== \"undefined\") {\n      options.params[\"pagination.offset\"] = pagination.offset.toString()\n    }    \n    if (typeof pagination?.reverse !== \"undefined\") {\n        options.params['pagination.reverse'] = pagination.reverse;\n    }\n\n    return options;\n};\n\ntype Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;\n\nexport type DeepPartial<T> = T extends Builtin\n    ? T\n    : T extends Array<infer U>\n    ? Array<DeepPartial<U>>\n    : T extends ReadonlyArray<infer U>\n    ? ReadonlyArray<DeepPartial<U>>\n    : T extends {}\n    ? { [K in keyof T]?: DeepPartial<T[K]> }\n    : Partial<T>;\n\ntype KeysOfUnion<T> = T extends T ? keyof T : never;\nexport type Exact<P, I extends P> = P extends Builtin\n    ? P\n    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;\n\nexport interface Rpc {\n    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;\n};\n\ninterface Timestamp {\n    /**\n     * Represents seconds of UTC time since Unix epoch\n     * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to\n     * 9999-12-31T23:59:59Z inclusive.\n     */\n    seconds: Long;\n    /**\n     * Non-negative fractions of a second at nanosecond resolution. Negative\n     * second values with fractions must still have non-negative nanos values\n     * that count forward in time. Must be from 0 to 999,999,999\n     * inclusive.\n     */\n\n    nanos: number;\n}\n\nexport function toTimestamp(date: Date): Timestamp {\n    const seconds = numberToLong(date.getTime() / 1_000);\n    const nanos = date.getTime() % 1000 * 1000000;\n    return {\n        seconds,\n        nanos\n    };\n};\n\nexport function fromTimestamp(t: Timestamp): Date {\n    let millis = t.seconds.toNumber() * 1000;\n    millis += t.nanos / 1000000;\n    return new Date(millis);\n};\n\nconst fromJSON = (object: any): Timestamp => {\n    return {\n        seconds: isSet(object.seconds) ? Long.fromString(object.seconds) : Long.ZERO,\n        nanos: isSet(object.nanos) ? Number(object.nanos) : 0\n    };\n};\n\nconst timestampFromJSON = (object: any): Timestamp => {\n  return {\n    seconds: isSet(object.seconds) ? Long.fromValue(object.seconds) : Long.ZERO,\n    nanos: isSet(object.nanos) ? Number(object.nanos) : 0,\n  };\n}\n  \nexport function fromJsonTimestamp(o: any): Timestamp {\n  if (o instanceof Date) {\n    return toTimestamp(o);\n  } else if (typeof o === \"string\") {\n    return toTimestamp(new Date(o));\n  } else {\n    return timestampFromJSON(o);\n  }\n}\n  \nfunction numberToLong(number: number) {\n    return Long.fromNumber(number);\n}\n";
