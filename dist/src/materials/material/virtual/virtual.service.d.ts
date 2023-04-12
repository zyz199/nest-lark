import { MongoRepository } from "typeorm";
import { VirtualMaterial } from "./virtual.mysql.entity";
export declare class VirtualMaterialService {
    private materialRepository;
    constructor(materialRepository: MongoRepository<VirtualMaterial>);
    save(material: any): Promise<any>;
    findOne(id: any): Promise<VirtualMaterial>;
    getList(params: any): Promise<VirtualMaterial[]>;
    updateOne(id: any, params: any): Promise<import("typeorm").FindAndModifyWriteOpResultObject>;
}
