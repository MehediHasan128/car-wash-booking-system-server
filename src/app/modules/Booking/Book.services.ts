import { TBooking } from "./Book.interface";
import { Booking } from "./Book.model";

const createBookinIntoDB = async(payload: TBooking) =>{
    const result = (await (await Booking.create(payload)).populate('serviceId')).populate('slotId')
    return result
};

const getAllBookingFromDB = async() =>{
    const result = await Booking.find().populate('serviceId').populate('slotId');
    return result;
}

export const BookingServices = {
    createBookinIntoDB,
    getAllBookingFromDB
}