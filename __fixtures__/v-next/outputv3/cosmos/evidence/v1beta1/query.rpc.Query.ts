import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as fm from "../../../grpc-gateway";
import { QueryEvidenceRequest, QueryEvidenceRequestSDKType, QueryEvidenceResponse, QueryEvidenceResponseSDKType, QueryAllEvidenceRequest, QueryAllEvidenceRequestSDKType, QueryAllEvidenceResponse, QueryAllEvidenceResponseSDKType } from "./query";
export class Query {
  /** Evidence queries evidence based on evidence hash. */
  static Evidence(request: QueryEvidenceRequest, initRequest?: fm.InitReq): Promise<QueryEvidenceResponse> {
    return fm.fetchReq(`/cosmos/evidence/v1beta1/evidence/${request["evidence_hash"]}?${fm.renderURLSearchParams({
      ...request
    }, ["evidence_hash"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** AllEvidence queries all evidence. */
  static AllEvidence(request: QueryAllEvidenceRequest, initRequest?: fm.InitReq): Promise<QueryAllEvidenceResponse> {
    return fm.fetchReq(`/cosmos/evidence/v1beta1/evidence?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Evidence queries evidence based on evidence hash. */
  async Evidence(req: QueryEvidenceRequest, headers?: HeadersInit): Promise<QueryEvidenceResponse> {
    return Query.Evidence(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** AllEvidence queries all evidence. */
  async AllEvidence(req: QueryAllEvidenceRequest, headers?: HeadersInit): Promise<QueryAllEvidenceResponse> {
    return Query.AllEvidence(req, {
      headers,
      pathPrefix: this.url
    });
  }
}