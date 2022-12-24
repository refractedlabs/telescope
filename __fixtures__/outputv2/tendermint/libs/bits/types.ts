import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "tendermint.libs.bits";
export interface BitArray {
  bits: Long;
  elems: Long[];
}
export interface BitArrayProtoType {
  typeUrl: "/tendermint.libs.bits.BitArray";
  value: Uint8Array;
}
export interface BitArrayAmino {
  bits: string;
  elems: string[];
}
export interface BitArrayAminoType {
  type: "/tendermint.libs.bits.BitArray";
  value: BitArrayAmino;
}
export interface BitArraySDKType {
  bits: Long;
  elems: Long[];
}

function createBaseBitArray(): BitArray {
  return {
    bits: Long.ZERO,
    elems: []
  };
}

export const BitArray = {
  encode(message: BitArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.bits.isZero()) {
      writer.uint32(8).int64(message.bits);
    }

    writer.uint32(18).fork();

    for (const v of message.elems) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BitArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBitArray();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bits = (reader.int64() as Long);
          break;

        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.elems.push((reader.uint64() as Long));
            }
          } else {
            message.elems.push((reader.uint64() as Long));
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
    return {
      bits: isSet(object.bits) ? Long.fromValue(object.bits) : Long.ZERO,
      elems: Array.isArray(object?.elems) ? object.elems.map((e: any) => Long.fromValue(e)) : []
    };
  },

  toJSON(message: BitArray): unknown {
    const obj: any = {};
    message.bits !== undefined && (obj.bits = (message.bits || Long.ZERO).toString());

    if (message.elems) {
      obj.elems = message.elems.map(e => (e || Long.UZERO).toString());
    } else {
      obj.elems = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<BitArray>): BitArray {
    const message = createBaseBitArray();
    message.bits = object.bits !== undefined && object.bits !== null ? Long.fromValue(object.bits) : Long.ZERO;
    message.elems = object.elems?.map(e => Long.fromValue(e)) || [];
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
    return {
      bits: Long.fromString(object.bits),
      elems: Array.isArray(object?.elems) ? object.elems.map((e: any) => e) : []
    };
  },

  toAmino(message: BitArray): BitArrayAmino {
    const obj: any = {};
    obj.bits = message.bits ? message.bits.toString() : undefined;

    if (message.elems) {
      obj.elems = message.elems.map(e => e);
    } else {
      obj.elems = [];
    }

    return obj;
  }

};