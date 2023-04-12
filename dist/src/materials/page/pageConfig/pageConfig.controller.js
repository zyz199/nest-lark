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
exports.PageConfigController = void 0;
const common_1 = require("@nestjs/common");
const pageConfig_service_1 = require("./pageConfig.service");
const page_service_1 = require("../page.service");
const swagger_1 = require("@nestjs/swagger");
const helper_1 = require("../../../helper");
const pageConfig_dto_1 = require("./pageConfig.dto");
let PageConfigController = class PageConfigController {
    constructor(pageConfigService, pageService) {
        this.pageConfigService = pageConfigService;
        this.pageService = pageService;
    }
    async create(createPageConfigDto, user) {
        const { pageId } = createPageConfigDto;
        const pageConfig = await this.pageConfigService.create(Object.assign(Object.assign({}, createPageConfigDto), { userId: user.userId, userName: user.name }));
        this.pageService.updateOne(pageId, {
            currentConfigId: pageConfig.id
        });
        return pageConfig;
    }
    findByPageId(searchPageConfigDto) {
        return this.pageConfigService.findByPageId(searchPageConfigDto.pageId);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, helper_1.PayloadUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pageConfig_dto_1.CreatePageConfigDto, Object]),
    __metadata("design:returntype", Promise)
], PageConfigController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('findByPageId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pageConfig_dto_1.SearchPageConfigDto]),
    __metadata("design:returntype", void 0)
], PageConfigController.prototype, "findByPageId", null);
PageConfigController = __decorate([
    (0, swagger_1.ApiTags)('页面属内容配置'),
    (0, common_1.Controller)('page-config'),
    __metadata("design:paramtypes", [pageConfig_service_1.PageConfigService,
        page_service_1.PageService])
], PageConfigController);
exports.PageConfigController = PageConfigController;
//# sourceMappingURL=pageConfig.controller.js.map