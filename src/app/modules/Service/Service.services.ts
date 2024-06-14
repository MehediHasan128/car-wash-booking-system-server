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


export const CarWashServices = {
    createServiceIntoDB,
    getServiceById,
    getAllServicesFromDB
}