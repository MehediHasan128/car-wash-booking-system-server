import { User } from "../Auth/Auth.model";
import { TBooking } from "./Book.interface";
import { Booking } from "./Book.model";

const createBookinIntoDB = async(userEmail: string, payload: TBooking) =>{

    const userData = await User.findOne({email: userEmail}).select('_id name email phone address')

    const customer = userData;
    payload.customer = customer as object;
    
    const result = (await (await Booking.create(payload)).populate('serviceId')).populate('slotId');
    return result
};

const getAllBookingFromDB = async() =>{
    const result = await Booking.find().populate('serviceId').populate('slotId');
    return result;
}

const getUserBooking = async() =>{
    const result = await Booking.find().populate('serviceId').populate('slotId');
    return result;
}

export const BookingServices = {
    createBookinIntoDB,
    getAllBookingFromDB,
    getUserBooking
}