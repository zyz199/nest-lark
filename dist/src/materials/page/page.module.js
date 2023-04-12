"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../common/database/database.module");
const page_controller_1 = require("./page.controller");
const page_providers_1 = require("./page.providers");
const page_service_1 = require("./page.service");
const pageConfig_service_1 = require("./pageConfig/pageConfig.service");
const pageConfig_controller_1 = require("./pageConfig/pageConfig.controller");
const deployConfig_service_1 = require("./deployConfig/deployConfig.service");
const microservices_1 = require("@nestjs/microservices");
let PageModule = class PageModule {
};
PageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: "MATH_SERVICE",
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: "localhost",
                        port: 4000,
                    },
                },
            ]),
            database_module_1.DatabaseModule,
        ],
        controllers: [pageConfig_controller_1.PageConfigController, page_controller_1.PageController],
        providers: [
            pageConfig_service_1.PageConfigService,
            page_service_1.PageService,
            deployConfig_service_1.DeployConfigService,
            ...page_providers_1.PageProviders,
        ],
        exports: [page_service_1.PageService, deployConfig_service_1.DeployConfigService],
    })
], PageModule);
exports.PageModule = PageModule;
//# sourceMappingURL=page.module.js.map