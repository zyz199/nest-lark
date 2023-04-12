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
exports.AddProjectDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AddProjectDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '6263f15f6d160033b35061d7', description: '项目id' }),
    __metadata("design:type", String)
], AddProjectDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '测试项目', description: '中文名' }),
    __metadata("design:type", String)
], AddProjectDto.prototype, "zhName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test', description: '英文名' }),
    __metadata("design:type", String)
], AddProjectDto.prototype, "enName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '测试', description: '项目描述' }),
    __metadata("design:type", String)
], AddProjectDto.prototype, "desc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cdn', description: '项目类型' }),
    __metadata("design:type", Array)
], AddProjectDto.prototype, "projectTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'git 仓库 id' }),
    __metadata("design:type", Number)
], AddProjectDto.prototype, "gitProjectId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'git 仓库 group name' }),
    __metadata("design:type", String)
], AddProjectDto.prototype, "gitNamespace", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'git 仓库 地址' }),
    __metadata("design:type", String)
], AddProjectDto.prototype, "gitProjectUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'git 仓库项目名称' }),
    __metadata("design:type", String)
], AddProjectDto.prototype, "gitProjectName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'git 仓库项目描述' }),
    __metadata("design:type", String)
], AddProjectDto.prototype, "gitProjectDesc", void 0);
exports.AddProjectDto = AddProjectDto;
//# sourceMappingURL=project.dto.js.map