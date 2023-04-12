import { MongoRepository } from "typeorm";
import { MaterialConfig } from "./materialConfig.mysql.entity";
export declare class MaterialConfigService {
    private materialConfigServer;
    constructor(materialConfigServer: MongoRepository<MaterialConfig>);
    save(materialConfig: any): Promise<any>;
    getList(params: any): Promise<MaterialConfig[]>;
    findOne(id: any): Promise<MaterialConfig>;
}
