"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemProviders = void 0;
const system_mysql_entity_1 = require("./system.mysql.entity");
exports.systemProviders = [
    {
        provide: "SYSTEM_REPOSITORY",
        useFactory: (AppDataSource) => AppDataSource.getRepository(system_mysql_entity_1.System),
        inject: ["MYSQL_DATA_SOURCE"],
    },
];
//# sourceMappingURL=system.providers.js.map