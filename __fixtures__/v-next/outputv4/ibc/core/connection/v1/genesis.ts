import { IdentifiedConnection, IdentifiedConnectionSDKType, ConnectionPaths, ConnectionPathsSDKType, Params, ParamsSDKType } from "./connection";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "ibc.core.connection.v1";
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisState {
  connections: IdentifiedConnection[];
  clientConnectionPaths: ConnectionPaths[];
  /** the sequence for the next generated connection identifier */
  nextConnectionSequence: bigint;
  params: Params;
}
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisStateSDKType {
  connections: IdentifiedConnectionSDKType[];
  client_connection_paths: ConnectionPathsSDKType[];
  next_connection_sequence: bigint;
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    connections: [],
    clientConnectionPaths: [],
    nextConnectionSequence: BigInt(0),
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.connections) {
      IdentifiedConnection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.clientConnectionPaths) {
      ConnectionPaths.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextConnectionSequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.nextConnectionSequence);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.clientConnectionPaths.push(ConnectionPaths.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nextConnectionSequence = reader.uint64();
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (Array.isArray(object?.connections)) object.connections.map((e: any) => IdentifiedConnection.fromJSON(e));
    if (Array.isArray(object?.clientConnectionPaths)) object.clientConnectionPaths.map((e: any) => ConnectionPaths.fromJSON(e));
    if (isSet(object.nextConnectionSequence)) obj.nextConnectionSequence = BigInt(object.nextConnectionSequence.toString());
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.connections) {
      obj.connections = message.connections.map(e => e ? IdentifiedConnection.toJSON(e) : undefined);
    } else {
      obj.connections = [];
    }
    if (message.clientConnectionPaths) {
      obj.clientConnectionPaths = message.clientConnectionPaths.map(e => e ? ConnectionPaths.toJSON(e) : undefined);
    } else {
      obj.clientConnectionPaths = [];
    }
    message.nextConnectionSequence !== undefined && (obj.nextConnectionSequence = (message.nextConnectionSequence || BigInt(0)).toString());
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.connections = object.connections?.map(e => IdentifiedConnection.fromPartial(e)) || [];
    message.clientConnectionPaths = object.clientConnectionPaths?.map(e => ConnectionPaths.fromPartial(e)) || [];
    if (object.nextConnectionSequence !== undefined && object.nextConnectionSequence !== null) {
      message.nextConnectionSequence = BigInt(object.nextConnectionSequence.toString());
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      connections: Array.isArray(object?.connections) ? object.connections.map((e: any) => IdentifiedConnection.fromSDK(e)) : [],
      clientConnectionPaths: Array.isArray(object?.client_connection_paths) ? object.client_connection_paths.map((e: any) => ConnectionPaths.fromSDK(e)) : [],
      nextConnectionSequence: object?.next_connection_sequence,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      connections: Array.isArray(object?.connections) ? object.connections.map((e: any) => IdentifiedConnection.fromSDKJSON(e)) : [],
      client_connection_paths: Array.isArray(object?.client_connection_paths) ? object.client_connection_paths.map((e: any) => ConnectionPaths.fromSDKJSON(e)) : [],
      next_connection_sequence: isSet(object.next_connection_sequence) ? BigInt(object.next_connection_sequence.toString()) : BigInt(0),
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.connections) {
      obj.connections = message.connections.map(e => e ? IdentifiedConnection.toSDK(e) : undefined);
    } else {
      obj.connections = [];
    }
    if (message.clientConnectionPaths) {
      obj.client_connection_paths = message.clientConnectionPaths.map(e => e ? ConnectionPaths.toSDK(e) : undefined);
    } else {
      obj.client_connection_paths = [];
    }
    obj.next_connection_sequence = message.nextConnectionSequence;
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  }
};