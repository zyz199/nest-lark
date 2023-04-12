import { MongoRepository } from "typeorm";
import { MonorepoGroup } from "./monorepoGroup.mysql.entity";
export declare class MonorepoGroupService {
    private groupRepository;
    constructor(groupRepository: MongoRepository<MonorepoGroup>);
    save(group: any): Promise<any>;
    findOne(id: any): Promise<MonorepoGroup>;
    getList(params: any): Promise<MonorepoGroup[]>;
    getListByParams(params: any): Promise<MonorepoGroup[]>;
    updateOne(id: any, params: any): Promise<import("typeorm").FindAndModifyWriteOpResultObject>;
    getListByIds(ids: any): Promise<MonorepoGroup[]>;
    del(id: any): void;
}
