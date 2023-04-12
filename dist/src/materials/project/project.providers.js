"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectProviders = void 0;
const project_mysql_entity_1 = require("./project.mysql.entity");
exports.projectProviders = [
    {
        provide: "PROJECT_REPOSITORY",
        useFactory: async (AppDataSource) => await AppDataSource.getRepository(project_mysql_entity_1.Project),
        inject: ["MONGODB_DATA_SOURCE"],
    },
];
//# sourceMappingURL=project.providers.js.map