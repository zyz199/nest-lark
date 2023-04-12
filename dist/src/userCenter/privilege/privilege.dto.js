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
exports.ListAllPrivilegeDto = exports.PrivilegeListWithPaginationDto = exports.UpdatePrivilegeDto = exports.DisablePrivilegeDto = exports.DeletePrivilegeDto = exports.CreatePrivilegeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const type_1 = require("../../../types/type");
const privilege_mysql_entity_1 = require("./privilege.mysql.entity");
class CreatePrivilegeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: '系统ID' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePrivilegeDto.prototype, "systemId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '查看', description: '权限名称' }),
    __metadata("design:type", String)
], CreatePrivilegeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'page', description: '类型' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePrivilegeDto.prototype, "resourceKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '查看', description: '权限描述' }),
    __metadata("design:type", String)
], CreatePrivilegeDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'read', enum: privilege_mysql_entity_1.Action }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePrivilegeDto.prototype, "action", void 0);
exports.CreatePrivilegeDto = CreatePrivilegeDto;
class DeletePrivilegeDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '1', description: '权限ID' }),
    __metadata("design:type", Number)
], DeletePrivilegeDto.prototype, "privilegeId", void 0);
exports.DeletePrivilegeDto = DeletePrivilegeDto;
class DisablePrivilegeDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '1', description: '权限ID' }),
    __metadata("design:type", Number)
], DisablePrivilegeDto.prototype, "privilegeId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '1', description: '权限状态', enum: privilege_mysql_entity_1.PrivilegeStatus }),
    __metadata("design:type", Number)
], DisablePrivilegeDto.prototype, "status", void 0);
exports.DisablePrivilegeDto = DisablePrivilegeDto;
class UpdatePrivilegeDto extends CreatePrivilegeDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '1', description: '权限ID' }),
    __metadata("design:type", Number)
], UpdatePrivilegeDto.prototype, "id", void 0);
exports.UpdatePrivilegeDto = UpdatePrivilegeDto;
class PrivilegeListWithPaginationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '', description: '查询关键词' }),
    __metadata("design:type", String)
], PrivilegeListWithPaginationDto.prototype, "keyword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: { pageSize: 10, currentPage: 1 } }),
    __metadata("design:type", type_1.PaginationParams)
], PrivilegeListWithPaginationDto.prototype, "page", void 0);
exports.PrivilegeListWithPaginationDto = PrivilegeListWithPaginationDto;
class ListAllPrivilegeDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '2', description: '系统ID' }),
    __metadata("design:type", Number)
], ListAllPrivilegeDto.prototype, "systemId", void 0);
exports.ListAllPrivilegeDto = ListAllPrivilegeDto;
//# sourceMappingURL=privilege.dto.js.map