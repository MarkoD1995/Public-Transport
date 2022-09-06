import { Request, Response } from "express";
import * as StatusCodes from "../../../statusCodes.json"


export function sendResponse(res: Response, status: number, payload?: any, statusCode?: any): void {
    res.status(status).json({ status, payload, message: StatusCodes[statusCode] });
}

export function sendInvalidMethodResponse(_: Request, response: Response): void {
    response.status(405).send();
}
