export type GetAppTokenRes = {
    code: number;
    msg: string;
    app_access_token: string;
    expire: number;
};
export declare const getUserToken: ({ code, app_token }: {
    code: any;
    app_token: any;
}) => Promise<any>;
export declare const refreshUserToken: ({ refreshToken, app_token }: {
    refreshToken: any;
    app_token: any;
}) => Promise<any>;
export declare const getUserAccessToken: (code: any) => Promise<GetAppTokenRes>;
export declare const getAppToken: () => Promise<GetAppTokenRes>;
