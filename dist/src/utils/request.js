"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methodV = exports.request = void 0;
const axios_1 = require("axios");
const utils_1 = require("./");
const { FEISHU_CONFIG: { FEISHU_URL }, } = (0, utils_1.getConfig)();
const request = async ({ url, option = {} }) => {
    try {
        return axios_1.default.request(Object.assign({ url }, option));
    }
    catch (error) {
        throw error;
    }
};
exports.request = request;
const methodV = async ({ url, method, headers, params = {}, query = {}, }) => {
    let sendUrl = "";
    if (/^(http:\/\/|https:\/\/)/.test(url)) {
        sendUrl = url;
    }
    else {
        sendUrl = `${FEISHU_URL}${url}`;
    }
    console.log(sendUrl);
    try {
        return new Promise((resolve, reject) => {
            (0, axios_1.default)({
                headers: Object.assign({ "Content-Type": "application/json; charset=utf-8" }, headers),
                url: sendUrl,
                method,
                params: query,
                data: Object.assign({}, params),
            })
                .then(({ data, status }) => {
                resolve({ data, code: status });
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    catch (error) {
        throw error;
    }
};
exports.methodV = methodV;
//# sourceMappingURL=request.js.map