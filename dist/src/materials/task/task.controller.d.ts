import { TaskService } from "./task.service";
import { Task } from "./task.mysql.entity";
import { ListWithPaginationDto, UpdateTaskDto } from "./task.dto";
import { Pagination } from "nestjs-typeorm-paginate";
import { ProjectService } from "../project/project.service";
import { PhysicalMaterialService } from "../material/physical/physical.service";
import { MaterialConfigService } from "../material/config/materialConfig.service";
import { MonorepoGroupService } from "../group/monorepo/monorepoGroup.service";
export declare class TaskController {
    private taskService;
    private materialService;
    private projectService;
    private materialConfigService;
    private monorepoGroupService;
    constructor(taskService: TaskService, materialService: PhysicalMaterialService, projectService: ProjectService, materialConfigService: MaterialConfigService, monorepoGroupService: MonorepoGroupService);
    updateTask(updateTaskDto: UpdateTaskDto, user: Payload): Promise<void>;
    getSingle(singleDto: {
        taskId: number;
    }): Promise<Task>;
    listWithPagination(listWithPaginationDto: ListWithPaginationDto): Promise<Pagination<Task, CustomPaginationMeta>>;
    rollback(): any;
}
