import { HttpException } from '@nestjs/common';
type BusinessError = {
    code: number;
    message: string;
};
export declare class BusinessException extends HttpException {
    constructor(err: BusinessError | string);
    static throwForbidden(): void;
}
export {};
