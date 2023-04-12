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
exports.PageController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const page_dto_1 = require("./page.dto");
const page_service_1 = require("./page.service");
const config_1 = require("@nestjs/config");
const pageConfig_service_1 = require("./pageConfig/pageConfig.service");
const deployConfig_service_1 = require("./deployConfig/deployConfig.service");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const constants_1 = require("../../auth/constants");
const log = require('pino')({ level: 'info' });
let PageController = class PageController {
    constructor(pageService, configService, pageConfigService, deployConfigService, client) {
        this.pageService = pageService;
        this.configService = configService;
        this.pageConfigService = pageConfigService;
        this.deployConfigService = deployConfigService;
        this.client = client;
    }
    async save(params) {
        const page = await this.pageService.saveAndUpdate(params);
        return page;
    }
    async getList() {
        return this.pageService.findAll();
    }
    async deploy(params) {
        const { id } = params;
        const page = await this.pageService.findOne(id);
        const pageConfig = await this.pageConfigService.findOne(page.currentConfigId);
        const deployConfig = await this.deployConfigService.create({
            pageId: String(page.id),
            contain: pageConfig.contain
        });
        return deployConfig;
    }
    async getDetail(params) {
        const { id } = params;
        const page = await this.pageService.findOne(id);
        const pageConfig = await this.pageConfigService.findOne(page.currentConfigId);
        const deployConfig = await this.deployConfigService.findOne(page.deployConfigId);
        return Object.assign(Object.assign({}, page), { pageConfig,
            deployConfig });
    }
    async getData() {
        log.info('Doing something with package.json');
        return {
            filePath: (0, path_1.join)(process.cwd(), 'package.json')
        };
    }
    async updateOne(params) {
        const { id } = params, rest = __rest(params, ["id"]);
        const page = await this.pageService.updateOne(id, rest);
        return Object.assign(Object.assign({}, page), rest);
    }
};
__decorate([
    (0, common_1.Post)('save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_dto_1.addPageDto]),
    __metadata("design:returntype", Promise)
], PageController.prototype, "save", null);
__decorate([
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PageController.prototype, "getList", null);
__decorate([
    (0, common_1.Post)('deploy'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_dto_1.addPageDto]),
    __metadata("design:returntype", Promise)
], PageController.prototype, "deploy", null);
__decorate([
    (0, common_1.Post)('getDetail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_dto_1.addPageDto]),
    __metadata("design:returntype", Promise)
], PageController.prototype, "getDetail", null);
__decorate([
    (0, constants_1.Public)(),
    (0, common_1.Post)('getData'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PageController.prototype, "getData", null);
__decorate([
    (0, common_1.Post)('updateOne'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_dto_1.addPageDto]),
    __metadata("design:returntype", Promise)
], PageController.prototype, "updateOne", null);
PageController = __decorate([
    (0, swagger_1.ApiTags)('页面属性配置'),
    (0, common_1.Controller)('page'),
    __param(4, (0, common_1.Inject)('MATH_SERVICE')),
    __metadata("design:paramtypes", [page_service_1.PageService,
        config_1.ConfigService,
        pageConfig_service_1.PageConfigService,
        deployConfig_service_1.DeployConfigService,
        microservices_1.ClientProxy])
], PageController);
exports.PageController = PageController;
//# sourceMappingURL=page.controller.js.map