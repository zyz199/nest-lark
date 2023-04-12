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
exports.UserListWithPaginationDto = exports.GetPrivilegeListDto = exports.SetRolesDto = exports.GetRolesByIdDto = exports.DisableUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const type_1 = require("../../../types/type");
const user_mysql_entity_1 = require("./user.mysql.entity");
class DisableUserDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: '用户ID' }),
    __metadata("design:type", Number)
], DisableUserDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: '用户状态', enum: user_mysql_entity_1.UserStatus }),
    __metadata("design:type", Number)
], DisableUserDto.prototype, "status", void 0);
exports.DisableUserDto = DisableUserDto;
class GetRolesByIdDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: '用户ID' }),
    __metadata("design:type", Number)
], GetRolesByIdDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 2, description: '系统ID' }),
    __metadata("design:type", Number)
], GetRolesByIdDto.prototype, "systemId", void 0);
exports.GetRolesByIdDto = GetRolesByIdDto;
class SetRolesDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: '用户ID' }),
    __metadata("design:type", Number)
], SetRolesDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: [1], description: '角色ID' }),
    __metadata("design:type", Array)
], SetRolesDto.prototype, "roleIds", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 2, description: '系统ID' }),
    __metadata("design:type", Number)
], SetRolesDto.prototype, "systemId", void 0);
exports.SetRolesDto = SetRolesDto;
class GetPrivilegeListDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: '用户ID' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], GetPrivilegeListDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '2', description: '系统ID' }),
    __metadata("design:type", Number)
], GetPrivilegeListDto.prototype, "systemId", void 0);
exports.GetPrivilegeListDto = GetPrivilegeListDto;
class UserListWithPaginationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '', description: '查询关键词' }),
    __metadata("design:type", String)
], UserListWithPaginationDto.prototype, "keyword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: { pageSize: 10, currentPage: 1 } }),
    __metadata("design:type", type_1.PaginationParams)
], UserListWithPaginationDto.prototype, "page", void 0);
exports.UserListWithPaginationDto = UserListWithPaginationDto;
//# sourceMappingURL=user.dto.js.map