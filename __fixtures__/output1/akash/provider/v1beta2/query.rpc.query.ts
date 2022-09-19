import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./provider";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryProvidersRequest, QueryProvidersRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderRequest, QueryProviderRequestSDKType, QueryProviderResponse, QueryProviderResponseSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  providers(request?: QueryProvidersRequest): Promise<QueryProvidersResponseSDKType>;
  /*Providers queries providers*/

  provider(request: QueryProviderRequest): Promise<QueryProviderResponseSDKType>;
  /*Provider queries provider details*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.providers = this.providers.bind(this);
    this.provider = this.provider.bind(this);
  }

  providers(request: QueryProvidersRequest = {
    pagination: undefined
  }): Promise<QueryProvidersResponseSDKType> {
    const data = QueryProvidersRequest.encode(request).finish();
    const promise = this.rpc.request("akash.provider.v1beta2.Query", "Providers", data);
    return promise.then(data => QueryProvidersResponse.decode(new _m0.Reader(data)));
  }

  provider(request: QueryProviderRequest): Promise<QueryProviderResponseSDKType> {
    const data = QueryProviderRequest.encode(request).finish();
    const promise = this.rpc.request("akash.provider.v1beta2.Query", "Provider", data);
    return promise.then(data => QueryProviderResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    providers(request: QueryProvidersRequest): Promise<QueryProvidersResponseSDKType> {
      return queryService.providers(request);
    },

    provider(request: QueryProviderRequest): Promise<QueryProviderResponseSDKType> {
      return queryService.provider(request);
    }

  };
};