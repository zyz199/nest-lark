import { AuthService } from "../auth.service";
import { Strategy } from "passport-custom";
import { FastifyRequest } from "fastify";
declare const FeishuStrategy_base: new (...args: any[]) => Strategy;
export declare class FeishuStrategy extends FeishuStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(req: FastifyRequest): Promise<Payload>;
}
export {};
