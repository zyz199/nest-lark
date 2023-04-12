"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDocument = void 0;
const swagger_1 = require("@nestjs/swagger");
const packageConfig = require("../package.json");
const generateDocument = (app) => {
    const options = new swagger_1.DocumentBuilder()
        .setTitle(packageConfig.name)
        .setDescription(packageConfig.description)
        .setVersion(packageConfig.version)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup("/doc", app, document);
};
exports.generateDocument = generateDocument;
//# sourceMappingURL=doc.js.map