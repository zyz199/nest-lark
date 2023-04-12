"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../common/database/database.module");
const group_module_1 = require("../group/group.module");
const material_module_1 = require("../material/material.module");
const project_module_1 = require("../project/project.module");
const task_controller_1 = require("./task.controller");
const task_providers_1 = require("./task.providers");
const task_service_1 = require("./task.service");
let TaskModule = class TaskModule {
};
TaskModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            project_module_1.ProjectModule,
            (0, common_1.forwardRef)(() => group_module_1.GroupModule),
            (0, common_1.forwardRef)(() => material_module_1.MaterialModule),
        ],
        controllers: [task_controller_1.TaskController],
        providers: [task_service_1.TaskService, ...task_providers_1.TaskProviders],
        exports: [task_service_1.TaskService],
    })
], TaskModule);
exports.TaskModule = TaskModule;
//# sourceMappingURL=task.module.js.map