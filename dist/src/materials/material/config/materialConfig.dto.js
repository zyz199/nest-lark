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
exports.searchMaterialConfigDto = exports.addMaterialConfigDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const physical_dto_1 = require("../physical/physical.dto");
class addMaterialConfigDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '11' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addMaterialConfigDto.prototype, "materialId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '11' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addMaterialConfigDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '11', enum: physical_dto_1.ProcessNodes }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], addMaterialConfigDto.prototype, "env", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ss' }),
    __metadata("design:type", String)
], addMaterialConfigDto.prototype, "contain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ss' }),
    __metadata("design:type", String)
], addMaterialConfigDto.prototype, "cdn", void 0);
exports.addMaterialConfigDto = addMaterialConfigDto;
class searchMaterialConfigDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '11' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], searchMaterialConfigDto.prototype, "materialId", void 0);
exports.searchMaterialConfigDto = searchMaterialConfigDto;
//# sourceMappingURL=materialConfig.dto.js.map