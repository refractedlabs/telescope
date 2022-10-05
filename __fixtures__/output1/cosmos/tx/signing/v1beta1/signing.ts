import { CompactBitArray, CompactBitArraySDKType } from "../../../crypto/multisig/v1beta1/multisig";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "cosmos.tx.signing.v1beta1";

/**
 * SignMode represents a signing mode with its own security guarantees.
 *
 * This enum should be considered a registry of all known sign modes
 * in the Cosmos ecosystem. Apps are not expected to support all known
 * sign modes. Apps that would like to support custom  sign modes are
 * encouraged to open a small PR against this file to add a new case
 * to this SignMode enum describing their sign mode so that different
 * apps have a consistent version of this enum.
 */
export enum SignMode {
  /**
   * SIGN_MODE_UNSPECIFIED - SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
   * rejected.
   */
  SIGN_MODE_UNSPECIFIED = 0,

  /**
   * SIGN_MODE_DIRECT - SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
   * verified with raw bytes from Tx.
   */
  SIGN_MODE_DIRECT = 1,

  /**
   * SIGN_MODE_TEXTUAL - SIGN_MODE_TEXTUAL is a future signing mode that will verify some
   * human-readable textual representation on top of the binary representation
   * from SIGN_MODE_DIRECT. It is currently not supported.
   */
  SIGN_MODE_TEXTUAL = 2,

  /**
   * SIGN_MODE_DIRECT_AUX - SIGN_MODE_DIRECT_AUX specifies a signing mode which uses
   * SignDocDirectAux. As opposed to SIGN_MODE_DIRECT, this sign mode does not
   * require signers signing over other signers' `signer_info`. It also allows
   * for adding Tips in transactions.
   *
   * Since: cosmos-sdk 0.46
   */
  SIGN_MODE_DIRECT_AUX = 3,

  /**
   * SIGN_MODE_LEGACY_AMINO_JSON - SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
   * Amino JSON and will be removed in the future.
   */
  SIGN_MODE_LEGACY_AMINO_JSON = 127,
  UNRECOGNIZED = -1,
}

/**
 * SignMode represents a signing mode with its own security guarantees.
 *
 * This enum should be considered a registry of all known sign modes
 * in the Cosmos ecosystem. Apps are not expected to support all known
 * sign modes. Apps that would like to support custom  sign modes are
 * encouraged to open a small PR against this file to add a new case
 * to this SignMode enum describing their sign mode so that different
 * apps have a consistent version of this enum.
 */
export enum SignModeSDKType {
  /**
   * SIGN_MODE_UNSPECIFIED - SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
   * rejected.
   */
  SIGN_MODE_UNSPECIFIED = 0,

  /**
   * SIGN_MODE_DIRECT - SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
   * verified with raw bytes from Tx.
   */
  SIGN_MODE_DIRECT = 1,

  /**
   * SIGN_MODE_TEXTUAL - SIGN_MODE_TEXTUAL is a future signing mode that will verify some
   * human-readable textual representation on top of the binary representation
   * from SIGN_MODE_DIRECT. It is currently not supported.
   */
  SIGN_MODE_TEXTUAL = 2,

  /**
   * SIGN_MODE_DIRECT_AUX - SIGN_MODE_DIRECT_AUX specifies a signing mode which uses
   * SignDocDirectAux. As opposed to SIGN_MODE_DIRECT, this sign mode does not
   * require signers signing over other signers' `signer_info`. It also allows
   * for adding Tips in transactions.
   *
   * Since: cosmos-sdk 0.46
   */
  SIGN_MODE_DIRECT_AUX = 3,

  /**
   * SIGN_MODE_LEGACY_AMINO_JSON - SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
   * Amino JSON and will be removed in the future.
   */
  SIGN_MODE_LEGACY_AMINO_JSON = 127,
  UNRECOGNIZED = -1,
}
export function signModeFromJSON(object: any): SignMode {
  switch (object) {
    case 0:
    case "SIGN_MODE_UNSPECIFIED":
      return SignMode.SIGN_MODE_UNSPECIFIED;

    case 1:
    case "SIGN_MODE_DIRECT":
      return SignMode.SIGN_MODE_DIRECT;

    case 2:
    case "SIGN_MODE_TEXTUAL":
      return SignMode.SIGN_MODE_TEXTUAL;

    case 3:
    case "SIGN_MODE_DIRECT_AUX":
      return SignMode.SIGN_MODE_DIRECT_AUX;

    case 127:
    case "SIGN_MODE_LEGACY_AMINO_JSON":
      return SignMode.SIGN_MODE_LEGACY_AMINO_JSON;

    case -1:
    case "UNRECOGNIZED":
    default:
      return SignMode.UNRECOGNIZED;
  }
}
export function signModeToJSON(object: SignMode): string {
  switch (object) {
    case SignMode.SIGN_MODE_UNSPECIFIED:
      return "SIGN_MODE_UNSPECIFIED";

    case SignMode.SIGN_MODE_DIRECT:
      return "SIGN_MODE_DIRECT";

    case SignMode.SIGN_MODE_TEXTUAL:
      return "SIGN_MODE_TEXTUAL";

    case SignMode.SIGN_MODE_DIRECT_AUX:
      return "SIGN_MODE_DIRECT_AUX";

    case SignMode.SIGN_MODE_LEGACY_AMINO_JSON:
      return "SIGN_MODE_LEGACY_AMINO_JSON";

    case SignMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** SignatureDescriptors wraps multiple SignatureDescriptor's. */
export interface SignatureDescriptors {
  /** signatures are the signature descriptors */
  signatures: SignatureDescriptor[];
}

/** SignatureDescriptors wraps multiple SignatureDescriptor's. */
export interface SignatureDescriptorsSDKType {
  /** signatures are the signature descriptors */
  signatures: SignatureDescriptorSDKType[];
}

/**
 * SignatureDescriptor is a convenience type which represents the full data for
 * a signature including the public key of the signer, signing modes and the
 * signature itself. It is primarily used for coordinating signatures between
 * clients.
 */
export interface SignatureDescriptor {
  /** public_key is the public key of the signer */
  publicKey: Any;
  data: SignatureDescriptor_Data;

  /**
   * sequence is the sequence of the account, which describes the
   * number of committed transactions signed by a given address. It is used to prevent
   * replay attacks.
   */
  sequence: Long;
}

/**
 * SignatureDescriptor is a convenience type which represents the full data for
 * a signature including the public key of the signer, signing modes and the
 * signature itself. It is primarily used for coordinating signatures between
 * clients.
 */
export interface SignatureDescriptorSDKType {
  /** public_key is the public key of the signer */
  public_key: AnySDKType;
  data: SignatureDescriptor_DataSDKType;

  /**
   * sequence is the sequence of the account, which describes the
   * number of committed transactions signed by a given address. It is used to prevent
   * replay attacks.
   */
  sequence: Long;
}

/** Data represents signature data */
export interface SignatureDescriptor_Data {
  /** single represents a single signer */
  single?: SignatureDescriptor_Data_Single;

  /** multi represents a multisig signer */
  multi?: SignatureDescriptor_Data_Multi;
}

/** Data represents signature data */
export interface SignatureDescriptor_DataSDKType {
  /** single represents a single signer */
  single?: SignatureDescriptor_Data_SingleSDKType;

  /** multi represents a multisig signer */
  multi?: SignatureDescriptor_Data_MultiSDKType;
}

/** Single is the signature data for a single signer */
export interface SignatureDescriptor_Data_Single {
  /** mode is the signing mode of the single signer */
  mode: SignMode;

  /** signature is the raw signature bytes */
  signature: Uint8Array;
}

/** Single is the signature data for a single signer */
export interface SignatureDescriptor_Data_SingleSDKType {
  /** mode is the signing mode of the single signer */
  mode: SignModeSDKType;

  /** signature is the raw signature bytes */
  signature: Uint8Array;
}

/** Multi is the signature data for a multisig public key */
export interface SignatureDescriptor_Data_Multi {
  /** bitarray specifies which keys within the multisig are signing */
  bitarray: CompactBitArray;

  /** signatures is the signatures of the multi-signature */
  signatures: SignatureDescriptor_Data[];
}

/** Multi is the signature data for a multisig public key */
export interface SignatureDescriptor_Data_MultiSDKType {
  /** bitarray specifies which keys within the multisig are signing */
  bitarray: CompactBitArraySDKType;

  /** signatures is the signatures of the multi-signature */
  signatures: SignatureDescriptor_DataSDKType[];
}

function createBaseSignatureDescriptors(): SignatureDescriptors {
  return {
    signatures: []
  };
}

export const SignatureDescriptors = {
  encode(message: SignatureDescriptors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signatures) {
      SignatureDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptors {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptors();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signatures.push(SignatureDescriptor.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SignatureDescriptors {
    return {
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignatureDescriptor.fromJSON(e)) : []
    };
  },

  toJSON(message: SignatureDescriptors): unknown {
    const obj: any = {};

    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? SignatureDescriptor.toJSON(e) : undefined);
    } else {
      obj.signatures = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<SignatureDescriptors>): SignatureDescriptors {
    const message = createBaseSignatureDescriptors();
    message.signatures = object.signatures?.map(e => SignatureDescriptor.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: SignatureDescriptorsSDKType): SignatureDescriptors {
    return {
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignatureDescriptor.fromSDK(e)) : []
    };
  },

  toSDK(message: SignatureDescriptors): SignatureDescriptorsSDKType {
    const obj: any = {};

    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? SignatureDescriptor.toSDK(e) : undefined);
    } else {
      obj.signatures = [];
    }

    return obj;
  }

};

function createBaseSignatureDescriptor(): SignatureDescriptor {
  return {
    publicKey: undefined,
    data: undefined,
    sequence: Long.UZERO
  };
}

export const SignatureDescriptor = {
  encode(message: SignatureDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }

    if (message.data !== undefined) {
      SignatureDescriptor_Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.data = SignatureDescriptor_Data.decode(reader, reader.uint32());
          break;

        case 3:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SignatureDescriptor {
    return {
      publicKey: isSet(object.publicKey) ? Any.fromJSON(object.publicKey) : undefined,
      data: isSet(object.data) ? SignatureDescriptor_Data.fromJSON(object.data) : undefined,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },

  toJSON(message: SignatureDescriptor): unknown {
    const obj: any = {};
    message.publicKey !== undefined && (obj.publicKey = message.publicKey ? Any.toJSON(message.publicKey) : undefined);
    message.data !== undefined && (obj.data = message.data ? SignatureDescriptor_Data.toJSON(message.data) : undefined);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<SignatureDescriptor>): SignatureDescriptor {
    const message = createBaseSignatureDescriptor();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
    message.data = object.data !== undefined && object.data !== null ? SignatureDescriptor_Data.fromPartial(object.data) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  },

  fromSDK(object: SignatureDescriptorSDKType): SignatureDescriptor {
    return {
      publicKey: isSet(object.public_key) ? Any.fromSDK(object.public_key) : undefined,
      data: isSet(object.data) ? SignatureDescriptor_Data.fromSDK(object.data) : undefined,
      sequence: isSet(object.sequence) ? object.sequence : undefined
    };
  },

  toSDK(message: SignatureDescriptor): SignatureDescriptorSDKType {
    const obj: any = {};
    message.publicKey !== undefined && (obj.public_key = message.publicKey ? Any.toSDK(message.publicKey) : undefined);
    message.data !== undefined && (obj.data = message.data ? SignatureDescriptor_Data.toSDK(message.data) : undefined);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    return obj;
  }

};

function createBaseSignatureDescriptor_Data(): SignatureDescriptor_Data {
  return {
    single: undefined,
    multi: undefined
  };
}

export const SignatureDescriptor_Data = {
  encode(message: SignatureDescriptor_Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.single !== undefined) {
      SignatureDescriptor_Data_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }

    if (message.multi !== undefined) {
      SignatureDescriptor_Data_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptor_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor_Data();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.single = SignatureDescriptor_Data_Single.decode(reader, reader.uint32());
          break;

        case 2:
          message.multi = SignatureDescriptor_Data_Multi.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SignatureDescriptor_Data {
    return {
      single: isSet(object.single) ? SignatureDescriptor_Data_Single.fromJSON(object.single) : undefined,
      multi: isSet(object.multi) ? SignatureDescriptor_Data_Multi.fromJSON(object.multi) : undefined
    };
  },

  toJSON(message: SignatureDescriptor_Data): unknown {
    const obj: any = {};
    message.single !== undefined && (obj.single = message.single ? SignatureDescriptor_Data_Single.toJSON(message.single) : undefined);
    message.multi !== undefined && (obj.multi = message.multi ? SignatureDescriptor_Data_Multi.toJSON(message.multi) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SignatureDescriptor_Data>): SignatureDescriptor_Data {
    const message = createBaseSignatureDescriptor_Data();
    message.single = object.single !== undefined && object.single !== null ? SignatureDescriptor_Data_Single.fromPartial(object.single) : undefined;
    message.multi = object.multi !== undefined && object.multi !== null ? SignatureDescriptor_Data_Multi.fromPartial(object.multi) : undefined;
    return message;
  },

  fromSDK(object: SignatureDescriptor_DataSDKType): SignatureDescriptor_Data {
    return {
      single: isSet(object.single) ? SignatureDescriptor_Data_Single.fromSDK(object.single) : undefined,
      multi: isSet(object.multi) ? SignatureDescriptor_Data_Multi.fromSDK(object.multi) : undefined
    };
  },

  toSDK(message: SignatureDescriptor_Data): SignatureDescriptor_DataSDKType {
    const obj: any = {};
    message.single !== undefined && (obj.single = message.single ? SignatureDescriptor_Data_Single.toSDK(message.single) : undefined);
    message.multi !== undefined && (obj.multi = message.multi ? SignatureDescriptor_Data_Multi.toSDK(message.multi) : undefined);
    return obj;
  }

};

function createBaseSignatureDescriptor_Data_Single(): SignatureDescriptor_Data_Single {
  return {
    mode: 0,
    signature: new Uint8Array()
  };
}

export const SignatureDescriptor_Data_Single = {
  encode(message: SignatureDescriptor_Data_Single, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }

    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptor_Data_Single {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor_Data_Single();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.mode = (reader.int32() as any);
          break;

        case 2:
          message.signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SignatureDescriptor_Data_Single {
    return {
      mode: isSet(object.mode) ? signModeFromJSON(object.mode) : 0,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },

  toJSON(message: SignatureDescriptor_Data_Single): unknown {
    const obj: any = {};
    message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<SignatureDescriptor_Data_Single>): SignatureDescriptor_Data_Single {
    const message = createBaseSignatureDescriptor_Data_Single();
    message.mode = object.mode ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },

  fromSDK(object: SignatureDescriptor_Data_SingleSDKType): SignatureDescriptor_Data_Single {
    return {
      mode: isSet(object.mode) ? signModeFromJSON(object.mode) : 0,
      signature: isSet(object.signature) ? object.signature : undefined
    };
  },

  toSDK(message: SignatureDescriptor_Data_Single): SignatureDescriptor_Data_SingleSDKType {
    const obj: any = {};
    message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  }

};

function createBaseSignatureDescriptor_Data_Multi(): SignatureDescriptor_Data_Multi {
  return {
    bitarray: undefined,
    signatures: []
  };
}

export const SignatureDescriptor_Data_Multi = {
  encode(message: SignatureDescriptor_Data_Multi, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bitarray !== undefined) {
      CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.signatures) {
      SignatureDescriptor_Data.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptor_Data_Multi {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor_Data_Multi();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bitarray = CompactBitArray.decode(reader, reader.uint32());
          break;

        case 2:
          message.signatures.push(SignatureDescriptor_Data.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SignatureDescriptor_Data_Multi {
    return {
      bitarray: isSet(object.bitarray) ? CompactBitArray.fromJSON(object.bitarray) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignatureDescriptor_Data.fromJSON(e)) : []
    };
  },

  toJSON(message: SignatureDescriptor_Data_Multi): unknown {
    const obj: any = {};
    message.bitarray !== undefined && (obj.bitarray = message.bitarray ? CompactBitArray.toJSON(message.bitarray) : undefined);

    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? SignatureDescriptor_Data.toJSON(e) : undefined);
    } else {
      obj.signatures = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<SignatureDescriptor_Data_Multi>): SignatureDescriptor_Data_Multi {
    const message = createBaseSignatureDescriptor_Data_Multi();
    message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : undefined;
    message.signatures = object.signatures?.map(e => SignatureDescriptor_Data.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: SignatureDescriptor_Data_MultiSDKType): SignatureDescriptor_Data_Multi {
    return {
      bitarray: isSet(object.bitarray) ? CompactBitArray.fromSDK(object.bitarray) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignatureDescriptor_Data.fromSDK(e)) : []
    };
  },

  toSDK(message: SignatureDescriptor_Data_Multi): SignatureDescriptor_Data_MultiSDKType {
    const obj: any = {};
    message.bitarray !== undefined && (obj.bitarray = message.bitarray ? CompactBitArray.toSDK(message.bitarray) : undefined);

    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? SignatureDescriptor_Data.toSDK(e) : undefined);
    } else {
      obj.signatures = [];
    }

    return obj;
  }

};