import { DeploymentFilters, DeploymentFiltersAmino, DeploymentFiltersSDKType, DeploymentID, DeploymentIDAmino, DeploymentIDSDKType, Deployment, DeploymentAmino, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDAmino, GroupIDSDKType } from "./groupid";
import { Group, GroupAmino, GroupSDKType } from "./group";
import { Account, AccountAmino, AccountSDKType } from "../../escrow/v1beta2/types";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryDeploymentsRequest, QueryDeploymentsRequestAmino, QueryDeploymentsRequestSDKType, QueryDeploymentsResponse, QueryDeploymentsResponseAmino, QueryDeploymentsResponseSDKType, QueryDeploymentRequest, QueryDeploymentRequestAmino, QueryDeploymentRequestSDKType, QueryDeploymentResponse, QueryDeploymentResponseAmino, QueryDeploymentResponseSDKType, QueryGroupRequest, QueryGroupRequestAmino, QueryGroupRequestSDKType, QueryGroupResponse, QueryGroupResponseAmino, QueryGroupResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.deployments = this.deployments.bind(this);
    this.deployment = this.deployment.bind(this);
    this.group = this.group.bind(this);
  }

  /* Deployments queries deployments */
  async deployments(params: QueryDeploymentsRequest): Promise<QueryDeploymentsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/deployment/v1beta2/deployments/list`;
    return await this.req.get<QueryDeploymentsResponseSDKType>(endpoint, options);
  }

  /* Deployment queries deployment details */
  async deployment(params: QueryDeploymentRequest): Promise<QueryDeploymentResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/deployment/v1beta2/deployments/info`;
    return await this.req.get<QueryDeploymentResponseSDKType>(endpoint, options);
  }

  /* Group queries group details */
  async group(params: QueryGroupRequest): Promise<QueryGroupResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/deployment/v1beta2/groups/info`;
    return await this.req.get<QueryGroupResponseSDKType>(endpoint, options);
  }

}