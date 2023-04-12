"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialProviders = void 0;
const materialConfig_mysql_entity_1 = require("./config/materialConfig.mysql.entity");
const physical_mysql_entity_1 = require("./physical/physical.mysql.entity");
const virtual_mysql_entity_1 = require("./virtual/virtual.mysql.entity");
exports.MaterialProviders = [
    {
        provide: "PHYSICAL_MATERIAL_REPOSITORY",
        useFactory: async (AppDataSource) => await AppDataSource.getRepository(physical_mysql_entity_1.PhysicalMaterial),
        inject: ["MONGODB_DATA_SOURCE"],
    },
    {
        provide: "VIRTUAL_MATERIAL_REPOSITORY",
        useFactory: async (AppDataSource) => await AppDataSource.getRepository(virtual_mysql_entity_1.VirtualMaterial),
        inject: ["MONGODB_DATA_SOURCE"],
    },
    {
        provide: "MATERIAL_CONFIG_REPOSITORY",
        useFactory: async (AppDataSource) => await AppDataSource.getRepository(materialConfig_mysql_entity_1.MaterialConfig),
        inject: ["MONGODB_DATA_SOURCE"],
    },
];
//# sourceMappingURL=material.providers.js.map