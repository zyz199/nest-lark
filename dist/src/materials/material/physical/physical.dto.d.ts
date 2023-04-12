import { MATERIAL_TYPE } from "./physical.mysql.entity";
export declare enum ProcessNodes {
    "development" = 0,
    "testing" = 1,
    "fix" = 2,
    "production" = 3
}
export declare const branchMap: {
    0: string;
    1: string;
    2: string;
    3: string;
};
export declare const versionTypeMap: {
    0: string;
    1: string;
    2: string;
};
export declare const versionMap: {
    0: string;
    1: string;
    2: string;
};
export declare const staticMap: {
    0: string;
    1: string;
    2: string;
    3: string;
};
export declare const ProcessMap: {
    0: string;
    1: string;
    2: string;
    3: string;
};
export declare class CreateProjectDto {
    zhName: string;
    usName: string;
    desc: string;
    projectTypes?: string[];
    gitProjectId: number;
    cdnUrl: string;
}
export declare class addMaterialDto extends CreateProjectDto {
    type?: MATERIAL_TYPE[];
    groupId: number;
}
export declare class searchMaterialDto {
    groupId: string;
}
export declare class searchMaterialByIdsDto {
    groupIds: string[];
    env: ProcessNodes;
}
export declare class searchMaterialDetailDto {
    id: string;
    projectId?: string;
}
export declare class editMaterialDetailDto extends addMaterialDto {
    id: string;
}
export declare class PublishDto extends searchMaterialDetailDto {
    environment: ProcessNodes;
    cache?: boolean;
    desc?: string;
    projectTypes?: string[];
    version?: string;
    branch?: string;
}
