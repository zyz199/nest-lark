import { ObjectID } from "typeorm";
export declare class MonorepoGroup {
    id: ObjectID;
    name: string;
    projectId: number;
    desc: string;
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
    creatorName: string;
    creatorId: number;
    status: number;
}
