/**
* This file and any referenced files were automatically generated by @cosmology/telescope@latest
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or npm scripts command that is used to regenerate this bundle.
*/


export type JsonSafe<T> = T extends Uint8Array | bigint | Date
  ? string
  : T extends Array<infer U>
  ? Array<JsonSafe<U>>
  : T extends object
  ? { [K in keyof T]: JsonSafe<T[K]> }
  : T;
