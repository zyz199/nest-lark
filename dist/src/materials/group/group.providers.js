"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupProviders = void 0;
const code_mysql_entity_1 = require("./code/code.mysql.entity");
const monorepoGroup_mysql_entity_1 = require("./monorepo/monorepoGroup.mysql.entity");
const multrepoGroup_mysql_entity_1 = require("./multrepo/multrepoGroup.mysql.entity");
exports.GroupProviders = [
    {
        provide: "MULTREPO_GROUP_REPOSITORY",
        useFactory: async (AppDataSource) => await AppDataSource.getRepository(multrepoGroup_mysql_entity_1.MultrepoGroup),
        inject: ["MONGODB_DATA_SOURCE"],
    },
    {
        provide: "MONOREPO_GROUP_REPOSITORY",
        useFactory: async (AppDataSource) => await AppDataSource.getRepository(monorepoGroup_mysql_entity_1.MonorepoGroup),
        inject: ["MONGODB_DATA_SOURCE"],
    },
    {
        provide: "CODE_GROUP_REPOSITORY",
        useFactory: async (AppDataSource) => await AppDataSource.getRepository(code_mysql_entity_1.CodeGroup),
        inject: ["MONGODB_DATA_SOURCE"],
    },
];
//# sourceMappingURL=group.providers.js.map