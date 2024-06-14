import express from 'express';
import { ServiceController } from './Service.controller';

const router = express.Router();

router.post('/', ServiceController.createService);
router.get('/:id', ServiceController.getSingleServicesById);

export const ServicesRouter = router;