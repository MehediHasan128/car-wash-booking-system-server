import { Request, Response } from "express";
import { SignUpServices } from "./Auth.services";

const createSignupUser = async(req: Request, res: Response) =>{
    const result = await SignUpServices.SingUpUserIntoDB(req.body);

    res.send({
        statusCode: 200,
        message: 'User signup successfully',
        data: result
    })
}


export const SignUpController = {
    createSignupUser
}