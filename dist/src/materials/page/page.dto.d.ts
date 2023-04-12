import { DEVICE_TYPE, PAGE_TYPE } from "./page.mysql.entity";
export declare class addPageDto {
    id?: string;
    path: string;
    name: string;
    type: PAGE_TYPE;
    device: DEVICE_TYPE;
}
