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
exports.MaterialConfig = exports.MATERIAL_TYPE = void 0;
const typeorm_1 = require("typeorm");
const physical_dto_1 = require("../physical/physical.dto");
var MATERIAL_TYPE;
(function (MATERIAL_TYPE) {
    MATERIAL_TYPE[MATERIAL_TYPE["cdn"] = 0] = "cdn";
    MATERIAL_TYPE[MATERIAL_TYPE["npm"] = 1] = "npm";
    MATERIAL_TYPE[MATERIAL_TYPE["code"] = 2] = "code";
})(MATERIAL_TYPE = exports.MATERIAL_TYPE || (exports.MATERIAL_TYPE = {}));
let MaterialConfig = class MaterialConfig {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MaterialConfig.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MaterialConfig.prototype, "materialId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MaterialConfig.prototype, "env", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MaterialConfig.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-json" }),
    __metadata("design:type", String)
], MaterialConfig.prototype, "contain", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MaterialConfig.prototype, "cdn", void 0);
MaterialConfig = __decorate([
    (0, typeorm_1.Entity)()
], MaterialConfig);
exports.MaterialConfig = MaterialConfig;
//# sourceMappingURL=materialConfig.mysql.entity.js.map