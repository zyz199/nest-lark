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
exports.getGroupDto = exports.addMonorepoGroupDto = exports.addGroupDto = void 0;
const physical_dto_1 = require("../../material/physical/physical.dto");
const physical_mysql_entity_1 = require("../../material/physical/physical.mysql.entity");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class addGroupDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "营销组件库" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addGroupDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "业务线" }),
    __metadata("design:type", String)
], addGroupDto.prototype, "bizTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], addGroupDto.prototype, "bizId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "test" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addGroupDto.prototype, "desc", void 0);
exports.addGroupDto = addGroupDto;
class addMonorepoGroupDto extends physical_dto_1.CreateProjectDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "营销组件库" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addMonorepoGroupDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "业务线" }),
    __metadata("design:type", String)
], addMonorepoGroupDto.prototype, "bizTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], addMonorepoGroupDto.prototype, "bizId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [physical_mysql_entity_1.MATERIAL_TYPE.npm], enum: physical_mysql_entity_1.MATERIAL_TYPE }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], addMonorepoGroupDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "test" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addMonorepoGroupDto.prototype, "desc", void 0);
exports.addMonorepoGroupDto = addMonorepoGroupDto;
class getGroupDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], getGroupDto.prototype, "id", void 0);
exports.getGroupDto = getGroupDto;
//# sourceMappingURL=multrepoGroup.dto.js.map