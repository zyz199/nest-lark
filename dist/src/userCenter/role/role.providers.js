"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleProviders = void 0;
const role_mysql_entity_1 = require("./role.mysql.entity");
exports.RoleProviders = [
    {
        provide: 'ROLE_REPOSITORY',
        useFactory: (AppDataSource) => AppDataSource.getRepository(role_mysql_entity_1.Role),
        inject: ['MYSQL_DATA_SOURCE'],
    },
];
//# sourceMappingURL=role.providers.js.map