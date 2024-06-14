import { Request, Response } from "express";
import { CarWashServices } from "./Service.services";
import { sendResponse } from "../../utils/SendResponse";
import httpStatus from "http-status";

const createService = async(req: Request, res: Response) =>{
    const data = await CarWashServices.createServiceIntoDB(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Service created successfully',
        data: data
    })
};

const getAllServices = async(req: Request, res: Response) =>{
    const data = await CarWashServices.getAllServicesFromDB();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Service retrieved successfully',
        data: data
    })
}

const getSingleServicesById = async(req: Request, res: Response) =>{
    const {id} = req.params;
    const data = await CarWashServices.getServiceById(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Service retrieved successfully',
        data: data
    })
}

const updateService = async(req: Request, res: Response) =>{
    const {id} = req.params;
    const data = await CarWashServices.updateServiceById(id, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Service updated successfully',
        data: data
    })
}


export const ServiceController = {
    createService,
    getSingleServicesById,
    getAllServices,
    updateService
}