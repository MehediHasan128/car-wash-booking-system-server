import { Router } from 'express';
import { AuthRouter } from '../modules/SignUp/Auth.route';

const router = Router();

const modelRouter = [
  {
    path: '/auth',
    route: AuthRouter,
  },
];

modelRouter.forEach((route) => router.use(route.path, route.route));

export default router