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
exports.PrivilegeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const business_exception_1 = require("../../common/exceptions/business.exception");
const system_service_1 = require("../system/system.service");
const resource_service_1 = require("../resource/resource.service");
const privilege_dto_1 = require("./privilege.dto");
const privilege_service_1 = require("./privilege.service");
let PrivilegeController = class PrivilegeController {
    constructor(privilegeService, resourceService, systemService) {
        this.privilegeService = privilegeService;
        this.resourceService = resourceService;
        this.systemService = systemService;
    }
    async create(dto) {
        const privilege = {
            systemId: dto.systemId,
            name: dto.name,
            resourceKey: dto.resourceKey,
            action: dto.action,
            description: dto.description,
        };
        const resource = await this.resourceService.findByKey(dto.resourceKey);
        if (!resource) {
            throw new business_exception_1.BusinessException("未找到资源 Key:" + dto.resourceKey);
        }
        return this.privilegeService.createOrUpdate(privilege);
    }
    async update(dto) {
        const updatedPrivilege = {
            name: dto.name,
            systemId: dto.systemId,
            resourceKey: dto.resourceKey,
            action: dto.action,
            description: dto.description,
        };
        const privilege = await this.privilegeService.findById(dto.id);
        if (!privilege) {
            throw new business_exception_1.BusinessException(`未找到 id 为 ${dto.id} 的权限`);
        }
        const resource = await this.resourceService.findByKey(dto.resourceKey);
        if (!resource) {
            throw new business_exception_1.BusinessException("未找到资源 Key:" + dto.resourceKey);
        }
        return this.privilegeService.createOrUpdate(Object.assign(Object.assign({}, privilege), updatedPrivilege));
    }
    async changeStatus(dto) {
        const found = await this.privilegeService.findById(dto.privilegeId);
        if (!found) {
            throw new business_exception_1.BusinessException(`未找到 ID 为 ${dto.privilegeId} 的权限`);
        }
        return this.privilegeService.createOrUpdate(Object.assign(Object.assign({}, found), { status: dto.status }));
    }
    async delete(dto) {
        return this.privilegeService.delete(dto.privilegeId);
    }
    async listWithPagination(dto) {
        const { page } = dto, searchParams = __rest(dto, ["page"]);
        const pageData = await this.privilegeService.paginate(searchParams, page);
        const systemIds = pageData.items.map((privilege) => privilege.systemId);
        const systemList = await this.systemService.findByIds(systemIds);
        const systemMap = {};
        systemList.forEach((system) => (systemMap[system.id] = system));
        const newRoles = pageData.items.map((privilege) => {
            privilege["systemName"] = systemMap[privilege.systemId].name;
            return privilege;
        });
        return Object.assign(Object.assign({}, pageData), { items: newRoles });
    }
    async list(dto) {
        return await this.privilegeService.list(dto.systemId);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "创建权限",
    }),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [privilege_dto_1.CreatePrivilegeDto]),
    __metadata("design:returntype", Promise)
], PrivilegeController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "修改权限",
    }),
    (0, common_1.Post)("update"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [privilege_dto_1.UpdatePrivilegeDto]),
    __metadata("design:returntype", Promise)
], PrivilegeController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "是否冻结权限",
    }),
    (0, common_1.Post)("changeStatus"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [privilege_dto_1.DisablePrivilegeDto]),
    __metadata("design:returntype", Promise)
], PrivilegeController.prototype, "changeStatus", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "删除权限",
    }),
    (0, common_1.Post)("delete"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [privilege_dto_1.DeletePrivilegeDto]),
    __metadata("design:returntype", Promise)
], PrivilegeController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "权限列表（分页）",
        description: "根据权限名称查询",
    }),
    (0, common_1.Post)("/list/pagination"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [privilege_dto_1.PrivilegeListWithPaginationDto]),
    __metadata("design:returntype", Promise)
], PrivilegeController.prototype, "listWithPagination", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "获取所有权限",
    }),
    (0, common_1.Post)("list"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [privilege_dto_1.ListAllPrivilegeDto]),
    __metadata("design:returntype", Promise)
], PrivilegeController.prototype, "list", null);
PrivilegeController = __decorate([
    (0, swagger_1.ApiTags)("权限"),
    (0, common_1.Controller)("privilege"),
    __metadata("design:paramtypes", [privilege_service_1.PrivilegeService,
        resource_service_1.ResourceService,
        system_service_1.SystemService])
], PrivilegeController);
exports.PrivilegeController = PrivilegeController;
//# sourceMappingURL=privilege.controller.js.map