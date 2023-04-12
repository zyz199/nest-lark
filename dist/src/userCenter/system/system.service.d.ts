import { Repository } from "typeorm";
import { System } from "./system.mysql.entity";
export declare class SystemService {
    private systemRepository;
    constructor(systemRepository: Repository<System>);
    create(system: System): Promise<System>;
    update(system: System): Promise<System>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    findById(id: any): Promise<System>;
    findByIds(ids: number[]): Promise<System[]>;
    list(): Promise<System[]>;
}
