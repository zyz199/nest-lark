import { MongoRepository } from "typeorm";
import { PageConfig } from "./pageConfig.mysql.entity";
export declare class PageConfigService {
    private pageConfigRepository;
    constructor(pageConfigRepository: MongoRepository<PageConfig>);
    create(createPageConfigDto: any): Promise<any>;
    findByPageId(pageId: any): Promise<PageConfig[]>;
    findOne(id: any): Promise<PageConfig>;
    update(id: number, updatePageConfigDto: any): string;
    remove(id: number): string;
}
