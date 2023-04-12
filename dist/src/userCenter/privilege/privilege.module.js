"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivilegeModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../common/database/database.module");
const system_module_1 = require("../system/system.module");
const resource_module_1 = require("../resource/resource.module");
const privilege_controller_1 = require("./privilege.controller");
const privilege_providers_1 = require("./privilege.providers");
const privilege_service_1 = require("./privilege.service");
let PrivilegeModule = class PrivilegeModule {
};
PrivilegeModule = __decorate([
    (0, common_1.Module)({
        controllers: [privilege_controller_1.PrivilegeController],
        providers: [privilege_service_1.PrivilegeService, ...privilege_providers_1.PrivilegeProviders],
        imports: [database_module_1.DatabaseModule, system_module_1.SystemModule, resource_module_1.ResourceModule],
        exports: [privilege_service_1.PrivilegeService],
    })
], PrivilegeModule);
exports.PrivilegeModule = PrivilegeModule;
//# sourceMappingURL=privilege.module.js.map