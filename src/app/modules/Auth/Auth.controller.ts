import { Request, Response } from 'express';
import { AuthServices } from './Auth.services';
import {  sendResponse } from '../../utils/SendResponse';
import httpStatus from 'http-status';

const createSignupUser = async (req: Request, res: Response) => {
  const result = await AuthServices.SingUpUserIntoDB(req.body);


  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User registered successfully',
    data: result
  })
};

const loginUser = async(req: Request, res: Response) =>{
  const result = await AuthServices.loginUserIntoDB(req.body);

  const {userData, accessToken} = result;
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    token: accessToken,
    message: 'User logged in successfully',
    data: userData
  })
}

export const AuthController = {
  createSignupUser,
  loginUser
};
