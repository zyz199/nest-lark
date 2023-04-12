"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fastLogger = void 0;
const path_1 = require("path");
const fileStream_1 = require("./fileStream");
const logStream_1 = require("./logStream");
const multiStream = require("pino-multi-stream").multistream;
function asReqValue(req) {
    if (req.raw) {
        req = req.raw;
    }
    let device_id, tt_webid;
    if (req.headers.cookie) {
        device_id = req.headers.cookie.match(/device_id=([^;&^\s]+)/);
        tt_webid = req.headers.cookie.match(/tt_webid=([^;&^\s]+)/);
    }
    device_id && (device_id = device_id[1]);
    tt_webid && (tt_webid = tt_webid[1]);
    return {
        id: req.id,
        method: req.method,
        url: req.url,
        remoteAddress: req.connection ? req.connection.remoteAddress : "",
        remotePort: req.connection ? req.connection.remotePort : "",
        device_id,
        tt_webid,
    };
}
const reqIdGenFactory = () => {
    let maxInt = 2147483647;
    let nextReqId = 0;
    return (req) => {
        return (req.headers["X-TT-logId"] ||
            req.headers["x-tt-logId"] ||
            (nextReqId = (nextReqId + 1) & maxInt));
    };
};
const fastLogger = (opt) => {
    const reOpt = Object.assign({ console: !process.env.NODE_ENV || process.env.NODE_ENV === "development", level: "info", fileName: (0, path_1.join)(process.cwd(), "logs/fastify.log"), genReqId: reqIdGenFactory(), serializers: {
            req: asReqValue,
        }, formatOpts: {
            lowres: true,
        } }, opt);
    const allStreams = [
        {
            stream: new fileStream_1.FileStream(reOpt).trans,
        },
    ];
    if (reOpt.console) {
        allStreams.push({
            stream: new logStream_1.LogStream().trans,
        });
    }
    reOpt.stream = multiStream(allStreams);
    return reOpt;
};
exports.fastLogger = fastLogger;
//# sourceMappingURL=logger.js.map