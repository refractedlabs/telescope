import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "tendermint.libs.bits";
export interface BitArray {
  bits: bigint;
  elems: bigint[];
}
export interface BitArrayProtoMsg {
  typeUrl: "/tendermint.libs.bits.BitArray";
  value: Uint8Array;
}
export interface BitArrayAmino {
  bits?: string;
  elems?: string[];
}
export interface BitArraySDKType {
  bits: bigint;
  elems: bigint[];
}
function createBaseBitArray(): BitArray {
  return {
    bits: BigInt(0),
    elems: []
  };
}
export const BitArray = {
  typeUrl: "/tendermint.libs.bits.BitArray",
  encode(message: BitArray, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bits !== BigInt(0)) {
      writer.uint32(8).int64(message.bits);
    }
    writer.uint32(18).fork();
    for (const v of message.elems) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): BitArray {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBitArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bits = reader.int64();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.elems.push(reader.uint64());
            }
          } else {
            message.elems.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BitArray {
    const obj = createBaseBitArray();
    if (isSet(object.bits)) obj.bits = BigInt(object.bits.toString());
    if (Array.isArray(object?.elems)) obj.elems = object.elems.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: BitArray): unknown {
    const obj: any = {};
    message.bits !== undefined && (obj.bits = (message.bits || BigInt(0)).toString());
    if (message.elems) {
      obj.elems = message.elems.map(e => (e || BigInt(0)).toString());
    } else {
      obj.elems = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<BitArray>): BitArray {
    const message = createBaseBitArray();
    if (object.bits !== undefined && object.bits !== null) {
      message.bits = BigInt(object.bits.toString());
    }
    message.elems = object.elems?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromSDK(object: BitArraySDKType): BitArray {
    return {
      bits: object?.bits,
      elems: Array.isArray(object?.elems) ? object.elems.map((e: any) => e) : []
    };
  },
  toSDK(message: BitArray): BitArraySDKType {
    const obj: any = {};
    obj.bits = message.bits;
    if (message.elems) {
      obj.elems = message.elems.map(e => e);
    } else {
      obj.elems = [];
    }
    return obj;
  },
  fromAmino(object: BitArrayAmino): BitArray {
    const message = createBaseBitArray();
    if (object.bits !== undefined && object.bits !== null) {
      message.bits = BigInt(object.bits);
    }
    message.elems = object.elems?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: BitArray, useInterfaces: boolean = true): BitArrayAmino {
    const obj: any = {};
    obj.bits = message.bits ? message.bits.toString() : undefined;
    if (message.elems) {
      obj.elems = message.elems.map(e => e.toString());
    } else {
      obj.elems = [];
    }
    return obj;
  },
  fromProtoMsg(message: BitArrayProtoMsg, useInterfaces: boolean = true): BitArray {
    return BitArray.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: BitArray): Uint8Array {
    return BitArray.encode(message).finish();
  },
  toProtoMsg(message: BitArray): BitArrayProtoMsg {
    return {
      typeUrl: "/tendermint.libs.bits.BitArray",
      value: BitArray.encode(message).finish()
    };
  }
};