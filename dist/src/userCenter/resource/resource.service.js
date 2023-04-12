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
exports.ResourceService = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const helper_1 = require("../../helper");
const typeorm_1 = require("typeorm");
let ResourceService = class ResourceService {
    constructor(resourceRepository) {
        this.resourceRepository = resourceRepository;
    }
    create(resource) {
        return this.resourceRepository.save(resource);
    }
    update(resource) {
        return this.resourceRepository.save(resource);
    }
    delete(id) {
        return this.resourceRepository.delete(id);
    }
    findById(id) {
        return this.resourceRepository.findOneBy(id);
    }
    findByKey(key) {
        return this.resourceRepository.findOne({
            where: {
                key
            }
        });
    }
    async paginate(searchParams, page) {
        const queryBuilder = this.resourceRepository.createQueryBuilder('resource');
        queryBuilder.orderBy('resource.createTime', 'DESC');
        if ((0, class_validator_1.isNotEmpty)(searchParams.keyword)) {
            queryBuilder.andWhere('resource.name LIKE :name', {
                name: `%${searchParams.keyword}%`,
            });
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, (0, helper_1.getPaginationOptions)(page));
    }
    listBySystemId(systemId) {
        return this.resourceRepository.find({
            where: {
                systemId
            }
        });
    }
};
ResourceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('RESOURCE_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ResourceService);
exports.ResourceService = ResourceService;
//# sourceMappingURL=resource.service.js.map