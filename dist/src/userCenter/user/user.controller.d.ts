import { UserService } from "./user.service";
import { UserListWithPaginationDto, GetRolesByIdDto, SetRolesDto, DisableUserDto } from "./user.dto";
import { UserRoleService } from "../user-role/user-role.service";
export declare class UserController {
    private readonly userService;
    private readonly userRoleService;
    constructor(userService: UserService, userRoleService: UserRoleService);
    profile(user: Payload): Promise<import("./user.mysql.entity").User>;
    changeStatus(dto: DisableUserDto): Promise<void>;
    listWithPagination(dto: UserListWithPaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<import("./user.mysql.entity").User, CustomPaginationMeta>>;
    getRolesById(dto: GetRolesByIdDto): Promise<import("../role/role.mysql.entity").Role[]>;
    setRoles(dto: SetRolesDto): Promise<import("../user-role/user-role.mysql.entity").UserRole[]>;
    test(): Promise<string>;
}
