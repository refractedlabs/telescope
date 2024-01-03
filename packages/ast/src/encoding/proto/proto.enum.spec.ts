import {
  createProtoEnum,
  createProtoEnumFromJSON,
  createProtoEnumToJSON,
} from "./enums";
import struct from "../../../../../__fixtures__/proto-json/google/protobuf/struct.json";
import { getNestedProto } from "@cosmology/utils";
import { ProtoParseContext } from "@refractedlabs/ast";
import { ProtoRoot } from "@cosmology/types";
import {
  expectCode,
  getTestProtoStore,
  defaultTelescopeOptions,
} from "../../../test-utils";

const store = getTestProtoStore();
store.traverseAll();

it("createProtoEnum", async () => {
  const ref = store.findProto("google/protobuf/struct.proto");
  const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
  expectCode(
    createProtoEnum(
      context,
      "NullValue",
      getNestedProto(struct as unknown as ProtoRoot).NullValue
    )
  );
});

it("createProtoEnumFromJSON", async () => {
  const ref = store.findProto("google/protobuf/struct.proto");
  const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
  expectCode(
    createProtoEnumFromJSON(
      context,
      "NullValue",
      getNestedProto(struct as unknown as ProtoRoot).NullValue
    )
  );
});

it("createProtoEnumToJSON", async () => {
  const ref = store.findProto("google/protobuf/struct.proto");
  const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
  expectCode(
    createProtoEnumToJSON(
      context,
      "NullValue",
      getNestedProto(struct as unknown as ProtoRoot).NullValue
    )
  );
});
