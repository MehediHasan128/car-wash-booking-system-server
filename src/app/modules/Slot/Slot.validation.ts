import { z } from 'zod';

const createSlotValidationSchema = z.object({
  body: z.object({
    date: z.string().nonempty({ message: 'Date is required' }),
    startTime: z.string().nonempty({ message: 'Start time is required' }),
    endTime: z.string().nonempty({ message: 'End time is required' }),
    isBooked: z.enum(['available', 'booked', 'pending']).default('available'),
  }),
});


export const SlotValidation = {
    createSlotValidationSchema
}
