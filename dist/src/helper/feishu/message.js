"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = exports.MSG_TYPE = exports.RECEIVE_TYPE = void 0;
const request_1 = require("../../utils/request");
var RECEIVE_TYPE;
(function (RECEIVE_TYPE) {
    RECEIVE_TYPE[RECEIVE_TYPE["open_id"] = 0] = "open_id";
    RECEIVE_TYPE[RECEIVE_TYPE["user_id"] = 1] = "user_id";
    RECEIVE_TYPE[RECEIVE_TYPE["union_id"] = 2] = "union_id";
    RECEIVE_TYPE[RECEIVE_TYPE["email"] = 3] = "email";
    RECEIVE_TYPE[RECEIVE_TYPE["chat_id"] = 4] = "chat_id";
})(RECEIVE_TYPE = exports.RECEIVE_TYPE || (exports.RECEIVE_TYPE = {}));
var MSG_TYPE;
(function (MSG_TYPE) {
    MSG_TYPE[MSG_TYPE["text"] = 0] = "text";
    MSG_TYPE[MSG_TYPE["post"] = 1] = "post";
    MSG_TYPE[MSG_TYPE["image"] = 2] = "image";
    MSG_TYPE[MSG_TYPE["file"] = 3] = "file";
    MSG_TYPE[MSG_TYPE["audio"] = 4] = "audio";
    MSG_TYPE[MSG_TYPE["media"] = 5] = "media";
    MSG_TYPE[MSG_TYPE["sticker"] = 6] = "sticker";
    MSG_TYPE[MSG_TYPE["interactive"] = 7] = "interactive";
    MSG_TYPE[MSG_TYPE["share_chat"] = 8] = "share_chat";
    MSG_TYPE[MSG_TYPE["share_user"] = 9] = "share_user";
})(MSG_TYPE = exports.MSG_TYPE || (exports.MSG_TYPE = {}));
const messages = async (receive_id_type, params, app_token) => {
    console.log(receive_id_type, params, app_token);
    const { data } = await (0, request_1.methodV)({
        url: `/im/v1/messages`,
        method: 'POST',
        query: { receive_id_type },
        params,
        headers: {
            Authorization: `Bearer ${app_token}`,
        },
    });
    return data;
};
exports.messages = messages;
//# sourceMappingURL=message.js.map