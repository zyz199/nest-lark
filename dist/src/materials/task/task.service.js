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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const helper_1 = require("../../helper");
const typeorm_1 = require("typeorm");
let TaskService = class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    save(task) {
        return this.taskRepository.save(task);
    }
    updateById(id, task) {
        return this.taskRepository.findOneAndUpdate({ _id: new typeorm_1.ObjectID(id) }, { $set: Object.assign({}, task) }, { upsert: true });
    }
    findById(id) {
        return this.taskRepository.findOne(id);
    }
    listByIds(ids, select) {
        return this.taskRepository.find({
            where: { id: (0, typeorm_1.In)(ids) },
            select,
        });
    }
    paginate(searchCondition, page) {
        const queryBuilder = this.taskRepository.createQueryBuilder("task");
        queryBuilder.select([
            "task.id",
            "task.branch",
            "task.env",
            "task.creatorId",
            "task.creatorName",
            "task.status",
            "task.startTime",
            "task.projectType",
        ]);
        if (typeof searchCondition.projectId !== "undefined") {
            queryBuilder.where("task.projectId = :id", {
                id: searchCondition.projectId,
            });
        }
        if (typeof searchCondition.iterationId !== "undefined") {
            queryBuilder.andWhere("task.iterationId = :id", {
                id: searchCondition.iterationId,
            });
        }
        if (typeof searchCondition.processId !== "undefined") {
            queryBuilder.andWhere("task.processId = :id", {
                id: searchCondition.processId,
            });
        }
        if (typeof searchCondition.status !== "undefined") {
            queryBuilder.andWhere(`task.status = :status`, {
                status: searchCondition.status,
            });
        }
        queryBuilder.orderBy("start_time", "DESC");
        return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, (0, helper_1.getPaginationOptions)(page));
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("TASK_REPOSITORY")),
    __metadata("design:paramtypes", [typeorm_1.MongoRepository])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map