import { QueryCondition, QueryConditionSDKType } from "../lockup/lock.js";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin.js";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp.js";
import { Rpc } from "../../helpers.js";
import { BinaryReader } from "../../binary.js";
import { MsgCreateGauge, MsgCreateGaugeSDKType, MsgCreateGaugeResponse, MsgCreateGaugeResponseSDKType, MsgAddToGauge, MsgAddToGaugeSDKType, MsgAddToGaugeResponse, MsgAddToGaugeResponseSDKType } from "./tx.js";
export interface Msg {
  createGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse>;
  addToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createGauge = this.createGauge.bind(this);
    this.addToGauge = this.addToGauge.bind(this);
  }
  createGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse> {
    const data = MsgCreateGauge.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Msg", "CreateGauge", data);
    return promise.then(data => MsgCreateGaugeResponse.decode(new BinaryReader(data)));
  }
  addToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse> {
    const data = MsgAddToGauge.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Msg", "AddToGauge", data);
    return promise.then(data => MsgAddToGaugeResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};