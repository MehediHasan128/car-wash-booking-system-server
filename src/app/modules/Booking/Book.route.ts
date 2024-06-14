import express from 'express';
import { BookingController } from './Book.controller';

const router = express.Router();

router.post('/bookings', BookingController.createBooking)
router.get('/bookings', BookingController.getAllBooking)

export const BookingRouter = router