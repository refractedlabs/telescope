import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.denomTrace = this.denomTrace.bind(this);
    this.denomTraces = this.denomTraces.bind(this);
    this.params = this.params.bind(this);
  }
  /* DenomTrace queries a denomination trace information. */


  async denomTrace(params: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse> {
    const endpoint = `ibc/apps/transfer/v1/denom_traces/${params.hash}`;
    return await this.req.get<QueryDenomTraceResponse>(endpoint);
  }
  /* DenomTraces queries all denomination traces. */


  async denomTraces(params: QueryDenomTracesRequest = {
    pagination: undefined
  }): Promise<QueryDenomTracesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/apps/transfer/v1/denom_traces`;
    return await this.req.get<QueryDenomTracesResponse>(endpoint, options);
  }
  /* Params queries all parameters of the ibc-transfer module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `ibc/apps/transfer/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  }

}