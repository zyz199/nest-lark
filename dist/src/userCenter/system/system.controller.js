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
exports.SystemController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const business_exception_1 = require("../../common/exceptions/business.exception");
const system_dto_1 = require("./system.dto");
const system_service_1 = require("./system.service");
const helper_1 = require("../../helper");
let SystemController = class SystemController {
    constructor(systemService) {
        this.systemService = systemService;
    }
    create(dto, user) {
        return this.systemService.create(Object.assign(Object.assign({}, dto), { creatorName: user.name, creatorId: user.userId }));
    }
    async update(dto) {
        const foundSystem = await this.systemService.findById(dto.id);
        if (!foundSystem) {
            throw new business_exception_1.BusinessException('未找到系统');
        }
        return await this.systemService.update(Object.assign(Object.assign({}, foundSystem), dto));
    }
    async delete(dto) {
        return await this.systemService.delete(dto.id);
    }
    async list() {
        return await this.systemService.list();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '创建新系统',
    }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, helper_1.PayloadUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [system_dto_1.CreateSystemDto, Object]),
    __metadata("design:returntype", void 0)
], SystemController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '修改系统信息',
    }),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [system_dto_1.UpdateSystemDto]),
    __metadata("design:returntype", Promise)
], SystemController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '删除系统',
    }),
    (0, common_1.Post)('/delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [system_dto_1.DeleteSystemDto]),
    __metadata("design:returntype", Promise)
], SystemController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '所有系统列表',
    }),
    (0, common_1.Post)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SystemController.prototype, "list", null);
SystemController = __decorate([
    (0, swagger_1.ApiTags)('系统'),
    (0, common_1.Controller)('system'),
    __metadata("design:paramtypes", [system_service_1.SystemService])
], SystemController);
exports.SystemController = SystemController;
//# sourceMappingURL=system.controller.js.map