import { Pagination } from 'nestjs-typeorm-paginate';
import { RolePrivilegeService } from '../role-privilege/role-privilege.service';
import { SystemService } from '../system/system.service';
import { CustomPaginationMeta } from '@/helper';
import { Repository } from 'typeorm';
import { CreateRoleDto, RoleListWithPaginationDto } from './role.dto';
import { Role } from './role.mysql.entity';
export declare class RoleService {
    private roleRepository;
    private readonly rolePrivilegeService;
    private readonly systemService;
    constructor(roleRepository: Repository<Role>, rolePrivilegeService: RolePrivilegeService, systemService: SystemService);
    create(dto: CreateRoleDto): Promise<Role>;
    update(role: Role): Promise<Role>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    findById(id: any): Promise<Role>;
    findByIds(ids: number[]): Promise<Role[]>;
    paginate(searchParams: RoleListWithPaginationDto, page: PaginationParams): Promise<Pagination<Role, CustomPaginationMeta>>;
    list(systemId: number): Promise<Role[]>;
}
