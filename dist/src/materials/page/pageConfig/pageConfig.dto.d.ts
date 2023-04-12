export declare class CreatePageConfigDto {
    pageId: string;
    contain: string;
}
export declare class SearchPageConfigDto {
    pageId: string;
    contain: string;
}
declare const UpdatePageConfigDto_base: import("@nestjs/common").Type<Partial<CreatePageConfigDto>>;
export declare class UpdatePageConfigDto extends UpdatePageConfigDto_base {
}
export {};
