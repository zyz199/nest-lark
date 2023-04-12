"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceModule = void 0;
const common_1 = require("@nestjs/common");
const resource_service_1 = require("./resource.service");
const resource_controller_1 = require("./resource.controller");
const database_module_1 = require("../../common/database/database.module");
const resource_providers_1 = require("./resource.providers");
let ResourceModule = class ResourceModule {
};
ResourceModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [resource_service_1.ResourceService, ...resource_providers_1.ResourceProviders],
        controllers: [resource_controller_1.ResourceController],
        exports: [resource_service_1.ResourceService]
    })
], ResourceModule);
exports.ResourceModule = ResourceModule;
//# sourceMappingURL=resource.module.js.map