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


export const ServiceValidation = {
    createServiceValidationSchema
}