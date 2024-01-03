import { AccessConfig, AccessConfigSDKType, accessTypeFromJSON } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../helpers";
import { toBase64, fromBase64, fromUtf8, toUtf8 } from "@cosmjs/encoding";
import { MsgStoreCode, MsgStoreCodeSDKType, MsgInstantiateContract, MsgInstantiateContractSDKType, MsgExecuteContract, MsgExecuteContractSDKType, MsgMigrateContract, MsgMigrateContractSDKType, MsgUpdateAdmin, MsgUpdateAdminSDKType, MsgClearAdmin, MsgClearAdminSDKType } from "./tx";
export interface MsgStoreCodeAminoType extends AminoMsg {
  type: "wasm/MsgStoreCode";
  value: {
    sender: string;
    wasm_byte_code: string;
    instantiate_permission: {
      permission: number;
      address: string;
    };
  };
}
export interface MsgInstantiateContractAminoType extends AminoMsg {
  type: "wasm/MsgInstantiateContract";
  value: {
    sender: string;
    admin: string;
    code_id: string;
    label: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgExecuteContractAminoType extends AminoMsg {
  type: "wasm/MsgExecuteContract";
  value: {
    sender: string;
    contract: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgMigrateContractAminoType extends AminoMsg {
  type: "wasm/MsgMigrateContract";
  value: {
    sender: string;
    contract: string;
    code_id: string;
    msg: Uint8Array;
  };
}
export interface MsgUpdateAdminAminoType extends AminoMsg {
  type: "wasm/MsgUpdateAdmin";
  value: {
    sender: string;
    new_admin: string;
    contract: string;
  };
}
export interface MsgClearAdminAminoType extends AminoMsg {
  type: "wasm/MsgClearAdmin";
  value: {
    sender: string;
    contract: string;
  };
}
export const AminoConverter = {
  "/cosmwasm.wasm.v1.MsgStoreCode": {
    aminoType: "wasm/MsgStoreCode",
    toAmino: ({
      sender,
      wasmByteCode,
      instantiatePermission
    }: MsgStoreCode): MsgStoreCodeAminoType["value"] => {
      return {
        sender: omitDefault(sender),
        wasm_byte_code: toBase64(wasmByteCode),
        instantiate_permission: {
          permission: instantiatePermission.permission,
          address: omitDefault(instantiatePermission.address)
        }
      };
    },
    fromAmino: ({
      sender,
      wasm_byte_code,
      instantiate_permission
    }: MsgStoreCodeAminoType["value"]): MsgStoreCode => {
      return {
        sender,
        wasmByteCode: wasm_byte_code == null ? wasm_byte_code : fromBase64(wasm_byte_code),
        instantiatePermission: instantiate_permission == null ? instantiate_permission : {
          permission: instantiate_permission.permission == null ? instantiate_permission.permission : accessTypeFromJSON(instantiate_permission.permission),
          address: instantiate_permission.address
        }
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgInstantiateContract": {
    aminoType: "wasm/MsgInstantiateContract",
    toAmino: ({
      sender,
      admin,
      codeId,
      label,
      msg,
      funds
    }: MsgInstantiateContract): MsgInstantiateContractAminoType["value"] => {
      return {
        sender: omitDefault(sender),
        admin: omitDefault(admin),
        code_id: omitDefault(codeId)?.toString?.(),
        label: omitDefault(label),
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: omitDefault(el0.denom),
          amount: omitDefault(el0.amount)
        }))
      };
    },
    fromAmino: ({
      sender,
      admin,
      code_id,
      label,
      msg,
      funds
    }: MsgInstantiateContractAminoType["value"]): MsgInstantiateContract => {
      return {
        sender,
        admin,
        codeId: code_id == null ? code_id : BigInt(code_id),
        label,
        msg: msg == null ? msg : toUtf8(JSON.stringify(msg)),
        funds: funds.map?.(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgExecuteContract": {
    aminoType: "wasm/MsgExecuteContract",
    toAmino: ({
      sender,
      contract,
      msg,
      funds
    }: MsgExecuteContract): MsgExecuteContractAminoType["value"] => {
      return {
        sender: omitDefault(sender),
        contract: omitDefault(contract),
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: omitDefault(el0.denom),
          amount: omitDefault(el0.amount)
        }))
      };
    },
    fromAmino: ({
      sender,
      contract,
      msg,
      funds
    }: MsgExecuteContractAminoType["value"]): MsgExecuteContract => {
      return {
        sender,
        contract,
        msg: msg == null ? msg : toUtf8(JSON.stringify(msg)),
        funds: funds.map?.(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgMigrateContract": {
    aminoType: "wasm/MsgMigrateContract",
    toAmino: ({
      sender,
      contract,
      codeId,
      msg
    }: MsgMigrateContract): MsgMigrateContractAminoType["value"] => {
      return {
        sender: omitDefault(sender),
        contract: omitDefault(contract),
        code_id: omitDefault(codeId)?.toString?.(),
        msg: JSON.parse(fromUtf8(msg))
      };
    },
    fromAmino: ({
      sender,
      contract,
      code_id,
      msg
    }: MsgMigrateContractAminoType["value"]): MsgMigrateContract => {
      return {
        sender,
        contract,
        codeId: code_id == null ? code_id : BigInt(code_id),
        msg: msg == null ? msg : toUtf8(JSON.stringify(msg))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
    aminoType: "wasm/MsgUpdateAdmin",
    toAmino: ({
      sender,
      newAdmin,
      contract
    }: MsgUpdateAdmin): MsgUpdateAdminAminoType["value"] => {
      return {
        sender: omitDefault(sender),
        new_admin: omitDefault(newAdmin),
        contract: omitDefault(contract)
      };
    },
    fromAmino: ({
      sender,
      new_admin,
      contract
    }: MsgUpdateAdminAminoType["value"]): MsgUpdateAdmin => {
      return {
        sender,
        newAdmin: new_admin,
        contract
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgClearAdmin": {
    aminoType: "wasm/MsgClearAdmin",
    toAmino: ({
      sender,
      contract
    }: MsgClearAdmin): MsgClearAdminAminoType["value"] => {
      return {
        sender: omitDefault(sender),
        contract: omitDefault(contract)
      };
    },
    fromAmino: ({
      sender,
      contract
    }: MsgClearAdminAminoType["value"]): MsgClearAdmin => {
      return {
        sender,
        contract
      };
    }
  }
};