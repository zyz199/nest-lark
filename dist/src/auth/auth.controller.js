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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const feishu_auth_guard_1 = require("./guards/feishu-auth.guard");
const auth_service_1 = require("./auth.service");
const swagger_1 = require("@nestjs/swagger");
const auth_dto_1 = require("./auth.dto");
const constants_1 = require("./constants");
const helper_1 = require("../helper");
const feishu_service_1 = require("../userCenter/user/feishu/feishu.service");
let AuthController = class AuthController {
    constructor(authService, feishuService) {
        this.authService = authService;
        this.feishuService = feishuService;
    }
    async logout(response) {
        response.setCookie("jwt", "");
        return {};
    }
    async getFeishuTokenByApplications(user, response, query) {
        const { access_token } = await this.authService.login(user);
        response.setCookie("jwt", access_token, {
            path: "/",
        });
        return access_token;
    }
    async getTokenInfo(user) {
        return user;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "登出",
        description: "服务器端清除 jwt cookies",
    }),
    (0, common_1.Post)("logout"),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "飞书 Auth2 授权登录",
        description: "通过 code 获取`access_token`https://open.feishu.cn/open-apis/authen/v1/index?app_id=cli_a2ed5e7be4f9500d&redirect_uri=http%3A%2F%2F127.0.0.1%3A8080%2Fauth",
    }),
    (0, common_1.UseGuards)(feishu_auth_guard_1.FeishuAuthGuard),
    (0, constants_1.Public)(),
    (0, common_1.Get)("/feishu/auth2"),
    __param(0, (0, helper_1.PayloadUser)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, auth_dto_1.GetTokenByApplications]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getFeishuTokenByApplications", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "解密 token 包含的信息",
        description: "解密 token 包含的信息",
    }),
    (0, common_1.Get)("/token/info"),
    __param(0, (0, helper_1.PayloadUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getTokenInfo", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)("用户认证"),
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        feishu_service_1.FeishuService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map