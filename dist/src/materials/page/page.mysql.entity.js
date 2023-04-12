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
exports.Page = exports.STATUS_TYPE = exports.DEVICE_TYPE = exports.PAGE_TYPE = void 0;
const typeorm_1 = require("typeorm");
var PAGE_TYPE;
(function (PAGE_TYPE) {
    PAGE_TYPE[PAGE_TYPE["csr"] = 0] = "csr";
    PAGE_TYPE[PAGE_TYPE["ssr"] = 1] = "ssr";
})(PAGE_TYPE = exports.PAGE_TYPE || (exports.PAGE_TYPE = {}));
var DEVICE_TYPE;
(function (DEVICE_TYPE) {
    DEVICE_TYPE[DEVICE_TYPE["pc"] = 0] = "pc";
    DEVICE_TYPE[DEVICE_TYPE["mobile"] = 1] = "mobile";
    DEVICE_TYPE[DEVICE_TYPE["weapp"] = 2] = "weapp";
})(DEVICE_TYPE = exports.DEVICE_TYPE || (exports.DEVICE_TYPE = {}));
var STATUS_TYPE;
(function (STATUS_TYPE) {
    STATUS_TYPE[STATUS_TYPE["activated"] = 0] = "activated";
    STATUS_TYPE[STATUS_TYPE["inactive"] = 1] = "inactive";
    STATUS_TYPE[STATUS_TYPE["deleted"] = 2] = "deleted";
})(STATUS_TYPE = exports.STATUS_TYPE || (exports.STATUS_TYPE = {}));
let Page = class Page {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Page.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Page.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Page.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Page.prototype, "currentConfigId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Page.prototype, "deployConfigId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Page.prototype, "currentVersion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Page.prototype, "deployVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Page.prototype, "templateId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Page.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Page.prototype, "device", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: STATUS_TYPE.inactive }),
    __metadata("design:type", Number)
], Page.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], Page.prototype, "createDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], Page.prototype, "updateDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ default: null }),
    __metadata("design:type", String)
], Page.prototype, "appointmentUp", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ default: null }),
    __metadata("design:type", String)
], Page.prototype, "appointmentDown", void 0);
Page = __decorate([
    (0, typeorm_1.Entity)()
], Page);
exports.Page = Page;
//# sourceMappingURL=page.mysql.entity.js.map