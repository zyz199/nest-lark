import { Repository } from "typeorm";
import { UserRole } from "./user-role.mysql.entity";
export declare class UserRoleService {
    private userRoleRepository;
    constructor(userRoleRepository: Repository<UserRole>);
    listByUserId(userId: number, systemId: number): Promise<UserRole[]>;
    deleteByUserId(userId: number, systemId: number): Promise<import("typeorm").DeleteResult>;
    setUserRoles(userId: number, roleIds: number[], systemId: number): Promise<UserRole[]>;
}
