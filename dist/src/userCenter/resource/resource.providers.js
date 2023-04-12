"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceProviders = void 0;
const resource_mysql_entity_1 = require("./resource.mysql.entity");
exports.ResourceProviders = [
    {
        provide: 'RESOURCE_REPOSITORY',
        useFactory: (AppDataSource) => AppDataSource.getRepository(resource_mysql_entity_1.Resource),
        inject: ['MYSQL_DATA_SOURCE'],
    },
];
//# sourceMappingURL=resource.providers.js.map