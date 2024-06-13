import config from '../../config';
import AppError from '../../errors/AppError';
import { TUserSignUp, TUserLogin } from './Auth.interface';
import { User } from './Auth.model';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';

const SingUpUserIntoDB = async (payload: TUserSignUp) => {
  const result = await User.create(payload);
  return result;
};

const loginUserIntoDB = async (payload: TUserLogin) => {

  const user = await User.isUserExistsByEmail(payload.email);

  if(!user){
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !')
  }

  // Checking if the password is correct


  if(!(await User.isPasswordMatched(payload?.password, user?.password))){
    throw new AppError(httpStatus.FORBIDDEN, 'Incorrect Password')
  }

  const jwtpayload = {
    userEmail: user.email,
    userRole: user.role
  }

  const accessToken = jwt.sign(jwtpayload, config.jwt_token_secret as string, {expiresIn: '1d'})

  return {
    accessToken,
    user
  }
};

export const AuthServices = {
  SingUpUserIntoDB,
  loginUserIntoDB
};
