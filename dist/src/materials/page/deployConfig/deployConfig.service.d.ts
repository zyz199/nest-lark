import { MongoRepository } from "typeorm";
import { DeployTestConfig } from "./deployConfig.mysql.entity";
import { PageService } from "../page.service";
export declare class DeployConfigService {
    private deployConfigRepository;
    private pageService;
    constructor(deployConfigRepository: MongoRepository<DeployTestConfig>, pageService: PageService);
    create(createPageConfigDto: any): Promise<any>;
    findOne(id: any): Promise<DeployTestConfig>;
}
