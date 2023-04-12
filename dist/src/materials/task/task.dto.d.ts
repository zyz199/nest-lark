import { PaginationParams } from "types/type";
import { PublishStatus } from "./task.mysql.entity";
export declare class SearchConditionDto {
    projectId?: number;
    iterationId?: number;
    processId?: string;
    status?: PublishStatus;
}
export declare class ListWithPaginationDto {
    projectId?: number;
    iterationId?: number;
    processId?: string;
    status?: PublishStatus;
    page?: PaginationParams;
}
export declare class UpdateTaskDto {
    id: number;
    status: number;
    buildId: number;
    thirdMiniIds?: number[];
}
export declare class QueryByEmailDto {
    emails: string[];
}
