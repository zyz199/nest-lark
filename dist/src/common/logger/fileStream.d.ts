/// <reference types="node" />
/// <reference types="node" />
import { LogStream } from "./logStream";
export declare class FileStream extends LogStream {
    private options;
    private _stream;
    private _timer;
    private _bufSize;
    private _buf;
    private lastPlusName;
    private _RotateTimer;
    constructor(options: any);
    log(data: any): void;
    reload(): void;
    reloadStream(): void;
    close(): void;
    end(): void;
    _write(buf: any): void;
    _createStream(): import("fs").WriteStream;
    _closeStream(): void;
    flush(): void;
    _createInterval(): NodeJS.Timer;
    _closeInterval(): void;
    _createRotateInterval(): NodeJS.Timer;
    _checkRotate(): void;
    _getPlusName(): string;
    renameOrDelete(srcPath: any, targetPath: any): Promise<void>;
}
