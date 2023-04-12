import { Repository } from "typeorm";
import { RolePrivilege } from "./role-privilege.mysql.entity";
export declare class RolePrivilegeService {
    private rolePrivilegeRepository;
    constructor(rolePrivilegeRepository: Repository<RolePrivilege>);
    listByRoleIds(roleIds: number[]): Promise<RolePrivilege[]>;
    remove(roleId: number): Promise<import("typeorm").DeleteResult>;
    set(roleId: number, privilegeIds: number[], systemId: number): Promise<RolePrivilege[]>;
}
