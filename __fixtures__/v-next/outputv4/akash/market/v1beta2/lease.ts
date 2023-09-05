import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDSDKType } from "./bid";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.market.v1beta2";
/** State is an enum which refers to state of lease */
export enum Lease_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** active - LeaseActive denotes state for lease active */
  active = 1,
  /** insufficient_funds - LeaseInsufficientFunds denotes state for lease insufficient_funds */
  insufficient_funds = 2,
  /** closed - LeaseClosed denotes state for lease closed */
  closed = 3,
  UNRECOGNIZED = -1,
}
export const Lease_StateSDKType = Lease_State;
export function lease_StateFromJSON(object: any): Lease_State {
  switch (object) {
    case 0:
    case "invalid":
      return Lease_State.invalid;
    case 1:
    case "active":
      return Lease_State.active;
    case 2:
    case "insufficient_funds":
      return Lease_State.insufficient_funds;
    case 3:
    case "closed":
      return Lease_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Lease_State.UNRECOGNIZED;
  }
}
export function lease_StateToJSON(object: Lease_State): string {
  switch (object) {
    case Lease_State.invalid:
      return "invalid";
    case Lease_State.active:
      return "active";
    case Lease_State.insufficient_funds:
      return "insufficient_funds";
    case Lease_State.closed:
      return "closed";
    case Lease_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** LeaseID stores bid details of lease */
export interface LeaseID {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
}
/** LeaseID stores bid details of lease */
export interface LeaseIDSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
}
/** Lease stores LeaseID, state of lease and price */
export interface Lease {
  leaseId: LeaseID;
  state: Lease_State;
  price: DecCoin;
  createdAt: bigint;
  closedOn: bigint;
}
/** Lease stores LeaseID, state of lease and price */
export interface LeaseSDKType {
  lease_id: LeaseIDSDKType;
  state: Lease_State;
  price: DecCoinSDKType;
  created_at: bigint;
  closed_on: bigint;
}
/** LeaseFilters defines flags for lease list filter */
export interface LeaseFilters {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
/** LeaseFilters defines flags for lease list filter */
export interface LeaseFiltersSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLease {
  bidId: BidID;
}
/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLeaseSDKType {
  bid_id: BidIDSDKType;
}
/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponse {}
/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponseSDKType {}
/** MsgWithdrawLease defines an SDK message for closing bid */
export interface MsgWithdrawLease {
  bidId: LeaseID;
}
/** MsgWithdrawLease defines an SDK message for closing bid */
export interface MsgWithdrawLeaseSDKType {
  bid_id: LeaseIDSDKType;
}
/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponse {}
/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponseSDKType {}
/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLease {
  leaseId: LeaseID;
}
/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLeaseSDKType {
  lease_id: LeaseIDSDKType;
}
/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponse {}
/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponseSDKType {}
function createBaseLeaseID(): LeaseID {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0,
    provider: ""
  };
}
export const LeaseID = {
  encode(message: LeaseID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LeaseID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaseID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        case 3:
          message.gseq = reader.uint32();
          break;
        case 4:
          message.oseq = reader.uint32();
          break;
        case 5:
          message.provider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LeaseID {
    const obj = createBaseLeaseID();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.dseq)) obj.dseq = BigInt(object.dseq.toString());
    if (isSet(object.gseq)) obj.gseq = Number(object.gseq);
    if (isSet(object.oseq)) obj.oseq = Number(object.oseq);
    if (isSet(object.provider)) obj.provider = String(object.provider);
    return obj;
  },
  toJSON(message: LeaseID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || BigInt(0)).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    message.oseq !== undefined && (obj.oseq = Math.round(message.oseq));
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LeaseID>, I>>(object: I): LeaseID {
    const message = createBaseLeaseID();
    message.owner = object.owner ?? "";
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq.toString());
    }
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    return message;
  },
  fromSDK(object: LeaseIDSDKType): LeaseID {
    return {
      owner: object?.owner,
      dseq: object?.dseq,
      gseq: object?.gseq,
      oseq: object?.oseq,
      provider: object?.provider
    };
  },
  fromSDKJSON(object: any): LeaseIDSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },
  toSDK(message: LeaseID): LeaseIDSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    obj.gseq = message.gseq;
    obj.oseq = message.oseq;
    obj.provider = message.provider;
    return obj;
  }
};
function createBaseLease(): Lease {
  return {
    leaseId: LeaseID.fromPartial({}),
    state: 0,
    price: DecCoin.fromPartial({}),
    createdAt: BigInt(0),
    closedOn: BigInt(0)
  };
}
export const Lease = {
  encode(message: Lease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    if (message.closedOn !== BigInt(0)) {
      writer.uint32(40).int64(message.closedOn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Lease {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaseId = LeaseID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = (reader.int32() as any);
          break;
        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        case 4:
          message.createdAt = reader.int64();
          break;
        case 5:
          message.closedOn = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Lease {
    const obj = createBaseLease();
    if (isSet(object.leaseId)) obj.leaseId = LeaseID.fromJSON(object.leaseId);
    if (isSet(object.state)) obj.state = lease_StateFromJSON(object.state);
    if (isSet(object.price)) obj.price = DecCoin.fromJSON(object.price);
    if (isSet(object.createdAt)) obj.createdAt = BigInt(object.createdAt.toString());
    if (isSet(object.closedOn)) obj.closedOn = BigInt(object.closedOn.toString());
    return obj;
  },
  toJSON(message: Lease): unknown {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId ? LeaseID.toJSON(message.leaseId) : undefined);
    message.state !== undefined && (obj.state = lease_StateToJSON(message.state));
    message.price !== undefined && (obj.price = message.price ? DecCoin.toJSON(message.price) : undefined);
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || BigInt(0)).toString());
    message.closedOn !== undefined && (obj.closedOn = (message.closedOn || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Lease>, I>>(object: I): Lease {
    const message = createBaseLease();
    if (object.leaseId !== undefined && object.leaseId !== null) {
      message.leaseId = LeaseID.fromPartial(object.leaseId);
    }
    message.state = object.state ?? 0;
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromPartial(object.price);
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = BigInt(object.createdAt.toString());
    }
    if (object.closedOn !== undefined && object.closedOn !== null) {
      message.closedOn = BigInt(object.closedOn.toString());
    }
    return message;
  },
  fromSDK(object: LeaseSDKType): Lease {
    return {
      leaseId: object.lease_id ? LeaseID.fromSDK(object.lease_id) : undefined,
      state: isSet(object.state) ? lease_StateFromJSON(object.state) : -1,
      price: object.price ? DecCoin.fromSDK(object.price) : undefined,
      createdAt: object?.created_at,
      closedOn: object?.closed_on
    };
  },
  fromSDKJSON(object: any): LeaseSDKType {
    return {
      lease_id: isSet(object.lease_id) ? LeaseID.fromSDKJSON(object.lease_id) : undefined,
      state: isSet(object.state) ? lease_StateFromJSON(object.state) : -1,
      price: isSet(object.price) ? DecCoin.fromSDKJSON(object.price) : undefined,
      created_at: isSet(object.created_at) ? BigInt(object.created_at.toString()) : BigInt(0),
      closed_on: isSet(object.closed_on) ? BigInt(object.closed_on.toString()) : BigInt(0)
    };
  },
  toSDK(message: Lease): LeaseSDKType {
    const obj: any = {};
    message.leaseId !== undefined && (obj.lease_id = message.leaseId ? LeaseID.toSDK(message.leaseId) : undefined);
    message.state !== undefined && (obj.state = lease_StateToJSON(message.state));
    message.price !== undefined && (obj.price = message.price ? DecCoin.toSDK(message.price) : undefined);
    obj.created_at = message.createdAt;
    obj.closed_on = message.closedOn;
    return obj;
  }
};
function createBaseLeaseFilters(): LeaseFilters {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0,
    provider: "",
    state: ""
  };
}
export const LeaseFilters = {
  encode(message: LeaseFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    if (message.state !== "") {
      writer.uint32(50).string(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LeaseFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaseFilters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        case 3:
          message.gseq = reader.uint32();
          break;
        case 4:
          message.oseq = reader.uint32();
          break;
        case 5:
          message.provider = reader.string();
          break;
        case 6:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LeaseFilters {
    const obj = createBaseLeaseFilters();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.dseq)) obj.dseq = BigInt(object.dseq.toString());
    if (isSet(object.gseq)) obj.gseq = Number(object.gseq);
    if (isSet(object.oseq)) obj.oseq = Number(object.oseq);
    if (isSet(object.provider)) obj.provider = String(object.provider);
    if (isSet(object.state)) obj.state = String(object.state);
    return obj;
  },
  toJSON(message: LeaseFilters): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || BigInt(0)).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    message.oseq !== undefined && (obj.oseq = Math.round(message.oseq));
    message.provider !== undefined && (obj.provider = message.provider);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LeaseFilters>, I>>(object: I): LeaseFilters {
    const message = createBaseLeaseFilters();
    message.owner = object.owner ?? "";
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq.toString());
    }
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    message.state = object.state ?? "";
    return message;
  },
  fromSDK(object: LeaseFiltersSDKType): LeaseFilters {
    return {
      owner: object?.owner,
      dseq: object?.dseq,
      gseq: object?.gseq,
      oseq: object?.oseq,
      provider: object?.provider,
      state: object?.state
    };
  },
  fromSDKJSON(object: any): LeaseFiltersSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : "",
      state: isSet(object.state) ? String(object.state) : ""
    };
  },
  toSDK(message: LeaseFilters): LeaseFiltersSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    obj.gseq = message.gseq;
    obj.oseq = message.oseq;
    obj.provider = message.provider;
    obj.state = message.state;
    return obj;
  }
};
function createBaseMsgCreateLease(): MsgCreateLease {
  return {
    bidId: BidID.fromPartial({})
  };
}
export const MsgCreateLease = {
  encode(message: MsgCreateLease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateLease {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidId = BidID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateLease {
    const obj = createBaseMsgCreateLease();
    if (isSet(object.bidId)) obj.bidId = BidID.fromJSON(object.bidId);
    return obj;
  },
  toJSON(message: MsgCreateLease): unknown {
    const obj: any = {};
    message.bidId !== undefined && (obj.bidId = message.bidId ? BidID.toJSON(message.bidId) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateLease>, I>>(object: I): MsgCreateLease {
    const message = createBaseMsgCreateLease();
    if (object.bidId !== undefined && object.bidId !== null) {
      message.bidId = BidID.fromPartial(object.bidId);
    }
    return message;
  },
  fromSDK(object: MsgCreateLeaseSDKType): MsgCreateLease {
    return {
      bidId: object.bid_id ? BidID.fromSDK(object.bid_id) : undefined
    };
  },
  fromSDKJSON(object: any): MsgCreateLeaseSDKType {
    return {
      bid_id: isSet(object.bid_id) ? BidID.fromSDKJSON(object.bid_id) : undefined
    };
  },
  toSDK(message: MsgCreateLease): MsgCreateLeaseSDKType {
    const obj: any = {};
    message.bidId !== undefined && (obj.bid_id = message.bidId ? BidID.toSDK(message.bidId) : undefined);
    return obj;
  }
};
function createBaseMsgCreateLeaseResponse(): MsgCreateLeaseResponse {
  return {};
}
export const MsgCreateLeaseResponse = {
  encode(_: MsgCreateLeaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateLeaseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLeaseResponse();
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
  fromJSON(_: any): MsgCreateLeaseResponse {
    const obj = createBaseMsgCreateLeaseResponse();
    return obj;
  },
  toJSON(_: MsgCreateLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateLeaseResponse>, I>>(_: I): MsgCreateLeaseResponse {
    const message = createBaseMsgCreateLeaseResponse();
    return message;
  },
  fromSDK(_: MsgCreateLeaseResponseSDKType): MsgCreateLeaseResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgCreateLeaseResponseSDKType {
    return {};
  },
  toSDK(_: MsgCreateLeaseResponse): MsgCreateLeaseResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgWithdrawLease(): MsgWithdrawLease {
  return {
    bidId: LeaseID.fromPartial({})
  };
}
export const MsgWithdrawLease = {
  encode(message: MsgWithdrawLease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidId !== undefined) {
      LeaseID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawLease {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidId = LeaseID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawLease {
    const obj = createBaseMsgWithdrawLease();
    if (isSet(object.bidId)) obj.bidId = LeaseID.fromJSON(object.bidId);
    return obj;
  },
  toJSON(message: MsgWithdrawLease): unknown {
    const obj: any = {};
    message.bidId !== undefined && (obj.bidId = message.bidId ? LeaseID.toJSON(message.bidId) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawLease>, I>>(object: I): MsgWithdrawLease {
    const message = createBaseMsgWithdrawLease();
    if (object.bidId !== undefined && object.bidId !== null) {
      message.bidId = LeaseID.fromPartial(object.bidId);
    }
    return message;
  },
  fromSDK(object: MsgWithdrawLeaseSDKType): MsgWithdrawLease {
    return {
      bidId: object.bid_id ? LeaseID.fromSDK(object.bid_id) : undefined
    };
  },
  fromSDKJSON(object: any): MsgWithdrawLeaseSDKType {
    return {
      bid_id: isSet(object.bid_id) ? LeaseID.fromSDKJSON(object.bid_id) : undefined
    };
  },
  toSDK(message: MsgWithdrawLease): MsgWithdrawLeaseSDKType {
    const obj: any = {};
    message.bidId !== undefined && (obj.bid_id = message.bidId ? LeaseID.toSDK(message.bidId) : undefined);
    return obj;
  }
};
function createBaseMsgWithdrawLeaseResponse(): MsgWithdrawLeaseResponse {
  return {};
}
export const MsgWithdrawLeaseResponse = {
  encode(_: MsgWithdrawLeaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawLeaseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawLeaseResponse();
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
  fromJSON(_: any): MsgWithdrawLeaseResponse {
    const obj = createBaseMsgWithdrawLeaseResponse();
    return obj;
  },
  toJSON(_: MsgWithdrawLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawLeaseResponse>, I>>(_: I): MsgWithdrawLeaseResponse {
    const message = createBaseMsgWithdrawLeaseResponse();
    return message;
  },
  fromSDK(_: MsgWithdrawLeaseResponseSDKType): MsgWithdrawLeaseResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgWithdrawLeaseResponseSDKType {
    return {};
  },
  toSDK(_: MsgWithdrawLeaseResponse): MsgWithdrawLeaseResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgCloseLease(): MsgCloseLease {
  return {
    leaseId: LeaseID.fromPartial({})
  };
}
export const MsgCloseLease = {
  encode(message: MsgCloseLease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseLease {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaseId = LeaseID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCloseLease {
    const obj = createBaseMsgCloseLease();
    if (isSet(object.leaseId)) obj.leaseId = LeaseID.fromJSON(object.leaseId);
    return obj;
  },
  toJSON(message: MsgCloseLease): unknown {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId ? LeaseID.toJSON(message.leaseId) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCloseLease>, I>>(object: I): MsgCloseLease {
    const message = createBaseMsgCloseLease();
    if (object.leaseId !== undefined && object.leaseId !== null) {
      message.leaseId = LeaseID.fromPartial(object.leaseId);
    }
    return message;
  },
  fromSDK(object: MsgCloseLeaseSDKType): MsgCloseLease {
    return {
      leaseId: object.lease_id ? LeaseID.fromSDK(object.lease_id) : undefined
    };
  },
  fromSDKJSON(object: any): MsgCloseLeaseSDKType {
    return {
      lease_id: isSet(object.lease_id) ? LeaseID.fromSDKJSON(object.lease_id) : undefined
    };
  },
  toSDK(message: MsgCloseLease): MsgCloseLeaseSDKType {
    const obj: any = {};
    message.leaseId !== undefined && (obj.lease_id = message.leaseId ? LeaseID.toSDK(message.leaseId) : undefined);
    return obj;
  }
};
function createBaseMsgCloseLeaseResponse(): MsgCloseLeaseResponse {
  return {};
}
export const MsgCloseLeaseResponse = {
  encode(_: MsgCloseLeaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseLeaseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLeaseResponse();
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
  fromJSON(_: any): MsgCloseLeaseResponse {
    const obj = createBaseMsgCloseLeaseResponse();
    return obj;
  },
  toJSON(_: MsgCloseLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCloseLeaseResponse>, I>>(_: I): MsgCloseLeaseResponse {
    const message = createBaseMsgCloseLeaseResponse();
    return message;
  },
  fromSDK(_: MsgCloseLeaseResponseSDKType): MsgCloseLeaseResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgCloseLeaseResponseSDKType {
    return {};
  },
  toSDK(_: MsgCloseLeaseResponse): MsgCloseLeaseResponseSDKType {
    const obj: any = {};
    return obj;
  }
};