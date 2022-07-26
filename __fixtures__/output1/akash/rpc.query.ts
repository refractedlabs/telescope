export const createRPCQueryClient = async ({
  rpcEndpoint
}) => ({
  akash: {
    audit: {
      v1beta2: new (await import("./audit/v1beta2/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    cert: {
      v1beta2: new (await import("./cert/v1beta2/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    deployment: {
      v1beta1: new (await import("./deployment/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      }),
      v1beta2: new (await import("./deployment/v1beta2/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    escrow: {
      v1beta1: new (await import("./escrow/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      }),
      v1beta2: new (await import("./escrow/v1beta2/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    market: {
      v1beta2: new (await import("./market/v1beta2/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    provider: {
      v1beta2: new (await import("./provider/v1beta2/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    }
  },
  cosmos: {
    app: {
      v1alpha1: new (await import("../cosmos/app/v1alpha1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    auth: {
      v1beta1: new (await import("../cosmos/auth/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      }),
      v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    group: {
      v1: new (await import("../cosmos/group/v1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    mint: {
      v1beta1: new (await import("../cosmos/mint/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    nft: {
      v1beta1: new (await import("../cosmos/nft/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    params: {
      v1beta1: new (await import("../cosmos/params/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    }
  }
});