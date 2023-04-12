export declare enum RECEIVE_TYPE {
    'open_id' = 0,
    'user_id' = 1,
    'union_id' = 2,
    'email' = 3,
    'chat_id' = 4
}
export declare enum MSG_TYPE {
    text = 0,
    post = 1,
    image = 2,
    file = 3,
    audio = 4,
    media = 5,
    sticker = 6,
    interactive = 7,
    share_chat = 8,
    share_user = 9
}
type MESSAGES_PARAMS = {
    receive_id: string;
    content: string;
    msg_type: MSG_TYPE;
};
export declare const messages: (receive_id_type: RECEIVE_TYPE, params: MESSAGES_PARAMS, app_token: string) => Promise<any>;
export {};
