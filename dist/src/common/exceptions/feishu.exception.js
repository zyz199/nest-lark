"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeishuHttpException = void 0;
const common_1 = require("@nestjs/common");
class FeishuHttpException extends common_1.HttpException {
    constructor(err) {
        const { data = {}, status = common_1.HttpStatus.INTERNAL_SERVER_ERROR } = err.response || {};
        super(typeof data === "string" ? data : JSON.stringify(data), status);
    }
}
exports.FeishuHttpException = FeishuHttpException;
//# sourceMappingURL=feishu.exception.js.map