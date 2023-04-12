import { MonorepoGroupService } from "./monorepo/monorepoGroup.service";
import { MultrepoGroupService } from "./multrepo/multrepoGroup.service";
import { TaskService } from "../task/task.service";
import { ProjectService } from "../project/project.service";
import { addGroupDto, getGroupDto } from "./multrepo/multrepoGroup.dto";
import { addMonorepoGroupDto } from "./monorepo/monorepoGroup.dto";
import { PublishDto } from "../material/physical/physical.dto";
export declare class GroupController {
    private monorepoGroupService;
    private multrepoGroupService;
    private taskService;
    private projectService;
    constructor(monorepoGroupService: MonorepoGroupService, multrepoGroupService: MultrepoGroupService, taskService: TaskService, projectService: ProjectService);
    multrepoSave(params: addGroupDto, user: Payload): Promise<any>;
    monorepoSave(params: addMonorepoGroupDto, user: Payload): Promise<any>;
    publish(publishDto: PublishDto, user: Payload): Promise<import("../task/task.mysql.entity").Task>;
    getList(): Promise<(import("./multrepo/multrepoGroup.mysql.entity").MultrepoGroup | import("./monorepo/monorepoGroup.mysql.entity").MonorepoGroup)[]>;
    getMonorepoGroupDetail(params: getGroupDto): Promise<any>;
    del(params: getGroupDto): void;
}
