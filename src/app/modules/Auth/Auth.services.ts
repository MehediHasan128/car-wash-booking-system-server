import { TUser } from './Auth.interface';
import { UserSignUp } from './Auth.model';

const SingUpUserIntoDB = async (payload: TUser) => {
  const result = await UserSignUp.create(payload);
  return result;
};

export const AuthServices = {
  SingUpUserIntoDB,
};
