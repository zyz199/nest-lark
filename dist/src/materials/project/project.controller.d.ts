import { AddProjectDto } from './project.dto';
import { ProjectService } from './project.service';
export declare class ProjectController {
    private projectService;
    constructor(projectService: ProjectService);
    create(addProjectDto: AddProjectDto, user: Payload): Promise<any>;
    getList(): Promise<import("./project.mysql.entity").Project[]>;
    getDetail(id: string): Promise<import("./project.mysql.entity").Project>;
}
