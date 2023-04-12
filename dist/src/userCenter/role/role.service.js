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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const role_privilege_service_1 = require("../role-privilege/role-privilege.service");
const system_service_1 = require("../system/system.service");
const helper_1 = require("../../helper");
const typeorm_1 = require("typeorm");
let RoleService = class RoleService {
    constructor(roleRepository, rolePrivilegeService, systemService) {
        this.roleRepository = roleRepository;
        this.rolePrivilegeService = rolePrivilegeService;
        this.systemService = systemService;
    }
    create(dto) {
        const role = {
            systemId: dto.systemId,
            name: dto.name,
            description: dto.description
        };
        return this.roleRepository.save(role);
    }
    update(role) {
        return this.roleRepository.save(role);
    }
    async delete(id) {
        await this.rolePrivilegeService.remove(id);
        return await this.roleRepository.delete(id);
    }
    findById(id) {
        return this.roleRepository.findOneBy(id);
    }
    findByIds(ids) {
        return this.roleRepository.find({
            where: {
                id: (0, typeorm_1.In)(ids)
            }
        });
    }
    async paginate(searchParams, page) {
        const queryBuilder = this.roleRepository.createQueryBuilder('role');
        queryBuilder.orderBy('role.createTime', 'DESC');
        if ((0, class_validator_1.isNotEmpty)(searchParams.keyword)) {
            queryBuilder.andWhere('role.name LIKE :name', {
                name: `%${searchParams.keyword}%`,
            });
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, (0, helper_1.getPaginationOptions)(page));
    }
    async list(systemId) {
        const roles = await this.roleRepository.find({
            where: {
                systemId
            }
        });
        return roles;
    }
};
RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ROLE_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        role_privilege_service_1.RolePrivilegeService,
        system_service_1.SystemService])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map