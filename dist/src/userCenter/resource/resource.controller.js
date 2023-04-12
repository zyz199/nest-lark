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
exports.ResourceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const business_exception_1 = require("../../common/exceptions/business.exception");
const resource_dto_1 = require("./resource.dto");
const resource_service_1 = require("./resource.service");
let ResourceController = class ResourceController {
    constructor(resourceService) {
        this.resourceService = resourceService;
    }
    async create(dto) {
        const foundResource = await this.resourceService.findByKey(dto.key);
        if (foundResource) {
            throw new business_exception_1.BusinessException('资源 Key 已存在');
        }
        return await this.resourceService.create(dto);
    }
    async update(dto) {
        const foundResource = await this.resourceService.findById(dto.id);
        if (!foundResource) {
            throw new business_exception_1.BusinessException('未找到资源');
        }
        const allowUpdateFields = {
            name: dto.name,
        };
        return await this.resourceService.update(Object.assign(Object.assign({}, foundResource), allowUpdateFields));
    }
    async delete(dto) {
        return await this.resourceService.delete(dto.id);
    }
    async listBySystemId(dto) {
        return await this.resourceService.listBySystemId(dto.systemId);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '创建新资源',
    }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resource_dto_1.CreateResourceDto]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '修改资源信息',
    }),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resource_dto_1.UpdateResourceDto]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '删除资源',
        description: '',
    }),
    (0, common_1.Post)('/delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resource_dto_1.DeleteResourceDto]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '资源列表',
        description: '根据角色名称查询',
    }),
    (0, common_1.Post)('/listBySystemId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resource_dto_1.ListBySystemIdDto]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "listBySystemId", null);
ResourceController = __decorate([
    (0, common_1.Controller)('resource'),
    (0, swagger_1.ApiTags)('资源'),
    __metadata("design:paramtypes", [resource_service_1.ResourceService])
], ResourceController);
exports.ResourceController = ResourceController;
//# sourceMappingURL=resource.controller.js.map