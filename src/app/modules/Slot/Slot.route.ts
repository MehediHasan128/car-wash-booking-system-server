import express from 'express';
import { SlotController } from './Slot.controller';

const router = express.Router();

router.post('/services/slots', SlotController.createSlot)

export const SlotRouter = router