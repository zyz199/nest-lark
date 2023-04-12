import { MongoRepository } from "typeorm";
import { PhysicalMaterial } from "./physical.mysql.entity";
export declare class PhysicalMaterialService {
    private PhysicalMaterialRepository;
    constructor(PhysicalMaterialRepository: MongoRepository<PhysicalMaterial>);
    save(PhysicalMaterial: any): Promise<any>;
    findOne(id: any): Promise<PhysicalMaterial>;
    findOneByProjectId(projectId: any): Promise<PhysicalMaterial>;
    getList(params: any): Promise<PhysicalMaterial[]>;
    updateOne(id: any, params: any): Promise<import("typeorm").FindAndModifyWriteOpResultObject>;
}
