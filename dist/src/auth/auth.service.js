"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const feishu_service_1 = require("../userCenter/user/feishu/feishu.service");
const user_service_1 = require("../userCenter/user/user.service");
let AuthService = class AuthService {
    constructor(jwtService, userService, feishuService) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.feishuService = feishuService;
    }
    async validateFeishuUser(code) {
        const feishuInfo = await this.getFeishuTokenByApplications(code);
        const user = await this.userService.createOrUpdateByFeishu(feishuInfo);
        return {
            userId: user.id,
            username: user.username,
            name: user.name,
            email: user.email,
            feishuAccessToken: feishuInfo.accessToken,
            feishuUserId: feishuInfo.feishuUserId,
        };
    }
    async login(user) {
        return {
            access_token: this.jwtService.sign(user),
        };
    }
    async getFeishuTokenByApplications(code) {
        const data = await this.feishuService.getUserToken(code);
        const feishuInfo = {
            accessToken: data.access_token,
            avatarBig: data.avatar_big,
            avatarMiddle: data.avatar_middle,
            avatarThumb: data.avatar_thumb,
            avatarUrl: data.avatar_url,
            email: data.email,
            enName: data.en_name,
            mobile: data.mobile,
            name: data.name,
            feishuUnionId: data.union_id,
            feishuUserId: data.user_id,
        };
        return feishuInfo;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService,
        feishu_service_1.FeishuService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map