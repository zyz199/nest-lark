"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../common/database/database.module");
const project_module_1 = require("../project/project.module");
const task_module_1 = require("../task/task.module");
const code_service_1 = require("./code/code.service");
const group_controller_1 = require("./group.controller");
const group_providers_1 = require("./group.providers");
const monorepoGroup_service_1 = require("./monorepo/monorepoGroup.service");
const multrepoGroup_service_1 = require("./multrepo/multrepoGroup.service");
let GroupModule = class GroupModule {
};
GroupModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, project_module_1.ProjectModule, (0, common_1.forwardRef)(() => task_module_1.TaskModule)],
        controllers: [group_controller_1.GroupController],
        providers: [
            multrepoGroup_service_1.MultrepoGroupService,
            monorepoGroup_service_1.MonorepoGroupService,
            code_service_1.CodeGroupService,
            ...group_providers_1.GroupProviders,
        ],
        exports: [multrepoGroup_service_1.MultrepoGroupService, monorepoGroup_service_1.MonorepoGroupService, code_service_1.CodeGroupService],
    })
], GroupModule);
exports.GroupModule = GroupModule;
//# sourceMappingURL=group.module.js.map