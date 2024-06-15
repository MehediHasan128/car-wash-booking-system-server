import { BookingServices } from "./Book.services";
import { sendResponse } from "../../utils/SendResponse";
import httpStatus from "http-status";
import CatchAsync from "../../utils/CatchAsync";

const createBooking = CatchAsync(async(req, res) =>{
    const email = req.user.userEmail;

    const data = await BookingServices.createBookinIntoDB(email, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Booking successful',
        data: data
    })
})

const getAllBooking = CatchAsync(async(req, res) =>{
    const data = await BookingServices.getAllBookingFromDB();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'All bookings retrieved successfully',
        data: data
    })
});

const userBooking = CatchAsync(async(req, res) =>{

    const data = await BookingServices.getUserBooking(req.user.userEmail);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'User bookings retrieved successfully',
        data: data
    })
})


export const BookingController = {
    createBooking,
    getAllBooking,
    userBooking
}