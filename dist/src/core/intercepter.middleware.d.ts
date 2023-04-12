import { NestMiddleware } from "@nestjs/common";
import type { Request, Response, NextFunction } from "express";
export declare class IntercepterMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
