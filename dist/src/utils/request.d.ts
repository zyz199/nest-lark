import { Method } from "axios";
declare const request: ({ url, option }: {
    url: any;
    option?: {};
}) => Promise<import("axios").AxiosResponse<any, any>>;
interface IMethodV {
    url: string;
    method?: Method;
    headers?: {
        [key: string]: string;
    };
    params?: Record<string, unknown>;
    query?: Record<string, unknown>;
}
export interface IRequest {
    data: any;
    code: number;
}
declare const methodV: ({ url, method, headers, params, query, }: IMethodV) => Promise<IRequest>;
export { request, methodV };
