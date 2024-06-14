import express from 'express';
import { ServiceController } from './Service.controller';
import validationRequest from '../../middlwares/ValidationRequest';
import { ServiceValidation } from './Service.validation';

const router = express.Router();

router.post('/', validationRequest(ServiceValidation.createServiceValidationSchema), ServiceController.createService);
router.get('/', ServiceController.getAllServices);
router.get('/:id', ServiceController.getSingleServicesById);

export const ServicesRouter = router;