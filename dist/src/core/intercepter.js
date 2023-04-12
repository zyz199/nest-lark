"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatchedSync = exports.matchPath = exports.matchWebsite = void 0;
const matchWebsite = (host, websites) => {
    return websites[host];
};
exports.matchWebsite = matchWebsite;
const splitPath = (path) => {
    if (!path) {
        return [];
    }
    else if (path === "/") {
        return [""];
    }
    else {
        return path.split("/");
    }
};
const matchPath = (website, targetPath) => {
    if (!website)
        return;
    const targetPathArr = splitPath(targetPath);
    if (targetPathArr.find((i) => i === "*")) {
        throw new Error("[matchPath] website custome path include *, redirect to 404");
    }
    if (website[targetPath]) {
        return {
            path: targetPath,
            data: website[targetPath],
        };
    }
    if (/\/[^\/]+\.html$/.test(targetPath) && !/\/index\.html/.test(targetPath)) {
        return {
            path: targetPath,
            data: website[targetPath],
        };
    }
    let matchLen = 0;
    let resultKey;
    Object.keys(website || {}).forEach((path) => {
        if (!path.startsWith("/"))
            path = `/${path}`;
        const pathArr = splitPath(path);
        if (pathArr.slice(0, -1).find((i) => i === "*"))
            throw new Error("[matchPath] path include *");
        let currentMatchLen = 0;
        let currentResultKey;
        for (let i = 0; i < pathArr.length; i += 1) {
            if (targetPathArr[i] !== pathArr[i]) {
                currentMatchLen = 0;
                currentResultKey = undefined;
                return;
            }
            else if (undefined === targetPathArr[i]) {
                currentMatchLen = 0;
                currentResultKey = undefined;
                return;
            }
            currentMatchLen = i + 1;
            currentResultKey = path;
        }
        if (matchLen < currentMatchLen) {
            matchLen = currentMatchLen;
            resultKey = currentResultKey;
        }
    });
    return {
        path: resultKey,
        data: website[resultKey],
    };
};
exports.matchPath = matchPath;
const getMatchedSync = (urlObj, websites = {}) => {
    if (!urlObj.hostname) {
        return undefined;
    }
    const website = (0, exports.matchWebsite)(urlObj.hostname, websites);
    if (!website) {
        return undefined;
    }
    const { data, path } = (0, exports.matchPath)(website, urlObj.pathname);
    if (!data) {
        return { path: undefined, data: undefined };
    }
    return { data, path };
};
exports.getMatchedSync = getMatchedSync;
//# sourceMappingURL=intercepter.js.map