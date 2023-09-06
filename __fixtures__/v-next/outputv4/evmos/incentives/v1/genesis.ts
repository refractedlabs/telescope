import { Incentive, IncentiveSDKType, GasMeter, GasMeterSDKType } from "./incentives";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "evmos.incentives.v1";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** module parameters */
  params: Params;
  /** active incentives */
  incentives: Incentive[];
  /** active Gasmeters */
  gasMeters: GasMeter[];
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  incentives: IncentiveSDKType[];
  gas_meters: GasMeterSDKType[];
}
/** Params defines the incentives module params */
export interface Params {
  /** parameter to enable incentives */
  enableIncentives: boolean;
  /** maximum percentage an incentive can allocate per denomination */
  allocationLimit: string;
  /** identifier for the epochs module hooks */
  incentivesEpochIdentifier: string;
  /** scaling factor for capping rewards */
  rewardScaler: string;
}
/** Params defines the incentives module params */
export interface ParamsSDKType {
  enable_incentives: boolean;
  allocation_limit: string;
  incentives_epoch_identifier: string;
  reward_scaler: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    incentives: [],
    gasMeters: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.incentives) {
      Incentive.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.gasMeters) {
      GasMeter.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.incentives.push(Incentive.decode(reader, reader.uint32()));
          break;
        case 3:
          message.gasMeters.push(GasMeter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.incentives)) obj.incentives = object.incentives.map((e: any) => Incentive.fromJSON(e));
    if (Array.isArray(object?.gasMeters)) obj.gasMeters = object.gasMeters.map((e: any) => GasMeter.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.incentives) {
      obj.incentives = message.incentives.map(e => e ? Incentive.toJSON(e) : undefined);
    } else {
      obj.incentives = [];
    }
    if (message.gasMeters) {
      obj.gasMeters = message.gasMeters.map(e => e ? GasMeter.toJSON(e) : undefined);
    } else {
      obj.gasMeters = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.incentives = object.incentives?.map(e => Incentive.fromPartial(e)) || [];
    message.gasMeters = object.gasMeters?.map(e => GasMeter.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      incentives: Array.isArray(object?.incentives) ? object.incentives.map((e: any) => Incentive.fromSDK(e)) : [],
      gasMeters: Array.isArray(object?.gas_meters) ? object.gas_meters.map((e: any) => GasMeter.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined,
      incentives: Array.isArray(object?.incentives) ? object.incentives.map((e: any) => Incentive.fromSDKJSON(e)) : [],
      gas_meters: Array.isArray(object?.gas_meters) ? object.gas_meters.map((e: any) => GasMeter.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.incentives) {
      obj.incentives = message.incentives.map(e => e ? Incentive.toSDK(e) : undefined);
    } else {
      obj.incentives = [];
    }
    if (message.gasMeters) {
      obj.gas_meters = message.gasMeters.map(e => e ? GasMeter.toSDK(e) : undefined);
    } else {
      obj.gas_meters = [];
    }
    return obj;
  }
};
function createBaseParams(): Params {
  return {
    enableIncentives: false,
    allocationLimit: "",
    incentivesEpochIdentifier: "",
    rewardScaler: ""
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableIncentives === true) {
      writer.uint32(8).bool(message.enableIncentives);
    }
    if (message.allocationLimit !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.allocationLimit, 18).atomics);
    }
    if (message.incentivesEpochIdentifier !== "") {
      writer.uint32(26).string(message.incentivesEpochIdentifier);
    }
    if (message.rewardScaler !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.rewardScaler, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enableIncentives = reader.bool();
          break;
        case 2:
          message.allocationLimit = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.incentivesEpochIdentifier = reader.string();
          break;
        case 4:
          message.rewardScaler = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.enableIncentives)) obj.enableIncentives = Boolean(object.enableIncentives);
    if (isSet(object.allocationLimit)) obj.allocationLimit = String(object.allocationLimit);
    if (isSet(object.incentivesEpochIdentifier)) obj.incentivesEpochIdentifier = String(object.incentivesEpochIdentifier);
    if (isSet(object.rewardScaler)) obj.rewardScaler = String(object.rewardScaler);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enableIncentives !== undefined && (obj.enableIncentives = message.enableIncentives);
    message.allocationLimit !== undefined && (obj.allocationLimit = message.allocationLimit);
    message.incentivesEpochIdentifier !== undefined && (obj.incentivesEpochIdentifier = message.incentivesEpochIdentifier);
    message.rewardScaler !== undefined && (obj.rewardScaler = message.rewardScaler);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enableIncentives = object.enableIncentives ?? false;
    message.allocationLimit = object.allocationLimit ?? "";
    message.incentivesEpochIdentifier = object.incentivesEpochIdentifier ?? "";
    message.rewardScaler = object.rewardScaler ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      enableIncentives: object?.enable_incentives,
      allocationLimit: object?.allocation_limit,
      incentivesEpochIdentifier: object?.incentives_epoch_identifier,
      rewardScaler: object?.reward_scaler
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      enable_incentives: isSet(object.enable_incentives) ? Boolean(object.enable_incentives) : false,
      allocation_limit: isSet(object.allocation_limit) ? String(object.allocation_limit) : "",
      incentives_epoch_identifier: isSet(object.incentives_epoch_identifier) ? String(object.incentives_epoch_identifier) : "",
      reward_scaler: isSet(object.reward_scaler) ? String(object.reward_scaler) : ""
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.enable_incentives = message.enableIncentives;
    obj.allocation_limit = message.allocationLimit;
    obj.incentives_epoch_identifier = message.incentivesEpochIdentifier;
    obj.reward_scaler = message.rewardScaler;
    return obj;
  }
};