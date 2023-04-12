"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialsModule = void 0;
const common_1 = require("@nestjs/common");
const group_module_1 = require("./group/group.module");
const material_module_1 = require("./material/material.module");
const project_module_1 = require("./project/project.module");
const task_module_1 = require("./task/task.module");
let materialsModule = class materialsModule {
};
materialsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            group_module_1.GroupModule,
            task_module_1.TaskModule,
            material_module_1.MaterialModule,
            project_module_1.ProjectModule
        ],
    })
], materialsModule);
exports.materialsModule = materialsModule;
//# sourceMappingURL=materials.module.js.map