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
exports.RoleListWithPaginationDto = exports.UpdateRoleDto = exports.GetPrivilegeListByIdDto = exports.RoleListDto = exports.RolePrivilegeSetDto = exports.DeleteRoleDto = exports.CreateRoleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const type_1 = require("../../../types/type");
class CreateRoleDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '普通用户', description: '角色名称' }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '普通用户的权限', description: '角色描述' }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '2', description: '系统id' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateRoleDto.prototype, "systemId", void 0);
exports.CreateRoleDto = CreateRoleDto;
class DeleteRoleDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '1', description: '角色id' }),
    __metadata("design:type", Number)
], DeleteRoleDto.prototype, "id", void 0);
exports.DeleteRoleDto = DeleteRoleDto;
class RolePrivilegeSetDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '1', description: '角色id' }),
    __metadata("design:type", Number)
], RolePrivilegeSetDto.prototype, "roleId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], RolePrivilegeSetDto.prototype, "privilegeIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: '系统id' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], RolePrivilegeSetDto.prototype, "systemId", void 0);
exports.RolePrivilegeSetDto = RolePrivilegeSetDto;
class RoleListDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: '系统id' }),
    __metadata("design:type", Number)
], RoleListDto.prototype, "systemId", void 0);
exports.RoleListDto = RoleListDto;
class GetPrivilegeListByIdDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], GetPrivilegeListByIdDto.prototype, "roleId", void 0);
exports.GetPrivilegeListByIdDto = GetPrivilegeListByIdDto;
class UpdateRoleDto extends CreateRoleDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '1', description: '角色id' }),
    __metadata("design:type", Number)
], UpdateRoleDto.prototype, "id", void 0);
exports.UpdateRoleDto = UpdateRoleDto;
class RoleListWithPaginationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], RoleListWithPaginationDto.prototype, "keyword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: { pageSize: 10, currentPage: 1 } }),
    __metadata("design:type", type_1.PaginationParams)
], RoleListWithPaginationDto.prototype, "page", void 0);
exports.RoleListWithPaginationDto = RoleListWithPaginationDto;
//# sourceMappingURL=role.dto.js.map