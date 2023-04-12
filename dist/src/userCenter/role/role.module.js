"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModule = void 0;
const common_1 = require("@nestjs/common");
const role_service_1 = require("./role.service");
const role_controller_1 = require("./role.controller");
const database_module_1 = require("../../common/database/database.module");
const role_providers_1 = require("./role.providers");
const role_privilege_module_1 = require("../role-privilege/role-privilege.module");
const privilege_module_1 = require("../privilege/privilege.module");
const system_module_1 = require("../system/system.module");
let RoleModule = class RoleModule {
};
RoleModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, role_privilege_module_1.RolePrivilegeModule, privilege_module_1.PrivilegeModule, system_module_1.SystemModule],
        providers: [role_service_1.RoleService, ...role_providers_1.RoleProviders],
        controllers: [role_controller_1.RoleController],
        exports: [role_service_1.RoleService]
    })
], RoleModule);
exports.RoleModule = RoleModule;
//# sourceMappingURL=role.module.js.map