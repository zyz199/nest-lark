"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.existsSync = exports.updateFileSync = exports.writeFileSync = exports.readMatchedFileSync = exports.path2FileName = exports.readLocalFile = exports.updateLocalFile = void 0;
const fs = require("fs");
const path = require("path");
const utils_1 = require("../utils");
const { CACHE_ENABLE, ROOT_DIR, GATEWAY_FILENAME, PAGE_DIR } = (0, utils_1.getConfig)("GATEWAY_CONFIG");
const rootDir = path.resolve(process.cwd(), ROOT_DIR);
if (!fs.existsSync(rootDir)) {
    fs.mkdirSync(rootDir);
}
const pageDir = path.resolve(process.cwd(), `${ROOT_DIR}/${PAGE_DIR}`);
if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir);
}
const updateLocalFile = (Local) => {
    fs.writeFileSync(path.resolve(rootDir, GATEWAY_FILENAME), JSON.stringify(Local));
};
exports.updateLocalFile = updateLocalFile;
const readLocalFile = () => {
    try {
        return fs.readFileSync(path.resolve(rootDir, GATEWAY_FILENAME)).toString();
    }
    catch (_a) {
        return "{}";
    }
};
exports.readLocalFile = readLocalFile;
function path2FileName(path) {
    let fileName = path;
    if (/\/$/.test(fileName)) {
        fileName += "index";
    }
    if (!/\.html$/.test(fileName)) {
        fileName += ".html";
    }
    return fileName;
}
exports.path2FileName = path2FileName;
function readMatchedFileSync(hostname, matchedPath) {
    if (!CACHE_ENABLE)
        return undefined;
    const fileName = path2FileName(matchedPath);
    if (fs.existsSync(path.resolve(pageDir, `${hostname}/${fileName}`))) {
        try {
            return fs
                .readFileSync(path.resolve(pageDir, `${hostname}/${fileName}`))
                .toString();
        }
        catch (e) {
            return;
        }
    }
    return;
}
exports.readMatchedFileSync = readMatchedFileSync;
const writeFileSync = (hostname, matchedPath, html) => {
    if (!CACHE_ENABLE)
        return false;
    const fileName = path2FileName(matchedPath);
    try {
        const fileDir = hostname + fileName.split("/").slice(0, -1).join("/");
        if (!fs.existsSync(path.resolve(pageDir, fileDir))) {
            fs.mkdirSync(path.resolve(pageDir, fileDir + "/"), {
                recursive: true,
            });
        }
        fs.writeFileSync(path.resolve(pageDir, `${hostname}/${fileName}`), html);
    }
    catch (e) {
        console.error(`[writeFileSync] error when writeFileSync ${path.resolve(pageDir, `${hostname}/${fileName}`)}`, e);
        return false;
    }
    return true;
};
exports.writeFileSync = writeFileSync;
const updateFileSync = (hostname, matchedPath, html) => {
    if (!CACHE_ENABLE())
        return undefined;
    return (0, exports.writeFileSync)(hostname, matchedPath, html);
};
exports.updateFileSync = updateFileSync;
const existsSync = (hostname, matchedPath) => {
    const fileName = path2FileName(matchedPath);
    return fs.existsSync(path.resolve(pageDir, `${hostname}/${fileName}`));
};
exports.existsSync = existsSync;
//# sourceMappingURL=fileSysCache.js.map