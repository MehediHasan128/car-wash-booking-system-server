import express from 'express';
import { SlotController } from './Slot.controller';
import validationRequest from '../../middlwares/ValidationRequest';
import { SlotValidation } from './Slot.validation';
import auth from '../../middlwares/auth';
import { user_role } from '../Auth/Auth.constant';

const router = express.Router();

router.post('/services/slots', auth(user_role.admin), validationRequest(SlotValidation.createSlotValidationSchema), SlotController.createSlot)
router.get('/slots/availability', SlotController.getSlots)

export const SlotRouter = router