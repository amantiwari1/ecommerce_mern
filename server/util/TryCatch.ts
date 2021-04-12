import { NextFunction, Request, Response } from "express";

export const use = (fn: any) => (req: Request, res: Response, next: NextFunction) => 
            Promise.resolve(fn(req, res,next)).catch(err => next(err) )