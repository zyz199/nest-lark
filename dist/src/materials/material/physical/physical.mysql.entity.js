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
exports.PhysicalMaterial = exports.MATERIAL_TYPE = void 0;
const typeorm_1 = require("typeorm");
var MATERIAL_TYPE;
(function (MATERIAL_TYPE) {
    MATERIAL_TYPE[MATERIAL_TYPE["cdn"] = 0] = "cdn";
    MATERIAL_TYPE[MATERIAL_TYPE["npm"] = 1] = "npm";
    MATERIAL_TYPE[MATERIAL_TYPE["code"] = 2] = "code";
})(MATERIAL_TYPE = exports.MATERIAL_TYPE || (exports.MATERIAL_TYPE = {}));
let PhysicalMaterial = class PhysicalMaterial {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", typeorm_1.ObjectID)
], PhysicalMaterial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PhysicalMaterial.prototype, "groupId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PhysicalMaterial.prototype, "projectId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PhysicalMaterial.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PhysicalMaterial.prototype, "devVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PhysicalMaterial.prototype, "testVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PhysicalMaterial.prototype, "fixVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PhysicalMaterial.prototype, "releaseVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PhysicalMaterial.prototype, "alphaVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PhysicalMaterial.prototype, "betaVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PhysicalMaterial.prototype, "gammaVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PhysicalMaterial.prototype, "currentVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PhysicalMaterial.prototype, "lastVersion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], PhysicalMaterial.prototype, "createDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], PhysicalMaterial.prototype, "updateDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], PhysicalMaterial.prototype, "updateUser", void 0);
PhysicalMaterial = __decorate([
    (0, typeorm_1.Entity)()
], PhysicalMaterial);
exports.PhysicalMaterial = PhysicalMaterial;
//# sourceMappingURL=physical.mysql.entity.js.map