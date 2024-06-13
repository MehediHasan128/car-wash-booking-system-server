import { Request, Response } from 'express';
import { AuthServices } from './Auth.services';
import {  sendResponse } from '../../utils/SendResponse';
import httpStatus from 'http-status';

const createSignupUser = async (req: Request, res: Response) => {
  const result = await AuthServices.SingUpUserIntoDB(req.body);


  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered successfully',
    data: result
  })
};

const loginUser = async(req: Request, res: Response) =>{
  const result = await AuthServices.loginUserIntoDB(req.body);

  const {user, accessToken} = result
  
  // sendResponse(res, {
  //   statusCode: httpStatus.OK,
  //   success: true,
  //   message: 'User successfully logged in',
  //   data: {
  //     user
  //   }
  // })

  res.send({
    success: true,
    statusCode: 200,
    message: 'User logged in successfully',
    token: accessToken,
    data: user
  })
}

export const AuthController = {
  createSignupUser,
  loginUser
};
