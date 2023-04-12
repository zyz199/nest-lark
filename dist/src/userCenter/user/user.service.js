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
exports.UserService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const helper_1 = require("../../helper");
const role_privilege_service_1 = require("../role-privilege/role-privilege.service");
const user_role_service_1 = require("../user-role/user-role.service");
const role_service_1 = require("../role/role.service");
const privilege_service_1 = require("../privilege/privilege.service");
const _ = require("lodash");
let UserService = class UserService {
    constructor(userRepository, rolePrivilegeService, userRoleService, roleService, privilegeService) {
        this.userRepository = userRepository;
        this.rolePrivilegeService = rolePrivilegeService;
        this.userRoleService = userRoleService;
        this.roleService = roleService;
        this.privilegeService = privilegeService;
    }
    createOrSave(user) {
        this.userRepository.save(user);
    }
    async createOrUpdateByFeishu(feishuUserInfo) {
        const findUser = await this.userRepository.findOne({
            where: [{ email: feishuUserInfo.email }],
        });
        return await this.userRepository.save(Object.assign(Object.assign({}, findUser), feishuUserInfo));
    }
    profile(userId) {
        return this.userRepository.findOneBy(userId);
    }
    async paginate(searchParams, page) {
        const queryBuilder = this.userRepository.createQueryBuilder("user");
        queryBuilder.orderBy("user.updateTime", "DESC");
        if ((0, class_validator_1.isNotEmpty)(searchParams.keyword)) {
            queryBuilder.andWhere("user.name LIKE :name", {
                name: `%${searchParams.keyword}%`,
            });
            queryBuilder.orWhere("user.username LIKE :name", {
                name: `%${searchParams.keyword}%`,
            });
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, (0, helper_1.getPaginationOptions)(page));
    }
    getUserListByEmails(emailList) {
        return this.userRepository.find({
            where: {
                email: (0, typeorm_1.In)(emailList),
            },
        });
    }
    async getPrivilegeListByUserId(userId, systemId) {
        const userRoleList = await this.userRoleService.listByUserId(userId, systemId);
        const roleIds = userRoleList.map((i) => i.id);
        const rolePrivilegeList = await this.rolePrivilegeService.listByRoleIds(roleIds);
        const privilegeIds = rolePrivilegeList.map((rp) => rp.privilegeId);
        const privilegeList = await this.privilegeService.findByIds([
            ...new Set(privilegeIds),
        ]);
        return privilegeList;
    }
    async getPrivilegeCodesByUserId(userId, systemId) {
        const userRoleList = await this.userRoleService.listByUserId(userId, systemId);
        const roleIds = userRoleList.map((i) => i.roleId);
        const rolePrivilegeList = await this.rolePrivilegeService.listByRoleIds(roleIds);
        const privilegeIds = rolePrivilegeList.map((rp) => rp.privilegeId);
        const privilegeList = await this.privilegeService.findByIds([
            ...new Set(privilegeIds),
        ]);
        return privilegeList.map((p) => ({
            code: `${p.resourceKey}:${p.action}`,
            status: p.status,
        }));
    }
    async getRolesById(userId, systemId) {
        const userRoles = await this.userRoleService.listByUserId(userId, systemId);
        const roleIds = userRoles.map((ur) => ur.roleId);
        return await this.roleService.findByIds(roleIds);
    }
    getUserById(id) {
        return this.userRepository.findOne({
            where: {
                id,
            },
        });
    }
    getUserByFeishuId(feishuUserId) {
        return this.userRepository.findOne({
            where: {
                feishuUserId,
            },
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("USER_REPOSITORY")),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        role_privilege_service_1.RolePrivilegeService,
        user_role_service_1.UserRoleService,
        role_service_1.RoleService,
        privilege_service_1.PrivilegeService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map