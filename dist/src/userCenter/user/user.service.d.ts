import { Repository } from "typeorm";
import { User } from "./user.mysql.entity";
import { UserListWithPaginationDto } from "./user.dto";
import { FeishuUserInfo } from "@/userCenter/user/feishu/feishu.dto";
import { Pagination } from "nestjs-typeorm-paginate";
import { RolePrivilegeService } from "../role-privilege/role-privilege.service";
import { UserRoleService } from "../user-role/user-role.service";
import { RoleService } from "../role/role.service";
import { PrivilegeService } from "../privilege/privilege.service";
export declare class UserService {
    private userRepository;
    private readonly rolePrivilegeService;
    private readonly userRoleService;
    private readonly roleService;
    private readonly privilegeService;
    constructor(userRepository: Repository<User>, rolePrivilegeService: RolePrivilegeService, userRoleService: UserRoleService, roleService: RoleService, privilegeService: PrivilegeService);
    createOrSave(user: User): void;
    createOrUpdateByFeishu(feishuUserInfo: FeishuUserInfo): Promise<{
        accessToken?: string;
        email: string;
        avatarUrl: string;
        avatarThumb: string;
        avatarBig: string;
        avatarMiddle: string;
        mobile: string;
        enName: string;
        name: string;
        feishuUserId: string;
        feishuUnionId: string;
        id?: number;
        username: string;
        departmentName?: string;
        departmentId?: string;
        status?: import("./user.mysql.entity").UserStatus;
        updateTime?: string;
    } & User>;
    profile(userId: any): Promise<User>;
    paginate(searchParams: UserListWithPaginationDto, page: PaginationParams): Promise<Pagination<User, CustomPaginationMeta>>;
    getUserListByEmails(emailList: string[]): Promise<User[]>;
    getPrivilegeListByUserId(userId: number, systemId: number): Promise<import("../privilege/privilege.mysql.entity").Privilege[]>;
    getPrivilegeCodesByUserId(userId: number, systemId: number): Promise<{
        code: string;
        status: import("../privilege/privilege.mysql.entity").PrivilegeStatus;
    }[]>;
    getRolesById(userId: number, systemId: number): Promise<import("../role/role.mysql.entity").Role[]>;
    getUserById(id: number): Promise<User>;
    getUserByFeishuId(feishuUserId: string): Promise<User>;
}
