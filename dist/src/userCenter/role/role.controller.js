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
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const business_exception_1 = require("../../common/exceptions/business.exception");
const privilege_service_1 = require("../privilege/privilege.service");
const role_privilege_service_1 = require("../role-privilege/role-privilege.service");
const system_service_1 = require("../system/system.service");
const role_dto_1 = require("./role.dto");
const role_service_1 = require("./role.service");
let RoleController = class RoleController {
    constructor(roleService, rolePrivilegeService, privilegeService, systemService) {
        this.roleService = roleService;
        this.rolePrivilegeService = rolePrivilegeService;
        this.privilegeService = privilegeService;
        this.systemService = systemService;
    }
    create(createRoleDto) {
        return this.roleService.create(createRoleDto);
    }
    async update(dto) {
        const foundRole = await this.roleService.findById(dto.id);
        if (!foundRole) {
            throw new business_exception_1.BusinessException('未找到角色');
        }
        return await this.roleService.update(Object.assign(Object.assign({}, foundRole), dto));
    }
    async delete(dto) {
        return await this.roleService.delete(dto.id);
    }
    async list(dto) {
        return await this.roleService.list(dto.systemId);
    }
    async getPrivilegeListById(dto) {
        const rolePrivilegeList = await this.rolePrivilegeService.listByRoleIds([dto.roleId]);
        const privilegeList = await this.privilegeService.findByIds(rolePrivilegeList.map(rp => rp.privilegeId));
        return privilegeList;
    }
    async listWithPagination(dto) {
        const { page } = dto, searchParams = __rest(dto, ["page"]);
        const pageData = await this.roleService.paginate(searchParams, page);
        const systemIds = pageData.items.map(role => role.systemId);
        const systemList = await this.systemService.findByIds(systemIds);
        const systemMap = {};
        systemList.forEach(system => systemMap[system.id] = system);
        const newRoles = pageData.items.map(role => {
            role['systemName'] = systemMap[role.systemId].name;
            return role;
        });
        return Object.assign(Object.assign({}, pageData), { items: newRoles });
    }
    async set(dto) {
        await this.rolePrivilegeService.remove(dto.roleId);
        return await this.rolePrivilegeService.set(dto.roleId, dto.privilegeIds, dto.systemId);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '创建新角色',
    }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '修改角色信息',
    }),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.UpdateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '删除角色',
        description: '如果发现角色有绑定权限，权限将同步删除 Role - privilege 关系表',
    }),
    (0, common_1.Post)('/delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.DeleteRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '角色列表',
        description: '根据系统返回对应系统的角色列表',
    }),
    (0, common_1.Post)('/list'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.RoleListDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "list", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '角色 ID 查权限',
        description: '根据角色 id 查权限列表',
    }),
    (0, common_1.Post)('/getPrivilegeListById'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.GetPrivilegeListByIdDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getPrivilegeListById", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '角色列表（分页）',
        description: '根据角色名称查询',
    }),
    (0, common_1.Post)('/list/pagination'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.RoleListWithPaginationDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "listWithPagination", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '角色分配权限',
        description: '',
    }),
    (0, common_1.Post)('set'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.RolePrivilegeSetDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "set", null);
RoleController = __decorate([
    (0, common_1.Controller)('role'),
    (0, swagger_1.ApiTags)('角色'),
    __metadata("design:paramtypes", [role_service_1.RoleService,
        role_privilege_service_1.RolePrivilegeService,
        privilege_service_1.PrivilegeService,
        system_service_1.SystemService])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=role.controller.js.map