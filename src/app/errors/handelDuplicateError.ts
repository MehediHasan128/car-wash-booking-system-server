/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import { TErrorSources, TGenericErrorResponse } from "../interface/error";

export const handelDuplicateError = (err: any) : TGenericErrorResponse =>{
    const match = err.message.match(/"([^"]*)"/);
    const extracted_message = match && match[1]

    const errorSources: TErrorSources = [
        {
            path: '',
            message: `${extracted_message} is already exists`
        }
    ]


    const statusCode = httpStatus.BAD_REQUEST;

    return {
        statusCode,
        message: 'Validation error',
        errorSources,
      };
}