"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fastHook = void 0;
const fastHook = (fastify) => {
    fastify.addHook("onError", async (request, reply, error) => {
        console.log(request, reply, error);
    });
};
exports.fastHook = fastHook;
//# sourceMappingURL=index.js.map