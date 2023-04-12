import { PaginationParams } from "types/type";
export declare class CreateResourceDto {
    name: string;
    parentId?: number;
    systemId: number;
    key: string;
}
export declare class ListBySystemIdDto {
    systemId: number;
}
export declare class DeleteResourceDto {
    id: number;
}
export declare class UpdateResourceDto extends CreateResourceDto {
    id: number;
}
export declare class ResourceListWithPaginationDto {
    keyword?: string;
    page?: PaginationParams;
}
