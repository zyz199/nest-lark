"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppToken = exports.getUserAccessToken = exports.refreshUserToken = exports.getUserToken = void 0;
const const_1 = require("./const");
const request_1 = require("../../utils/request");
const getUserToken = async ({ code, app_token }) => {
    const { data } = await (0, request_1.methodV)({
        url: `/authen/v1/access_token`,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${app_token}`,
        },
        params: {
            grant_type: 'authorization_code',
            code,
        },
    });
    return data;
};
exports.getUserToken = getUserToken;
const refreshUserToken = async ({ refreshToken, app_token }) => {
    const { data } = await (0, request_1.methodV)({
        url: `/authen/v1/refresh_access_token`,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${app_token}`,
        },
        params: {
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
            app_token,
        },
    });
    return data;
};
exports.refreshUserToken = refreshUserToken;
const getUserAccessToken = async (code) => {
    const { data } = await (0, request_1.methodV)({
        url: `/suite/passport/oauth/token`,
        method: 'POST',
        params: {
            grant_type: 'authorization_code',
            code,
            app_id: const_1.APP_ID,
            app_secret: const_1.APP_SECRET,
        },
    });
    return data;
};
exports.getUserAccessToken = getUserAccessToken;
const getAppToken = async () => {
    const { data } = await (0, request_1.methodV)({
        url: `/auth/v3/app_access_token/internal`,
        method: 'POST',
        params: {
            app_id: const_1.APP_ID,
            app_secret: const_1.APP_SECRET,
        },
    });
    return data;
};
exports.getAppToken = getAppToken;
//# sourceMappingURL=auth.js.map