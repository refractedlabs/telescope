import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgConvertCoin, MsgConvertCoinSDKType, MsgConvertCoinResponse, MsgConvertCoinResponseSDKType, MsgConvertERC20, MsgConvertERC20SDKType, MsgConvertERC20Response, MsgConvertERC20ResponseSDKType } from "./tx";
/** Msg defines the erc20 Msg service. */
export interface Msg {
  /**
   * ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
   * that is registered on the token mapping.
   */
  convertCoin(request: BroadcastTxReq<MsgConvertCoin>): Promise<DeliverTxResponse>;
  /**
   * ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
   * contract that is registered on the token mapping.
   */
  convertERC20(request: BroadcastTxReq<MsgConvertERC20>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
   that is registered on the token mapping. */
  convertCoin = async (request: BroadcastTxReq<MsgConvertCoin>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgConvertCoin.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
   contract that is registered on the token mapping. */
  convertERC20 = async (request: BroadcastTxReq<MsgConvertERC20>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgConvertERC20.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};