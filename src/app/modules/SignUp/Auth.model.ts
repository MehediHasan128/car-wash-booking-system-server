import { Schema, model } from 'mongoose';
import { TUser } from './Auth.interface';

const createUserSchema = new Schema<TUser>(
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

export const UserSignUp = model<TUser>('User', createUserSchema);
