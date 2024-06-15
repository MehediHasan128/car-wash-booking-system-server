/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { user_role } from './Auth.constant';

export interface TUserSignUp {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'admin' | 'user';
  address: string;
}

export type TUserLogin = {
  email: string;
  password: string;
};

export interface UserModel extends Model<TUserSignUp> {
  isUserExistsByEmail(email: string): Promise<TUserSignUp>;
  isPasswordMatched(password: string, hashedPassword: string): Promise<boolean>;
}

export type TUserRole = keyof typeof user_role;
