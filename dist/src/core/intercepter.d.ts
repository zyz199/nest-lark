import type { WebSiteDataModel, PageModelItem } from "./types";
export declare const matchWebsite: (host: string, websites: Record<string, WebSiteDataModel>) => WebSiteDataModel | undefined;
export declare const matchPath: (website: WebSiteDataModel | undefined, targetPath: string) => {
    path: string;
    data: PageModelItem;
} | undefined;
export declare const getMatchedSync: (urlObj: URL, websites?: Record<string, WebSiteDataModel>) => {
    path: string | undefined;
    data: PageModelItem | undefined;
};
