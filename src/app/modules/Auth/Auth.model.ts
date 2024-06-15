/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { TUserSignUp, UserModel } from './Auth.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const createUserSchema = new Schema<TUserSignUp, UserModel>(
  {
    name: {
      type: String,
      required: [true, 'Name field is required'],
    },
    email: {
      type: String,
      required: [true, 'Email field is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password field is required'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      required: true,
    },
    address: {
      type: String,
      required: [true, 'Address field is required'],
    },
  },
  {
    timestamps: true,
  },
);

createUserSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

createUserSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email });
};
createUserSchema.statics.isPasswordMatched = async function (
  password,
  hashedPassword,
) {
  return await bcrypt.compare(password, hashedPassword);
};

export const User = model<TUserSignUp, UserModel>('User', createUserSchema);
