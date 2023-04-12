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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const helper_1 = require("../../helper");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const project_dto_1 = require("./project.dto");
const project_service_1 = require("./project.service");
let ProjectController = class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
    }
    create(addProjectDto, user) {
        return this.projectService.saveAndUpdate(Object.assign(Object.assign({}, addProjectDto), { creatorId: user.userId, creatorName: user.name }));
    }
    getList() {
        return this.projectService.findAll();
    }
    getDetail(id) {
        return this.projectService.findOne(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '项目创建与更新',
    }),
    (0, common_1.Post)('createOrUpdate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, helper_1.PayloadUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [project_dto_1.AddProjectDto, Object]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '项目列表',
    }),
    (0, common_1.Post)('getList'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "getList", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '项目详情',
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "getDetail", null);
ProjectController = __decorate([
    (0, swagger_1.ApiTags)('项目'),
    (0, common_1.Controller)('project'),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectController);
exports.ProjectController = ProjectController;
//# sourceMappingURL=project.controller.js.map