import { JwtService } from "@nestjs/jwt";
import { FeishuUserInfo } from "@/userCenter/user/feishu/feishu.dto";
import { FeishuService } from "@/userCenter/user/feishu/feishu.service";
import { UserService } from "@/userCenter/user/user.service";
export declare class AuthService {
    private jwtService;
    private userService;
    private feishuService;
    constructor(jwtService: JwtService, userService: UserService, feishuService: FeishuService);
    validateFeishuUser(code: string): Promise<Payload>;
    login(user: Payload): Promise<{
        access_token: string;
    }>;
    getFeishuTokenByApplications(code: string): Promise<FeishuUserInfo>;
}
