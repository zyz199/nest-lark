import { ProcessNodes } from '../physical/physical.dto';
export declare class addMaterialConfigDto {
    materialId: string;
    version: string;
    env: ProcessNodes;
    contain?: string;
    cdn?: string;
}
export declare class searchMaterialConfigDto {
    materialId: string;
}
