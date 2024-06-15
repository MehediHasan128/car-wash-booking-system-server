import express from 'express';
import { BookingController } from './Book.controller';
import auth from '../../middlwares/auth';
import { user_role } from '../Auth/Auth.constant';
import validationRequest from '../../middlwares/ValidationRequest';
import { BookingValidation } from './Book.validation';

const router = express.Router();

router.post(
  '/bookings',
  auth(user_role.user),
  validationRequest(BookingValidation.createBookingValidationSchema),
  BookingController.createBooking,
);
router.get('/bookings', auth(user_role.admin), BookingController.getAllBooking);
router.get('/my-bookings', auth(user_role.user), BookingController.userBooking);
export const BookingRouter = router;
