export declare enum XY_ENV {
    dev = "dev",
    fix = "fix",
    test = "test",
    prod = "prod"
}
export interface ResponseBase {
    success: boolean;
    errorMsg?: string;
}
export interface WebSiteDataModel {
    [host: string]: {
        [path: string]: PageModelItem;
    };
}
export interface PageModelItem {
    lastModified?: number;
    pageId?: number;
    permissions?: Array<() => (boolean | Promise<boolean>) | boolean>;
}
export interface RouterDataModel {
    host: string;
    routes: RouteDataModel[];
    defaultRoute?: string;
}
export interface RouteDataModel {
    path: string;
    html: string;
}
