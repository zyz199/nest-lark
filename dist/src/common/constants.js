"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsStream = exports.IS_STREAM_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.IS_STREAM_KEY = "isStream";
const IsStream = () => (0, common_1.SetMetadata)(exports.IS_STREAM_KEY, true);
exports.IsStream = IsStream;
//# sourceMappingURL=constants.js.map