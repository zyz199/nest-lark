export declare enum UserStatus {
    disabled = 0,
    enabled = 1
}
export declare class User {
    id?: number;
    name: string;
    username: string;
    email: string;
    avatarUrl: string;
    avatarThumb?: string;
    avatarBig?: string;
    avatarMiddle?: string;
    mobile?: string;
    enName?: string;
    feishuUnionId?: string;
    feishuUserId?: string;
    departmentName?: string;
    departmentId?: string;
    status?: UserStatus;
    updateTime?: string;
}
