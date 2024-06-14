import { Router } from 'express';
import { AuthRouter } from '../modules/Auth/Auth.route';
import { ServicesRouter } from '../modules/Service/Service.route';

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
];

modelRouter.forEach((route) => router.use(route.path, route.route));

export default router