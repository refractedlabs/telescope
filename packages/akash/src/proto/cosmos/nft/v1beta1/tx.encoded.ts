import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSend, MsgSendResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export const encoded = {
  send(value: MsgSend) {
    return {
      type_url: "/cosmos.nft.v1beta1.MsgSend",
      value: MsgSend.encode(value).finish()
    };
  }

};