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
exports.ResourceListWithPaginationDto = exports.UpdateResourceDto = exports.DeleteResourceDto = exports.ListBySystemIdDto = exports.CreateResourceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const type_1 = require("../../../types/type");
class CreateResourceDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 'test', description: '资源信息' }),
    __metadata("design:type", String)
], CreateResourceDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '', description: '父级资源ID' }),
    __metadata("design:type", Number)
], CreateResourceDto.prototype, "parentId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '2', description: '系统ID' }),
    __metadata("design:type", Number)
], CreateResourceDto.prototype, "systemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test', description: '系统标识' }),
    __metadata("design:type", String)
], CreateResourceDto.prototype, "key", void 0);
exports.CreateResourceDto = CreateResourceDto;
class ListBySystemIdDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '2', description: '系统ID' }),
    __metadata("design:type", Number)
], ListBySystemIdDto.prototype, "systemId", void 0);
exports.ListBySystemIdDto = ListBySystemIdDto;
class DeleteResourceDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '1', description: '资源ID' }),
    __metadata("design:type", Number)
], DeleteResourceDto.prototype, "id", void 0);
exports.DeleteResourceDto = DeleteResourceDto;
class UpdateResourceDto extends CreateResourceDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '1', description: '资源ID' }),
    __metadata("design:type", Number)
], UpdateResourceDto.prototype, "id", void 0);
exports.UpdateResourceDto = UpdateResourceDto;
class ResourceListWithPaginationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '', description: '查询关键词' }),
    __metadata("design:type", String)
], ResourceListWithPaginationDto.prototype, "keyword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: { pageSize: 10, currentPage: 1 } }),
    __metadata("design:type", type_1.PaginationParams)
], ResourceListWithPaginationDto.prototype, "page", void 0);
exports.ResourceListWithPaginationDto = ResourceListWithPaginationDto;
//# sourceMappingURL=resource.dto.js.map