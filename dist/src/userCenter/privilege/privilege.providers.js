"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivilegeProviders = void 0;
const privilege_mysql_entity_1 = require("./privilege.mysql.entity");
exports.PrivilegeProviders = [
    {
        provide: "PRIVILEGE_REPOSITORY",
        useFactory: (AppDataSource) => AppDataSource.getRepository(privilege_mysql_entity_1.Privilege),
        inject: ["MYSQL_DATA_SOURCE"],
    },
];
//# sourceMappingURL=privilege.providers.js.map