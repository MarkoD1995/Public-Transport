import * as moment from 'moment/moment';
export class _TransportService {


    public filterTransportData(transportData) {

        let filteredTransportData = [];
        try {

            transportData.forEach((element) => {
                const data = {
                    departure: moment
                        .unix(element.from.departureTimestamp)
                        .format('MMMM Do YYYY, h:mm:ss a'),
                    arrival: moment
                        .unix(element.to.arrivalTimestamp)
                        .format('MMMM Do YYYY, h:mm:ss a'),
                    duration: element.duration,
                    transfers: element.transfers,
                };
                filteredTransportData.push(data);

            });
        } catch (error) {
            console.log(error)
            return undefined;
        }
        return filteredTransportData;
    }
}

export const transportService = new _TransportService();