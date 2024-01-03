//@ts-nocheck
import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType, SmoothWeightChangeParams, SmoothWeightChangeParamsSDKType } from "../balancerPool";
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault, padDecimal } from "../../../../../helpers";
import { Duration, DurationSDKType } from "../../../../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../../../../cosmos/base/v1beta1/coin";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolSDKType } from "./tx";
export interface MsgCreateBalancerPoolAminoType extends AminoMsg {
  type: "osmosis/gamm/poolmodels/balancer/create-balancer-pool";
  value: {
    sender: string;
    pool_params: {
      swap_fee: string;
      exit_fee: string;
      smooth_weight_change_params: {
        start_time: string;
        duration: {
          seconds: string;
          nanos: number;
        };
        initial_pool_weights: {
          token: {
            denom: string;
            amount: string;
          };
          weight: string;
        }[];
        target_pool_weights: {
          token: {
            denom: string;
            amount: string;
          };
          weight: string;
        }[];
      };
    };
    pool_assets: {
      token: {
        denom: string;
        amount: string;
      };
      weight: string;
    }[];
    future_pool_governor: string;
  };
}
export const AminoConverter = {
  "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
    aminoType: "osmosis/gamm/poolmodels/balancer/create-balancer-pool",
    toAmino: ({
      sender,
      poolParams,
      poolAssets,
      futurePoolGovernor
    }: MsgCreateBalancerPool): MsgCreateBalancerPoolAminoType["value"] => {
      return {
        sender: omitDefault(sender),
        pool_params: {
          swap_fee: padDecimal(poolParams.swapFee),
          exit_fee: padDecimal(poolParams.exitFee),
          smooth_weight_change_params: {
            start_time: poolParams.smoothWeightChangeParams.startTime,
            duration: (poolParams.smoothWeightChangeParams.duration * 1_000_000_000).toString(),
            initial_pool_weights: poolParams.smoothWeightChangeParams.initialPoolWeights.map(el0 => ({
              token: {
                denom: el0.token.denom,
                amount: el0.token.amount
              },
              weight: omitDefault(el0.weight)
            })),
            target_pool_weights: poolParams.smoothWeightChangeParams.targetPoolWeights.map(el0 => ({
              token: {
                denom: el0.token.denom,
                amount: el0.token.amount
              },
              weight: omitDefault(el0.weight)
            }))
          }
        },
        pool_assets: poolAssets.map(el0 => ({
          token: {
            denom: el0.token.denom,
            amount: el0.token.amount
          },
          weight: omitDefault(el0.weight)
        })),
        future_pool_governor: omitDefault(futurePoolGovernor)
      };
    },
    fromAmino: ({
      sender,
      pool_params,
      pool_assets,
      future_pool_governor
    }: MsgCreateBalancerPoolAminoType["value"]): MsgCreateBalancerPool => {
      return {
        sender,
        poolParams: pool_params == null ? pool_params : {
          swapFee: pool_params.swap_fee,
          exitFee: pool_params.exit_fee,
          smoothWeightChangeParams: pool_params.smooth_weight_change_params == null ? pool_params.smooth_weight_change_params : {
            startTime: pool_params.smooth_weight_change_params.start_time,
            duration: pool_params.smooth_weight_change_params.duration == null ? pool_params.smooth_weight_change_params.duration : {
              seconds: BigInt(Math.floor(parseInt(pool_params.smooth_weight_change_params.duration) / 1_000_000_000)),
              nanos: parseInt(pool_params.smooth_weight_change_params.duration) % 1_000_000_000
            },
            initialPoolWeights: pool_params.smooth_weight_change_params.initial_pool_weights.map?.(el2 => ({
              token: el2.token == null ? el2.token : {
                denom: el2.token.denom,
                amount: el2.token.amount
              },
              weight: el2.weight
            })),
            targetPoolWeights: pool_params.smooth_weight_change_params.target_pool_weights.map?.(el2 => ({
              token: el2.token == null ? el2.token : {
                denom: el2.token.denom,
                amount: el2.token.amount
              },
              weight: el2.weight
            }))
          }
        },
        poolAssets: pool_assets.map?.(el0 => ({
          token: el0.token == null ? el0.token : {
            denom: el0.token.denom,
            amount: el0.token.amount
          },
          weight: el0.weight
        })),
        futurePoolGovernor: future_pool_governor
      };
    }
  }
};