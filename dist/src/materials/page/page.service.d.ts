import { MongoRepository } from "typeorm";
import { Page } from "./page.mysql.entity";
export declare class PageService {
    private pageRepository;
    constructor(pageRepository: MongoRepository<Page>);
    saveAndUpdate(page: any): Promise<any>;
    findOne(id: any): Promise<Page>;
    findAll(): Promise<Page[]>;
    findOneByQuery(params: any): Promise<Page>;
    updateOne(id: any, page: any): Promise<import("typeorm").FindAndModifyWriteOpResultObject>;
}
