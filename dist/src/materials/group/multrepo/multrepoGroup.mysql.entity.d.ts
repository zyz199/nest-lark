import { ObjectID } from 'typeorm';
export declare class MultrepoGroup {
    id: ObjectID;
    name: string;
    desc: string;
    creatorName: string;
    creatorId: number;
    createDate: string;
    updateDate: string;
    status: number;
}
