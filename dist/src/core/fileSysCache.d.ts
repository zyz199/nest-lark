import { WebSiteDataModel } from "./types";
export declare const updateLocalFile: (Local: Record<string, WebSiteDataModel>) => void;
export declare const readLocalFile: () => string;
export declare function path2FileName(path: string): string;
export declare function readMatchedFileSync(hostname: string, matchedPath: string): string | undefined;
export declare const writeFileSync: (hostname: string, matchedPath: string, html: string) => boolean;
export declare const updateFileSync: (hostname: string, matchedPath: string, html: string) => boolean;
export declare const existsSync: (hostname: string, matchedPath: string) => boolean;
