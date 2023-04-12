"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadUser = exports.getPaginationOptions = exports.CustomPaginationMeta = void 0;
const constants_1 = require("./constants");
const common_1 = require("@nestjs/common");
class CustomPaginationMeta {
    constructor(pageSize, totalCounts, totalPages, currentPage) {
        this.pageSize = pageSize;
        this.totalCounts = totalCounts;
        this.totalPages = totalPages;
        this.currentPage = currentPage;
    }
}
exports.CustomPaginationMeta = CustomPaginationMeta;
const getPaginationOptions = (page = {
    currentPage: constants_1.defaultPaginationParams.currentPage,
    pageSize: constants_1.defaultPaginationParams.pageSize,
}) => {
    const limit = page.pageSize > constants_1.MAX_PAGE_SIZE ? constants_1.MAX_PAGE_SIZE : page.pageSize;
    const options = {
        page: page.currentPage,
        limit,
        metaTransformer: (meta) => {
            return new CustomPaginationMeta(meta.itemCount, meta.totalItems, meta.totalPages, meta.currentPage);
        },
    };
    return options;
};
exports.getPaginationOptions = getPaginationOptions;
exports.PayloadUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
//# sourceMappingURL=index.js.map