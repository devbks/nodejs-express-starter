import { NextFunction, Request, Response } from "express";

const asyncHandler = <T extends Function>(callback: T) => (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(callback(req, res, next)).catch(next);
}

export default asyncHandler;
