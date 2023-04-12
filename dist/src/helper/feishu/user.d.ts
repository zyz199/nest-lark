export declare const getUserInfo: (user_token: string) => Promise<any>;
export declare const getSingleUserInfo: (feishuUserId: string, token: string) => Promise<any>;
export declare const getUserListByDepartmentId: (department_id: string, app_token: string) => Promise<any>;
export declare const getEmployeeTypeEnums: ({ app_token }: {
    app_token: any;
}) => Promise<any>;
