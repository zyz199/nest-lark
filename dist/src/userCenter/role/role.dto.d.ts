import { PaginationParams } from "types/type";
export declare class CreateRoleDto {
    name: string;
    description: string;
    systemId: number;
}
export declare class DeleteRoleDto {
    id: number;
}
export declare class RolePrivilegeSetDto {
    roleId: number;
    privilegeIds: number[];
    systemId: number;
}
export declare class RoleListDto {
    systemId: number;
}
export declare class GetPrivilegeListByIdDto {
    roleId: number;
}
export declare class UpdateRoleDto extends CreateRoleDto {
    id: number;
}
export declare class RoleListWithPaginationDto {
    keyword?: string;
    page?: PaginationParams;
}
