import { ProcessNodes } from "../physical/physical.dto";
export declare enum MATERIAL_TYPE {
    "cdn" = 0,
    "npm" = 1,
    "code" = 2
}
export declare class MaterialConfig {
    id: number;
    materialId: string;
    env: ProcessNodes;
    version: string;
    contain?: string;
    cdn?: string;
}
