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
exports.Privilege = exports.Action = exports.PrivilegeStatus = void 0;
const typeorm_1 = require("typeorm");
var PrivilegeStatus;
(function (PrivilegeStatus) {
    PrivilegeStatus[PrivilegeStatus["DENY"] = 0] = "DENY";
    PrivilegeStatus[PrivilegeStatus["ALLOW"] = 1] = "ALLOW";
    PrivilegeStatus[PrivilegeStatus["NOT_SET"] = 2] = "NOT_SET";
})(PrivilegeStatus = exports.PrivilegeStatus || (exports.PrivilegeStatus = {}));
var Action;
(function (Action) {
    Action["Manage"] = "manage";
    Action["Create"] = "create";
    Action["Read"] = "read";
    Action["Update"] = "update";
    Action["Delete"] = "delete";
})(Action = exports.Action || (exports.Action = {}));
let Privilege = class Privilege {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Privilege.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], Privilege.prototype, "systemId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Privilege.prototype, "resourceKey", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Privilege.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', default: null }),
    __metadata("design:type", String)
], Privilege.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Privilege.prototype, "action", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: PrivilegeStatus.ALLOW }),
    __metadata("design:type", Number)
], Privilege.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], Privilege.prototype, "createTime", void 0);
Privilege = __decorate([
    (0, typeorm_1.Entity)()
], Privilege);
exports.Privilege = Privilege;
//# sourceMappingURL=privilege.mysql.entity.js.map