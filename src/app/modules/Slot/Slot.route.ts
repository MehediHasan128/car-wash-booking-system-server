import express from 'express';
import { SlotController } from './Slot.controller';
import validationRequest from '../../middlwares/ValidationRequest';
import { SlotValidation } from './Slot.validation';
import auth from '../../middlwares/auth';

const router = express.Router();

router.post('/services/slots', validationRequest(SlotValidation.createSlotValidationSchema), SlotController.createSlot)
router.get('/slots/availability', auth(), SlotController.getSlots)

export const SlotRouter = router