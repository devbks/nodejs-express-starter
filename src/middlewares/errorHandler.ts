import { NextFunction, Request, Response } from 'express';

// error handler
const errorHandler = ((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) return next(err);

    console.error(err);
    res.status(500).json({
        success: false,
        reason: 'Unable to resolve'
    })
})

export default errorHandler;