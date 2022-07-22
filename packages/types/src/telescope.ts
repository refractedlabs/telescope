import { AminoExceptions, DEFAULT_AMINO_EXCEPTIONS } from "./aminos";
import { snake } from 'case';
import { camel } from '@osmonauts/utils';
interface TelescopeOpts {
    aminoCasingFn?: Function;
    aminoExceptions?: AminoExceptions;
    camelRpcMethods?: boolean;
    includeAminos?: boolean;
    includeLCDClient?: boolean;
    includePackageVar?: boolean;
    includeRpcClients?: boolean;
    signingClientDefaults?: boolean;
    useDate?: 'date' | 'timestamp';
    useDuration?: 'duration' | 'string';
    useExact?: boolean;
}
interface TelescopePackageOpts {
    packages?: Record<string, any>;
}

export type TelescopeOptions = TelescopeOpts & TelescopePackageOpts;

export type TelescopeOption = keyof TelescopeOpts;

export const defaultTelescopeOptions: TelescopeOptions = {
    // global options (can be overridden through plugins)
    includeAminos: true,
    includeLCDClient: false,
    signingClientDefaults: true,
    includePackageVar: false,
    includeRpcClients: false,
    camelRpcMethods: true,
    useDate: 'date',
    useDuration: 'duration',
    useExact: false,
    aminoCasingFn: snake,
    aminoExceptions: {
        ...DEFAULT_AMINO_EXCEPTIONS
    },

    packages: {
        cosmos: {
            signingClientDefaults: false
        },
        osmosis: {
            aminoCasingFn: camel
        }
    }
}
