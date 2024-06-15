import express from 'express';
import { ServiceController } from './Service.controller';
import validationRequest from '../../middlwares/ValidationRequest';
import { ServiceValidation } from './Service.validation';
import auth from '../../middlwares/auth';
import { user_role } from '../Auth/Auth.constant';

const router = express.Router();

router.post('/', auth(user_role.admin), validationRequest(ServiceValidation.createServiceValidationSchema), ServiceController.createService);
router.get('/', ServiceController.getAllServices);
router.get('/:id', ServiceController.getSingleServicesById);
router.put('/:id', auth(user_role.admin), validationRequest(ServiceValidation.updateServiceValidationSchema), ServiceController.updateService);
router.delete('/:id', auth(user_role.admin), ServiceController.deleteService);

export const ServicesRouter = router;