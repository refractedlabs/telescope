import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, ConnectionEndAmino, ConnectionEndSDKType, IdentifiedConnection, IdentifiedConnectionAmino, IdentifiedConnectionSDKType } from "./connection";
import { Height, HeightAmino, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryConnectionRequest, QueryConnectionRequestAmino, QueryConnectionRequestSDKType, QueryConnectionResponse, QueryConnectionResponseAmino, QueryConnectionResponseSDKType, QueryConnectionsRequest, QueryConnectionsRequestAmino, QueryConnectionsRequestSDKType, QueryConnectionsResponse, QueryConnectionsResponseAmino, QueryConnectionsResponseSDKType, QueryClientConnectionsRequest, QueryClientConnectionsRequestAmino, QueryClientConnectionsRequestSDKType, QueryClientConnectionsResponse, QueryClientConnectionsResponseAmino, QueryClientConnectionsResponseSDKType, QueryConnectionClientStateRequest, QueryConnectionClientStateRequestAmino, QueryConnectionClientStateRequestSDKType, QueryConnectionClientStateResponse, QueryConnectionClientStateResponseAmino, QueryConnectionClientStateResponseSDKType, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateRequestAmino, QueryConnectionConsensusStateRequestSDKType, QueryConnectionConsensusStateResponse, QueryConnectionConsensusStateResponseAmino, QueryConnectionConsensusStateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.connection = this.connection.bind(this);
    this.connections = this.connections.bind(this);
    this.clientConnections = this.clientConnections.bind(this);
    this.connectionClientState = this.connectionClientState.bind(this);
    this.connectionConsensusState = this.connectionConsensusState.bind(this);
  }

  /* Connection queries an IBC connection end. */
  async connection(params: QueryConnectionRequest): Promise<QueryConnectionResponseSDKType> {
    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}`;
    return await this.req.get<QueryConnectionResponseSDKType>(endpoint);
  }

  /* Connections queries all the IBC connections of a chain. */
  async connections(params: QueryConnectionsRequest = {
    pagination: undefined
  }): Promise<QueryConnectionsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/connection/v1/connections`;
    return await this.req.get<QueryConnectionsResponseSDKType>(endpoint, options);
  }

  /* ClientConnections queries the connection paths associated with a client
   state. */
  async clientConnections(params: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponseSDKType> {
    const endpoint = `ibc/core/connection/v1/client_connections/${params.clientId}`;
    return await this.req.get<QueryClientConnectionsResponseSDKType>(endpoint);
  }

  /* ConnectionClientState queries the client state associated with the
   connection. */
  async connectionClientState(params: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponseSDKType> {
    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}/client_state`;
    return await this.req.get<QueryConnectionClientStateResponseSDKType>(endpoint);
  }

  /* ConnectionConsensusState queries the consensus state associated with the
   connection. */
  async connectionConsensusState(params: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponseSDKType> {
    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}/consensus_state/revision/${params.revisionNumber}/height/${params.revisionHeight}`;
    return await this.req.get<QueryConnectionConsensusStateResponseSDKType>(endpoint);
  }

}