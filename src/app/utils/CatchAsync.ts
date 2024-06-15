import { NextFunction, Request, Response } from "express"

const CatchAsync = (fn) =>{
    return (req: Request, res: Response, next: NextFunction) =>{
        Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    }
}

export default CatchAsync