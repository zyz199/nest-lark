import { IPaginationOptions } from 'nestjs-typeorm-paginate';
export declare class CustomPaginationMeta {
    readonly pageSize: number;
    readonly totalCounts: number;
    readonly totalPages: number;
    readonly currentPage: number;
    constructor(pageSize: number, totalCounts: number, totalPages: number, currentPage: number);
}
export declare const getPaginationOptions: (page?: PaginationParams) => IPaginationOptions<CustomPaginationMeta>;
export declare const PayloadUser: (...dataOrPipes: any[]) => ParameterDecorator;
