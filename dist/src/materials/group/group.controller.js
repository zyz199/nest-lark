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
exports.GroupController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const helper_1 = require("../../helper");
const monorepoGroup_service_1 = require("./monorepo/monorepoGroup.service");
const multrepoGroup_service_1 = require("./multrepo/multrepoGroup.service");
const task_service_1 = require("../task/task.service");
const project_service_1 = require("../project/project.service");
const multrepoGroup_dto_1 = require("./multrepo/multrepoGroup.dto");
const monorepoGroup_dto_1 = require("./monorepo/monorepoGroup.dto");
const business_exception_1 = require("../../common/exceptions/business.exception");
const task_mysql_entity_1 = require("../task/task.mysql.entity");
const physical_dto_1 = require("../material/physical/physical.dto");
let GroupController = class GroupController {
    constructor(monorepoGroupService, multrepoGroupService, taskService, projectService) {
        this.monorepoGroupService = monorepoGroupService;
        this.multrepoGroupService = multrepoGroupService;
        this.taskService = taskService;
        this.projectService = projectService;
    }
    multrepoSave(params, user) {
        return this.multrepoGroupService.save(Object.assign(Object.assign({}, params), { creatorName: user.username, creatorId: user.userId }));
    }
    async monorepoSave(params, user) {
        const { type, bizId, name, bizTitle } = params, rest = __rest(params, ["type", "bizId", "name", "bizTitle"]);
        const project = await this.projectService.saveAndUpdate({
            createProjectDto: rest,
            user,
        });
        if (project.status === "error") {
            throw new business_exception_1.BusinessException("该仓库已被绑定");
        }
        return this.monorepoGroupService.save(Object.assign(Object.assign({}, params), { creatorName: user.username, creatorId: user.userId, projectId: project.id }));
    }
    async publish(publishDto, user) {
        const { id, branch, version, environment, desc } = publishDto;
        const material = await this.monorepoGroupService.findOne(id);
        const project = await this.projectService.findOne({
            id: material.projectId,
        });
        const projectType = project.projectTypes.length > 1 ? "cnpm" : project.projectTypes[0];
        let deployVersion = version;
        let deployNum = 1;
        if (environment !== physical_dto_1.ProcessNodes.production) {
            if (version !== material.currentVersion ||
                !material[physical_dto_1.versionMap[environment]]) {
                deployVersion = `${deployVersion}-${physical_dto_1.versionTypeMap[environment]}.1`;
            }
            else {
                deployVersion = `${deployVersion}-${physical_dto_1.versionTypeMap[environment]}.${material[physical_dto_1.versionMap[environment]] + 1}`;
                deployNum = material[physical_dto_1.versionMap[environment]] + 1;
            }
        }
        const task = await this.taskService.save({
            projectId: project.id,
            branch,
            groupId: String(material.id),
            status: task_mysql_entity_1.PublishStatus.unpublished,
            env: environment,
            projectType,
            creatorName: user.name,
            creatorId: user.userId,
            desc,
            deployNum,
            deployVersion,
            version,
            currentVersion: material.currentVersion,
        });
        return task;
    }
    async getList() {
        const multrepo = await this.multrepoGroupService.getListByParams({});
        const monorepo = await this.monorepoGroupService.getListByParams({});
        return [...multrepo, ...monorepo];
    }
    async getMonorepoGroupDetail(params) {
        const monorepo = await this.monorepoGroupService.findOne(params.id);
        const project = await this.projectService.findOne(monorepo.projectId);
        return Object.assign(Object.assign({}, project), monorepo);
    }
    del(params) {
        return this.multrepoGroupService.del(params.id);
    }
};
__decorate([
    (0, common_1.Post)("save"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, helper_1.PayloadUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [multrepoGroup_dto_1.addGroupDto, Object]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "multrepoSave", null);
__decorate([
    (0, common_1.Post)("monorepoSave"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, helper_1.PayloadUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [monorepoGroup_dto_1.addMonorepoGroupDto, Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "monorepoSave", null);
__decorate([
    (0, common_1.Post)("publish"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, helper_1.PayloadUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [physical_dto_1.PublishDto, Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "publish", null);
__decorate([
    (0, common_1.Post)("getList"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "getList", null);
__decorate([
    (0, common_1.Post)("getMonorepoDetail"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [multrepoGroup_dto_1.getGroupDto]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "getMonorepoGroupDetail", null);
__decorate([
    (0, common_1.Post)("del"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [multrepoGroup_dto_1.getGroupDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "del", null);
GroupController = __decorate([
    (0, swagger_1.ApiTags)("物料库配置"),
    (0, common_1.Controller)("group"),
    __metadata("design:paramtypes", [monorepoGroup_service_1.MonorepoGroupService,
        multrepoGroup_service_1.MultrepoGroupService,
        task_service_1.TaskService,
        project_service_1.ProjectService])
], GroupController);
exports.GroupController = GroupController;
//# sourceMappingURL=group.controller.js.map