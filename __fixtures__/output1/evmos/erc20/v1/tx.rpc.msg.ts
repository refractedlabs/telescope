import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgConvertCoin, MsgConvertCoinSDKType, MsgConvertCoinResponse, MsgConvertCoinResponseSDKType, MsgConvertERC20, MsgConvertERC20SDKType, MsgConvertERC20Response, MsgConvertERC20ResponseSDKType } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  convertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponseSDKType>;
  /*ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
  that is registered on the token mapping.*/

  convertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20ResponseSDKType>;
  /*ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
  contract that is registered on the token mapping.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.convertCoin = this.convertCoin.bind(this);
    this.convertERC20 = this.convertERC20.bind(this);
  }

  convertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponseSDKType> {
    const data = MsgConvertCoin.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Msg", "ConvertCoin", data);
    return promise.then(data => MsgConvertCoinResponse.decode(new _m0.Reader(data)));
  }

  convertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20ResponseSDKType> {
    const data = MsgConvertERC20.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Msg", "ConvertERC20", data);
    return promise.then(data => MsgConvertERC20Response.decode(new _m0.Reader(data)));
  }

}