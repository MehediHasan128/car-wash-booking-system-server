/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from "express";
import httpStatus from "http-status";
import { TErrorSources } from "../interface/error";
import { ZodError } from "zod";
import { handelZodError } from "../errors/handelZodError";
import { handelValidationError } from "../errors/HandelValidationError";
import { handelCastError } from "../errors/handelCastError";
import { handelDuplicateError } from "../errors/handelDuplicateError";
import AppError from "../errors/AppError";

const GlobalErrorHandelare: ErrorRequestHandler = (err, req, res, next) =>{
    let statusCode = httpStatus.INTERNAL_SERVER_ERROR as number;
    let message = 'Something went wrong'

    let errorSources: TErrorSources = [
        {
            path: '',
            message: 'Something went wrong'
        }
    ]


    if(err instanceof ZodError){
        const simplifiedError = handelZodError(err);

        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSources = simplifiedError?.errorSources
    }else if(err?.name === 'ValidationError'){
        const simplifiedError = handelValidationError(err);

        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSources = simplifiedError.errorSources
    }else if (err?.name === 'CastError') {
        const simplifiedError = handelCastError(err);
    
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSources = simplifiedError.errorSources;
      }else if (err?.code === 11000) {
        const simplifiedError = handelDuplicateError(err);
    
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSources = simplifiedError.errorSources;
      }else if (err instanceof AppError) {
        statusCode = err?.statusCode;
        message = err.message;
        errorSources = [
          {
            path: '',
            message: err?.message
          }
        ];
      }else if (err instanceof Error) {
        message = err.message;
        errorSources = [
          {
            path: '',
            message: err?.message
          }
        ];
      }


      return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        stack: err?.stack
      });
}



export default GlobalErrorHandelare