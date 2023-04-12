import { PrivilegeService } from '../privilege/privilege.service';
import { RolePrivilegeService } from '../role-privilege/role-privilege.service';
import { SystemService } from '../system/system.service';
import { CreateRoleDto, DeleteRoleDto, GetPrivilegeListByIdDto, RoleListDto, RoleListWithPaginationDto, RolePrivilegeSetDto, UpdateRoleDto } from './role.dto';
import { RoleService } from './role.service';
export declare class RoleController {
    private readonly roleService;
    private readonly rolePrivilegeService;
    private readonly privilegeService;
    private readonly systemService;
    constructor(roleService: RoleService, rolePrivilegeService: RolePrivilegeService, privilegeService: PrivilegeService, systemService: SystemService);
    create(createRoleDto: CreateRoleDto): Promise<import("./role.mysql.entity").Role>;
    update(dto: UpdateRoleDto): Promise<import("./role.mysql.entity").Role>;
    delete(dto: DeleteRoleDto): Promise<import("typeorm").DeleteResult>;
    list(dto: RoleListDto): Promise<import("./role.mysql.entity").Role[]>;
    getPrivilegeListById(dto: GetPrivilegeListByIdDto): Promise<import("../privilege/privilege.mysql.entity").Privilege[]>;
    listWithPagination(dto: RoleListWithPaginationDto): Promise<{
        items: import("./role.mysql.entity").Role[];
        meta: import("../../helper").CustomPaginationMeta;
        links?: import("nestjs-typeorm-paginate").IPaginationLinks;
    }>;
    set(dto: RolePrivilegeSetDto): Promise<import("../role-privilege/role-privilege.mysql.entity").RolePrivilege[]>;
}
