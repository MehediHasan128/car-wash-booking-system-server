import { Request, Response } from "express";
import { SlotServices } from "./Slot.services";
import { sendResponse } from "../../utils/SendResponse";
import httpStatus from "http-status";

const createSlot = async(req: Request, res: Response) =>{
    const result = await SlotServices.createSlotsIntoDB(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Slots created successfully',
        data: result
    })
};


export const SlotController = {
    createSlot
}