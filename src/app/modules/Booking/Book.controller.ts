import { Request, Response } from "express";
import { BookingServices } from "./Book.services";
import { sendResponse } from "../../utils/SendResponse";
import httpStatus from "http-status";

const createBooking = async(req: Request, res: Response) =>{
    const data = await BookingServices.createBookinIntoDB(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Booking successful',
        data: data
    })
};


const getAllBooking = async(req: Request, res: Response) =>{
    const data = await BookingServices.getAllBookingFromDB();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'All bookings retrieved successfully',
        data: data
    })
}


export const BookingController = {
    createBooking,
    getAllBooking
}