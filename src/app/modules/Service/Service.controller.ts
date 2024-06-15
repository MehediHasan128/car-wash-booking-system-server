import { CarWashServices } from "./Service.services";
import { sendResponse } from "../../utils/SendResponse";
import httpStatus from "http-status";
import CatchAsync from "../../utils/CatchAsync";

const createService = CatchAsync(async(req, res) =>{
    const data = await CarWashServices.createServiceIntoDB(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Service created successfully',
        data: data
    })
})

const getAllServices = CatchAsync(async(req, res) =>{
    const data = await CarWashServices.getAllServicesFromDB();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Service retrieved successfully',
        data: data
    })
})

const getSingleServicesById = CatchAsync(async(req, res) =>{
    const {id} = req.params;
    const data = await CarWashServices.getServiceById(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Service retrieved successfully',
        data: data
    })
})

const updateService = CatchAsync(async(req, res) =>{
    const {id} = req.params;
    const data = await CarWashServices.updateServiceById(id, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Service updated successfully',
        data: data
    })
})

const deleteService = CatchAsync(async(req, res) =>{
    const {id} = req.params;
    const data = await CarWashServices.deleteServiceById(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Service deleted successfully',
        data: data
    })
})


export const ServiceController = {
    createService,
    getSingleServicesById,
    getAllServices,
    updateService,
    deleteService
}