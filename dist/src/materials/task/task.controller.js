"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const helper_1 = require("../../helper");
const task_service_1 = require("./task.service");
const task_mysql_entity_1 = require("./task.mysql.entity");
const task_dto_1 = require("./task.dto");
const constants_1 = require("../../auth/constants");
const physical_dto_1 = require("../material/physical/physical.dto");
const project_service_1 = require("../project/project.service");
const physical_service_1 = require("../material/physical/physical.service");
const materialConfig_service_1 = require("../material/config/materialConfig.service");
const monorepoGroup_service_1 = require("../group/monorepo/monorepoGroup.service");
let TaskController = class TaskController {
    constructor(taskService, materialService, projectService, materialConfigService, monorepoGroupService) {
        this.taskService = taskService;
        this.materialService = materialService;
        this.projectService = projectService;
        this.materialConfigService = materialConfigService;
        this.monorepoGroupService = monorepoGroupService;
    }
    async updateTask(updateTaskDto, user) {
        const { id, status = task_mysql_entity_1.PublishStatus.unpublished, buildId } = updateTaskDto;
        const task = await this.taskService.findById(id);
        const numberedStatus = Number(status);
        const { id: taskId } = task, restTask = __rest(task, ["id"]);
        let material = {};
        if (task.materialId) {
            material = await this.materialService.findOne(task.materialId);
        }
        if (task.groupId) {
            material = await this.monorepoGroupService.findOne(task.groupId);
        }
        const project = await this.projectService.findOne({
            id: material.projectId,
        });
        if (numberedStatus === task_mysql_entity_1.PublishStatus.publish_success) {
            const updateConfig = {
                version: task.deployVersion,
                env: task.env,
            };
            if (project.projectTypes.indexOf("cdn") > -1) {
                updateConfig.cdn = `${physical_dto_1.staticMap[task.env]}/@xy/${project.enName}/${task.deployVersion}/static`;
            }
            const config = await this.materialConfigService.save(updateConfig);
            const changeEev = physical_dto_1.ProcessMap[task.env];
            const materialUpdate = {
                [changeEev]: String(config.id),
                currentVersion: task.version,
                lastVersion: task.env === physical_dto_1.ProcessNodes.production
                    ? task.deployVersion
                    : material.lastVersion,
            };
            physical_dto_1.versionMap[task.env] &&
                (materialUpdate[physical_dto_1.versionMap[task.env]] = task.deployNum);
            if (task.env === physical_dto_1.ProcessNodes.production) {
                materialUpdate.alphaVersion = 1;
                materialUpdate.betaVersion = 1;
                materialUpdate.gammaVersion = 1;
            }
            if (task.materialId) {
                this.materialService.updateOne(task.materialId, materialUpdate);
            }
            if (task.groupId) {
                this.monorepoGroupService.updateOne(task.groupId, materialUpdate);
            }
        }
        const updatedTask = Object.assign(Object.assign({}, restTask), { buildId });
        numberedStatus && (updatedTask.status = numberedStatus);
        updatedTask.endTime = new Date().toLocaleTimeString();
        this.taskService.updateById(taskId, updatedTask);
    }
    async getSingle(singleDto) {
        const { taskId } = singleDto;
        return await this.taskService.findById(taskId);
    }
    async listWithPagination(listWithPaginationDto) {
        const { page } = listWithPaginationDto, searchCondition = __rest(listWithPaginationDto, ["page"]);
        return await this.taskService.paginate(searchCondition, page);
    }
    rollback() {
        return null;
    }
};
__decorate([
    (0, common_1.Post)("updateTaskStatus"),
    (0, constants_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, helper_1.PayloadUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_dto_1.UpdateTaskDto, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateTask", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "获取task详情",
    }),
    (0, common_1.Post)("detail"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getSingle", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "任务列表（分页）",
    }),
    (0, common_1.Post)("list/pagination"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_dto_1.ListWithPaginationDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "listWithPagination", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "回滚",
    }),
    (0, common_1.Post)("rollback"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "rollback", null);
TaskController = __decorate([
    (0, swagger_1.ApiTags)("任务"),
    (0, common_1.Controller)("task"),
    __metadata("design:paramtypes", [task_service_1.TaskService,
        physical_service_1.PhysicalMaterialService,
        project_service_1.ProjectService,
        materialConfig_service_1.MaterialConfigService,
        monorepoGroup_service_1.MonorepoGroupService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map