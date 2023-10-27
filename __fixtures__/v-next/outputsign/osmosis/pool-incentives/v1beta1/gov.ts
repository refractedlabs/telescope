import { DistrRecord, DistrRecordSDKType } from "./incentives";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "osmosis.poolincentives.v1beta1";
/**
 * ReplacePoolIncentivesProposal is a gov Content type for updating the pool
 * incentives. If a ReplacePoolIncentivesProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight. The incentives are put in the fee
 * pool and it is allocated to gauges and community pool by the DistrRecords
 * configuration. Note that gaugeId=0 represents the community pool.
 */
export interface ReplacePoolIncentivesProposal {
  title: string;
  description: string;
  records: DistrRecord[];
}
export interface ReplacePoolIncentivesProposalProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal";
  value: Uint8Array;
}
/**
 * ReplacePoolIncentivesProposal is a gov Content type for updating the pool
 * incentives. If a ReplacePoolIncentivesProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight. The incentives are put in the fee
 * pool and it is allocated to gauges and community pool by the DistrRecords
 * configuration. Note that gaugeId=0 represents the community pool.
 */
export interface ReplacePoolIncentivesProposalSDKType {
  title: string;
  description: string;
  records: DistrRecordSDKType[];
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdatePoolIncentivesProposal {
  title: string;
  description: string;
  records: DistrRecord[];
}
export interface UpdatePoolIncentivesProposalProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal";
  value: Uint8Array;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdatePoolIncentivesProposalSDKType {
  title: string;
  description: string;
  records: DistrRecordSDKType[];
}
function createBaseReplacePoolIncentivesProposal(): ReplacePoolIncentivesProposal {
  return {
    title: "",
    description: "",
    records: []
  };
}
export const ReplacePoolIncentivesProposal = {
  typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal",
  encode(message: ReplacePoolIncentivesProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.records) {
      DistrRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReplacePoolIncentivesProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReplacePoolIncentivesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.records.push(DistrRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ReplacePoolIncentivesProposalProtoMsg): ReplacePoolIncentivesProposal {
    return ReplacePoolIncentivesProposal.decode(message.value);
  },
  toProto(message: ReplacePoolIncentivesProposal): Uint8Array {
    return ReplacePoolIncentivesProposal.encode(message).finish();
  },
  toProtoMsg(message: ReplacePoolIncentivesProposal): ReplacePoolIncentivesProposalProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal",
      value: ReplacePoolIncentivesProposal.encode(message).finish()
    };
  }
};
function createBaseUpdatePoolIncentivesProposal(): UpdatePoolIncentivesProposal {
  return {
    title: "",
    description: "",
    records: []
  };
}
export const UpdatePoolIncentivesProposal = {
  typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal",
  encode(message: UpdatePoolIncentivesProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.records) {
      DistrRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdatePoolIncentivesProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePoolIncentivesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.records.push(DistrRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: UpdatePoolIncentivesProposalProtoMsg): UpdatePoolIncentivesProposal {
    return UpdatePoolIncentivesProposal.decode(message.value);
  },
  toProto(message: UpdatePoolIncentivesProposal): Uint8Array {
    return UpdatePoolIncentivesProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdatePoolIncentivesProposal): UpdatePoolIncentivesProposalProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal",
      value: UpdatePoolIncentivesProposal.encode(message).finish()
    };
  }
};