import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin.js";
import { Height, HeightSDKType } from "../../../core/client/v1/client.js";
import { Rpc } from "../../../../helpers.js";
import { BinaryReader } from "../../../../binary.js";
import { MsgTransfer, MsgTransferSDKType, MsgTransferResponse, MsgTransferResponseSDKType } from "./tx.js";
/** Msg defines the ibc/transfer Msg service. */
export interface Msg {
  /** Transfer defines a rpc handler method for MsgTransfer. */
  transfer(request: MsgTransfer): Promise<MsgTransferResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.transfer = this.transfer.bind(this);
  }
  transfer(request: MsgTransfer): Promise<MsgTransferResponse> {
    const data = MsgTransfer.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Msg", "Transfer", data);
    return promise.then(data => MsgTransferResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};