import { z } from 'zod';

const careateUserValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty('Name field is required'),
    email: z
      .string()
      .email('Invalid email address')
      .nonempty('Email field is required'),
    password: z.string().nonempty('Password field is required'),
    phone: z.string().nonempty('Phone number is required'),
    role: z.enum(['admin', 'user']),
    address: z.string().nonempty('Address field is required'),
  }),
});

export const AuthValidation = {
  careateUserValidationSchema,
};
