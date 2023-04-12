"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../common/database/database.module");
const task_module_1 = require("../task/task.module");
const materialConfig_service_1 = require("./config/materialConfig.service");
const material_providers_1 = require("./material.providers");
const physical_service_1 = require("./physical/physical.service");
const virtual_service_1 = require("./virtual/virtual.service");
let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            (0, common_1.forwardRef)(() => task_module_1.TaskModule),
        ],
        controllers: [],
        providers: [...material_providers_1.MaterialProviders, physical_service_1.PhysicalMaterialService, virtual_service_1.VirtualMaterialService, materialConfig_service_1.MaterialConfigService],
        exports: [physical_service_1.PhysicalMaterialService, virtual_service_1.VirtualMaterialService, materialConfig_service_1.MaterialConfigService]
    })
], MaterialModule);
exports.MaterialModule = MaterialModule;
//# sourceMappingURL=material.module.js.map