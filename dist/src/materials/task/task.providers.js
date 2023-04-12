"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskProviders = void 0;
const task_mysql_entity_1 = require("./task.mysql.entity");
exports.TaskProviders = [
    {
        provide: "TASK_REPOSITORY",
        useFactory: async (AppDataSource) => await AppDataSource.getRepository(task_mysql_entity_1.Task),
        inject: ["MONGODB_DATA_SOURCE"],
    },
];
//# sourceMappingURL=task.providers.js.map