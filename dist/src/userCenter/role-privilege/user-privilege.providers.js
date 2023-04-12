"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolePrivilegeProviders = void 0;
const role_privilege_mysql_entity_1 = require("./role-privilege.mysql.entity");
exports.rolePrivilegeProviders = [
    {
        provide: 'ROLE_PRIVILEGE_REPOSITORY',
        useFactory: (AppDataSource) => AppDataSource.getRepository(role_privilege_mysql_entity_1.RolePrivilege),
        inject: ['MYSQL_DATA_SOURCE'],
    },
];
//# sourceMappingURL=user-privilege.providers.js.map