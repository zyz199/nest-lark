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
exports.UserRoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let UserRoleService = class UserRoleService {
    constructor(userRoleRepository) {
        this.userRoleRepository = userRoleRepository;
    }
    listByUserId(userId, systemId) {
        return this.userRoleRepository.find({
            where: {
                systemId,
                userId,
            },
        });
    }
    deleteByUserId(userId, systemId) {
        return this.userRoleRepository.delete({
            userId,
            systemId,
        });
    }
    async setUserRoles(userId, roleIds, systemId) {
        const userRoles = roleIds.map((roleId) => {
            return {
                userId,
                roleId,
                systemId,
            };
        });
        await this.deleteByUserId(userId, systemId);
        return await this.userRoleRepository.save(userRoles);
    }
};
UserRoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("USER_ROLE_REPOSITORY")),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserRoleService);
exports.UserRoleService = UserRoleService;
//# sourceMappingURL=user-role.service.js.map