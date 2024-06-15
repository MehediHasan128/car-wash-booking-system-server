import { z } from 'zod';

const createServiceValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty('Name field is required'),
    description: z.string().nonempty('Description field is required'),
    price: z
      .number()
      .nonnegative('Price must be a non-negative number')
      .min(0, 'Price is required'),
    duration: z
      .number()
      .nonnegative('Duration must be a non-negative number')
      .min(0, 'Duration is required'),
    isDeleted: z.boolean().optional().default(false),
  }),
});

const updateServiceValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty('Name field is required').optional(),
    description: z
      .string()
      .nonempty('Description field is required')
      .optional(),
    price: z
      .number()
      .nonnegative('Price must be a non-negative number')
      .min(0, 'Price is required')
      .optional(),
    duration: z
      .number()
      .nonnegative('Duration must be a non-negative number')
      .min(0, 'Duration is required')
      .optional(),
    isDeleted: z.boolean().optional().default(false).optional(),
  }),
});

export const ServiceValidation = {
  createServiceValidationSchema,
  updateServiceValidationSchema,
};
