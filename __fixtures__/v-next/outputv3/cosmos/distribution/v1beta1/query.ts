import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, ValidatorOutstandingRewards, ValidatorOutstandingRewardsAmino, ValidatorOutstandingRewardsSDKType, ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionAmino, ValidatorAccumulatedCommissionSDKType, ValidatorSlashEvent, ValidatorSlashEventAmino, ValidatorSlashEventSDKType, DelegationDelegatorReward, DelegationDelegatorRewardAmino, DelegationDelegatorRewardSDKType } from "./distribution";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
export const protobufPackage = "cosmos.distribution.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}
export interface QueryValidatorOutstandingRewardsRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest";
  value: Uint8Array;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequestAmino {
  /** validator_address defines the validator address to query for. */
  validator_address?: string;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequestSDKType {
  validator_address: string;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponse {
  rewards: ValidatorOutstandingRewards;
}
export interface QueryValidatorOutstandingRewardsResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse";
  value: Uint8Array;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponseAmino {
  rewards?: ValidatorOutstandingRewardsAmino;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponseSDKType {
  rewards: ValidatorOutstandingRewardsSDKType;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}
export interface QueryValidatorCommissionRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest";
  value: Uint8Array;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequestAmino {
  /** validator_address defines the validator address to query for. */
  validator_address?: string;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequestSDKType {
  validator_address: string;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponse {
  /** commission defines the commision the validator received. */
  commission: ValidatorAccumulatedCommission;
}
export interface QueryValidatorCommissionResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse";
  value: Uint8Array;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponseAmino {
  /** commission defines the commision the validator received. */
  commission?: ValidatorAccumulatedCommissionAmino;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponseSDKType {
  commission: ValidatorAccumulatedCommissionSDKType;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
  /** starting_height defines the optional starting height to query the slashes. */
  startingHeight: bigint;
  /** starting_height defines the optional ending height to query the slashes. */
  endingHeight: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryValidatorSlashesRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest";
  value: Uint8Array;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequestAmino {
  /** validator_address defines the validator address to query for. */
  validator_address?: string;
  /** starting_height defines the optional starting height to query the slashes. */
  starting_height?: string;
  /** starting_height defines the optional ending height to query the slashes. */
  ending_height?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequestSDKType {
  validator_address: string;
  starting_height: bigint;
  ending_height: bigint;
  pagination?: PageRequestSDKType;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponse {
  /** slashes defines the slashes the validator received. */
  slashes: ValidatorSlashEvent[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryValidatorSlashesResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse";
  value: Uint8Array;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponseAmino {
  /** slashes defines the slashes the validator received. */
  slashes?: ValidatorSlashEventAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponseSDKType {
  slashes: ValidatorSlashEventSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}
export interface QueryDelegationRewardsRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequestAmino {
  /** delegator_address defines the delegator address to query for. */
  delegator_address?: string;
  /** validator_address defines the validator address to query for. */
  validator_address?: string;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequestSDKType {
  delegator_address: string;
  validator_address: string;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponse {
  /** rewards defines the rewards accrued by a delegation. */
  rewards: DecCoin[];
}
export interface QueryDelegationRewardsResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponseAmino {
  /** rewards defines the rewards accrued by a delegation. */
  rewards?: DecCoinAmino[];
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponseSDKType {
  rewards: DecCoinSDKType[];
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
export interface QueryDelegationTotalRewardsRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequestAmino {
  /** delegator_address defines the delegator address to query for. */
  delegator_address?: string;
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequestSDKType {
  delegator_address: string;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: DelegationDelegatorReward[];
  /** total defines the sum of all the rewards. */
  total: DecCoin[];
}
export interface QueryDelegationTotalRewardsResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponseAmino {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards?: DelegationDelegatorRewardAmino[];
  /** total defines the sum of all the rewards. */
  total?: DecCoinAmino[];
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponseSDKType {
  rewards: DelegationDelegatorRewardSDKType[];
  total: DecCoinSDKType[];
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
export interface QueryDelegatorValidatorsRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestAmino {
  /** delegator_address defines the delegator address to query for. */
  delegator_address?: string;
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestSDKType {
  delegator_address: string;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the validators a delegator is delegating for. */
  validators: string[];
}
export interface QueryDelegatorValidatorsResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseAmino {
  /** validators defines the validators a delegator is delegating for. */
  validators?: string[];
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseSDKType {
  validators: string[];
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
export interface QueryDelegatorWithdrawAddressRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequestAmino {
  /** delegator_address defines the delegator address to query for. */
  delegator_address?: string;
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequestSDKType {
  delegator_address: string;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
  /** withdraw_address defines the delegator address to query for. */
  withdrawAddress: string;
}
export interface QueryDelegatorWithdrawAddressResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponseAmino {
  /** withdraw_address defines the delegator address to query for. */
  withdraw_address?: string;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponseSDKType {
  withdraw_address: string;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {}
export interface QueryCommunityPoolRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest";
  value: Uint8Array;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequestAmino {}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequestSDKType {}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
  /** pool defines community pool's coins. */
  pool: DecCoin[];
}
export interface QueryCommunityPoolResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse";
  value: Uint8Array;
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponseAmino {
  /** pool defines community pool's coins. */
  pool?: DecCoinAmino[];
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponseSDKType {
  pool: DecCoinSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest, useInterfaces: boolean = true): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg, useInterfaces: boolean = true): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse, useInterfaces: boolean = true): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg, useInterfaces: boolean = true): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorOutstandingRewardsRequest(): QueryValidatorOutstandingRewardsRequest {
  return {
    validatorAddress: ""
  };
}
export const QueryValidatorOutstandingRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
  aminoType: "cosmos-sdk/QueryValidatorOutstandingRewardsRequest",
  encode(message: QueryValidatorOutstandingRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryValidatorOutstandingRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorOutstandingRewardsRequest {
    const obj = createBaseQueryValidatorOutstandingRewardsRequest();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(message: QueryValidatorOutstandingRewardsRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryValidatorOutstandingRewardsRequest>): QueryValidatorOutstandingRewardsRequest {
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromSDK(object: QueryValidatorOutstandingRewardsRequestSDKType): QueryValidatorOutstandingRewardsRequest {
    return {
      validatorAddress: object?.validator_address
    };
  },
  toSDK(message: QueryValidatorOutstandingRewardsRequest): QueryValidatorOutstandingRewardsRequestSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAmino(object: QueryValidatorOutstandingRewardsRequestAmino): QueryValidatorOutstandingRewardsRequest {
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryValidatorOutstandingRewardsRequest, useInterfaces: boolean = true): QueryValidatorOutstandingRewardsRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromProtoMsg(message: QueryValidatorOutstandingRewardsRequestProtoMsg, useInterfaces: boolean = true): QueryValidatorOutstandingRewardsRequest {
    return QueryValidatorOutstandingRewardsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorOutstandingRewardsRequest): Uint8Array {
    return QueryValidatorOutstandingRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorOutstandingRewardsRequest): QueryValidatorOutstandingRewardsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
      value: QueryValidatorOutstandingRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorOutstandingRewardsResponse(): QueryValidatorOutstandingRewardsResponse {
  return {
    rewards: ValidatorOutstandingRewards.fromPartial({})
  };
}
export const QueryValidatorOutstandingRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
  aminoType: "cosmos-sdk/QueryValidatorOutstandingRewardsResponse",
  encode(message: QueryValidatorOutstandingRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewards !== undefined) {
      ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryValidatorOutstandingRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards = ValidatorOutstandingRewards.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorOutstandingRewardsResponse {
    const obj = createBaseQueryValidatorOutstandingRewardsResponse();
    if (isSet(object.rewards)) obj.rewards = ValidatorOutstandingRewards.fromJSON(object.rewards);
    return obj;
  },
  toJSON(message: QueryValidatorOutstandingRewardsResponse): unknown {
    const obj: any = {};
    message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorOutstandingRewards.toJSON(message.rewards) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryValidatorOutstandingRewardsResponse>): QueryValidatorOutstandingRewardsResponse {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = ValidatorOutstandingRewards.fromPartial(object.rewards);
    }
    return message;
  },
  fromSDK(object: QueryValidatorOutstandingRewardsResponseSDKType): QueryValidatorOutstandingRewardsResponse {
    return {
      rewards: object.rewards ? ValidatorOutstandingRewards.fromSDK(object.rewards) : undefined
    };
  },
  toSDK(message: QueryValidatorOutstandingRewardsResponse): QueryValidatorOutstandingRewardsResponseSDKType {
    const obj: any = {};
    message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorOutstandingRewards.toSDK(message.rewards) : undefined);
    return obj;
  },
  fromAmino(object: QueryValidatorOutstandingRewardsResponseAmino): QueryValidatorOutstandingRewardsResponse {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = ValidatorOutstandingRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message: QueryValidatorOutstandingRewardsResponse, useInterfaces: boolean = true): QueryValidatorOutstandingRewardsResponseAmino {
    const obj: any = {};
    obj.rewards = message.rewards ? ValidatorOutstandingRewards.toAmino(message.rewards, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryValidatorOutstandingRewardsResponseProtoMsg, useInterfaces: boolean = true): QueryValidatorOutstandingRewardsResponse {
    return QueryValidatorOutstandingRewardsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorOutstandingRewardsResponse): Uint8Array {
    return QueryValidatorOutstandingRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorOutstandingRewardsResponse): QueryValidatorOutstandingRewardsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
      value: QueryValidatorOutstandingRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorCommissionRequest(): QueryValidatorCommissionRequest {
  return {
    validatorAddress: ""
  };
}
export const QueryValidatorCommissionRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
  aminoType: "cosmos-sdk/QueryValidatorCommissionRequest",
  encode(message: QueryValidatorCommissionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryValidatorCommissionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorCommissionRequest {
    const obj = createBaseQueryValidatorCommissionRequest();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(message: QueryValidatorCommissionRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryValidatorCommissionRequest>): QueryValidatorCommissionRequest {
    const message = createBaseQueryValidatorCommissionRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromSDK(object: QueryValidatorCommissionRequestSDKType): QueryValidatorCommissionRequest {
    return {
      validatorAddress: object?.validator_address
    };
  },
  toSDK(message: QueryValidatorCommissionRequest): QueryValidatorCommissionRequestSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAmino(object: QueryValidatorCommissionRequestAmino): QueryValidatorCommissionRequest {
    const message = createBaseQueryValidatorCommissionRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryValidatorCommissionRequest, useInterfaces: boolean = true): QueryValidatorCommissionRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromProtoMsg(message: QueryValidatorCommissionRequestProtoMsg, useInterfaces: boolean = true): QueryValidatorCommissionRequest {
    return QueryValidatorCommissionRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorCommissionRequest): Uint8Array {
    return QueryValidatorCommissionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorCommissionRequest): QueryValidatorCommissionRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
      value: QueryValidatorCommissionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorCommissionResponse(): QueryValidatorCommissionResponse {
  return {
    commission: ValidatorAccumulatedCommission.fromPartial({})
  };
}
export const QueryValidatorCommissionResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
  aminoType: "cosmos-sdk/QueryValidatorCommissionResponse",
  encode(message: QueryValidatorCommissionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commission !== undefined) {
      ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryValidatorCommissionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission = ValidatorAccumulatedCommission.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorCommissionResponse {
    const obj = createBaseQueryValidatorCommissionResponse();
    if (isSet(object.commission)) obj.commission = ValidatorAccumulatedCommission.fromJSON(object.commission);
    return obj;
  },
  toJSON(message: QueryValidatorCommissionResponse): unknown {
    const obj: any = {};
    message.commission !== undefined && (obj.commission = message.commission ? ValidatorAccumulatedCommission.toJSON(message.commission) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryValidatorCommissionResponse>): QueryValidatorCommissionResponse {
    const message = createBaseQueryValidatorCommissionResponse();
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = ValidatorAccumulatedCommission.fromPartial(object.commission);
    }
    return message;
  },
  fromSDK(object: QueryValidatorCommissionResponseSDKType): QueryValidatorCommissionResponse {
    return {
      commission: object.commission ? ValidatorAccumulatedCommission.fromSDK(object.commission) : undefined
    };
  },
  toSDK(message: QueryValidatorCommissionResponse): QueryValidatorCommissionResponseSDKType {
    const obj: any = {};
    message.commission !== undefined && (obj.commission = message.commission ? ValidatorAccumulatedCommission.toSDK(message.commission) : undefined);
    return obj;
  },
  fromAmino(object: QueryValidatorCommissionResponseAmino): QueryValidatorCommissionResponse {
    const message = createBaseQueryValidatorCommissionResponse();
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = ValidatorAccumulatedCommission.fromAmino(object.commission);
    }
    return message;
  },
  toAmino(message: QueryValidatorCommissionResponse, useInterfaces: boolean = true): QueryValidatorCommissionResponseAmino {
    const obj: any = {};
    obj.commission = message.commission ? ValidatorAccumulatedCommission.toAmino(message.commission, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryValidatorCommissionResponseProtoMsg, useInterfaces: boolean = true): QueryValidatorCommissionResponse {
    return QueryValidatorCommissionResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorCommissionResponse): Uint8Array {
    return QueryValidatorCommissionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorCommissionResponse): QueryValidatorCommissionResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
      value: QueryValidatorCommissionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorSlashesRequest(): QueryValidatorSlashesRequest {
  return {
    validatorAddress: "",
    startingHeight: BigInt(0),
    endingHeight: BigInt(0),
    pagination: undefined
  };
}
export const QueryValidatorSlashesRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
  aminoType: "cosmos-sdk/QueryValidatorSlashesRequest",
  encode(message: QueryValidatorSlashesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.startingHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.startingHeight);
    }
    if (message.endingHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.endingHeight);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryValidatorSlashesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.startingHeight = reader.uint64();
          break;
        case 3:
          message.endingHeight = reader.uint64();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorSlashesRequest {
    const obj = createBaseQueryValidatorSlashesRequest();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.startingHeight)) obj.startingHeight = BigInt(object.startingHeight.toString());
    if (isSet(object.endingHeight)) obj.endingHeight = BigInt(object.endingHeight.toString());
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorSlashesRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.startingHeight !== undefined && (obj.startingHeight = (message.startingHeight || BigInt(0)).toString());
    message.endingHeight !== undefined && (obj.endingHeight = (message.endingHeight || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryValidatorSlashesRequest>): QueryValidatorSlashesRequest {
    const message = createBaseQueryValidatorSlashesRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.startingHeight !== undefined && object.startingHeight !== null) {
      message.startingHeight = BigInt(object.startingHeight.toString());
    }
    if (object.endingHeight !== undefined && object.endingHeight !== null) {
      message.endingHeight = BigInt(object.endingHeight.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryValidatorSlashesRequestSDKType): QueryValidatorSlashesRequest {
    return {
      validatorAddress: object?.validator_address,
      startingHeight: object?.starting_height,
      endingHeight: object?.ending_height,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryValidatorSlashesRequest): QueryValidatorSlashesRequestSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.starting_height = message.startingHeight;
    obj.ending_height = message.endingHeight;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryValidatorSlashesRequestAmino): QueryValidatorSlashesRequest {
    const message = createBaseQueryValidatorSlashesRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.starting_height !== undefined && object.starting_height !== null) {
      message.startingHeight = BigInt(object.starting_height);
    }
    if (object.ending_height !== undefined && object.ending_height !== null) {
      message.endingHeight = BigInt(object.ending_height);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorSlashesRequest, useInterfaces: boolean = true): QueryValidatorSlashesRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.starting_height = message.startingHeight ? message.startingHeight.toString() : undefined;
    obj.ending_height = message.endingHeight ? message.endingHeight.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryValidatorSlashesRequestProtoMsg, useInterfaces: boolean = true): QueryValidatorSlashesRequest {
    return QueryValidatorSlashesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorSlashesRequest): Uint8Array {
    return QueryValidatorSlashesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorSlashesRequest): QueryValidatorSlashesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
      value: QueryValidatorSlashesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorSlashesResponse(): QueryValidatorSlashesResponse {
  return {
    slashes: [],
    pagination: undefined
  };
}
export const QueryValidatorSlashesResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
  aminoType: "cosmos-sdk/QueryValidatorSlashesResponse",
  encode(message: QueryValidatorSlashesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.slashes) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryValidatorSlashesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashes.push(ValidatorSlashEvent.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorSlashesResponse {
    const obj = createBaseQueryValidatorSlashesResponse();
    if (Array.isArray(object?.slashes)) obj.slashes = object.slashes.map((e: any) => ValidatorSlashEvent.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorSlashesResponse): unknown {
    const obj: any = {};
    if (message.slashes) {
      obj.slashes = message.slashes.map(e => e ? ValidatorSlashEvent.toJSON(e) : undefined);
    } else {
      obj.slashes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryValidatorSlashesResponse>): QueryValidatorSlashesResponse {
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes = object.slashes?.map(e => ValidatorSlashEvent.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryValidatorSlashesResponseSDKType): QueryValidatorSlashesResponse {
    return {
      slashes: Array.isArray(object?.slashes) ? object.slashes.map((e: any) => ValidatorSlashEvent.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryValidatorSlashesResponse): QueryValidatorSlashesResponseSDKType {
    const obj: any = {};
    if (message.slashes) {
      obj.slashes = message.slashes.map(e => e ? ValidatorSlashEvent.toSDK(e) : undefined);
    } else {
      obj.slashes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryValidatorSlashesResponseAmino): QueryValidatorSlashesResponse {
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes = object.slashes?.map(e => ValidatorSlashEvent.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorSlashesResponse, useInterfaces: boolean = true): QueryValidatorSlashesResponseAmino {
    const obj: any = {};
    if (message.slashes) {
      obj.slashes = message.slashes.map(e => e ? ValidatorSlashEvent.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.slashes = message.slashes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryValidatorSlashesResponseProtoMsg, useInterfaces: boolean = true): QueryValidatorSlashesResponse {
    return QueryValidatorSlashesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorSlashesResponse): Uint8Array {
    return QueryValidatorSlashesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorSlashesResponse): QueryValidatorSlashesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
      value: QueryValidatorSlashesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationRewardsRequest(): QueryDelegationRewardsRequest {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
export const QueryDelegationRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
  aminoType: "cosmos-sdk/QueryDelegationRewardsRequest",
  encode(message: QueryDelegationRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDelegationRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationRewardsRequest {
    const obj = createBaseQueryDelegationRewardsRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(message: QueryDelegationRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegationRewardsRequest>): QueryDelegationRewardsRequest {
    const message = createBaseQueryDelegationRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromSDK(object: QueryDelegationRewardsRequestSDKType): QueryDelegationRewardsRequest {
    return {
      delegatorAddress: object?.delegator_address,
      validatorAddress: object?.validator_address
    };
  },
  toSDK(message: QueryDelegationRewardsRequest): QueryDelegationRewardsRequestSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAmino(object: QueryDelegationRewardsRequestAmino): QueryDelegationRewardsRequest {
    const message = createBaseQueryDelegationRewardsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegationRewardsRequest, useInterfaces: boolean = true): QueryDelegationRewardsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromProtoMsg(message: QueryDelegationRewardsRequestProtoMsg, useInterfaces: boolean = true): QueryDelegationRewardsRequest {
    return QueryDelegationRewardsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegationRewardsRequest): Uint8Array {
    return QueryDelegationRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationRewardsRequest): QueryDelegationRewardsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
      value: QueryDelegationRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationRewardsResponse(): QueryDelegationRewardsResponse {
  return {
    rewards: []
  };
}
export const QueryDelegationRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
  aminoType: "cosmos-sdk/QueryDelegationRewardsResponse",
  encode(message: QueryDelegationRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDelegationRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationRewardsResponse {
    const obj = createBaseQueryDelegationRewardsResponse();
    if (Array.isArray(object?.rewards)) obj.rewards = object.rewards.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryDelegationRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegationRewardsResponse>): QueryDelegationRewardsResponse {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryDelegationRewardsResponseSDKType): QueryDelegationRewardsResponse {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryDelegationRewardsResponse): QueryDelegationRewardsResponseSDKType {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromAmino(object: QueryDelegationRewardsResponseAmino): QueryDelegationRewardsResponse {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDelegationRewardsResponse, useInterfaces: boolean = true): QueryDelegationRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromProtoMsg(message: QueryDelegationRewardsResponseProtoMsg, useInterfaces: boolean = true): QueryDelegationRewardsResponse {
    return QueryDelegationRewardsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegationRewardsResponse): Uint8Array {
    return QueryDelegationRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationRewardsResponse): QueryDelegationRewardsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
      value: QueryDelegationRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationTotalRewardsRequest(): QueryDelegationTotalRewardsRequest {
  return {
    delegatorAddress: ""
  };
}
export const QueryDelegationTotalRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
  aminoType: "cosmos-sdk/QueryDelegationTotalRewardsRequest",
  encode(message: QueryDelegationTotalRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDelegationTotalRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationTotalRewardsRequest {
    const obj = createBaseQueryDelegationTotalRewardsRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: QueryDelegationTotalRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegationTotalRewardsRequest>): QueryDelegationTotalRewardsRequest {
    const message = createBaseQueryDelegationTotalRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromSDK(object: QueryDelegationTotalRewardsRequestSDKType): QueryDelegationTotalRewardsRequest {
    return {
      delegatorAddress: object?.delegator_address
    };
  },
  toSDK(message: QueryDelegationTotalRewardsRequest): QueryDelegationTotalRewardsRequestSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAmino(object: QueryDelegationTotalRewardsRequestAmino): QueryDelegationTotalRewardsRequest {
    const message = createBaseQueryDelegationTotalRewardsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegationTotalRewardsRequest, useInterfaces: boolean = true): QueryDelegationTotalRewardsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromProtoMsg(message: QueryDelegationTotalRewardsRequestProtoMsg, useInterfaces: boolean = true): QueryDelegationTotalRewardsRequest {
    return QueryDelegationTotalRewardsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegationTotalRewardsRequest): Uint8Array {
    return QueryDelegationTotalRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationTotalRewardsRequest): QueryDelegationTotalRewardsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
      value: QueryDelegationTotalRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationTotalRewardsResponse(): QueryDelegationTotalRewardsResponse {
  return {
    rewards: [],
    total: []
  };
}
export const QueryDelegationTotalRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
  aminoType: "cosmos-sdk/QueryDelegationTotalRewardsResponse",
  encode(message: QueryDelegationTotalRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      DelegationDelegatorReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDelegationTotalRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationTotalRewardsResponse {
    const obj = createBaseQueryDelegationTotalRewardsResponse();
    if (Array.isArray(object?.rewards)) obj.rewards = object.rewards.map((e: any) => DelegationDelegatorReward.fromJSON(e));
    if (Array.isArray(object?.total)) obj.total = object.total.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryDelegationTotalRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DelegationDelegatorReward.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.total = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegationTotalRewardsResponse>): QueryDelegationTotalRewardsResponse {
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = object.rewards?.map(e => DelegationDelegatorReward.fromPartial(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryDelegationTotalRewardsResponseSDKType): QueryDelegationTotalRewardsResponse {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DelegationDelegatorReward.fromSDK(e)) : [],
      total: Array.isArray(object?.total) ? object.total.map((e: any) => DecCoin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryDelegationTotalRewardsResponse): QueryDelegationTotalRewardsResponseSDKType {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DelegationDelegatorReward.toSDK(e) : undefined);
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.total = [];
    }
    return obj;
  },
  fromAmino(object: QueryDelegationTotalRewardsResponseAmino): QueryDelegationTotalRewardsResponse {
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = object.rewards?.map(e => DelegationDelegatorReward.fromAmino(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDelegationTotalRewardsResponse, useInterfaces: boolean = true): QueryDelegationTotalRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DelegationDelegatorReward.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.total = message.total;
    }
    return obj;
  },
  fromProtoMsg(message: QueryDelegationTotalRewardsResponseProtoMsg, useInterfaces: boolean = true): QueryDelegationTotalRewardsResponse {
    return QueryDelegationTotalRewardsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegationTotalRewardsResponse): Uint8Array {
    return QueryDelegationTotalRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationTotalRewardsResponse): QueryDelegationTotalRewardsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
      value: QueryDelegationTotalRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return {
    delegatorAddress: ""
  };
}
export const QueryDelegatorValidatorsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
  aminoType: "cosmos-sdk/QueryDelegatorValidatorsRequest",
  encode(message: QueryDelegatorValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDelegatorValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    const obj = createBaseQueryDelegatorValidatorsRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromSDK(object: QueryDelegatorValidatorsRequestSDKType): QueryDelegatorValidatorsRequest {
    return {
      delegatorAddress: object?.delegator_address
    };
  },
  toSDK(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAmino(object: QueryDelegatorValidatorsRequestAmino): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegatorValidatorsRequest, useInterfaces: boolean = true): QueryDelegatorValidatorsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromProtoMsg(message: QueryDelegatorValidatorsRequestProtoMsg, useInterfaces: boolean = true): QueryDelegatorValidatorsRequest {
    return QueryDelegatorValidatorsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegatorValidatorsRequest): Uint8Array {
    return QueryDelegatorValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return {
    validators: []
  };
}
export const QueryDelegatorValidatorsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
  aminoType: "cosmos-sdk/QueryDelegatorValidatorsResponse",
  encode(message: QueryDelegatorValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDelegatorValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    const obj = createBaseQueryDelegatorValidatorsResponse();
    if (Array.isArray(object?.validators)) obj.validators = object.validators.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: QueryDelegatorValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map(e => e) || [];
    return message;
  },
  fromSDK(object: QueryDelegatorValidatorsResponseSDKType): QueryDelegatorValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => e) : []
    };
  },
  toSDK(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseSDKType {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = [];
    }
    return obj;
  },
  fromAmino(object: QueryDelegatorValidatorsResponseAmino): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryDelegatorValidatorsResponse, useInterfaces: boolean = true): QueryDelegatorValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = message.validators;
    }
    return obj;
  },
  fromProtoMsg(message: QueryDelegatorValidatorsResponseProtoMsg, useInterfaces: boolean = true): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegatorValidatorsResponse): Uint8Array {
    return QueryDelegatorValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorWithdrawAddressRequest(): QueryDelegatorWithdrawAddressRequest {
  return {
    delegatorAddress: ""
  };
}
export const QueryDelegatorWithdrawAddressRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
  aminoType: "cosmos-sdk/QueryDelegatorWithdrawAddressRequest",
  encode(message: QueryDelegatorWithdrawAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDelegatorWithdrawAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorWithdrawAddressRequest {
    const obj = createBaseQueryDelegatorWithdrawAddressRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: QueryDelegatorWithdrawAddressRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegatorWithdrawAddressRequest>): QueryDelegatorWithdrawAddressRequest {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromSDK(object: QueryDelegatorWithdrawAddressRequestSDKType): QueryDelegatorWithdrawAddressRequest {
    return {
      delegatorAddress: object?.delegator_address
    };
  },
  toSDK(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAmino(object: QueryDelegatorWithdrawAddressRequestAmino): QueryDelegatorWithdrawAddressRequest {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegatorWithdrawAddressRequest, useInterfaces: boolean = true): QueryDelegatorWithdrawAddressRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromProtoMsg(message: QueryDelegatorWithdrawAddressRequestProtoMsg, useInterfaces: boolean = true): QueryDelegatorWithdrawAddressRequest {
    return QueryDelegatorWithdrawAddressRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegatorWithdrawAddressRequest): Uint8Array {
    return QueryDelegatorWithdrawAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
      value: QueryDelegatorWithdrawAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorWithdrawAddressResponse(): QueryDelegatorWithdrawAddressResponse {
  return {
    withdrawAddress: ""
  };
}
export const QueryDelegatorWithdrawAddressResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
  aminoType: "cosmos-sdk/QueryDelegatorWithdrawAddressResponse",
  encode(message: QueryDelegatorWithdrawAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDelegatorWithdrawAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorWithdrawAddressResponse {
    const obj = createBaseQueryDelegatorWithdrawAddressResponse();
    if (isSet(object.withdrawAddress)) obj.withdrawAddress = String(object.withdrawAddress);
    return obj;
  },
  toJSON(message: QueryDelegatorWithdrawAddressResponse): unknown {
    const obj: any = {};
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegatorWithdrawAddressResponse>): QueryDelegatorWithdrawAddressResponse {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromSDK(object: QueryDelegatorWithdrawAddressResponseSDKType): QueryDelegatorWithdrawAddressResponse {
    return {
      withdrawAddress: object?.withdraw_address
    };
  },
  toSDK(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseSDKType {
    const obj: any = {};
    obj.withdraw_address = message.withdrawAddress;
    return obj;
  },
  fromAmino(object: QueryDelegatorWithdrawAddressResponseAmino): QueryDelegatorWithdrawAddressResponse {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
      message.withdrawAddress = object.withdraw_address;
    }
    return message;
  },
  toAmino(message: QueryDelegatorWithdrawAddressResponse, useInterfaces: boolean = true): QueryDelegatorWithdrawAddressResponseAmino {
    const obj: any = {};
    obj.withdraw_address = message.withdrawAddress === "" ? undefined : message.withdrawAddress;
    return obj;
  },
  fromProtoMsg(message: QueryDelegatorWithdrawAddressResponseProtoMsg, useInterfaces: boolean = true): QueryDelegatorWithdrawAddressResponse {
    return QueryDelegatorWithdrawAddressResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegatorWithdrawAddressResponse): Uint8Array {
    return QueryDelegatorWithdrawAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
      value: QueryDelegatorWithdrawAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCommunityPoolRequest(): QueryCommunityPoolRequest {
  return {};
}
export const QueryCommunityPoolRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
  aminoType: "cosmos-sdk/QueryCommunityPoolRequest",
  encode(_: QueryCommunityPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryCommunityPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryCommunityPoolRequest {
    const obj = createBaseQueryCommunityPoolRequest();
    return obj;
  },
  toJSON(_: QueryCommunityPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryCommunityPoolRequest>): QueryCommunityPoolRequest {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
  fromSDK(_: QueryCommunityPoolRequestSDKType): QueryCommunityPoolRequest {
    return {};
  },
  toSDK(_: QueryCommunityPoolRequest): QueryCommunityPoolRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryCommunityPoolRequestAmino): QueryCommunityPoolRequest {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
  toAmino(_: QueryCommunityPoolRequest, useInterfaces: boolean = true): QueryCommunityPoolRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryCommunityPoolRequestProtoMsg, useInterfaces: boolean = true): QueryCommunityPoolRequest {
    return QueryCommunityPoolRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryCommunityPoolRequest): Uint8Array {
    return QueryCommunityPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCommunityPoolRequest): QueryCommunityPoolRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
      value: QueryCommunityPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCommunityPoolResponse(): QueryCommunityPoolResponse {
  return {
    pool: []
  };
}
export const QueryCommunityPoolResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
  aminoType: "cosmos-sdk/QueryCommunityPoolResponse",
  encode(message: QueryCommunityPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryCommunityPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCommunityPoolResponse {
    const obj = createBaseQueryCommunityPoolResponse();
    if (Array.isArray(object?.pool)) obj.pool = object.pool.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryCommunityPoolResponse): unknown {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.pool = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCommunityPoolResponse>): QueryCommunityPoolResponse {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryCommunityPoolResponseSDKType): QueryCommunityPoolResponse {
    return {
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => DecCoin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseSDKType {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.pool = [];
    }
    return obj;
  },
  fromAmino(object: QueryCommunityPoolResponseAmino): QueryCommunityPoolResponse {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCommunityPoolResponse, useInterfaces: boolean = true): QueryCommunityPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pool = message.pool;
    }
    return obj;
  },
  fromProtoMsg(message: QueryCommunityPoolResponseProtoMsg, useInterfaces: boolean = true): QueryCommunityPoolResponse {
    return QueryCommunityPoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryCommunityPoolResponse): Uint8Array {
    return QueryCommunityPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
      value: QueryCommunityPoolResponse.encode(message).finish()
    };
  }
};