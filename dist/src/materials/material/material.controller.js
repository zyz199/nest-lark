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
exports.MaterialController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const helper_1 = require("../../helper");
const physical_dto_1 = require("./physical/physical.dto");
const multrepoGroup_service_1 = require("../group/multrepo/multrepoGroup.service");
const materialConfig_service_1 = require("./config/materialConfig.service");
const virtual_service_1 = require("./virtual/virtual.service");
const monorepoGroup_service_1 = require("../group/monorepo/monorepoGroup.service");
const physical_dto_2 = require("./physical/physical.dto");
const constants_1 = require("../../auth/constants");
const microservices_1 = require("@nestjs/microservices");
const project_service_1 = require("../project/project.service");
const code_service_1 = require("../group/code/code.service");
const task_service_1 = require("../task/task.service");
const physical_service_1 = require("./physical/physical.service");
const task_mysql_entity_1 = require("../task/task.mysql.entity");
let MaterialController = class MaterialController {
    constructor(multrepoGroupService, projectService, groupService, monorepoGroupService, materialConfigService, VirtualMaterialService, physicalMaterialService, taskService) {
        this.multrepoGroupService = multrepoGroupService;
        this.projectService = projectService;
        this.groupService = groupService;
        this.monorepoGroupService = monorepoGroupService;
        this.materialConfigService = materialConfigService;
        this.VirtualMaterialService = VirtualMaterialService;
        this.physicalMaterialService = physicalMaterialService;
        this.taskService = taskService;
    }
    async save(params, user) {
        const { type, groupId } = params, rest = __rest(params, ["type", "groupId"]);
        const project = await this.projectService.saveAndUpdate({
            createProjectDto: rest,
            user,
        });
        return this.physicalMaterialService.save({
            type,
            groupId,
            projectId: project.id,
            updateUser: user.username,
        });
    }
    async saveVirtual(params, user) {
        return this.VirtualMaterialService.save(Object.assign(Object.assign({}, params), { updateUser: user.username }));
    }
    async editVirtual(params, user) {
        const { id } = params, res = __rest(params, ["id"]);
        return this.VirtualMaterialService.updateOne(id, res);
    }
    async edit(params, user) {
        const { id, type, groupId } = params, res = __rest(params, ["id", "type", "groupId"]);
        const material = await this.physicalMaterialService.findOne(params.id);
        const project = await this.projectService.findOne({
            id: material.projectId,
        });
        this.projectService.saveAndUpdate({
            baseInfo: Object.assign(Object.assign({}, project), res),
            projectId: material.projectId,
        });
        return this.physicalMaterialService.updateOne(id, {
            type,
            groupId,
        });
    }
    async getVirtualList(params) {
        const materialList = await this.VirtualMaterialService.getList(params);
        const monorepoGroup = await this.monorepoGroupService.findOne(params.groupId);
        for (let [idx, material] of materialList.entries()) {
            const project = await this.projectService.findOne({
                id: monorepoGroup.projectId,
            });
            materialList[idx] = Object.assign(Object.assign({}, project), material);
        }
        return materialList;
    }
    async getList(params) {
        const materialList = await this.physicalMaterialService.getList(params.groupId ? params : "");
        for (let [idx, material] of materialList.entries()) {
            const project = await this.projectService.findOne({
                id: material.projectId,
            });
            materialList[idx] = Object.assign(Object.assign({}, project), material);
        }
        return materialList;
    }
    async getListByBizIds(params) {
        const { env, groupIds } = params;
        const groupList = await this.groupService.getListByIds(groupIds);
        const changeEev = physical_dto_2.ProcessMap[env];
        for (let [gIdx, group] of groupList.entries()) {
            const materialList = await this.physicalMaterialService.getList({
                groupId: String(group.id),
            });
            for (let [idx, material] of materialList.entries()) {
                const project = await this.projectService.findOne({
                    id: material.projectId,
                });
                const config = await this.materialConfigService.findOne(material[changeEev]);
                materialList[idx] = Object.assign(Object.assign({}, project), material);
            }
            groupList[gIdx] = Object.assign(Object.assign({}, group), { materialList });
        }
        return groupList;
    }
    async getDetail(params) {
        const material = await this.physicalMaterialService.findOne(params.id);
        const project = await this.projectService.findOne({
            id: material.projectId,
        });
        return Object.assign(Object.assign({}, project), material);
    }
    getDetailMicro(projectDetailDto) {
        return this.physicalMaterialService.findOneByProjectId(projectDetailDto.projectId);
    }
    async publish(publishDto, user) {
        const { id, branch, version, environment, desc } = publishDto;
        const material = await this.physicalMaterialService.findOne(id);
        const project = await this.projectService.findOne({
            id: material.projectId,
        });
        const projectType = project.projectTypes.length > 1 ? "cnpm" : project.projectTypes[0];
        let deployVersion = version;
        let deployNum = 1;
        if (environment !== physical_dto_1.ProcessNodes.production) {
            if (version !== material.currentVersion ||
                !material[physical_dto_2.versionMap[environment]]) {
                deployVersion = `${deployVersion}-${physical_dto_2.versionTypeMap[environment]}.1`;
            }
            else {
                deployVersion = `${deployVersion}-${physical_dto_2.versionTypeMap[environment]}.${material[physical_dto_2.versionMap[environment]] + 1}`;
                deployNum = material[physical_dto_2.versionMap[environment]] + 1;
            }
        }
        const task = await this.taskService.save({
            projectId: project.id,
            branch,
            materialId: String(material.id),
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
};
__decorate([
    (0, common_1.Post)("savePhysical"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, helper_1.PayloadUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [physical_dto_1.addMaterialDto, Object]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "save", null);
__decorate([
    (0, common_1.Post)("saveVirtual"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, helper_1.PayloadUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [physical_dto_1.addMaterialDto, Object]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "saveVirtual", null);
__decorate([
    (0, common_1.Post)("editVirtual"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, helper_1.PayloadUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [physical_dto_1.editMaterialDetailDto, Object]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "editVirtual", null);
__decorate([
    (0, common_1.Post)("edit"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, helper_1.PayloadUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [physical_dto_1.editMaterialDetailDto, Object]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "edit", null);
__decorate([
    (0, common_1.Post)("getVirtualList"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [physical_dto_1.searchMaterialDto]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "getVirtualList", null);
__decorate([
    (0, common_1.Post)("getList"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [physical_dto_1.searchMaterialDto]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "getList", null);
__decorate([
    (0, common_1.Post)("getListByIds"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [physical_dto_1.searchMaterialByIdsDto]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "getListByBizIds", null);
__decorate([
    (0, common_1.Post)("getDetail"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [physical_dto_1.searchMaterialDetailDto]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "getDetail", null);
__decorate([
    (0, constants_1.Public)(),
    (0, microservices_1.MessagePattern)("material.project.getDetail"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [physical_dto_1.searchMaterialDetailDto]),
    __metadata("design:returntype", void 0)
], MaterialController.prototype, "getDetailMicro", null);
__decorate([
    (0, common_1.Post)("publish"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, helper_1.PayloadUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [physical_dto_1.PublishDto, Object]),
    __metadata("design:returntype", Promise)
], MaterialController.prototype, "publish", null);
MaterialController = __decorate([
    (0, swagger_1.ApiTags)("物料"),
    (0, common_1.Controller)("material"),
    __metadata("design:paramtypes", [multrepoGroup_service_1.MultrepoGroupService,
        project_service_1.ProjectService,
        code_service_1.CodeGroupService,
        monorepoGroup_service_1.MonorepoGroupService,
        materialConfig_service_1.MaterialConfigService,
        virtual_service_1.VirtualMaterialService,
        physical_service_1.PhysicalMaterialService,
        task_service_1.TaskService])
], MaterialController);
exports.MaterialController = MaterialController;
//# sourceMappingURL=material.controller.js.map