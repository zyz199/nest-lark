"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessException = void 0;
const common_1 = require("@nestjs/common");
const business_error_codes_1 = require("./business.error.codes");
class BusinessException extends common_1.HttpException {
    constructor(err) {
        if (typeof err === 'string') {
            err = {
                code: business_error_codes_1.BUSINESS_ERROR_CODE.COMMON,
                message: err,
            };
        }
        super(err, common_1.HttpStatus.OK);
    }
    static throwForbidden() {
        throw new BusinessException({
            code: business_error_codes_1.BUSINESS_ERROR_CODE.ACCESS_FORBIDDEN,
            message: '抱歉哦，您无此权限！',
        });
    }
}
exports.BusinessException = BusinessException;
//# sourceMappingURL=business.exception.js.map