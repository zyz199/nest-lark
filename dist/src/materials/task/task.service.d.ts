import { Pagination } from "nestjs-typeorm-paginate";
import { MongoRepository } from "typeorm";
import { SearchConditionDto } from "./task.dto";
import { Task } from "./task.mysql.entity";
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: MongoRepository<Task>);
    save(task: Task): Promise<Task>;
    updateById(id: any, task: Task): Promise<import("typeorm").FindAndModifyWriteOpResultObject>;
    findById(id: any): Promise<Task>;
    listByIds(ids: number[], select: (keyof Task)[]): Promise<Task[]>;
    paginate(searchCondition: SearchConditionDto, page: PaginationParams): Promise<Pagination<Task, CustomPaginationMeta>>;
}
