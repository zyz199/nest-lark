import { ObjectID } from "typeorm";
import { ProcessNodes } from "../material/physical/physical.dto";
export declare enum PublishStatus {
    "unpublished" = 0,
    "publishing" = 1,
    "publish_success" = 2,
    "publish_failed" = 3
}
export declare class Task {
    id?: ObjectID;
    materialId?: string;
    groupId?: string;
    deployNum: number;
    projectId: number;
    branch: string;
    deployVersion: string;
    version: string;
    currentVersion: string;
    status: PublishStatus;
    env: ProcessNodes;
    projectType: string;
    startTime?: string;
    endTime?: string;
    creatorName: string;
    creatorId: number;
    queueId?: number;
    buildId?: number;
    desc?: string;
}
