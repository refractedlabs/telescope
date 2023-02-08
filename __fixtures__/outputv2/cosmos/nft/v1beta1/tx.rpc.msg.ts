import * as fm from "../../../grpc-gateway";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType } from "./tx";
export class Msg {
  static Send(request: MsgSend, initRequest?: fm.InitReq): Promise<MsgSendResponse> {
    return fm.fetchReq(`/cosmos.nft.v1beta1/Send`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}