import express from 'express';
import { ServiceController } from './Service.controller';

const router = express.Router();

router.post('/', ServiceController.createService);
router.get('/', ServiceController.getAllServices);
router.get('/:id', ServiceController.getSingleServicesById);

export const ServicesRouter = router;