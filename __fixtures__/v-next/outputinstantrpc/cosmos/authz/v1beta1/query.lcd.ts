import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType, GrantAuthorization, GrantAuthorizationSDKType } from "./authz";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryGrantsRequest, QueryGrantsRequestSDKType, QueryGrantsResponse, QueryGrantsResponseSDKType, QueryGranterGrantsRequest, QueryGranterGrantsRequestSDKType, QueryGranterGrantsResponse, QueryGranterGrantsResponseSDKType, QueryGranteeGrantsRequest, QueryGranteeGrantsRequestSDKType, QueryGranteeGrantsResponse, QueryGranteeGrantsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Returns list of `Authorization`, granted to the grantee by the granter. */
  grants = async (params: QueryGrantsRequest): Promise<QueryGrantsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.granter !== "undefined") {
      options.params.granter = params.granter;
    }
    if (typeof params?.grantee !== "undefined") {
      options.params.grantee = params.grantee;
    }
    if (typeof params?.msgTypeUrl !== "undefined") {
      options.params.msg_type_url = params.msgTypeUrl;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/authz/v1beta1/grants`;
    return QueryGrantsResponse.fromSDKJSON(await this.req.get<QueryGrantsResponseSDKType>(endpoint, options));
  };
  /* GranterGrants returns list of `GrantAuthorization`, granted by granter.
  
   Since: cosmos-sdk 0.46 */
  granterGrants = async (params: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/authz/v1beta1/grants/granter/${params.granter}`;
    return QueryGranterGrantsResponse.fromSDKJSON(await this.req.get<QueryGranterGrantsResponseSDKType>(endpoint, options));
  };
  /* GranteeGrants returns a list of `GrantAuthorization` by grantee.
  
   Since: cosmos-sdk 0.46 */
  granteeGrants = async (params: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/authz/v1beta1/grants/grantee/${params.grantee}`;
    return QueryGranteeGrantsResponse.fromSDKJSON(await this.req.get<QueryGranteeGrantsResponseSDKType>(endpoint, options));
  };
}