"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageProviders = void 0;
const page_mysql_entity_1 = require("./page.mysql.entity");
const pageConfig_mysql_entity_1 = require("./pageConfig/pageConfig.mysql.entity");
const deployConfig_mysql_entity_1 = require("./deployConfig/deployConfig.mysql.entity");
exports.PageProviders = [
    {
        provide: "PAGE_REPOSITORY",
        useFactory: async (AppDataSource) => await AppDataSource.getRepository(page_mysql_entity_1.Page),
        inject: ["MONGODB_DATA_SOURCE"],
    },
    {
        provide: "PAGE_CONFIG_REPOSITORY",
        useFactory: async (AppDataSource) => await AppDataSource.getRepository(pageConfig_mysql_entity_1.PageConfig),
        inject: ["MONGODB_DATA_SOURCE"],
    },
    {
        provide: "DEPlOY_CONFIG_REPOSITORY",
        useFactory: async (AppDataSource) => await AppDataSource.getRepository(deployConfig_mysql_entity_1.DeployTestConfig),
        inject: ["MONGODB_DATA_SOURCE"],
    },
];
//# sourceMappingURL=page.providers.js.map