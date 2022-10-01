import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgCreateCertificateResponse, MsgCreateCertificateResponseSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType, MsgRevokeCertificateResponse, MsgRevokeCertificateResponseSDKType } from "./cert";

/** Msg defines the RPC service */
export interface Msg {
  createCertificate(request: MsgCreateCertificate): Promise<MsgCreateCertificateResponse>;
  /*CreateCertificate defines a method to create new certificate given proper inputs.*/

  revokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse>;
  /*RevokeCertificate defines a method to revoke the certificate*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  /* CreateCertificate defines a method to create new certificate given proper inputs. */
  createCertificate = async (request: MsgCreateCertificate): Promise<MsgCreateCertificateResponse> => {
    const data = MsgCreateCertificate.encode(request).finish();
    const promise = this.rpc.request("akash.cert.v1beta2.Msg", "CreateCertificate", data);
    return promise.then(data => MsgCreateCertificateResponse.decode(new _m0.Reader(data)));
  };

  /* RevokeCertificate defines a method to revoke the certificate */
  revokeCertificate = async (request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse> => {
    const data = MsgRevokeCertificate.encode(request).finish();
    const promise = this.rpc.request("akash.cert.v1beta2.Msg", "RevokeCertificate", data);
    return promise.then(data => MsgRevokeCertificateResponse.decode(new _m0.Reader(data)));
  };
}