"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_SECRET = exports.APP_ID = void 0;
const utils_1 = require("../../utils");
const { FEISHU_CONFIG } = (0, utils_1.getConfig)();
exports.APP_ID = FEISHU_CONFIG.FEISHU_APP_ID;
exports.APP_SECRET = FEISHU_CONFIG.FEISHU_APP_SECRET;
//# sourceMappingURL=const.js.map