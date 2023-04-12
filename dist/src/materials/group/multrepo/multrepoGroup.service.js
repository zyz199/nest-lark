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
exports.MultrepoGroupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let MultrepoGroupService = class MultrepoGroupService {
    constructor(groupRepository) {
        this.groupRepository = groupRepository;
    }
    save(group) {
        return this.groupRepository.save(group);
    }
    getList(params) {
        return this.groupRepository.find(params);
    }
    getListByParams(params) {
        return this.groupRepository.find({ where: Object.assign({}, params) });
    }
    getListByIds(ids) {
        return this.groupRepository.find({
            where: {
                _id: {
                    $in: ids.map((id) => new typeorm_1.ObjectID(id)),
                },
            },
        });
    }
    del(id) {
        this.groupRepository.delete(new typeorm_1.ObjectID(id));
    }
};
MultrepoGroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("MULTREPO_GROUP_REPOSITORY")),
    __metadata("design:paramtypes", [typeorm_1.MongoRepository])
], MultrepoGroupService);
exports.MultrepoGroupService = MultrepoGroupService;
//# sourceMappingURL=multrepoGroup.service.js.map