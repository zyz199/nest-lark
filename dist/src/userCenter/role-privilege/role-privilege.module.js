"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolePrivilegeModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../common/database/database.module");
const role_privilege_service_1 = require("./role-privilege.service");
const user_privilege_providers_1 = require("./user-privilege.providers");
let RolePrivilegeModule = class RolePrivilegeModule {
};
RolePrivilegeModule = __decorate([
    (0, common_1.Module)({
        providers: [role_privilege_service_1.RolePrivilegeService, ...user_privilege_providers_1.rolePrivilegeProviders],
        imports: [database_module_1.DatabaseModule],
        exports: [role_privilege_service_1.RolePrivilegeService],
    })
], RolePrivilegeModule);
exports.RolePrivilegeModule = RolePrivilegeModule;
//# sourceMappingURL=role-privilege.module.js.map