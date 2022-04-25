import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { Msg, Rpc } from "./service";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateBidResponse, MsgCloseBidResponse, MsgCreateBid, MsgCloseBid } from "../../../akash/market/v1beta2/bid";
import { MsgWithdrawLeaseResponse, MsgCreateLeaseResponse, MsgCloseLeaseResponse, MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "../../../akash/market/v1beta2/lease";
export const fromJSON = {
  createBid(value: any) {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCreateBid",
      value: MsgCreateBid.fromJSON(value)
    };
  },

  closeBid(value: any) {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCloseBid",
      value: MsgCloseBid.fromJSON(value)
    };
  },

  withdrawLease(value: any) {
    return {
      typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
      value: MsgWithdrawLease.fromJSON(value)
    };
  },

  createLease(value: any) {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCreateLease",
      value: MsgCreateLease.fromJSON(value)
    };
  },

  closeLease(value: any) {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCloseLease",
      value: MsgCloseLease.fromJSON(value)
    };
  }

};