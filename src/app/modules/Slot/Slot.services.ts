import { TSlot } from "./Slot.interface";
import { Slots } from "./Slot.model";

const createSlotsIntoDB = async(payload: TSlot) =>{

const { service, date, startTime, endTime } = payload;
  const slots: TSlot[] = [];

  const timeStart = parseInt(startTime.split(':')[0], 10);
  const lastTime = parseInt(endTime.split(':')[0], 10);

  for (let i = timeStart; i < lastTime; i++) {
    const slotStartTime = `${i.toString().padStart(2, '0')}:00`;
    const slotEndTime = `${(i + 1).toString().padStart(2, '0')}:00`;

    const newSlot = new Slots({
      service,
      date,
      startTime: slotStartTime,
      endTime: slotEndTime
    });

    const savedSlot = await newSlot.save();
    slots.push(savedSlot);
  }

  return slots;
};

const getAllSlotsFromDB = async(date: string, serviceId: string) =>{
    const result = (date && serviceId)? await Slots.find({
        date: date,
        service: serviceId
    }).populate('service') : await Slots.find().populate('service') 

    return result;
}


export const SlotServices = {
    createSlotsIntoDB,
    getAllSlotsFromDB
}