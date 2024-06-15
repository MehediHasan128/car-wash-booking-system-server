import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import httpStatus from "http-status";
import Jwt, { JwtPayload } from 'jsonwebtoken';
import config from "../config";
import { TUserRole } from "../modules/Auth/Auth.interface";

const auth = (...userRole: TUserRole[]) =>{
    return async(req: Request, res: Response, next: NextFunction) =>{
        try{
            const token = req.headers.authorization;

            if(!token){
                throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized person')
            }

            // Token valid
            Jwt.verify(token, config.jwt_token_secret as string, function(err, decoded) {
                if(err){
                    throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized person')
                }

                req.user = decoded as JwtPayload;


                const role = (decoded as JwtPayload).userRole

                if(userRole && !userRole.includes(role)){
                    throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized person')
                }
            })

            next();
        }catch(err){
            next(err)
        }
    }
};


export default auth;