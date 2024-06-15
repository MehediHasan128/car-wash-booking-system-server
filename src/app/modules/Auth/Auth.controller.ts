import { AuthServices } from './Auth.services';
import { sendResponse } from '../../utils/SendResponse';
import httpStatus from 'http-status';
import CatchAsync from '../../utils/CatchAsync';

const createSignupUser = CatchAsync(async (req, res) => {
  const result = await AuthServices.SingUpUserIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User registered successfully',
    data: result,
  });
});

const loginUser = CatchAsync(async (req, res) => {
  const result = await AuthServices.loginUserIntoDB(req.body);

  const { userData, accessToken } = result;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    token: accessToken,
    message: 'User logged in successfully',
    data: userData,
  });
});

export const AuthController = {
  createSignupUser,
  loginUser,
};
