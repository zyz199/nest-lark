import { Cache } from "cache-manager";
import { ConfigService } from "@nestjs/config";
export declare class FeishuService {
    private cacheManager;
    private configService;
    private APP_TOKEN_CACHE_KEY;
    constructor(cacheManager: Cache, configService: ConfigService);
    getAppToken(): Promise<string>;
    setUserCacheToken(tokenInfo: any): Promise<void>;
    sendMessage(receive_id_type: any, params: any): Promise<any>;
    getCachedUserToken(userId: string): Promise<string>;
    getUserToken(code: string): Promise<any>;
    getUserTokenByRefreshToken(refreshToken: string): Promise<any>;
    getSingleUserInfo(feishuUserId: string): Promise<any>;
    getUserListByDepartmentId(): Promise<any>;
}
