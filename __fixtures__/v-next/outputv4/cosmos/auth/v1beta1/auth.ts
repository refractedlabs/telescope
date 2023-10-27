import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.auth.v1beta1";
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccount {
  address: string;
  pubKey?: Any;
  accountNumber: bigint;
  sequence: bigint;
}
export interface BaseAccountProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.BaseAccount";
  value: Uint8Array;
}
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccountSDKType {
  address: string;
  pub_key?: AnySDKType;
  account_number: bigint;
  sequence: bigint;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccount {
  baseAccount?: BaseAccount;
  name: string;
  permissions: string[];
}
export interface ModuleAccountProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.ModuleAccount";
  value: Uint8Array;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccountSDKType {
  base_account?: BaseAccountSDKType;
  name: string;
  permissions: string[];
}
/** Params defines the parameters for the auth module. */
export interface Params {
  maxMemoCharacters: bigint;
  txSigLimit: bigint;
  txSizeCostPerByte: bigint;
  sigVerifyCostEd25519: bigint;
  sigVerifyCostSecp256k1: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the auth module. */
export interface ParamsSDKType {
  max_memo_characters: bigint;
  tx_sig_limit: bigint;
  tx_size_cost_per_byte: bigint;
  sig_verify_cost_ed25519: bigint;
  sig_verify_cost_secp256k1: bigint;
}
function createBaseBaseAccount(): BaseAccount {
  return {
    address: "",
    pubKey: undefined,
    accountNumber: BigInt(0),
    sequence: BigInt(0)
  };
}
export const BaseAccount = {
  typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
  encode(message: BaseAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.accountNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(32).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BaseAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountNumber = reader.uint64();
          break;
        case 4:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BaseAccount {
    const obj = createBaseBaseAccount();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pubKey)) obj.pubKey = Any.fromJSON(object.pubKey);
    if (isSet(object.accountNumber)) obj.accountNumber = BigInt(object.accountNumber.toString());
    if (isSet(object.sequence)) obj.sequence = BigInt(object.sequence.toString());
    return obj;
  },
  toJSON(message: BaseAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || BigInt(0)).toString());
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<BaseAccount>): BaseAccount {
    const message = createBaseBaseAccount();
    message.address = object.address ?? "";
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = Any.fromPartial(object.pubKey);
    }
    if (object.accountNumber !== undefined && object.accountNumber !== null) {
      message.accountNumber = BigInt(object.accountNumber.toString());
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    return message;
  },
  fromSDK(object: BaseAccountSDKType): BaseAccount {
    return {
      address: object?.address,
      pubKey: object.pub_key ? Any.fromSDK(object.pub_key) : undefined,
      accountNumber: object?.account_number,
      sequence: object?.sequence
    };
  },
  fromSDKJSON(object: any): BaseAccountSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pub_key: isSet(object.pub_key) ? Any.fromSDKJSON(object.pub_key) : undefined,
      account_number: isSet(object.account_number) ? BigInt(object.account_number.toString()) : BigInt(0),
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
    };
  },
  toSDK(message: BaseAccount): BaseAccountSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.pubKey !== undefined && (obj.pub_key = message.pubKey ? Any.toSDK(message.pubKey) : undefined);
    obj.account_number = message.accountNumber;
    obj.sequence = message.sequence;
    return obj;
  },
  fromAmino(object: BaseAccountAmino): BaseAccount {
    return {
      address: object.address,
      pubKey: object?.pub_key ? Any.fromAmino(object.pub_key) : undefined,
      accountNumber: BigInt(object.account_number),
      sequence: BigInt(object.sequence)
    };
  },
  toAmino(message: BaseAccount): BaseAccountAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey) : undefined;
    obj.account_number = message.accountNumber ? message.accountNumber.toString() : undefined;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BaseAccountAminoMsg): BaseAccount {
    return BaseAccount.fromAmino(object.value);
  },
  toAminoMsg(message: BaseAccount): BaseAccountAminoMsg {
    return {
      type: "cosmos-sdk/BaseAccount",
      value: BaseAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: BaseAccountProtoMsg): BaseAccount {
    return BaseAccount.decode(message.value);
  },
  toProto(message: BaseAccount): Uint8Array {
    return BaseAccount.encode(message).finish();
  },
  toProtoMsg(message: BaseAccount): BaseAccountProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
      value: BaseAccount.encode(message).finish()
    };
  }
};
function createBaseModuleAccount(): ModuleAccount {
  return {
    baseAccount: undefined,
    name: "",
    permissions: []
  };
}
export const ModuleAccount = {
  typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
  encode(message: ModuleAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.permissions) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.permissions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleAccount {
    const obj = createBaseModuleAccount();
    if (isSet(object.baseAccount)) obj.baseAccount = BaseAccount.fromJSON(object.baseAccount);
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.permissions)) obj.permissions = object.permissions.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: ModuleAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined && (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ModuleAccount>): ModuleAccount {
    const message = createBaseModuleAccount();
    if (object.baseAccount !== undefined && object.baseAccount !== null) {
      message.baseAccount = BaseAccount.fromPartial(object.baseAccount);
    }
    message.name = object.name ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ModuleAccountSDKType): ModuleAccount {
    return {
      baseAccount: object.base_account ? BaseAccount.fromSDK(object.base_account) : undefined,
      name: object?.name,
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): ModuleAccountSDKType {
    return {
      base_account: isSet(object.base_account) ? BaseAccount.fromSDKJSON(object.base_account) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: ModuleAccount): ModuleAccountSDKType {
    const obj: any = {};
    message.baseAccount !== undefined && (obj.base_account = message.baseAccount ? BaseAccount.toSDK(message.baseAccount) : undefined);
    obj.name = message.name;
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },
  fromAmino(object: ModuleAccountAmino): ModuleAccount {
    return {
      baseAccount: object?.base_account ? BaseAccount.fromAmino(object.base_account) : undefined,
      name: object.name,
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => e) : []
    };
  },
  toAmino(message: ModuleAccount): ModuleAccountAmino {
    const obj: any = {};
    obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : undefined;
    obj.name = message.name;
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },
  fromAminoMsg(object: ModuleAccountAminoMsg): ModuleAccount {
    return ModuleAccount.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleAccount): ModuleAccountAminoMsg {
    return {
      type: "cosmos-sdk/ModuleAccount",
      value: ModuleAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleAccountProtoMsg): ModuleAccount {
    return ModuleAccount.decode(message.value);
  },
  toProto(message: ModuleAccount): Uint8Array {
    return ModuleAccount.encode(message).finish();
  },
  toProtoMsg(message: ModuleAccount): ModuleAccountProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
      value: ModuleAccount.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    maxMemoCharacters: BigInt(0),
    txSigLimit: BigInt(0),
    txSizeCostPerByte: BigInt(0),
    sigVerifyCostEd25519: BigInt(0),
    sigVerifyCostSecp256k1: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/cosmos.auth.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxMemoCharacters !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxMemoCharacters);
    }
    if (message.txSigLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.txSigLimit);
    }
    if (message.txSizeCostPerByte !== BigInt(0)) {
      writer.uint32(24).uint64(message.txSizeCostPerByte);
    }
    if (message.sigVerifyCostEd25519 !== BigInt(0)) {
      writer.uint32(32).uint64(message.sigVerifyCostEd25519);
    }
    if (message.sigVerifyCostSecp256k1 !== BigInt(0)) {
      writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxMemoCharacters = reader.uint64();
          break;
        case 2:
          message.txSigLimit = reader.uint64();
          break;
        case 3:
          message.txSizeCostPerByte = reader.uint64();
          break;
        case 4:
          message.sigVerifyCostEd25519 = reader.uint64();
          break;
        case 5:
          message.sigVerifyCostSecp256k1 = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.maxMemoCharacters)) obj.maxMemoCharacters = BigInt(object.maxMemoCharacters.toString());
    if (isSet(object.txSigLimit)) obj.txSigLimit = BigInt(object.txSigLimit.toString());
    if (isSet(object.txSizeCostPerByte)) obj.txSizeCostPerByte = BigInt(object.txSizeCostPerByte.toString());
    if (isSet(object.sigVerifyCostEd25519)) obj.sigVerifyCostEd25519 = BigInt(object.sigVerifyCostEd25519.toString());
    if (isSet(object.sigVerifyCostSecp256k1)) obj.sigVerifyCostSecp256k1 = BigInt(object.sigVerifyCostSecp256k1.toString());
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxMemoCharacters !== undefined && (obj.maxMemoCharacters = (message.maxMemoCharacters || BigInt(0)).toString());
    message.txSigLimit !== undefined && (obj.txSigLimit = (message.txSigLimit || BigInt(0)).toString());
    message.txSizeCostPerByte !== undefined && (obj.txSizeCostPerByte = (message.txSizeCostPerByte || BigInt(0)).toString());
    message.sigVerifyCostEd25519 !== undefined && (obj.sigVerifyCostEd25519 = (message.sigVerifyCostEd25519 || BigInt(0)).toString());
    message.sigVerifyCostSecp256k1 !== undefined && (obj.sigVerifyCostSecp256k1 = (message.sigVerifyCostSecp256k1 || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    if (object.maxMemoCharacters !== undefined && object.maxMemoCharacters !== null) {
      message.maxMemoCharacters = BigInt(object.maxMemoCharacters.toString());
    }
    if (object.txSigLimit !== undefined && object.txSigLimit !== null) {
      message.txSigLimit = BigInt(object.txSigLimit.toString());
    }
    if (object.txSizeCostPerByte !== undefined && object.txSizeCostPerByte !== null) {
      message.txSizeCostPerByte = BigInt(object.txSizeCostPerByte.toString());
    }
    if (object.sigVerifyCostEd25519 !== undefined && object.sigVerifyCostEd25519 !== null) {
      message.sigVerifyCostEd25519 = BigInt(object.sigVerifyCostEd25519.toString());
    }
    if (object.sigVerifyCostSecp256k1 !== undefined && object.sigVerifyCostSecp256k1 !== null) {
      message.sigVerifyCostSecp256k1 = BigInt(object.sigVerifyCostSecp256k1.toString());
    }
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      maxMemoCharacters: object?.max_memo_characters,
      txSigLimit: object?.tx_sig_limit,
      txSizeCostPerByte: object?.tx_size_cost_per_byte,
      sigVerifyCostEd25519: object?.sig_verify_cost_ed25519,
      sigVerifyCostSecp256k1: object?.sig_verify_cost_secp256k1
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      max_memo_characters: isSet(object.max_memo_characters) ? BigInt(object.max_memo_characters.toString()) : BigInt(0),
      tx_sig_limit: isSet(object.tx_sig_limit) ? BigInt(object.tx_sig_limit.toString()) : BigInt(0),
      tx_size_cost_per_byte: isSet(object.tx_size_cost_per_byte) ? BigInt(object.tx_size_cost_per_byte.toString()) : BigInt(0),
      sig_verify_cost_ed25519: isSet(object.sig_verify_cost_ed25519) ? BigInt(object.sig_verify_cost_ed25519.toString()) : BigInt(0),
      sig_verify_cost_secp256k1: isSet(object.sig_verify_cost_secp256k1) ? BigInt(object.sig_verify_cost_secp256k1.toString()) : BigInt(0)
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.max_memo_characters = message.maxMemoCharacters;
    obj.tx_sig_limit = message.txSigLimit;
    obj.tx_size_cost_per_byte = message.txSizeCostPerByte;
    obj.sig_verify_cost_ed25519 = message.sigVerifyCostEd25519;
    obj.sig_verify_cost_secp256k1 = message.sigVerifyCostSecp256k1;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      maxMemoCharacters: BigInt(object.max_memo_characters),
      txSigLimit: BigInt(object.tx_sig_limit),
      txSizeCostPerByte: BigInt(object.tx_size_cost_per_byte),
      sigVerifyCostEd25519: BigInt(object.sig_verify_cost_ed25519),
      sigVerifyCostSecp256k1: BigInt(object.sig_verify_cost_secp256k1)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_memo_characters = message.maxMemoCharacters ? message.maxMemoCharacters.toString() : undefined;
    obj.tx_sig_limit = message.txSigLimit ? message.txSigLimit.toString() : undefined;
    obj.tx_size_cost_per_byte = message.txSizeCostPerByte ? message.txSizeCostPerByte.toString() : undefined;
    obj.sig_verify_cost_ed25519 = message.sigVerifyCostEd25519 ? message.sigVerifyCostEd25519.toString() : undefined;
    obj.sig_verify_cost_secp256k1 = message.sigVerifyCostSecp256k1 ? message.sigVerifyCostSecp256k1.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};