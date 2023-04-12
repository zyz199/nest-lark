"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Public = exports.IS_PUBLIC_KEY = exports.jwtConstants = void 0;
const common_1 = require("@nestjs/common");
exports.jwtConstants = {
    secret: 'yx-yyds',
    expiresIn: '15s',
    ignoreExpiration: true,
};
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;
//# sourceMappingURL=constants.js.map