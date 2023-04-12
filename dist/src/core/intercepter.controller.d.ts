import { FastifyReply, FastifyRequest } from "fastify";
import { IntercepterService } from "./intercepter.service";
export declare class IntercepterController {
    private readonly intercepterService;
    constructor(intercepterService: IntercepterService);
    getApp(req: FastifyRequest, res: FastifyReply): Promise<never>;
}
