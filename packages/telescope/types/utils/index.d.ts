import { ProtoRoot, ProtoRef } from '@cosmology/types';
import { ImportObj } from '../types';
export declare const getRoot: (ref: ProtoRef) => ProtoRoot;
export declare const UTILS: {
    _m0: {
        type: string;
        path: string;
        name: string;
    };
    AminoHeight: string;
    AminoMsg: string;
    AminoTypes: string;
    base64FromBytes: string;
    bytesFromBase64: string;
    BrowserHeaders: string;
    connectComet: string;
    Decimal: string;
    padDecimal: string;
    createProtobufRpcClient: string;
    Pubkey: string;
    decodeBech32Pubkey: string;
    DeepPartial: string;
    defaultRegistryTypes: string;
    encodeBech32Pubkey: string;
    Exact: string;
    fm: {
        type: string;
        path: string;
        name: string;
    };
    encodePubkey: string;
    decodePubkey: string;
    fromBase64: string;
    fromBech32: string;
    fromDuration: string;
    fromHex: string;
    fromJsonTimestamp: string;
    fromTimestamp: string;
    fromUtf8: string;
    GeneratedType: string;
    getRpcClient: string;
    createRpcClient: string;
    getRpcEndpointKey: string;
    HttpEndpoint: string;
    isObject: string;
    isSet: string;
    LCDClient: string;
    Long: string;
    OfflineSigner: string;
    omitDefault: string;
    ProtobufRpcClient: string;
    QueryClient: string;
    Registry: string;
    Rpc: string;
    StdFee: string;
    TxRpc: string;
    BroadcastTxReq: string;
    BroadcastTxRes: string;
    DeliverTxResponse: string;
    EncodeObject: string;
    SigningClientParams: string;
    grpc: string;
    setPaginationParams: string;
    SigningStargateClient: string;
    Tendermint34Client: string;
    toBase64: string;
    toDuration: string;
    toTimestamp: string;
    toUtf8: string;
    useQuery: string;
    useRpcEndpoint: string;
    useRpcClient: string;
    useTendermintClient: string;
    ReactQueryParams: string;
    UseQueryOptions: string;
    QueryStore: string;
    MobxResponse: string;
    useEndpoint: string;
    override: string;
    makeObservable: string;
    NodeHttpTransport: string;
    UnaryMethodDefinitionishR: string;
    UnaryMethodDefinitionish: string;
    BinaryReader: string;
    BinaryWriter: string;
    TelescopeGeneratedType: string;
    GlobalDecoderRegistry: string;
};
export declare const UTIL_HELPERS: string[];
export declare const fixlocalpaths: (imports: ImportObj[]) => {
    path: string;
    type: string;
    name: string;
    importAs?: string;
}[];
export declare const getRelativePath: (f1: string, f2: string) => string;
export * from './common-create-bundle';
