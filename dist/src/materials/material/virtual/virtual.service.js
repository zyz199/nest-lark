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
exports.VirtualMaterialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let VirtualMaterialService = class VirtualMaterialService {
    constructor(materialRepository) {
        this.materialRepository = materialRepository;
    }
    save(material) {
        return this.materialRepository.save(material);
    }
    findOne(id) {
        return this.materialRepository.findOne(id);
    }
    getList(params) {
        return this.materialRepository.find(params);
    }
    updateOne(id, params) {
        return this.materialRepository.findOneAndUpdate({ _id: new typeorm_1.ObjectID(id) }, { $set: Object.assign({}, params) }, { upsert: true });
    }
};
VirtualMaterialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("VIRTUAL_MATERIAL_REPOSITORY")),
    __metadata("design:paramtypes", [typeorm_1.MongoRepository])
], VirtualMaterialService);
exports.VirtualMaterialService = VirtualMaterialService;
//# sourceMappingURL=virtual.service.js.map