import { Pagination } from "nestjs-typeorm-paginate";
import { Repository } from "typeorm";
import { PrivilegeListWithPaginationDto } from "./privilege.dto";
import { Privilege } from "./privilege.mysql.entity";
export declare class PrivilegeService {
    private privilegeRepository;
    constructor(privilegeRepository: Repository<Privilege>);
    createOrUpdate(privilege: Privilege): Promise<Privilege>;
    list(systemId: number): Promise<Privilege[]>;
    findById(id: any): Promise<Privilege>;
    findByIds(ids: number[]): Promise<Privilege[]>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    paginate(searchParams: PrivilegeListWithPaginationDto, page: PaginationParams): Promise<Pagination<Privilege, CustomPaginationMeta>>;
}
