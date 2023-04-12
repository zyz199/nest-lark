export declare enum PAGE_TYPE {
    "csr" = 0,
    "ssr" = 1
}
export declare enum DEVICE_TYPE {
    "pc" = 0,
    "mobile" = 1,
    "weapp" = 2
}
export declare enum STATUS_TYPE {
    "activated" = 0,
    "inactive" = 1,
    "deleted" = 2
}
export declare class Page {
    id: number;
    path: string;
    name: string;
    currentConfigId: string;
    deployConfigId: string;
    currentVersion: string;
    deployVersion: string;
    templateId: string;
    type: PAGE_TYPE;
    device: DEVICE_TYPE;
    status: STATUS_TYPE;
    createDate: string;
    updateDate: string;
    appointmentUp: string;
    appointmentDown: string;
}
