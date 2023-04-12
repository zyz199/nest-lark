export declare enum PrivilegeStatus {
    DENY = 0,
    ALLOW = 1,
    NOT_SET = 2
}
export declare enum Action {
    Manage = "manage",
    Create = "create",
    Read = "read",
    Update = "update",
    Delete = "delete"
}
export declare class Privilege {
    id?: number;
    systemId?: number;
    resourceKey: string;
    name: string;
    description?: string;
    action: string;
    status?: PrivilegeStatus;
    createTime?: string;
}
