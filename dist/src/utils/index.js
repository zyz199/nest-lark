"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.getEnv = void 0;
const yaml_1 = require("yaml");
const path = require("path");
const fs = require("fs");
const getEnv = () => {
    return process.env.RUNNING_ENV;
};
exports.getEnv = getEnv;
const getConfig = (type) => {
    const environment = (0, exports.getEnv)();
    console.log(process.cwd());
    const yamlPath = path.join(process.cwd(), `./src/config/.${environment}.yaml`);
    const file = fs.readFileSync(yamlPath, "utf8");
    const config = (0, yaml_1.parse)(file);
    console.log(config);
    if (type) {
        return config[type];
    }
    return config;
};
exports.getConfig = getConfig;
//# sourceMappingURL=index.js.map