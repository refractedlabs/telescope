import { DeploymentFilters, DeploymentFiltersSDKType, DeploymentID, DeploymentIDSDKType, Deployment, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDSDKType } from "./groupid";
import { Group, GroupSDKType } from "./group";
import { Account, AccountSDKType } from "../../escrow/v1beta2/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta2";
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequest {
  filters: DeploymentFilters;
  pagination: PageRequest;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequestSDKType {
  filters: DeploymentFiltersSDKType;
  pagination: PageRequestSDKType;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponse {
  deployments: QueryDeploymentResponse[];
  pagination: PageResponse;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponseSDKType {
  deployments: QueryDeploymentResponseSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequest {
  id: DeploymentID;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequestSDKType {
  id: DeploymentIDSDKType;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponse {
  deployment: Deployment;
  groups: Group[];
  escrowAccount: Account;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponseSDKType {
  deployment: DeploymentSDKType;
  groups: GroupSDKType[];
  escrow_account: AccountSDKType;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequest {
  id: GroupID;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequestSDKType {
  id: GroupIDSDKType;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponse {
  group: Group;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponseSDKType {
  group: GroupSDKType;
}
function createBaseQueryDeploymentsRequest(): QueryDeploymentsRequest {
  return {
    filters: DeploymentFilters.fromPartial({}),
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDeploymentsRequest = {
  encode(message: QueryDeploymentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      DeploymentFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeploymentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = DeploymentFilters.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDeploymentsRequest {
    const obj = createBaseQueryDeploymentsRequest();
    if (isSet(object.filters)) obj.filters = DeploymentFilters.fromJSON(object.filters);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDeploymentsRequest): unknown {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? DeploymentFilters.toJSON(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDeploymentsRequest>, I>>(object: I): QueryDeploymentsRequest {
    const message = createBaseQueryDeploymentsRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = DeploymentFilters.fromPartial(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDeploymentsRequestSDKType): QueryDeploymentsRequest {
    return {
      filters: object.filters ? DeploymentFilters.fromSDK(object.filters) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryDeploymentsRequestSDKType {
    return {
      filters: isSet(object.filters) ? DeploymentFilters.fromSDKJSON(object.filters) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDeploymentsRequest): QueryDeploymentsRequestSDKType {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? DeploymentFilters.toSDK(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryDeploymentsResponse(): QueryDeploymentsResponse {
  return {
    deployments: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDeploymentsResponse = {
  encode(message: QueryDeploymentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deployments) {
      QueryDeploymentResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeploymentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployments.push(QueryDeploymentResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDeploymentsResponse {
    const obj = createBaseQueryDeploymentsResponse();
    if (Array.isArray(object?.deployments)) obj.deployments = object.deployments.map((e: any) => QueryDeploymentResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDeploymentsResponse): unknown {
    const obj: any = {};
    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? QueryDeploymentResponse.toJSON(e) : undefined);
    } else {
      obj.deployments = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDeploymentsResponse>, I>>(object: I): QueryDeploymentsResponse {
    const message = createBaseQueryDeploymentsResponse();
    message.deployments = object.deployments?.map(e => QueryDeploymentResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDeploymentsResponseSDKType): QueryDeploymentsResponse {
    return {
      deployments: Array.isArray(object?.deployments) ? object.deployments.map((e: any) => QueryDeploymentResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryDeploymentsResponseSDKType {
    return {
      deployments: Array.isArray(object?.deployments) ? object.deployments.map((e: any) => QueryDeploymentResponse.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDeploymentsResponse): QueryDeploymentsResponseSDKType {
    const obj: any = {};
    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? QueryDeploymentResponse.toSDK(e) : undefined);
    } else {
      obj.deployments = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryDeploymentRequest(): QueryDeploymentRequest {
  return {
    id: DeploymentID.fromPartial({})
  };
}
export const QueryDeploymentRequest = {
  encode(message: QueryDeploymentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeploymentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDeploymentRequest {
    const obj = createBaseQueryDeploymentRequest();
    if (isSet(object.id)) obj.id = DeploymentID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: QueryDeploymentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDeploymentRequest>, I>>(object: I): QueryDeploymentRequest {
    const message = createBaseQueryDeploymentRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: QueryDeploymentRequestSDKType): QueryDeploymentRequest {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined
    };
  },
  fromSDKJSON(object: any): QueryDeploymentRequestSDKType {
    return {
      id: isSet(object.id) ? DeploymentID.fromSDKJSON(object.id) : undefined
    };
  },
  toSDK(message: QueryDeploymentRequest): QueryDeploymentRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    return obj;
  }
};
function createBaseQueryDeploymentResponse(): QueryDeploymentResponse {
  return {
    deployment: Deployment.fromPartial({}),
    groups: [],
    escrowAccount: Account.fromPartial({})
  };
}
export const QueryDeploymentResponse = {
  encode(message: QueryDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deployment !== undefined) {
      Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.escrowAccount !== undefined) {
      Account.encode(message.escrowAccount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployment = Deployment.decode(reader, reader.uint32());
          break;
        case 2:
          message.groups.push(Group.decode(reader, reader.uint32()));
          break;
        case 3:
          message.escrowAccount = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDeploymentResponse {
    const obj = createBaseQueryDeploymentResponse();
    if (isSet(object.deployment)) obj.deployment = Deployment.fromJSON(object.deployment);
    if (Array.isArray(object?.groups)) obj.groups = object.groups.map((e: any) => Group.fromJSON(e));
    if (isSet(object.escrowAccount)) obj.escrowAccount = Account.fromJSON(object.escrowAccount);
    return obj;
  },
  toJSON(message: QueryDeploymentResponse): unknown {
    const obj: any = {};
    message.deployment !== undefined && (obj.deployment = message.deployment ? Deployment.toJSON(message.deployment) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.escrowAccount !== undefined && (obj.escrowAccount = message.escrowAccount ? Account.toJSON(message.escrowAccount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDeploymentResponse>, I>>(object: I): QueryDeploymentResponse {
    const message = createBaseQueryDeploymentResponse();
    if (object.deployment !== undefined && object.deployment !== null) {
      message.deployment = Deployment.fromPartial(object.deployment);
    }
    message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
    if (object.escrowAccount !== undefined && object.escrowAccount !== null) {
      message.escrowAccount = Account.fromPartial(object.escrowAccount);
    }
    return message;
  },
  fromSDK(object: QueryDeploymentResponseSDKType): QueryDeploymentResponse {
    return {
      deployment: object.deployment ? Deployment.fromSDK(object.deployment) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromSDK(e)) : [],
      escrowAccount: object.escrow_account ? Account.fromSDK(object.escrow_account) : undefined
    };
  },
  fromSDKJSON(object: any): QueryDeploymentResponseSDKType {
    return {
      deployment: isSet(object.deployment) ? Deployment.fromSDKJSON(object.deployment) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromSDKJSON(e)) : [],
      escrow_account: isSet(object.escrow_account) ? Account.fromSDKJSON(object.escrow_account) : undefined
    };
  },
  toSDK(message: QueryDeploymentResponse): QueryDeploymentResponseSDKType {
    const obj: any = {};
    message.deployment !== undefined && (obj.deployment = message.deployment ? Deployment.toSDK(message.deployment) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toSDK(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.escrowAccount !== undefined && (obj.escrow_account = message.escrowAccount ? Account.toSDK(message.escrowAccount) : undefined);
    return obj;
  }
};
function createBaseQueryGroupRequest(): QueryGroupRequest {
  return {
    id: GroupID.fromPartial({})
  };
}
export const QueryGroupRequest = {
  encode(message: QueryGroupRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupRequest {
    const obj = createBaseQueryGroupRequest();
    if (isSet(object.id)) obj.id = GroupID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: QueryGroupRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupRequest>, I>>(object: I): QueryGroupRequest {
    const message = createBaseQueryGroupRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: QueryGroupRequestSDKType): QueryGroupRequest {
    return {
      id: object.id ? GroupID.fromSDK(object.id) : undefined
    };
  },
  fromSDKJSON(object: any): QueryGroupRequestSDKType {
    return {
      id: isSet(object.id) ? GroupID.fromSDKJSON(object.id) : undefined
    };
  },
  toSDK(message: QueryGroupRequest): QueryGroupRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toSDK(message.id) : undefined);
    return obj;
  }
};
function createBaseQueryGroupResponse(): QueryGroupResponse {
  return {
    group: Group.fromPartial({})
  };
}
export const QueryGroupResponse = {
  encode(message: QueryGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = Group.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupResponse {
    const obj = createBaseQueryGroupResponse();
    if (isSet(object.group)) obj.group = Group.fromJSON(object.group);
    return obj;
  },
  toJSON(message: QueryGroupResponse): unknown {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group ? Group.toJSON(message.group) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupResponse>, I>>(object: I): QueryGroupResponse {
    const message = createBaseQueryGroupResponse();
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromPartial(object.group);
    }
    return message;
  },
  fromSDK(object: QueryGroupResponseSDKType): QueryGroupResponse {
    return {
      group: object.group ? Group.fromSDK(object.group) : undefined
    };
  },
  fromSDKJSON(object: any): QueryGroupResponseSDKType {
    return {
      group: isSet(object.group) ? Group.fromSDKJSON(object.group) : undefined
    };
  },
  toSDK(message: QueryGroupResponse): QueryGroupResponseSDKType {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group ? Group.toSDK(message.group) : undefined);
    return obj;
  }
};