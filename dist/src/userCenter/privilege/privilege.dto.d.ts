import { PaginationParams } from "types/type";
export declare class CreatePrivilegeDto {
    systemId: number;
    name: string;
    resourceKey: string;
    description?: string;
    action: string;
}
export declare class DeletePrivilegeDto {
    privilegeId: number;
}
export declare class DisablePrivilegeDto {
    privilegeId: number;
    status: number;
}
export declare class UpdatePrivilegeDto extends CreatePrivilegeDto {
    id: number;
}
export declare class PrivilegeListWithPaginationDto {
    keyword?: string;
    page?: PaginationParams;
}
export declare class ListAllPrivilegeDto {
    systemId: number;
}
