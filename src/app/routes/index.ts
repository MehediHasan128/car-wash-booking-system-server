import { Router } from 'express';
import { AuthRouter } from '../modules/Auth/Auth.route';
import { ServicesRouter } from '../modules/Service/Service.route';
import { SlotRouter } from '../modules/Slot/Slot.route';
import { BookingRouter } from '../modules/Booking/Book.route';

const router = Router();

const modelRouter = [
  {
    path: '/auth',
    route: AuthRouter,
  },
  {
    path: '/services',
    route: ServicesRouter,
  },
  {
    path: '/',
    route: SlotRouter,
  },
  {
    path: '/',
    route: BookingRouter,
  },
];

modelRouter.forEach((route) => router.use(route.path, route.route));

export default router