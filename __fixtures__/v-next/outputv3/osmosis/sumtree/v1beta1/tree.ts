import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "osmosis.store.v1beta1";
export interface Node {
  children: Child[];
}
export interface NodeProtoMsg {
  typeUrl: "/osmosis.store.v1beta1.Node";
  value: Uint8Array;
}
export interface NodeAmino {
  children?: ChildAmino[];
}
export interface NodeSDKType {
  children: ChildSDKType[];
}
export interface Child {
  index: Uint8Array;
  accumulation: string;
}
export interface ChildProtoMsg {
  typeUrl: "/osmosis.store.v1beta1.Child";
  value: Uint8Array;
}
export interface ChildAmino {
  index?: string;
  accumulation?: string;
}
export interface ChildSDKType {
  index: Uint8Array;
  accumulation: string;
}
export interface Leaf {
  leaf?: Child;
}
export interface LeafProtoMsg {
  typeUrl: "/osmosis.store.v1beta1.Leaf";
  value: Uint8Array;
}
export interface LeafAmino {
  leaf?: ChildAmino;
}
export interface LeafSDKType {
  leaf?: ChildSDKType;
}
function createBaseNode(): Node {
  return {
    children: []
  };
}
export const Node = {
  typeUrl: "/osmosis.store.v1beta1.Node",
  aminoType: "osmosis/store/node",
  encode(message: Node, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.children) {
      Child.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Node {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.children.push(Child.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Node {
    const obj = createBaseNode();
    if (Array.isArray(object?.children)) obj.children = object.children.map((e: any) => Child.fromJSON(e));
    return obj;
  },
  toJSON(message: Node): unknown {
    const obj: any = {};
    if (message.children) {
      obj.children = message.children.map(e => e ? Child.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Node>): Node {
    const message = createBaseNode();
    message.children = object.children?.map(e => Child.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: NodeSDKType): Node {
    return {
      children: Array.isArray(object?.children) ? object.children.map((e: any) => Child.fromSDK(e)) : []
    };
  },
  toSDK(message: Node): NodeSDKType {
    const obj: any = {};
    if (message.children) {
      obj.children = message.children.map(e => e ? Child.toSDK(e) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  },
  fromAmino(object: NodeAmino): Node {
    const message = createBaseNode();
    message.children = object.children?.map(e => Child.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Node, useInterfaces: boolean = true): NodeAmino {
    const obj: any = {};
    if (message.children) {
      obj.children = message.children.map(e => e ? Child.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  },
  fromProtoMsg(message: NodeProtoMsg, useInterfaces: boolean = true): Node {
    return Node.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Node): Uint8Array {
    return Node.encode(message).finish();
  },
  toProtoMsg(message: Node): NodeProtoMsg {
    return {
      typeUrl: "/osmosis.store.v1beta1.Node",
      value: Node.encode(message).finish()
    };
  }
};
function createBaseChild(): Child {
  return {
    index: new Uint8Array(),
    accumulation: ""
  };
}
export const Child = {
  typeUrl: "/osmosis.store.v1beta1.Child",
  aminoType: "osmosis/store/child",
  encode(message: Child, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index.length !== 0) {
      writer.uint32(10).bytes(message.index);
    }
    if (message.accumulation !== "") {
      writer.uint32(18).string(message.accumulation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Child {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.bytes();
          break;
        case 2:
          message.accumulation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Child {
    const obj = createBaseChild();
    if (isSet(object.index)) obj.index = bytesFromBase64(object.index);
    if (isSet(object.accumulation)) obj.accumulation = String(object.accumulation);
    return obj;
  },
  toJSON(message: Child): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = base64FromBytes(message.index !== undefined ? message.index : new Uint8Array()));
    message.accumulation !== undefined && (obj.accumulation = message.accumulation);
    return obj;
  },
  fromPartial(object: DeepPartial<Child>): Child {
    const message = createBaseChild();
    message.index = object.index ?? new Uint8Array();
    message.accumulation = object.accumulation ?? "";
    return message;
  },
  fromSDK(object: ChildSDKType): Child {
    return {
      index: object?.index,
      accumulation: object?.accumulation
    };
  },
  toSDK(message: Child): ChildSDKType {
    const obj: any = {};
    obj.index = message.index;
    obj.accumulation = message.accumulation;
    return obj;
  },
  fromAmino(object: ChildAmino): Child {
    const message = createBaseChild();
    if (object.index !== undefined && object.index !== null) {
      message.index = bytesFromBase64(object.index);
    }
    if (object.accumulation !== undefined && object.accumulation !== null) {
      message.accumulation = object.accumulation;
    }
    return message;
  },
  toAmino(message: Child, useInterfaces: boolean = true): ChildAmino {
    const obj: any = {};
    obj.index = message.index ? base64FromBytes(message.index) : undefined;
    obj.accumulation = message.accumulation;
    return obj;
  },
  fromProtoMsg(message: ChildProtoMsg, useInterfaces: boolean = true): Child {
    return Child.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Child): Uint8Array {
    return Child.encode(message).finish();
  },
  toProtoMsg(message: Child): ChildProtoMsg {
    return {
      typeUrl: "/osmosis.store.v1beta1.Child",
      value: Child.encode(message).finish()
    };
  }
};
function createBaseLeaf(): Leaf {
  return {
    leaf: undefined
  };
}
export const Leaf = {
  typeUrl: "/osmosis.store.v1beta1.Leaf",
  aminoType: "osmosis/store/leaf",
  encode(message: Leaf, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leaf !== undefined) {
      Child.encode(message.leaf, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Leaf {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaf = Child.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Leaf {
    const obj = createBaseLeaf();
    if (isSet(object.leaf)) obj.leaf = Child.fromJSON(object.leaf);
    return obj;
  },
  toJSON(message: Leaf): unknown {
    const obj: any = {};
    message.leaf !== undefined && (obj.leaf = message.leaf ? Child.toJSON(message.leaf) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Leaf>): Leaf {
    const message = createBaseLeaf();
    if (object.leaf !== undefined && object.leaf !== null) {
      message.leaf = Child.fromPartial(object.leaf);
    }
    return message;
  },
  fromSDK(object: LeafSDKType): Leaf {
    return {
      leaf: object.leaf ? Child.fromSDK(object.leaf) : undefined
    };
  },
  toSDK(message: Leaf): LeafSDKType {
    const obj: any = {};
    message.leaf !== undefined && (obj.leaf = message.leaf ? Child.toSDK(message.leaf) : undefined);
    return obj;
  },
  fromAmino(object: LeafAmino): Leaf {
    const message = createBaseLeaf();
    if (object.leaf !== undefined && object.leaf !== null) {
      message.leaf = Child.fromAmino(object.leaf);
    }
    return message;
  },
  toAmino(message: Leaf, useInterfaces: boolean = true): LeafAmino {
    const obj: any = {};
    obj.leaf = message.leaf ? Child.toAmino(message.leaf, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: LeafProtoMsg, useInterfaces: boolean = true): Leaf {
    return Leaf.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Leaf): Uint8Array {
    return Leaf.encode(message).finish();
  },
  toProtoMsg(message: Leaf): LeafProtoMsg {
    return {
      typeUrl: "/osmosis.store.v1beta1.Leaf",
      value: Leaf.encode(message).finish()
    };
  }
};