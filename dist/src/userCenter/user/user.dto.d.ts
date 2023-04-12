import { PaginationParams } from 'types/type';
export declare class DisableUserDto {
    userId: number;
    status: number;
}
export declare class GetRolesByIdDto {
    userId: number;
    systemId: number;
}
export declare class SetRolesDto {
    userId: number;
    roleIds: number[];
    systemId: number;
}
export declare class GetPrivilegeListDto {
    userId: number;
    systemId: number;
}
export declare class UserListWithPaginationDto {
    keyword?: string;
    page?: PaginationParams;
}
