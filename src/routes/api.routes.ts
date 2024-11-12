import {NextFunction, Request, Response, Router} from 'express';

const apiRouter = Router();

apiRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        success: true,
        data: []
    })
})

export default apiRouter;