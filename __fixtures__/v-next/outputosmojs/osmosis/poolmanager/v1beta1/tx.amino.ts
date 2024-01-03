//@ts-nocheck
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./swap_route";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../helpers";
import { MsgSwapExactAmountIn, MsgSwapExactAmountInSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutSDKType } from "./tx";
export interface MsgSwapExactAmountInAminoType extends AminoMsg {
  type: "osmosis/poolmanager/swap-exact-amount-in";
  value: {
    sender: string;
    routes: {
      pool_id: string;
      token_out_denom: string;
    }[];
    token_in: {
      denom: string;
      amount: string;
    };
    token_out_min_amount: string;
  };
}
export interface MsgSwapExactAmountOutAminoType extends AminoMsg {
  type: "osmosis/poolmanager/swap-exact-amount-out";
  value: {
    sender: string;
    routes: {
      pool_id: string;
      token_in_denom: string;
    }[];
    token_in_max_amount: string;
    token_out: {
      denom: string;
      amount: string;
    };
  };
}
export const AminoConverter = {
  "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
    aminoType: "osmosis/poolmanager/swap-exact-amount-in",
    toAmino: ({
      sender,
      routes,
      tokenIn,
      tokenOutMinAmount
    }: MsgSwapExactAmountIn): MsgSwapExactAmountInAminoType["value"] => {
      return {
        sender: omitDefault(sender),
        routes: routes.map(el0 => ({
          pool_id: omitDefault(el0.poolId)?.toString?.(),
          token_out_denom: omitDefault(el0.tokenOutDenom)
        })),
        token_in: {
          denom: tokenIn.denom,
          amount: tokenIn.amount
        },
        token_out_min_amount: omitDefault(tokenOutMinAmount)
      };
    },
    fromAmino: ({
      sender,
      routes,
      token_in,
      token_out_min_amount
    }: MsgSwapExactAmountInAminoType["value"]): MsgSwapExactAmountIn => {
      return {
        sender,
        routes: routes.map?.(el0 => ({
          poolId: el0.pool_id == null ? el0.pool_id : BigInt(el0.pool_id),
          tokenOutDenom: el0.token_out_denom
        })),
        tokenIn: token_in == null ? token_in : {
          denom: token_in.denom,
          amount: token_in.amount
        },
        tokenOutMinAmount: token_out_min_amount
      };
    }
  },
  "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
    aminoType: "osmosis/poolmanager/swap-exact-amount-out",
    toAmino: ({
      sender,
      routes,
      tokenInMaxAmount,
      tokenOut
    }: MsgSwapExactAmountOut): MsgSwapExactAmountOutAminoType["value"] => {
      return {
        sender: omitDefault(sender),
        routes: routes.map(el0 => ({
          pool_id: omitDefault(el0.poolId)?.toString?.(),
          token_in_denom: omitDefault(el0.tokenInDenom)
        })),
        token_in_max_amount: omitDefault(tokenInMaxAmount),
        token_out: {
          denom: tokenOut.denom,
          amount: tokenOut.amount
        }
      };
    },
    fromAmino: ({
      sender,
      routes,
      token_in_max_amount,
      token_out
    }: MsgSwapExactAmountOutAminoType["value"]): MsgSwapExactAmountOut => {
      return {
        sender,
        routes: routes.map?.(el0 => ({
          poolId: el0.pool_id == null ? el0.pool_id : BigInt(el0.pool_id),
          tokenInDenom: el0.token_in_denom
        })),
        tokenInMaxAmount: token_in_max_amount,
        tokenOut: token_out == null ? token_out : {
          denom: token_out.denom,
          amount: token_out.amount
        }
      };
    }
  }
};