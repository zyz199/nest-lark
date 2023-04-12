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
exports.addPageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const page_mysql_entity_1 = require("./page.mysql.entity");
class addPageDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "6263f15f6d160033b35061d7" }),
    __metadata("design:type", String)
], addPageDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "/home" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addPageDto.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "website" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addPageDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: page_mysql_entity_1.PAGE_TYPE.csr, enum: page_mysql_entity_1.PAGE_TYPE }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], addPageDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: page_mysql_entity_1.DEVICE_TYPE.pc, enum: page_mysql_entity_1.DEVICE_TYPE }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], addPageDto.prototype, "device", void 0);
exports.addPageDto = addPageDto;
//# sourceMappingURL=page.dto.js.map