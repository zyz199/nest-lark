import { MongoRepository } from "typeorm";
import { MultrepoGroup } from "./multrepoGroup.mysql.entity";
export declare class MultrepoGroupService {
    private groupRepository;
    constructor(groupRepository: MongoRepository<MultrepoGroup>);
    save(group: any): Promise<any>;
    getList(params: any): Promise<MultrepoGroup[]>;
    getListByParams(params: any): Promise<MultrepoGroup[]>;
    getListByIds(ids: any): Promise<MultrepoGroup[]>;
    del(id: any): void;
}
