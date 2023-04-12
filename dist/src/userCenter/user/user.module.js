"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const user_providers_1 = require("./user.providers");
const database_module_1 = require("../../common/database/database.module");
const role_privilege_module_1 = require("../role-privilege/role-privilege.module");
const user_role_module_1 = require("../user-role/user-role.module");
const role_module_1 = require("../role/role.module");
const privilege_module_1 = require("../privilege/privilege.module");
const feishu_service_1 = require("./feishu/feishu.service");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_controller_1.UserController],
        providers: [...user_providers_1.UserProviders, user_service_1.UserService, feishu_service_1.FeishuService],
        imports: [
            (0, common_1.forwardRef)(() => database_module_1.DatabaseModule),
            role_privilege_module_1.RolePrivilegeModule,
            user_role_module_1.UserRoleModule,
            role_module_1.RoleModule,
            privilege_module_1.PrivilegeModule
        ],
        exports: [user_service_1.UserService, feishu_service_1.FeishuService],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map