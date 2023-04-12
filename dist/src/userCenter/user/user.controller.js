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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_dto_1 = require("./user.dto");
const swagger_1 = require("@nestjs/swagger");
const helper_1 = require("../../helper");
const user_role_service_1 = require("../user-role/user-role.service");
const business_exception_1 = require("../../common/exceptions/business.exception");
let UserController = class UserController {
    constructor(userService, userRoleService) {
        this.userService = userService;
        this.userRoleService = userRoleService;
    }
    profile(user) {
        return this.userService.profile(user.userId);
    }
    async changeStatus(dto) {
        const found = await this.userService.getUserById(dto.userId);
        if (!found) {
            throw new business_exception_1.BusinessException(`未找到 ID 为 ${dto.userId} 的用户`);
        }
        return this.userService.createOrSave(Object.assign(Object.assign({}, found), { status: dto.status }));
    }
    async listWithPagination(dto) {
        const { page } = dto, searchParams = __rest(dto, ["page"]);
        return this.userService.paginate(searchParams, page);
    }
    getRolesById(dto) {
        return this.userService.getRolesById(dto.userId, dto.systemId);
    }
    async setRoles(dto) {
        return await this.userRoleService.setUserRoles(dto.userId, dto.roleIds, dto.systemId);
    }
    async test() {
        return "123";
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "用户信息",
    }),
    (0, common_1.Post)("/profile"),
    __param(0, (0, helper_1.PayloadUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "profile", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "是否激活用户",
    }),
    (0, common_1.Post)("changeStatus"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.DisableUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changeStatus", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "用户列表（分页）",
    }),
    (0, common_1.Post)("/list/pagination"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserListWithPaginationDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "listWithPagination", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "通过用户 ID 获取角色列表",
    }),
    (0, common_1.Post)("/getRolesById"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetRolesByIdDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getRolesById", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "设置用户角色",
    }),
    (0, common_1.Post)("setRoles"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.SetRolesDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "setRoles", null);
__decorate([
    (0, common_1.Get)("test1"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "test", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)("用户"),
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [user_service_1.UserService,
        user_role_service_1.UserRoleService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map