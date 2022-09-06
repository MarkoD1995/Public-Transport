import { NextFunction, Request, Response } from "express";
import { Schemes } from './validation-schemes';
import Joi from "joi";
import { sendResponse } from "../wrappers/response-wrapper";

export async function validateRequestPayload(request: Request, response: Response, next: NextFunction) {

    try {

        const body = request.body;

        const key = request.url as keyof typeof Schemes;
        if (Schemes[key]) Joi.assert(body, Schemes[key], { abortEarly: true, allowUnknown: false });

        next();

    } catch (error) {
        console.log(error);

        let errorMessage
        if (error instanceof Error) {
            errorMessage = error.message;
            sendResponse(response, 400, { message: errorMessage });
        }
    }

}
