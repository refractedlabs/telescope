import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../helpers";
import { fromBase64 } from "@cosmjs/encoding";
export const protobufPackage = "tendermint.p2p";
export interface ProtocolVersion {
  p2p: bigint;
  block: bigint;
  app: bigint;
}
export interface ProtocolVersionProtoMsg {
  typeUrl: "/tendermint.p2p.ProtocolVersion";
  value: Uint8Array;
}
export interface ProtocolVersionAmino {
  p2p?: string;
  block?: string;
  app?: string;
}
export interface ProtocolVersionSDKType {
  p2p: bigint;
  block: bigint;
  app: bigint;
}
export interface NodeInfo {
  protocolVersion: ProtocolVersion;
  nodeId: string;
  listenAddr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other: NodeInfoOther;
}
export interface NodeInfoProtoMsg {
  typeUrl: "/tendermint.p2p.NodeInfo";
  value: Uint8Array;
}
export interface NodeInfoAmino {
  protocol_version?: ProtocolVersionAmino;
  node_id?: string;
  listen_addr?: string;
  network?: string;
  version?: string;
  channels?: string;
  moniker?: string;
  other?: NodeInfoOtherAmino;
}
export interface NodeInfoSDKType {
  protocol_version: ProtocolVersionSDKType;
  node_id: string;
  listen_addr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other: NodeInfoOtherSDKType;
}
export interface NodeInfoOther {
  txIndex: string;
  rpcAddress: string;
}
export interface NodeInfoOtherProtoMsg {
  typeUrl: "/tendermint.p2p.NodeInfoOther";
  value: Uint8Array;
}
export interface NodeInfoOtherAmino {
  tx_index?: string;
  rpc_address?: string;
}
export interface NodeInfoOtherSDKType {
  tx_index: string;
  rpc_address: string;
}
export interface PeerInfo {
  id: string;
  addressInfo: PeerAddressInfo[];
  lastConnected?: Date;
}
export interface PeerInfoProtoMsg {
  typeUrl: "/tendermint.p2p.PeerInfo";
  value: Uint8Array;
}
export interface PeerInfoAmino {
  id?: string;
  address_info?: PeerAddressInfoAmino[];
  last_connected?: string;
}
export interface PeerInfoSDKType {
  id: string;
  address_info: PeerAddressInfoSDKType[];
  last_connected?: Date;
}
export interface PeerAddressInfo {
  address: string;
  lastDialSuccess?: Date;
  lastDialFailure?: Date;
  dialFailures: number;
}
export interface PeerAddressInfoProtoMsg {
  typeUrl: "/tendermint.p2p.PeerAddressInfo";
  value: Uint8Array;
}
export interface PeerAddressInfoAmino {
  address?: string;
  last_dial_success?: string;
  last_dial_failure?: string;
  dial_failures?: number;
}
export interface PeerAddressInfoSDKType {
  address: string;
  last_dial_success?: Date;
  last_dial_failure?: Date;
  dial_failures: number;
}
function createBaseProtocolVersion(): ProtocolVersion {
  return {
    p2p: BigInt(0),
    block: BigInt(0),
    app: BigInt(0)
  };
}
export const ProtocolVersion = {
  typeUrl: "/tendermint.p2p.ProtocolVersion",
  encode(message: ProtocolVersion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.p2p !== BigInt(0)) {
      writer.uint32(8).uint64(message.p2p);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(16).uint64(message.block);
    }
    if (message.app !== BigInt(0)) {
      writer.uint32(24).uint64(message.app);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ProtocolVersion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocolVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p2p = reader.uint64();
          break;
        case 2:
          message.block = reader.uint64();
          break;
        case 3:
          message.app = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProtocolVersion {
    const obj = createBaseProtocolVersion();
    if (isSet(object.p2p)) obj.p2p = BigInt(object.p2p.toString());
    if (isSet(object.block)) obj.block = BigInt(object.block.toString());
    if (isSet(object.app)) obj.app = BigInt(object.app.toString());
    return obj;
  },
  toJSON(message: ProtocolVersion): unknown {
    const obj: any = {};
    message.p2p !== undefined && (obj.p2p = (message.p2p || BigInt(0)).toString());
    message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
    message.app !== undefined && (obj.app = (message.app || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ProtocolVersion>): ProtocolVersion {
    const message = createBaseProtocolVersion();
    if (object.p2p !== undefined && object.p2p !== null) {
      message.p2p = BigInt(object.p2p.toString());
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block.toString());
    }
    if (object.app !== undefined && object.app !== null) {
      message.app = BigInt(object.app.toString());
    }
    return message;
  },
  fromSDK(object: ProtocolVersionSDKType): ProtocolVersion {
    return {
      p2p: object?.p2p,
      block: object?.block,
      app: object?.app
    };
  },
  toSDK(message: ProtocolVersion): ProtocolVersionSDKType {
    const obj: any = {};
    obj.p2p = message.p2p;
    obj.block = message.block;
    obj.app = message.app;
    return obj;
  },
  fromAmino(object: ProtocolVersionAmino): ProtocolVersion {
    const message = createBaseProtocolVersion();
    if (object.p2p !== undefined && object.p2p !== null) {
      message.p2p = BigInt(object.p2p);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    if (object.app !== undefined && object.app !== null) {
      message.app = BigInt(object.app);
    }
    return message;
  },
  toAmino(message: ProtocolVersion, useInterfaces: boolean = true): ProtocolVersionAmino {
    const obj: any = {};
    obj.p2p = message.p2p ? message.p2p.toString() : undefined;
    obj.block = message.block ? message.block.toString() : undefined;
    obj.app = message.app ? message.app.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: ProtocolVersionProtoMsg, useInterfaces: boolean = true): ProtocolVersion {
    return ProtocolVersion.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ProtocolVersion): Uint8Array {
    return ProtocolVersion.encode(message).finish();
  },
  toProtoMsg(message: ProtocolVersion): ProtocolVersionProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.ProtocolVersion",
      value: ProtocolVersion.encode(message).finish()
    };
  }
};
function createBaseNodeInfo(): NodeInfo {
  return {
    protocolVersion: ProtocolVersion.fromPartial({}),
    nodeId: "",
    listenAddr: "",
    network: "",
    version: "",
    channels: new Uint8Array(),
    moniker: "",
    other: NodeInfoOther.fromPartial({})
  };
}
export const NodeInfo = {
  typeUrl: "/tendermint.p2p.NodeInfo",
  encode(message: NodeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.protocolVersion !== undefined) {
      ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.listenAddr !== "") {
      writer.uint32(26).string(message.listenAddr);
    }
    if (message.network !== "") {
      writer.uint32(34).string(message.network);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.channels.length !== 0) {
      writer.uint32(50).bytes(message.channels);
    }
    if (message.moniker !== "") {
      writer.uint32(58).string(message.moniker);
    }
    if (message.other !== undefined) {
      NodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): NodeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocolVersion = ProtocolVersion.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.listenAddr = reader.string();
          break;
        case 4:
          message.network = reader.string();
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.channels = reader.bytes();
          break;
        case 7:
          message.moniker = reader.string();
          break;
        case 8:
          message.other = NodeInfoOther.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NodeInfo {
    const obj = createBaseNodeInfo();
    if (isSet(object.protocolVersion)) obj.protocolVersion = ProtocolVersion.fromJSON(object.protocolVersion);
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    if (isSet(object.listenAddr)) obj.listenAddr = String(object.listenAddr);
    if (isSet(object.network)) obj.network = String(object.network);
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.channels)) obj.channels = bytesFromBase64(object.channels);
    if (isSet(object.moniker)) obj.moniker = String(object.moniker);
    if (isSet(object.other)) obj.other = NodeInfoOther.fromJSON(object.other);
    return obj;
  },
  toJSON(message: NodeInfo): unknown {
    const obj: any = {};
    message.protocolVersion !== undefined && (obj.protocolVersion = message.protocolVersion ? ProtocolVersion.toJSON(message.protocolVersion) : undefined);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.listenAddr !== undefined && (obj.listenAddr = message.listenAddr);
    message.network !== undefined && (obj.network = message.network);
    message.version !== undefined && (obj.version = message.version);
    message.channels !== undefined && (obj.channels = base64FromBytes(message.channels !== undefined ? message.channels : new Uint8Array()));
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.other !== undefined && (obj.other = message.other ? NodeInfoOther.toJSON(message.other) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<NodeInfo>): NodeInfo {
    const message = createBaseNodeInfo();
    if (object.protocolVersion !== undefined && object.protocolVersion !== null) {
      message.protocolVersion = ProtocolVersion.fromPartial(object.protocolVersion);
    }
    message.nodeId = object.nodeId ?? "";
    message.listenAddr = object.listenAddr ?? "";
    message.network = object.network ?? "";
    message.version = object.version ?? "";
    message.channels = object.channels ?? new Uint8Array();
    message.moniker = object.moniker ?? "";
    if (object.other !== undefined && object.other !== null) {
      message.other = NodeInfoOther.fromPartial(object.other);
    }
    return message;
  },
  fromSDK(object: NodeInfoSDKType): NodeInfo {
    return {
      protocolVersion: object.protocol_version ? ProtocolVersion.fromSDK(object.protocol_version) : undefined,
      nodeId: object?.node_id,
      listenAddr: object?.listen_addr,
      network: object?.network,
      version: object?.version,
      channels: object?.channels,
      moniker: object?.moniker,
      other: object.other ? NodeInfoOther.fromSDK(object.other) : undefined
    };
  },
  toSDK(message: NodeInfo): NodeInfoSDKType {
    const obj: any = {};
    message.protocolVersion !== undefined && (obj.protocol_version = message.protocolVersion ? ProtocolVersion.toSDK(message.protocolVersion) : undefined);
    obj.node_id = message.nodeId;
    obj.listen_addr = message.listenAddr;
    obj.network = message.network;
    obj.version = message.version;
    obj.channels = message.channels;
    obj.moniker = message.moniker;
    message.other !== undefined && (obj.other = message.other ? NodeInfoOther.toSDK(message.other) : undefined);
    return obj;
  },
  fromAmino(object: NodeInfoAmino): NodeInfo {
    const message = createBaseNodeInfo();
    if (object.protocol_version !== undefined && object.protocol_version !== null) {
      message.protocolVersion = ProtocolVersion.fromAmino(object.protocol_version);
    }
    if (object.node_id !== undefined && object.node_id !== null) {
      message.nodeId = object.node_id;
    }
    if (object.listen_addr !== undefined && object.listen_addr !== null) {
      message.listenAddr = object.listen_addr;
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.channels !== undefined && object.channels !== null) {
      message.channels = fromBase64(object.channels);
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.other !== undefined && object.other !== null) {
      message.other = NodeInfoOther.fromAmino(object.other);
    }
    return message;
  },
  toAmino(message: NodeInfo, useInterfaces: boolean = true): NodeInfoAmino {
    const obj: any = {};
    obj.protocol_version = message.protocolVersion ? ProtocolVersion.toAmino(message.protocolVersion, useInterfaces) : undefined;
    obj.node_id = message.nodeId;
    obj.listen_addr = message.listenAddr;
    obj.network = message.network;
    obj.version = message.version;
    message.channels !== undefined && (obj.channels = base64FromBytes(message.channels));
    obj.moniker = message.moniker;
    obj.other = message.other ? NodeInfoOther.toAmino(message.other, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: NodeInfoProtoMsg, useInterfaces: boolean = true): NodeInfo {
    return NodeInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: NodeInfo): Uint8Array {
    return NodeInfo.encode(message).finish();
  },
  toProtoMsg(message: NodeInfo): NodeInfoProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.NodeInfo",
      value: NodeInfo.encode(message).finish()
    };
  }
};
function createBaseNodeInfoOther(): NodeInfoOther {
  return {
    txIndex: "",
    rpcAddress: ""
  };
}
export const NodeInfoOther = {
  typeUrl: "/tendermint.p2p.NodeInfoOther",
  encode(message: NodeInfoOther, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txIndex !== "") {
      writer.uint32(10).string(message.txIndex);
    }
    if (message.rpcAddress !== "") {
      writer.uint32(18).string(message.rpcAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): NodeInfoOther {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeInfoOther();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txIndex = reader.string();
          break;
        case 2:
          message.rpcAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NodeInfoOther {
    const obj = createBaseNodeInfoOther();
    if (isSet(object.txIndex)) obj.txIndex = String(object.txIndex);
    if (isSet(object.rpcAddress)) obj.rpcAddress = String(object.rpcAddress);
    return obj;
  },
  toJSON(message: NodeInfoOther): unknown {
    const obj: any = {};
    message.txIndex !== undefined && (obj.txIndex = message.txIndex);
    message.rpcAddress !== undefined && (obj.rpcAddress = message.rpcAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<NodeInfoOther>): NodeInfoOther {
    const message = createBaseNodeInfoOther();
    message.txIndex = object.txIndex ?? "";
    message.rpcAddress = object.rpcAddress ?? "";
    return message;
  },
  fromSDK(object: NodeInfoOtherSDKType): NodeInfoOther {
    return {
      txIndex: object?.tx_index,
      rpcAddress: object?.rpc_address
    };
  },
  toSDK(message: NodeInfoOther): NodeInfoOtherSDKType {
    const obj: any = {};
    obj.tx_index = message.txIndex;
    obj.rpc_address = message.rpcAddress;
    return obj;
  },
  fromAmino(object: NodeInfoOtherAmino): NodeInfoOther {
    const message = createBaseNodeInfoOther();
    if (object.tx_index !== undefined && object.tx_index !== null) {
      message.txIndex = object.tx_index;
    }
    if (object.rpc_address !== undefined && object.rpc_address !== null) {
      message.rpcAddress = object.rpc_address;
    }
    return message;
  },
  toAmino(message: NodeInfoOther, useInterfaces: boolean = true): NodeInfoOtherAmino {
    const obj: any = {};
    obj.tx_index = message.txIndex;
    obj.rpc_address = message.rpcAddress;
    return obj;
  },
  fromProtoMsg(message: NodeInfoOtherProtoMsg, useInterfaces: boolean = true): NodeInfoOther {
    return NodeInfoOther.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: NodeInfoOther): Uint8Array {
    return NodeInfoOther.encode(message).finish();
  },
  toProtoMsg(message: NodeInfoOther): NodeInfoOtherProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.NodeInfoOther",
      value: NodeInfoOther.encode(message).finish()
    };
  }
};
function createBasePeerInfo(): PeerInfo {
  return {
    id: "",
    addressInfo: [],
    lastConnected: undefined
  };
}
export const PeerInfo = {
  typeUrl: "/tendermint.p2p.PeerInfo",
  encode(message: PeerInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.addressInfo) {
      PeerAddressInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastConnected !== undefined) {
      Timestamp.encode(toTimestamp(message.lastConnected), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PeerInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.addressInfo.push(PeerAddressInfo.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.lastConnected = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PeerInfo {
    const obj = createBasePeerInfo();
    if (isSet(object.id)) obj.id = String(object.id);
    if (Array.isArray(object?.addressInfo)) obj.addressInfo = object.addressInfo.map((e: any) => PeerAddressInfo.fromJSON(e));
    if (isSet(object.lastConnected)) obj.lastConnected = new Date(object.lastConnected);
    return obj;
  },
  toJSON(message: PeerInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.addressInfo) {
      obj.addressInfo = message.addressInfo.map(e => e ? PeerAddressInfo.toJSON(e) : undefined);
    } else {
      obj.addressInfo = [];
    }
    message.lastConnected !== undefined && (obj.lastConnected = message.lastConnected.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<PeerInfo>): PeerInfo {
    const message = createBasePeerInfo();
    message.id = object.id ?? "";
    message.addressInfo = object.addressInfo?.map(e => PeerAddressInfo.fromPartial(e)) || [];
    message.lastConnected = object.lastConnected ?? undefined;
    return message;
  },
  fromSDK(object: PeerInfoSDKType): PeerInfo {
    return {
      id: object?.id,
      addressInfo: Array.isArray(object?.address_info) ? object.address_info.map((e: any) => PeerAddressInfo.fromSDK(e)) : [],
      lastConnected: object.last_connected ?? undefined
    };
  },
  toSDK(message: PeerInfo): PeerInfoSDKType {
    const obj: any = {};
    obj.id = message.id;
    if (message.addressInfo) {
      obj.address_info = message.addressInfo.map(e => e ? PeerAddressInfo.toSDK(e) : undefined);
    } else {
      obj.address_info = [];
    }
    message.lastConnected !== undefined && (obj.last_connected = message.lastConnected ?? undefined);
    return obj;
  },
  fromAmino(object: PeerInfoAmino): PeerInfo {
    const message = createBasePeerInfo();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    message.addressInfo = object.address_info?.map(e => PeerAddressInfo.fromAmino(e)) || [];
    if (object.last_connected !== undefined && object.last_connected !== null) {
      message.lastConnected = fromTimestamp(Timestamp.fromAmino(object.last_connected));
    }
    return message;
  },
  toAmino(message: PeerInfo, useInterfaces: boolean = true): PeerInfoAmino {
    const obj: any = {};
    obj.id = message.id;
    if (message.addressInfo) {
      obj.address_info = message.addressInfo.map(e => e ? PeerAddressInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.address_info = [];
    }
    obj.last_connected = message.lastConnected ? Timestamp.toAmino(toTimestamp(message.lastConnected)) : undefined;
    return obj;
  },
  fromProtoMsg(message: PeerInfoProtoMsg, useInterfaces: boolean = true): PeerInfo {
    return PeerInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PeerInfo): Uint8Array {
    return PeerInfo.encode(message).finish();
  },
  toProtoMsg(message: PeerInfo): PeerInfoProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.PeerInfo",
      value: PeerInfo.encode(message).finish()
    };
  }
};
function createBasePeerAddressInfo(): PeerAddressInfo {
  return {
    address: "",
    lastDialSuccess: undefined,
    lastDialFailure: undefined,
    dialFailures: 0
  };
}
export const PeerAddressInfo = {
  typeUrl: "/tendermint.p2p.PeerAddressInfo",
  encode(message: PeerAddressInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.lastDialSuccess !== undefined) {
      Timestamp.encode(toTimestamp(message.lastDialSuccess), writer.uint32(18).fork()).ldelim();
    }
    if (message.lastDialFailure !== undefined) {
      Timestamp.encode(toTimestamp(message.lastDialFailure), writer.uint32(26).fork()).ldelim();
    }
    if (message.dialFailures !== 0) {
      writer.uint32(32).uint32(message.dialFailures);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PeerAddressInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerAddressInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.lastDialSuccess = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lastDialFailure = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.dialFailures = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PeerAddressInfo {
    const obj = createBasePeerAddressInfo();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.lastDialSuccess)) obj.lastDialSuccess = new Date(object.lastDialSuccess);
    if (isSet(object.lastDialFailure)) obj.lastDialFailure = new Date(object.lastDialFailure);
    if (isSet(object.dialFailures)) obj.dialFailures = Number(object.dialFailures);
    return obj;
  },
  toJSON(message: PeerAddressInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.lastDialSuccess !== undefined && (obj.lastDialSuccess = message.lastDialSuccess.toISOString());
    message.lastDialFailure !== undefined && (obj.lastDialFailure = message.lastDialFailure.toISOString());
    message.dialFailures !== undefined && (obj.dialFailures = Math.round(message.dialFailures));
    return obj;
  },
  fromPartial(object: DeepPartial<PeerAddressInfo>): PeerAddressInfo {
    const message = createBasePeerAddressInfo();
    message.address = object.address ?? "";
    message.lastDialSuccess = object.lastDialSuccess ?? undefined;
    message.lastDialFailure = object.lastDialFailure ?? undefined;
    message.dialFailures = object.dialFailures ?? 0;
    return message;
  },
  fromSDK(object: PeerAddressInfoSDKType): PeerAddressInfo {
    return {
      address: object?.address,
      lastDialSuccess: object.last_dial_success ?? undefined,
      lastDialFailure: object.last_dial_failure ?? undefined,
      dialFailures: object?.dial_failures
    };
  },
  toSDK(message: PeerAddressInfo): PeerAddressInfoSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.lastDialSuccess !== undefined && (obj.last_dial_success = message.lastDialSuccess ?? undefined);
    message.lastDialFailure !== undefined && (obj.last_dial_failure = message.lastDialFailure ?? undefined);
    obj.dial_failures = message.dialFailures;
    return obj;
  },
  fromAmino(object: PeerAddressInfoAmino): PeerAddressInfo {
    const message = createBasePeerAddressInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.last_dial_success !== undefined && object.last_dial_success !== null) {
      message.lastDialSuccess = fromTimestamp(Timestamp.fromAmino(object.last_dial_success));
    }
    if (object.last_dial_failure !== undefined && object.last_dial_failure !== null) {
      message.lastDialFailure = fromTimestamp(Timestamp.fromAmino(object.last_dial_failure));
    }
    if (object.dial_failures !== undefined && object.dial_failures !== null) {
      message.dialFailures = object.dial_failures;
    }
    return message;
  },
  toAmino(message: PeerAddressInfo, useInterfaces: boolean = true): PeerAddressInfoAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.last_dial_success = message.lastDialSuccess ? Timestamp.toAmino(toTimestamp(message.lastDialSuccess)) : undefined;
    obj.last_dial_failure = message.lastDialFailure ? Timestamp.toAmino(toTimestamp(message.lastDialFailure)) : undefined;
    obj.dial_failures = message.dialFailures;
    return obj;
  },
  fromProtoMsg(message: PeerAddressInfoProtoMsg, useInterfaces: boolean = true): PeerAddressInfo {
    return PeerAddressInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PeerAddressInfo): Uint8Array {
    return PeerAddressInfo.encode(message).finish();
  },
  toProtoMsg(message: PeerAddressInfo): PeerAddressInfoProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.PeerAddressInfo",
      value: PeerAddressInfo.encode(message).finish()
    };
  }
};