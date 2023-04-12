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
exports.MonorepoGroup = void 0;
const typeorm_1 = require("typeorm");
let MonorepoGroup = class MonorepoGroup {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", typeorm_1.ObjectID)
], MonorepoGroup.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MonorepoGroup.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MonorepoGroup.prototype, "projectId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MonorepoGroup.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MonorepoGroup.prototype, "devVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MonorepoGroup.prototype, "testVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MonorepoGroup.prototype, "fixVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MonorepoGroup.prototype, "releaseVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MonorepoGroup.prototype, "alphaVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MonorepoGroup.prototype, "betaVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MonorepoGroup.prototype, "gammaVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MonorepoGroup.prototype, "currentVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MonorepoGroup.prototype, "lastVersion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], MonorepoGroup.prototype, "createDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], MonorepoGroup.prototype, "updateDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], MonorepoGroup.prototype, "updateUser", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MonorepoGroup.prototype, "creatorName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MonorepoGroup.prototype, "creatorId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MonorepoGroup.prototype, "status", void 0);
MonorepoGroup = __decorate([
    (0, typeorm_1.Entity)()
], MonorepoGroup);
exports.MonorepoGroup = MonorepoGroup;
//# sourceMappingURL=monorepoGroup.mysql.entity.js.map