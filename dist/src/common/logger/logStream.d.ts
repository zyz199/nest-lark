interface ILogStream {
    format?: () => void;
}
export declare class LogStream {
    trans: any;
    private customFormat;
    constructor(opt?: ILogStream);
    log(data: any): void;
    jsonParse(data: any): any;
    format(data: any): any;
}
export {};
