import { CreateProjectDto } from "@/materials/material/physical/physical.dto";
import { MATERIAL_TYPE } from "@/materials/material/physical/physical.mysql.entity";
export declare class addGroupDto {
    name: string;
    bizTitle: string;
    bizId: number;
    desc: string;
}
export declare class addMonorepoGroupDto extends CreateProjectDto {
    name: string;
    bizTitle: string;
    bizId: number;
    type: MATERIAL_TYPE[];
    desc: string;
}
export declare class getGroupDto {
    id: string;
}
