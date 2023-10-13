import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../helpers";
export const protobufPackage = "tendermint.p2p";
export interface ProtocolVersion {
  p2p?: bigint;
  block?: bigint;
  app?: bigint;
}
export interface ProtocolVersionSDKType {
  p2p?: bigint;
  block?: bigint;
  app?: bigint;
}
export interface NodeInfo {
  protocolVersion: ProtocolVersion;
  nodeId?: string;
  listenAddr?: string;
  network?: string;
  version?: string;
  channels?: Uint8Array;
  moniker?: string;
  other: NodeInfoOther;
}
export interface NodeInfoSDKType {
  protocol_version: ProtocolVersionSDKType;
  node_id?: string;
  listen_addr?: string;
  network?: string;
  version?: string;
  channels?: Uint8Array;
  moniker?: string;
  other: NodeInfoOtherSDKType;
}
export interface NodeInfoOther {
  txIndex?: string;
  rpcAddress?: string;
}
export interface NodeInfoOtherSDKType {
  tx_index?: string;
  rpc_address?: string;
}
export interface PeerInfo {
  id?: string;
  addressInfo?: PeerAddressInfo[];
  lastConnected?: Date;
}
export interface PeerInfoSDKType {
  id?: string;
  address_info?: PeerAddressInfoSDKType[];
  last_connected?: Date;
}
export interface PeerAddressInfo {
  address?: string;
  lastDialSuccess?: Date;
  lastDialFailure?: Date;
  dialFailures?: number;
}
export interface PeerAddressInfoSDKType {
  address?: string;
  last_dial_success?: Date;
  last_dial_failure?: Date;
  dial_failures?: number;
}
function createBaseProtocolVersion(): ProtocolVersion {
  return {
    p2p: undefined,
    block: undefined,
    app: undefined
  };
}
export const ProtocolVersion = {
  typeUrl: "/tendermint.p2p.ProtocolVersion",
  encode(message: ProtocolVersion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.p2p !== undefined) {
      writer.uint32(8).uint64(message.p2p);
    }
    if (message.block !== undefined) {
      writer.uint32(16).uint64(message.block);
    }
    if (message.app !== undefined) {
      writer.uint32(24).uint64(message.app);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProtocolVersion {
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
    if (message.p2p !== undefined) {
      obj.p2p = message.p2p.toString();
    }
    if (message.block !== undefined) {
      obj.block = message.block.toString();
    }
    if (message.app !== undefined) {
      obj.app = message.app.toString();
    }
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
  fromSDKJSON(object: any): ProtocolVersionSDKType {
    return {
      p2p: isSet(object.p2p) ? BigInt(object.p2p.toString()) : undefined,
      block: isSet(object.block) ? BigInt(object.block.toString()) : undefined,
      app: isSet(object.app) ? BigInt(object.app.toString()) : undefined
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
    return {
      p2p: object?.p2p ? BigInt(object.p2p) : undefined,
      block: object?.block ? BigInt(object.block) : undefined,
      app: object?.app ? BigInt(object.app) : undefined
    };
  },
  toAmino(message: ProtocolVersion): ProtocolVersionAmino {
    const obj: any = {};
    obj.p2p = message.p2p ? message.p2p.toString() : undefined;
    obj.block = message.block ? message.block.toString() : undefined;
    obj.app = message.app ? message.app.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProtocolVersionAminoMsg): ProtocolVersion {
    return ProtocolVersion.fromAmino(object.value);
  },
  fromProtoMsg(message: ProtocolVersionProtoMsg): ProtocolVersion {
    return ProtocolVersion.decode(message.value);
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
    nodeId: undefined,
    listenAddr: undefined,
    network: undefined,
    version: undefined,
    channels: undefined,
    moniker: undefined,
    other: NodeInfoOther.fromPartial({})
  };
}
export const NodeInfo = {
  typeUrl: "/tendermint.p2p.NodeInfo",
  encode(message: NodeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.protocolVersion !== undefined) {
      ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
    }
    if (message.nodeId !== undefined) {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.listenAddr !== undefined) {
      writer.uint32(26).string(message.listenAddr);
    }
    if (message.network !== undefined) {
      writer.uint32(34).string(message.network);
    }
    if (message.version !== undefined) {
      writer.uint32(42).string(message.version);
    }
    if (message.channels !== undefined) {
      writer.uint32(50).bytes(message.channels);
    }
    if (message.moniker !== undefined) {
      writer.uint32(58).string(message.moniker);
    }
    if (message.other !== undefined) {
      NodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NodeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocolVersion = ProtocolVersion.decode(reader, reader.uint32());
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
          message.other = NodeInfoOther.decode(reader, reader.uint32());
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
    message.channels !== undefined && (obj.channels = message.channels !== undefined ? base64FromBytes(message.channels) : undefined);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.other !== undefined && (obj.other = message.other ? NodeInfoOther.toJSON(message.other) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<NodeInfo>): NodeInfo {
    const message = createBaseNodeInfo();
    if (object.protocolVersion !== undefined && object.protocolVersion !== null) {
      message.protocolVersion = ProtocolVersion.fromPartial(object.protocolVersion);
    }
    message.nodeId = object.nodeId ?? undefined;
    message.listenAddr = object.listenAddr ?? undefined;
    message.network = object.network ?? undefined;
    message.version = object.version ?? undefined;
    message.channels = object.channels ?? undefined;
    message.moniker = object.moniker ?? undefined;
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
  fromSDKJSON(object: any): NodeInfoSDKType {
    return {
      protocol_version: isSet(object.protocol_version) ? ProtocolVersion.fromSDKJSON(object.protocol_version) : undefined,
      node_id: isSet(object.node_id) ? String(object.node_id) : undefined,
      listen_addr: isSet(object.listen_addr) ? String(object.listen_addr) : undefined,
      network: isSet(object.network) ? String(object.network) : undefined,
      version: isSet(object.version) ? String(object.version) : undefined,
      channels: isSet(object.channels) ? bytesFromBase64(object.channels) : undefined,
      moniker: isSet(object.moniker) ? String(object.moniker) : undefined,
      other: isSet(object.other) ? NodeInfoOther.fromSDKJSON(object.other) : undefined
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
    return {
      protocolVersion: object?.protocol_version ? ProtocolVersion.fromAmino(object.protocol_version) : undefined,
      nodeId: object?.node_id,
      listenAddr: object?.listen_addr,
      network: object?.network,
      version: object?.version,
      channels: object?.channels,
      moniker: object?.moniker,
      other: object?.other ? NodeInfoOther.fromAmino(object.other) : undefined
    };
  },
  toAmino(message: NodeInfo): NodeInfoAmino {
    const obj: any = {};
    obj.protocol_version = message.protocolVersion ? ProtocolVersion.toAmino(message.protocolVersion) : undefined;
    obj.node_id = message.nodeId;
    obj.listen_addr = message.listenAddr;
    obj.network = message.network;
    obj.version = message.version;
    obj.channels = message.channels;
    obj.moniker = message.moniker;
    obj.other = message.other ? NodeInfoOther.toAmino(message.other) : undefined;
    return obj;
  },
  fromAminoMsg(object: NodeInfoAminoMsg): NodeInfo {
    return NodeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: NodeInfoProtoMsg): NodeInfo {
    return NodeInfo.decode(message.value);
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
    txIndex: undefined,
    rpcAddress: undefined
  };
}
export const NodeInfoOther = {
  typeUrl: "/tendermint.p2p.NodeInfoOther",
  encode(message: NodeInfoOther, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txIndex !== undefined) {
      writer.uint32(10).string(message.txIndex);
    }
    if (message.rpcAddress !== undefined) {
      writer.uint32(18).string(message.rpcAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NodeInfoOther {
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
    message.txIndex = object.txIndex ?? undefined;
    message.rpcAddress = object.rpcAddress ?? undefined;
    return message;
  },
  fromSDK(object: NodeInfoOtherSDKType): NodeInfoOther {
    return {
      txIndex: object?.tx_index,
      rpcAddress: object?.rpc_address
    };
  },
  fromSDKJSON(object: any): NodeInfoOtherSDKType {
    return {
      tx_index: isSet(object.tx_index) ? String(object.tx_index) : undefined,
      rpc_address: isSet(object.rpc_address) ? String(object.rpc_address) : undefined
    };
  },
  toSDK(message: NodeInfoOther): NodeInfoOtherSDKType {
    const obj: any = {};
    obj.tx_index = message.txIndex;
    obj.rpc_address = message.rpcAddress;
    return obj;
  },
  fromAmino(object: NodeInfoOtherAmino): NodeInfoOther {
    return {
      txIndex: object?.tx_index,
      rpcAddress: object?.rpc_address
    };
  },
  toAmino(message: NodeInfoOther): NodeInfoOtherAmino {
    const obj: any = {};
    obj.tx_index = message.txIndex;
    obj.rpc_address = message.rpcAddress;
    return obj;
  },
  fromAminoMsg(object: NodeInfoOtherAminoMsg): NodeInfoOther {
    return NodeInfoOther.fromAmino(object.value);
  },
  fromProtoMsg(message: NodeInfoOtherProtoMsg): NodeInfoOther {
    return NodeInfoOther.decode(message.value);
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
    id: undefined,
    addressInfo: undefined,
    lastConnected: undefined
  };
}
export const PeerInfo = {
  typeUrl: "/tendermint.p2p.PeerInfo",
  encode(message: PeerInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): PeerInfo {
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
          message.addressInfo.push(PeerAddressInfo.decode(reader, reader.uint32()));
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
    message.id = object.id ?? undefined;
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
  fromSDKJSON(object: any): PeerInfoSDKType {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      address_info: Array.isArray(object?.address_info) ? object.address_info.map((e: any) => PeerAddressInfo.fromSDKJSON(e)) : [],
      last_connected: isSet(object.last_connected) ? new Date(object.last_connected) : undefined
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
    return {
      id: object?.id,
      addressInfo: Array.isArray(object?.address_info) ? object.address_info.map((e: any) => PeerAddressInfo.fromAmino(e)) : [],
      lastConnected: object?.last_connected
    };
  },
  toAmino(message: PeerInfo): PeerInfoAmino {
    const obj: any = {};
    obj.id = message.id;
    if (message.addressInfo) {
      obj.address_info = message.addressInfo.map(e => e ? PeerAddressInfo.toAmino(e) : undefined);
    } else {
      obj.address_info = [];
    }
    obj.last_connected = message.lastConnected;
    return obj;
  },
  fromAminoMsg(object: PeerInfoAminoMsg): PeerInfo {
    return PeerInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: PeerInfoProtoMsg): PeerInfo {
    return PeerInfo.decode(message.value);
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
    address: undefined,
    lastDialSuccess: undefined,
    lastDialFailure: undefined,
    dialFailures: undefined
  };
}
export const PeerAddressInfo = {
  typeUrl: "/tendermint.p2p.PeerAddressInfo",
  encode(message: PeerAddressInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    if (message.lastDialSuccess !== undefined) {
      Timestamp.encode(toTimestamp(message.lastDialSuccess), writer.uint32(18).fork()).ldelim();
    }
    if (message.lastDialFailure !== undefined) {
      Timestamp.encode(toTimestamp(message.lastDialFailure), writer.uint32(26).fork()).ldelim();
    }
    if (message.dialFailures !== undefined) {
      writer.uint32(32).uint32(message.dialFailures);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeerAddressInfo {
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
    message.address = object.address ?? undefined;
    message.lastDialSuccess = object.lastDialSuccess ?? undefined;
    message.lastDialFailure = object.lastDialFailure ?? undefined;
    message.dialFailures = object.dialFailures ?? undefined;
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
  fromSDKJSON(object: any): PeerAddressInfoSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : undefined,
      last_dial_success: isSet(object.last_dial_success) ? new Date(object.last_dial_success) : undefined,
      last_dial_failure: isSet(object.last_dial_failure) ? new Date(object.last_dial_failure) : undefined,
      dial_failures: isSet(object.dial_failures) ? Number(object.dial_failures) : undefined
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
    return {
      address: object?.address,
      lastDialSuccess: object?.last_dial_success,
      lastDialFailure: object?.last_dial_failure,
      dialFailures: object?.dial_failures
    };
  },
  toAmino(message: PeerAddressInfo): PeerAddressInfoAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.last_dial_success = message.lastDialSuccess;
    obj.last_dial_failure = message.lastDialFailure;
    obj.dial_failures = message.dialFailures;
    return obj;
  },
  fromAminoMsg(object: PeerAddressInfoAminoMsg): PeerAddressInfo {
    return PeerAddressInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: PeerAddressInfoProtoMsg): PeerAddressInfo {
    return PeerAddressInfo.decode(message.value);
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