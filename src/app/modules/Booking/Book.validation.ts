import { z } from 'zod';
import { vehicles } from './Book.constant';

const createBookingValidationSchema = z.object({
  body: z.object({
    vehicleType: z.enum([...vehicles] as [string, ...string[]]),
    vehicleModel: z.string().nonempty('Model is required'),
    manufacturingYear: z.number(),
    registrationPlate: z.string().nonempty('Registration number is required'),
  }),
});

export const BookingValidation = {
  createBookingValidationSchema,
};
