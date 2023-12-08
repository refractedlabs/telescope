import { CommitmentProof, CommitmentProofAmino, CommitmentProofSDKType } from "../../../../confio/proofs";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../../helpers";
export const protobufPackage = "ibc.core.commitment.v1";
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRoot {
  hash: Uint8Array;
}
export interface MerkleRootProtoMsg {
  typeUrl: "/ibc.core.commitment.v1.MerkleRoot";
  value: Uint8Array;
}
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRootAmino {
  hash: string;
}
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRootSDKType {
  hash: Uint8Array;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefix {
  keyPrefix: Uint8Array;
}
export interface MerklePrefixProtoMsg {
  typeUrl: "/ibc.core.commitment.v1.MerklePrefix";
  value: Uint8Array;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefixAmino {
  key_prefix: string;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefixSDKType {
  key_prefix: Uint8Array;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePath {
  keyPath: string[];
}
export interface MerklePathProtoMsg {
  typeUrl: "/ibc.core.commitment.v1.MerklePath";
  value: Uint8Array;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePathAmino {
  key_path: string[];
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePathSDKType {
  key_path: string[];
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProof {
  proofs: CommitmentProof[];
}
export interface MerkleProofProtoMsg {
  typeUrl: "/ibc.core.commitment.v1.MerkleProof";
  value: Uint8Array;
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProofAmino {
  proofs: CommitmentProofAmino[];
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProofSDKType {
  proofs: CommitmentProofSDKType[];
}
function createBaseMerkleRoot(): MerkleRoot {
  return {
    hash: new Uint8Array()
  };
}
export const MerkleRoot = {
  typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
  aminoType: "cosmos-sdk/MerkleRoot",
  encode(message: MerkleRoot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MerkleRoot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleRoot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MerkleRoot {
    const obj = createBaseMerkleRoot();
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    return obj;
  },
  toJSON(message: MerkleRoot): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MerkleRoot>): MerkleRoot {
    const message = createBaseMerkleRoot();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MerkleRootSDKType): MerkleRoot {
    return {
      hash: object?.hash
    };
  },
  toSDK(message: MerkleRoot): MerkleRootSDKType {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAmino(object: MerkleRootAmino): MerkleRoot {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  toAmino(message: MerkleRoot, useInterfaces: boolean = true): MerkleRootAmino {
    const obj: any = {};
    obj.hash = base64FromBytes(message.hash);
    return obj;
  },
  fromProtoMsg(message: MerkleRootProtoMsg, useInterfaces: boolean = true): MerkleRoot {
    return MerkleRoot.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MerkleRoot): Uint8Array {
    return MerkleRoot.encode(message).finish();
  },
  toProtoMsg(message: MerkleRoot): MerkleRootProtoMsg {
    return {
      typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
      value: MerkleRoot.encode(message).finish()
    };
  }
};
function createBaseMerklePrefix(): MerklePrefix {
  return {
    keyPrefix: new Uint8Array()
  };
}
export const MerklePrefix = {
  typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
  aminoType: "cosmos-sdk/MerklePrefix",
  encode(message: MerklePrefix, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyPrefix.length !== 0) {
      writer.uint32(10).bytes(message.keyPrefix);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MerklePrefix {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePrefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyPrefix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MerklePrefix {
    const obj = createBaseMerklePrefix();
    if (isSet(object.keyPrefix)) obj.keyPrefix = bytesFromBase64(object.keyPrefix);
    return obj;
  },
  toJSON(message: MerklePrefix): unknown {
    const obj: any = {};
    message.keyPrefix !== undefined && (obj.keyPrefix = base64FromBytes(message.keyPrefix !== undefined ? message.keyPrefix : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MerklePrefix>): MerklePrefix {
    const message = createBaseMerklePrefix();
    message.keyPrefix = object.keyPrefix ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MerklePrefixSDKType): MerklePrefix {
    return {
      keyPrefix: object?.key_prefix
    };
  },
  toSDK(message: MerklePrefix): MerklePrefixSDKType {
    const obj: any = {};
    obj.key_prefix = message.keyPrefix;
    return obj;
  },
  fromAmino(object: MerklePrefixAmino): MerklePrefix {
    return {
      key_prefix: isSet(object.key_prefix) ? bytesFromBase64(object.key_prefix) : new Uint8Array()
    };
  },
  toAmino(message: MerklePrefix, useInterfaces: boolean = true): MerklePrefixAmino {
    const obj: any = {};
    obj.key_prefix = base64FromBytes(message.keyPrefix);
    return obj;
  },
  fromProtoMsg(message: MerklePrefixProtoMsg, useInterfaces: boolean = true): MerklePrefix {
    return MerklePrefix.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MerklePrefix): Uint8Array {
    return MerklePrefix.encode(message).finish();
  },
  toProtoMsg(message: MerklePrefix): MerklePrefixProtoMsg {
    return {
      typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
      value: MerklePrefix.encode(message).finish()
    };
  }
};
function createBaseMerklePath(): MerklePath {
  return {
    keyPath: []
  };
}
export const MerklePath = {
  typeUrl: "/ibc.core.commitment.v1.MerklePath",
  aminoType: "cosmos-sdk/MerklePath",
  encode(message: MerklePath, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.keyPath) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MerklePath {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyPath.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MerklePath {
    const obj = createBaseMerklePath();
    if (Array.isArray(object?.keyPath)) obj.keyPath = object.keyPath.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: MerklePath): unknown {
    const obj: any = {};
    if (message.keyPath) {
      obj.keyPath = message.keyPath.map(e => e);
    } else {
      obj.keyPath = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MerklePath>): MerklePath {
    const message = createBaseMerklePath();
    message.keyPath = object.keyPath?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MerklePathSDKType): MerklePath {
    return {
      keyPath: Array.isArray(object?.key_path) ? object.key_path.map((e: any) => e) : []
    };
  },
  toSDK(message: MerklePath): MerklePathSDKType {
    const obj: any = {};
    if (message.keyPath) {
      obj.key_path = message.keyPath.map(e => e);
    } else {
      obj.key_path = [];
    }
    return obj;
  },
  fromAmino(object: MerklePathAmino): MerklePath {
    return {
      keyPath: Array.isArray(object?.key_path) ? object.key_path.map((e: any) => e) : []
    };
  },
  toAmino(message: MerklePath, useInterfaces: boolean = true): MerklePathAmino {
    const obj: any = {};
    if (message.keyPath) {
      obj.key_path = message.keyPath.map(e => e);
    } else {
      obj.key_path = [];
    }
    return obj;
  },
  fromProtoMsg(message: MerklePathProtoMsg, useInterfaces: boolean = true): MerklePath {
    return MerklePath.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MerklePath): Uint8Array {
    return MerklePath.encode(message).finish();
  },
  toProtoMsg(message: MerklePath): MerklePathProtoMsg {
    return {
      typeUrl: "/ibc.core.commitment.v1.MerklePath",
      value: MerklePath.encode(message).finish()
    };
  }
};
function createBaseMerkleProof(): MerkleProof {
  return {
    proofs: []
  };
}
export const MerkleProof = {
  typeUrl: "/ibc.core.commitment.v1.MerkleProof",
  aminoType: "cosmos-sdk/MerkleProof",
  encode(message: MerkleProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proofs) {
      CommitmentProof.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MerkleProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proofs.push(CommitmentProof.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MerkleProof {
    const obj = createBaseMerkleProof();
    if (Array.isArray(object?.proofs)) obj.proofs = object.proofs.map((e: any) => CommitmentProof.fromJSON(e));
    return obj;
  },
  toJSON(message: MerkleProof): unknown {
    const obj: any = {};
    if (message.proofs) {
      obj.proofs = message.proofs.map(e => e ? CommitmentProof.toJSON(e) : undefined);
    } else {
      obj.proofs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MerkleProof>): MerkleProof {
    const message = createBaseMerkleProof();
    message.proofs = object.proofs?.map(e => CommitmentProof.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MerkleProofSDKType): MerkleProof {
    return {
      proofs: Array.isArray(object?.proofs) ? object.proofs.map((e: any) => CommitmentProof.fromSDK(e)) : []
    };
  },
  toSDK(message: MerkleProof): MerkleProofSDKType {
    const obj: any = {};
    if (message.proofs) {
      obj.proofs = message.proofs.map(e => e ? CommitmentProof.toSDK(e) : undefined);
    } else {
      obj.proofs = [];
    }
    return obj;
  },
  fromAmino(object: MerkleProofAmino): MerkleProof {
    return {
      proofs: Array.isArray(object?.proofs) ? object.proofs.map((e: any) => CommitmentProof.fromAmino(e)) : []
    };
  },
  toAmino(message: MerkleProof, useInterfaces: boolean = true): MerkleProofAmino {
    const obj: any = {};
    if (message.proofs) {
      obj.proofs = message.proofs.map(e => e ? CommitmentProof.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.proofs = [];
    }
    return obj;
  },
  fromProtoMsg(message: MerkleProofProtoMsg, useInterfaces: boolean = true): MerkleProof {
    return MerkleProof.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MerkleProof): Uint8Array {
    return MerkleProof.encode(message).finish();
  },
  toProtoMsg(message: MerkleProof): MerkleProofProtoMsg {
    return {
      typeUrl: "/ibc.core.commitment.v1.MerkleProof",
      value: MerkleProof.encode(message).finish()
    };
  }
};