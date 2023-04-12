import { AuthService } from "./auth.service";
import { GetTokenByApplications } from "./auth.dto";
import { FeishuService } from "@/userCenter/user/feishu/feishu.service";
import { FastifyReply } from "fastify";
export declare class AuthController {
    private authService;
    private readonly feishuService;
    constructor(authService: AuthService, feishuService: FeishuService);
    logout(response: FastifyReply): Promise<{}>;
    getFeishuTokenByApplications(user: Payload, response: FastifyReply, query: GetTokenByApplications): Promise<string>;
    getTokenInfo(user: Payload): Promise<Payload>;
}
