import { WebSiteDataModel } from "./types";
import { ConfigService } from "@nestjs/config";
export declare class IntercepterService {
    private readonly configService;
    constructor(configService: ConfigService);
    get websites(): Record<string, WebSiteDataModel>;
    readHtml(urlObj: URL): Promise<any>;
}
