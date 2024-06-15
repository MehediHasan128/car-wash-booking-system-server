import express from 'express';
import { BookingController } from './Book.controller';
import auth from '../../middlwares/auth';
import { user_role } from '../Auth/Auth.constant';

const router = express.Router();

router.post('/bookings', auth(user_role.user), BookingController.createBooking)
router.get('/bookings', auth(user_role.admin), BookingController.getAllBooking)

export const BookingRouter = router