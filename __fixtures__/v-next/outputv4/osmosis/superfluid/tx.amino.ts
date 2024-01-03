//@ts-nocheck
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../helpers";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateSDKType, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateSDKType, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockSDKType, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateSDKType, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolSDKType } from "./tx";
export interface MsgSuperfluidDelegateAminoType extends AminoMsg {
  type: "osmosis/superfluid-delegate";
  value: {
    sender: string;
    lock_id: string;
    val_addr: string;
  };
}
export interface MsgSuperfluidUndelegateAminoType extends AminoMsg {
  type: "osmosis/superfluid-undelegate";
  value: {
    sender: string;
    lock_id: string;
  };
}
export interface MsgSuperfluidUnbondLockAminoType extends AminoMsg {
  type: "osmosis/superfluid-unbond-lock";
  value: {
    sender: string;
    lock_id: string;
  };
}
export interface MsgLockAndSuperfluidDelegateAminoType extends AminoMsg {
  type: "osmosis/lock-and-superfluid-delegate";
  value: {
    sender: string;
    coins: {
      denom: string;
      amount: string;
    }[];
    val_addr: string;
  };
}
export interface MsgUnPoolWhitelistedPoolAminoType extends AminoMsg {
  type: "osmosis/unpool-whitelisted-pool";
  value: {
    sender: string;
    pool_id: string;
  };
}
export const AminoConverter = {
  "/osmosis.superfluid.MsgSuperfluidDelegate": {
    aminoType: "osmosis/superfluid-delegate",
    toAmino: ({
      sender,
      lockId,
      valAddr
    }: MsgSuperfluidDelegate): MsgSuperfluidDelegateAminoType["value"] => {
      return {
        sender: omitDefault(sender),
        lock_id: omitDefault(lockId)?.toString?.(),
        val_addr: omitDefault(valAddr)
      };
    },
    fromAmino: ({
      sender,
      lock_id,
      val_addr
    }: MsgSuperfluidDelegateAminoType["value"]): MsgSuperfluidDelegate => {
      return {
        sender,
        lockId: lock_id == null ? lock_id : BigInt(lock_id),
        valAddr: val_addr
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUndelegate": {
    aminoType: "osmosis/superfluid-undelegate",
    toAmino: ({
      sender,
      lockId
    }: MsgSuperfluidUndelegate): MsgSuperfluidUndelegateAminoType["value"] => {
      return {
        sender: omitDefault(sender),
        lock_id: omitDefault(lockId)?.toString?.()
      };
    },
    fromAmino: ({
      sender,
      lock_id
    }: MsgSuperfluidUndelegateAminoType["value"]): MsgSuperfluidUndelegate => {
      return {
        sender,
        lockId: lock_id == null ? lock_id : BigInt(lock_id)
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
    aminoType: "osmosis/superfluid-unbond-lock",
    toAmino: ({
      sender,
      lockId
    }: MsgSuperfluidUnbondLock): MsgSuperfluidUnbondLockAminoType["value"] => {
      return {
        sender: omitDefault(sender),
        lock_id: omitDefault(lockId)?.toString?.()
      };
    },
    fromAmino: ({
      sender,
      lock_id
    }: MsgSuperfluidUnbondLockAminoType["value"]): MsgSuperfluidUnbondLock => {
      return {
        sender,
        lockId: lock_id == null ? lock_id : BigInt(lock_id)
      };
    }
  },
  "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
    aminoType: "osmosis/lock-and-superfluid-delegate",
    toAmino: ({
      sender,
      coins,
      valAddr
    }: MsgLockAndSuperfluidDelegate): MsgLockAndSuperfluidDelegateAminoType["value"] => {
      return {
        sender: omitDefault(sender),
        coins: coins.map(el0 => ({
          denom: omitDefault(el0.denom),
          amount: omitDefault(el0.amount)
        })),
        val_addr: omitDefault(valAddr)
      };
    },
    fromAmino: ({
      sender,
      coins,
      val_addr
    }: MsgLockAndSuperfluidDelegateAminoType["value"]): MsgLockAndSuperfluidDelegate => {
      return {
        sender,
        coins: coins.map?.(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        valAddr: val_addr
      };
    }
  },
  "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
    aminoType: "osmosis/unpool-whitelisted-pool",
    toAmino: ({
      sender,
      poolId
    }: MsgUnPoolWhitelistedPool): MsgUnPoolWhitelistedPoolAminoType["value"] => {
      return {
        sender: omitDefault(sender),
        pool_id: omitDefault(poolId)?.toString?.()
      };
    },
    fromAmino: ({
      sender,
      pool_id
    }: MsgUnPoolWhitelistedPoolAminoType["value"]): MsgUnPoolWhitelistedPool => {
      return {
        sender,
        poolId: pool_id == null ? pool_id : BigInt(pool_id)
      };
    }
  }
};