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
exports.PublishDto = exports.editMaterialDetailDto = exports.searchMaterialDetailDto = exports.searchMaterialByIdsDto = exports.searchMaterialDto = exports.addMaterialDto = exports.CreateProjectDto = exports.ProcessMap = exports.staticMap = exports.versionMap = exports.versionTypeMap = exports.branchMap = exports.ProcessNodes = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const physical_mysql_entity_1 = require("./physical.mysql.entity");
var ProcessNodes;
(function (ProcessNodes) {
    ProcessNodes[ProcessNodes["development"] = 0] = "development";
    ProcessNodes[ProcessNodes["testing"] = 1] = "testing";
    ProcessNodes[ProcessNodes["fix"] = 2] = "fix";
    ProcessNodes[ProcessNodes["production"] = 3] = "production";
})(ProcessNodes = exports.ProcessNodes || (exports.ProcessNodes = {}));
exports.branchMap = {
    [ProcessNodes.development]: "dev",
    [ProcessNodes.testing]: "test",
    [ProcessNodes.fix]: "fix",
    [ProcessNodes.production]: "prod",
};
exports.versionTypeMap = {
    [ProcessNodes.development]: "alpha",
    [ProcessNodes.testing]: "beta",
    [ProcessNodes.fix]: "gamma",
};
exports.versionMap = {
    [ProcessNodes.development]: "alphaVersion",
    [ProcessNodes.testing]: "betaVersion",
    [ProcessNodes.fix]: "gammaVersion",
};
exports.staticMap = {
    0: "//dev.static.xyb2b.com.cn",
    1: "//test.static.xyb2b.com.cn",
    2: "//fix.static.xyb2b.com.cn",
    3: "//static.xyb2b.com",
};
exports.ProcessMap = {
    0: "devVersion",
    1: "testVersion",
    2: "fixVersion",
    3: "releaseVersion",
};
class CreateProjectDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "hello", title: "项目中文名" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "zhName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "hello", title: "项目中文名" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "usName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "我是项目描述" }),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "desc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ["weapp", "web"] }),
    __metadata("design:type", Array)
], CreateProjectDto.prototype, "projectTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 685 }),
    __metadata("design:type", Number)
], CreateProjectDto.prototype, "gitProjectId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "//cdn.com" }),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "cdnUrl", void 0);
exports.CreateProjectDto = CreateProjectDto;
class addMaterialDto extends CreateProjectDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: [physical_mysql_entity_1.MATERIAL_TYPE.npm], enum: physical_mysql_entity_1.MATERIAL_TYPE }),
    __metadata("design:type", Array)
], addMaterialDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 685 }),
    __metadata("design:type", Number)
], addMaterialDto.prototype, "groupId", void 0);
exports.addMaterialDto = addMaterialDto;
class searchMaterialDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "11" }),
    __metadata("design:type", String)
], searchMaterialDto.prototype, "groupId", void 0);
exports.searchMaterialDto = searchMaterialDto;
class searchMaterialByIdsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "[11]" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], searchMaterialByIdsDto.prototype, "groupIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "11", enum: ProcessNodes }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], searchMaterialByIdsDto.prototype, "env", void 0);
exports.searchMaterialByIdsDto = searchMaterialByIdsDto;
class searchMaterialDetailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "11" }),
    __metadata("design:type", String)
], searchMaterialDetailDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "11" }),
    __metadata("design:type", String)
], searchMaterialDetailDto.prototype, "projectId", void 0);
exports.searchMaterialDetailDto = searchMaterialDetailDto;
class editMaterialDetailDto extends addMaterialDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "11" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], editMaterialDetailDto.prototype, "id", void 0);
exports.editMaterialDetailDto = editMaterialDetailDto;
class PublishDto extends searchMaterialDetailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ProcessNodes.development,
        enum: ProcessNodes,
    }),
    (0, class_validator_1.IsEnum)(ProcessNodes),
    __metadata("design:type", Number)
], PublishDto.prototype, "environment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: "是否使用缓存" }),
    __metadata("design:type", Boolean)
], PublishDto.prototype, "cache", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "描述", description: "项目描述" }),
    __metadata("design:type", String)
], PublishDto.prototype, "desc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '["npm"]', description: "项目类型" }),
    __metadata("design:type", Array)
], PublishDto.prototype, "projectTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "0.0.1", description: "版本号" }),
    __metadata("design:type", String)
], PublishDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "dev", description: "版本号" }),
    __metadata("design:type", String)
], PublishDto.prototype, "branch", void 0);
exports.PublishDto = PublishDto;
//# sourceMappingURL=physical.dto.js.map