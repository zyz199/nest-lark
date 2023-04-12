"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleProviders = void 0;
const user_role_mysql_entity_1 = require("./user-role.mysql.entity");
exports.UserRoleProviders = [
    {
        provide: "USER_ROLE_REPOSITORY",
        useFactory: (AppDataSource) => AppDataSource.getRepository(user_role_mysql_entity_1.UserRole),
        inject: ["MYSQL_DATA_SOURCE"],
    },
];
//# sourceMappingURL=user-role.providers.js.map