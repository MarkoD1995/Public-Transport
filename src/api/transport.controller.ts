import { Axios } from "axios";
import { Request, Response } from "express";
import { transportService } from "../services/transport.service";
import { env } from "../utils/wrappers/env-wrapper";
import { sendResponse } from "../utils/wrappers/response-wrapper";

export class TransportController {

    /**
    *  A route for calculating transport time between two places.
    */
    public static async calculateTransportTime(request: Request, response: Response): Promise<any> {
        console.log('usao u metodu');

        const axios: Axios = require('axios').default;
        try {
            let filteredTransportData = [];
            try {
                const url = env.transport_api_url;
                const data = {
                    params: {
                        from: request.query.from,
                        to: request.query.to,
                        date: request.query.date
                    }
                }
                const responseFromApi = await axios.get(url, data);

                filteredTransportData = transportService.filterTransportData(responseFromApi.data.connections);
            } catch (error) {
                console.error(error);
                sendResponse(response, 400, null, 10001);
                return;
            }
            sendResponse(response, 200, filteredTransportData, 20001);
        } catch (error) {
            console.log(error.message);
            sendResponse(response, 400, { message: error.message });
            return

        }
    }
}