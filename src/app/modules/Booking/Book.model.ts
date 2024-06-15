import { Schema, model } from 'mongoose';
import { TBooking } from './Book.interface';

const createBookingSchema = new Schema<TBooking>(
  {
    customer: {
      type: Object,
    },
    serviceId: {
      type: Schema.Types.ObjectId,
      required: [true, 'Service id is required'],
      ref: 'Services',
    },
    slotId: {
      type: Schema.Types.ObjectId,
      required: [true, 'Slot id is required'],
      ref: 'Slot',
    },
    vehicleType: {
      type: String,
      required: [true, 'Vehicle type is required'],
    },
    vehicleModel: {
      type: String,
      required: [true, 'Model is required'],
    },
    manufacturingYear: {
      type: Number,
      required: [true, 'Manufacturing year is required'],
    },
    registrationPlate: {
      type: String,
      required: [true, 'Registration number is required'],
    },
  },
  {
    timestamps: true,
  },
);

export const Booking = model<TBooking>('Book', createBookingSchema);
