import { MongoRepository } from "typeorm";
import { CodeGroup } from "./code.mysql.entity";
export declare class CodeGroupService {
    private groupRepository;
    constructor(groupRepository: MongoRepository<CodeGroup>);
    save(group: any): Promise<any>;
    getList(params: any): Promise<CodeGroup[]>;
    getListByParams(params: any): Promise<CodeGroup[]>;
    getListByIds(ids: any): Promise<CodeGroup[]>;
    del(id: any): void;
}
