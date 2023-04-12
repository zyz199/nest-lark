import { ObjectID } from "typeorm";
export declare enum MATERIAL_TYPE {
    "cdn" = 0,
    "npm" = 1,
    "code" = 2
}
export declare class PhysicalMaterial {
    id: ObjectID;
    groupId: string;
    projectId: number;
    type: string;
    devVersion: string;
    testVersion: string;
    fixVersion: string;
    releaseVersion: string;
    alphaVersion: number;
    betaVersion: number;
    gammaVersion: number;
    currentVersion: string;
    lastVersion: string;
    createDate: string;
    updateDate: string;
    updateUser: string;
}
