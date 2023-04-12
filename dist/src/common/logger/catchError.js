"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchError = void 0;
const catchError = () => {
    process.on("unhandledRejection", (reason, p) => {
        console.log("Promise: ", p, "Reason: ", reason);
    });
};
exports.catchError = catchError;
//# sourceMappingURL=catchError.js.map