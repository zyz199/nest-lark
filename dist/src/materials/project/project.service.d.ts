import { MongoRepository } from "typeorm";
import { Project } from "./project.mysql.entity";
export declare class ProjectService {
    private readonly projectRepository;
    constructor(projectRepository: MongoRepository<Project>);
    saveAndUpdate(project: any): Promise<any>;
    findOne(id: any): Promise<Project>;
    findAll(): Promise<Project[]>;
}
