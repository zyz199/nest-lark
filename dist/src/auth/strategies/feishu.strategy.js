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
exports.FeishuStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth.service");
const passport_custom_1 = require("passport-custom");
let FeishuStrategy = class FeishuStrategy extends (0, passport_1.PassportStrategy)(passport_custom_1.Strategy, "feishu") {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    async validate(req) {
        const q = req.query;
        const user = await this.authService.validateFeishuUser(q.code);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
FeishuStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], FeishuStrategy);
exports.FeishuStrategy = FeishuStrategy;
//# sourceMappingURL=feishu.strategy.js.map