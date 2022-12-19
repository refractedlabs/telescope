import { Grant, GrantAmino, GrantSDKType } from "./authz";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { MsgGrant, MsgGrantAmino, MsgGrantSDKType, MsgExec, MsgExecAmino, MsgExecSDKType, MsgRevoke, MsgRevokeAmino, MsgRevokeSDKType } from "./tx";
export const AminoConverter = {
  "/cosmos.authz.v1beta1.MsgGrant": {
    aminoType: "cosmos-sdk/MsgGrant",
    toAmino: MsgGrant.toAmino,
    fromAmino: MsgGrant.fromAmino
  },
  "/cosmos.authz.v1beta1.MsgExec": {
    aminoType: "cosmos-sdk/MsgExec",
    toAmino: MsgExec.toAmino,
    fromAmino: MsgExec.fromAmino
  },
  "/cosmos.authz.v1beta1.MsgRevoke": {
    aminoType: "cosmos-sdk/MsgRevoke",
    toAmino: MsgRevoke.toAmino,
    fromAmino: MsgRevoke.fromAmino
  }
};