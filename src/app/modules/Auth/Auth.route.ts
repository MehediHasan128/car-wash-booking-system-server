import express from 'express';
import { AuthController } from './Auth.controller';
import validationRequest from '../../middlwares/ValidationRequest';
import { AuthValidation } from './Auth.validation';

const router = express.Router();

router.post(
  '/signup',
  validationRequest(AuthValidation.careateUserValidationSchema),
  AuthController.createSignupUser,
);
router.post(
  '/login',
  validationRequest(AuthValidation.loginValidationSchema),
  AuthController.loginUser,
);

export const AuthRouter = router;
