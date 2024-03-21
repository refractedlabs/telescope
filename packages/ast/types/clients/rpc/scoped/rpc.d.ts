import * as t from "@babel/types";
import { GenericParseContext } from "../../../encoding";
export declare const rpcFuncArguments: () => t.ObjectPattern[];
export declare const rpcClassArguments: () => t.ObjectExpression[];
export declare const rpcNewAwaitImport: (path: string, className: string) => t.NewExpression;
export declare const rpcNewTmAwaitImport: (path: string, className: string, clientName?: string, isNew?: boolean) => t.CallExpression | t.NewExpression;
export declare const rpcRecursiveObjectProps: (names: string[], leaf?: any) => t.ObjectExpression;
export declare const rpcNestedImportObject: (obj: object, className: string, options?: {
    restoreImportExtension?: string;
}) => any;
export declare const rpcTmNestedImportObject: (obj: object, className: string, clientName?: string, options?: {
    isNew?: boolean;
    restoreImportExtension?: string;
}) => any;
export declare const createScopedRpcFactory: (obj: object, identifier: string, className: string, options?: {
    restoreImportExtension?: string;
}) => t.ExportNamedDeclaration;
export declare const createScopedRpcTmFactory: (context: GenericParseContext, obj: object, identifier: string) => t.ExportNamedDeclaration;
