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
exports.PhysicalMaterialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let PhysicalMaterialService = class PhysicalMaterialService {
    constructor(PhysicalMaterialRepository) {
        this.PhysicalMaterialRepository = PhysicalMaterialRepository;
    }
    save(PhysicalMaterial) {
        return this.PhysicalMaterialRepository.save(PhysicalMaterial);
    }
    findOne(id) {
        return this.PhysicalMaterialRepository.findOne(id);
    }
    findOneByProjectId(projectId) {
        return this.PhysicalMaterialRepository.findOne({
            where: {
                projectId,
            },
        });
    }
    getList(params) {
        return this.PhysicalMaterialRepository.find(params);
    }
    updateOne(id, params) {
        return this.PhysicalMaterialRepository.findOneAndUpdate({ _id: new typeorm_1.ObjectID(id) }, { $set: Object.assign({}, params) }, { upsert: true });
    }
};
PhysicalMaterialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("PHYSICAL_MATERIAL_REPOSITORY")),
    __metadata("design:paramtypes", [typeorm_1.MongoRepository])
], PhysicalMaterialService);
exports.PhysicalMaterialService = PhysicalMaterialService;
//# sourceMappingURL=physical.service.js.map