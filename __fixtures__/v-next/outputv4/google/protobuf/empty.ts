import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export const protobufPackage = "google.protobuf";
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 * 
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 * 
 * The JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface Empty {}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 * 
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 * 
 * The JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface EmptySDKType {}
function createBaseEmpty(): Empty {
  return {};
}
export const Empty = {
  typeUrl: "/google.protobuf.Empty",
  encode(_: Empty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Empty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): Empty {
    const obj = createBaseEmpty();
    return obj;
  },
  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<Empty>): Empty {
    const message = createBaseEmpty();
    return message;
  },
  fromSDK(_: EmptySDKType): Empty {
    return {};
  },
  fromSDKJSON(_: any): EmptySDKType {
    return {};
  },
  toSDK(_: Empty): EmptySDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: EmptyAmino): Empty {
    return {};
  },
  toAmino(_: Empty): EmptyAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: EmptyAminoMsg): Empty {
    return Empty.fromAmino(object.value);
  },
  fromProtoMsg(message: EmptyProtoMsg): Empty {
    return Empty.decode(message.value);
  },
  toProto(message: Empty): Uint8Array {
    return Empty.encode(message).finish();
  },
  toProtoMsg(message: Empty): EmptyProtoMsg {
    return {
      typeUrl: "/google.protobuf.Empty",
      value: Empty.encode(message).finish()
    };
  }
};