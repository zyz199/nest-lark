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
exports.QueryByEmailDto = exports.UpdateTaskDto = exports.ListWithPaginationDto = exports.SearchConditionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const type_1 = require("../../../types/type");
const task_mysql_entity_1 = require("./task.mysql.entity");
class SearchConditionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], SearchConditionDto.prototype, "projectId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], SearchConditionDto.prototype, "iterationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", String)
], SearchConditionDto.prototype, "processId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: task_mysql_entity_1.PublishStatus.publish_success, enum: task_mysql_entity_1.PublishStatus }),
    (0, class_validator_1.IsEnum)(task_mysql_entity_1.PublishStatus),
    __metadata("design:type", Number)
], SearchConditionDto.prototype, "status", void 0);
exports.SearchConditionDto = SearchConditionDto;
class ListWithPaginationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ListWithPaginationDto.prototype, "projectId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ListWithPaginationDto.prototype, "iterationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", String)
], ListWithPaginationDto.prototype, "processId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: task_mysql_entity_1.PublishStatus.publish_success, enum: task_mysql_entity_1.PublishStatus }),
    __metadata("design:type", Number)
], ListWithPaginationDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: { pageSize: 10, currentPage: 1 } }),
    __metadata("design:type", type_1.PaginationParams)
], ListWithPaginationDto.prototype, "page", void 0);
exports.ListWithPaginationDto = ListWithPaginationDto;
class UpdateTaskDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], UpdateTaskDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: task_mysql_entity_1.PublishStatus, example: task_mysql_entity_1.PublishStatus.publish_success }),
    __metadata("design:type", Number)
], UpdateTaskDto.prototype, "status", void 0);
exports.UpdateTaskDto = UpdateTaskDto;
class QueryByEmailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: ["cookieboty@qq.com"] }),
    __metadata("design:type", Array)
], QueryByEmailDto.prototype, "emails", void 0);
exports.QueryByEmailDto = QueryByEmailDto;
//# sourceMappingURL=task.dto.js.map