"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployeeTypeEnums = exports.getUserListByDepartmentId = exports.getSingleUserInfo = exports.getUserInfo = void 0;
const request_1 = require("../../utils/request");
const getUserInfo = async (user_token) => {
    const { data } = await (0, request_1.methodV)({
        url: `/authen/v1/user_info`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${user_token}`,
        },
    });
    return data;
};
exports.getUserInfo = getUserInfo;
const getSingleUserInfo = async (feishuUserId, token) => {
    const { data } = await (0, request_1.methodV)({
        url: `/contact/v3/users/${feishuUserId}`,
        method: 'GET',
        query: {
            user_id_type: 'user_id',
        },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};
exports.getSingleUserInfo = getSingleUserInfo;
const getUserListByDepartmentId = async (department_id, app_token) => {
    const { data } = await (0, request_1.methodV)({
        url: `https://open.feishu.cn/open-apis/contact/v3/users`,
        method: 'GET',
        query: {
            department_id_type: 'department_id',
            department_id,
            page_size: 50,
        },
        headers: {
            Authorization: `Bearer ${app_token}`,
        },
    });
    return data;
};
exports.getUserListByDepartmentId = getUserListByDepartmentId;
const getEmployeeTypeEnums = async ({ app_token }) => {
    const { data } = await (0, request_1.methodV)({
        url: `/contact/v3/employee_type_enums`,
        method: 'GET',
        query: {
            page_token: 1,
            page_size: 100,
        },
        headers: {
            Authorization: `Bearer ${app_token}`,
        },
    });
    return data;
};
exports.getEmployeeTypeEnums = getEmployeeTypeEnums;
//# sourceMappingURL=user.js.map