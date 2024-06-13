import express from 'express';
import { AuthController } from './Auth.controller';
import validationRequest from '../../middlwares/ValidationRequest';
import { AuthValidation } from './Auth.validation';

const router = express.Router();

router.post('/signup', validationRequest(AuthValidation.careateUserValidationSchema), AuthController.createSignupUser);

export const AuthRouter = router;
