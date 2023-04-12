"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogStream = void 0;
const chalk_1 = require("chalk");
const dayjs_1 = require("dayjs");
const split2_1 = require("split2");
const fast_json_parse_1 = require("fast-json-parse");
const levels = {
    [60]: "Fatal",
    [50]: "Error",
    [40]: "Warn",
    [30]: "Info",
    [20]: "Debug",
    [10]: "Trace",
};
const colors = {
    [60]: "magenta",
    [50]: "red",
    [40]: "yellow",
    [30]: "blue",
    [20]: "white",
    [10]: "white",
};
class LogStream {
    constructor(opt) {
        this.trans = (0, split2_1.default)((data) => {
            this.log(data);
        });
        if ((opt === null || opt === void 0 ? void 0 : opt.format) && typeof opt.format === "function") {
            this.customFormat = opt.format;
        }
    }
    log(data) {
        data = this.jsonParse(data);
        const level = data.level;
        data = this.format(data);
        console.log(chalk_1.default[colors[level]](data));
    }
    jsonParse(data) {
        return (0, fast_json_parse_1.default)(data).value;
    }
    format(data) {
        var _a, _b;
        if (this.customFormat) {
            return this.customFormat(data);
        }
        const Level = levels[data.level];
        const DateTime = (0, dayjs_1.default)(data.time).format("YYYY-MM-DD HH:mm:ss.SSS A");
        const logId = data.reqId || "_logId_";
        let reqInfo = "[-]";
        if (data.req) {
            reqInfo = `[${data.req.remoteAddress || ""} - ${data.req.method} - ${data.req.url}]`;
        }
        if (data.res) {
            reqInfo = JSON.stringify(data.res);
        }
        if (((_a = data === null || data === void 0 ? void 0 : data.req) === null || _a === void 0 ? void 0 : _a.url) && ((_b = data === null || data === void 0 ? void 0 : data.req) === null || _b === void 0 ? void 0 : _b.url.indexOf("/api/doc")) !== -1) {
            return null;
        }
        return `${Level} | ${DateTime} | ${logId} | ${reqInfo} | ${data.stack || data.msg}`;
    }
}
exports.LogStream = LogStream;
//# sourceMappingURL=logStream.js.map