import { OrderID, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDSDKType, MsgCreateBid, MsgCreateBidSDKType, MsgCreateBidResponse, MsgCreateBidResponseSDKType, MsgCloseBid, MsgCloseBidSDKType, MsgCloseBidResponse, MsgCloseBidResponseSDKType } from "./bid";
import { LeaseID, LeaseIDSDKType, MsgWithdrawLease, MsgWithdrawLeaseSDKType, MsgWithdrawLeaseResponse, MsgWithdrawLeaseResponseSDKType, MsgCreateLease, MsgCreateLeaseSDKType, MsgCreateLeaseResponse, MsgCreateLeaseResponseSDKType, MsgCloseLease, MsgCloseLeaseSDKType, MsgCloseLeaseResponse, MsgCloseLeaseResponseSDKType } from "./lease";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";

/** Msg defines the RPC service */
export interface Msg {
  createBid(request: MsgCreateBid): Promise<MsgCreateBidResponseSDKType>;
  /*CreateBid defines a method to create a bid given proper inputs.*/

  closeBid(request: MsgCloseBid): Promise<MsgCloseBidResponseSDKType>;
  /*CloseBid defines a method to close a bid given proper inputs.*/

  withdrawLease(request: MsgWithdrawLease): Promise<MsgWithdrawLeaseResponseSDKType>;
  /*WithdrawLease withdraws accrued funds from the lease payment*/

  createLease(request: MsgCreateLease): Promise<MsgCreateLeaseResponseSDKType>;
  /*CreateLease creates a new lease*/

  closeLease(request: MsgCloseLease): Promise<MsgCloseLeaseResponseSDKType>;
  /*CloseLease defines a method to close an order given proper inputs.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createBid = this.createBid.bind(this);
    this.closeBid = this.closeBid.bind(this);
    this.withdrawLease = this.withdrawLease.bind(this);
    this.createLease = this.createLease.bind(this);
    this.closeLease = this.closeLease.bind(this);
  }

  createBid(request: MsgCreateBid): Promise<MsgCreateBidResponseSDKType> {
    const data = MsgCreateBid.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Msg", "CreateBid", data);
    return promise.then(data => MsgCreateBidResponse.decode(new _m0.Reader(data)));
  }

  closeBid(request: MsgCloseBid): Promise<MsgCloseBidResponseSDKType> {
    const data = MsgCloseBid.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Msg", "CloseBid", data);
    return promise.then(data => MsgCloseBidResponse.decode(new _m0.Reader(data)));
  }

  withdrawLease(request: MsgWithdrawLease): Promise<MsgWithdrawLeaseResponseSDKType> {
    const data = MsgWithdrawLease.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Msg", "WithdrawLease", data);
    return promise.then(data => MsgWithdrawLeaseResponse.decode(new _m0.Reader(data)));
  }

  createLease(request: MsgCreateLease): Promise<MsgCreateLeaseResponseSDKType> {
    const data = MsgCreateLease.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Msg", "CreateLease", data);
    return promise.then(data => MsgCreateLeaseResponse.decode(new _m0.Reader(data)));
  }

  closeLease(request: MsgCloseLease): Promise<MsgCloseLeaseResponseSDKType> {
    const data = MsgCloseLease.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Msg", "CloseLease", data);
    return promise.then(data => MsgCloseLeaseResponse.decode(new _m0.Reader(data)));
  }

}