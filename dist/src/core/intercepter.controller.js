"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntercepterController = void 0;
const constants_1 = require("../auth/constants");
const common_1 = require("@nestjs/common");
const url_1 = require("url");
const intercepter_service_1 = require("./intercepter.service");
let IntercepterController = class IntercepterController {
    constructor(intercepterService) {
        this.intercepterService = intercepterService;
    }
    async getApp(req, res) {
        const urlObj = new url_1.URL(req.url, `http://${req.headers.host}`);
        console.log(urlObj);
        if (urlObj.pathname === "/favicon.ico")
            return res.send("ico");
        const html = await this.intercepterService.readHtml(urlObj);
        if (!html)
            return res.send("404");
        res.headers({
            "Content-Type": "text/html",
        });
        res.send(html);
    }
};
__decorate([
    (0, common_1.Get)("*"),
    (0, constants_1.Public)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], IntercepterController.prototype, "getApp", null);
IntercepterController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [intercepter_service_1.IntercepterService])
], IntercepterController);
exports.IntercepterController = IntercepterController;
//# sourceMappingURL=intercepter.controller.js.map