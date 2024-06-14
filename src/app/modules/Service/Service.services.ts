import { TService } from "./Service.interface";
import { Services } from "./Service.model";

const createServiceIntoDB = async(payload: TService) =>{
    const result = await Services.create(payload);
    return result;
}

const getAllServicesFromDB = async() =>{
    const result = await Services.find();
    return result;
}

const getServiceById = async(serviceId: string) =>{
    const result = await Services.findById(serviceId);
    return result;
}


const updateServiceById = async(serviceId: string, payload: Partial<TService>) =>{
    const result = await Services.findByIdAndUpdate(serviceId, payload, {new: true});
    return result
}

const deleteServiceById = async(serviceId: string) =>{
    const result = await Services.findByIdAndUpdate(serviceId, {isDeleted: true}, {new: true});
    return result;
}


export const CarWashServices = {
    createServiceIntoDB,
    getServiceById,
    getAllServicesFromDB,
    updateServiceById,
    deleteServiceById
}