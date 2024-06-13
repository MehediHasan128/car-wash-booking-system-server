import express from 'express';
import { SignUpController } from './Auth.controller';

const router = express.Router();

router.post('/signup', SignUpController.createSignupUser);

export const AuthRouter = router;
