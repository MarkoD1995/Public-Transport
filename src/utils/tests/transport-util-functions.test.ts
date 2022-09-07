import { transportService } from "../../services/transport.service";

describe('Testing filterTransportData Method', () => {

    const mockResponse = [
        {
            from: {
                station: [Object],
                arrival: null,
                arrivalTimestamp: null,
                departure: '2022-09-15T20:28:00+0200',
                departureTimestamp: 1663266480,
                delay: null,
                platform: '5',
                prognosis: [Object],
                realtimeAvailability: null,
                location: [Object]
            },
            to: {
                station: [Object],
                arrival: '2022-09-15T23:44:00+0200',
                arrivalTimestamp: 1663278240,
                departure: null,
                departureTimestamp: null,
                delay: null,
                platform: '3',
                prognosis: [Object],
                realtimeAvailability: null,
                location: [Object]
            },
            duration: '00d03:16:00',
            transfers: 2,
            service: null,
            products: ['IC 6', 'IC 1', 'RE'],
            capacity1st: null,
            capacity2nd: null,
            sections: [[Object], [Object], [Object]]
        },
        {
            from: {
                station: [Object],
                arrival: null,
                arrivalTimestamp: null,
                departure: '2022-09-15T20:56:00+0200',
                departureTimestamp: 1663268160,
                delay: null,
                platform: '9',
                prognosis: [Object],
                realtimeAvailability: null,
                location: [Object]
            },
            to: {
                station: [Object],
                arrival: '2022-09-16T00:14:00+0200',
                arrivalTimestamp: 1663280040,
                departure: null,
                departureTimestamp: null,
                delay: null,
                platform: '3',
                prognosis: [Object],
                realtimeAvailability: null,
                location: [Object]
            },
            duration: '00d03:18:00',
            transfers: 2,
            service: null,
            products: ['IC 61', 'IR 15', 'RE'],
            capacity1st: null,
            capacity2nd: null,
            sections: [[Object], [Object], [Object]]
        },
        {
            from: {
                station: [Object],
                arrival: null,
                arrivalTimestamp: null,
                departure: '2022-09-15T21:28:00+0200',
                departureTimestamp: 1663270080,
                delay: null,
                platform: '8',
                prognosis: [Object],
                realtimeAvailability: null,
                location: [Object]
            },
            to: {
                station: [Object],
                arrival: '2022-09-16T00:44:00+0200',
                arrivalTimestamp: 1663281840,
                departure: null,
                departureTimestamp: null,
                delay: null,
                platform: '3',
                prognosis: [Object],
                realtimeAvailability: null,
                location: [Object]
            },
            duration: '00d03:16:00',
            transfers: 2,
            service: null,
            products: ['IC 6', 'IC 5', 'RE'],
            capacity1st: null,
            capacity2nd: null,
            sections: [[Object], [Object], [Object]]
        },
        {
            from: {
                station: [Object],
                arrival: null,
                arrivalTimestamp: null,
                departure: '2022-09-15T22:03:00+0200',
                departureTimestamp: 1663272180,
                delay: null,
                platform: '5',
                prognosis: [Object],
                realtimeAvailability: null,
                location: [Object]
            },
            to: {
                station: [Object],
                arrival: '2022-09-16T01:14:00+0200',
                arrivalTimestamp: 1663283640,
                departure: null,
                departureTimestamp: null,
                delay: null,
                platform: '3',
                prognosis: [Object],
                realtimeAvailability: null,
                location: [Object]
            },
            duration: '00d03:11:00',
            transfers: 2,
            service: null,
            products: ['IR 26', 'IC 5', 'RE'],
            capacity1st: null,
            capacity2nd: null,
            sections: [[Object], [Object], [Object]]
        }
    ]


    let functionCalculationFromMock = [
        {
            "departure": "September 15th 2022, 8:28:00 pm",
            "arrival": "September 15th 2022, 11:44:00 pm",
            "duration": "00d03:16:00",
            "transfers": 2
        },
        {
            "departure": "September 15th 2022, 8:56:00 pm",
            "arrival": "September 16th 2022, 12:14:00 am",
            "duration": "00d03:18:00",
            "transfers": 2
        },
        {
            "departure": "September 15th 2022, 9:28:00 pm",
            "arrival": "September 16th 2022, 12:44:00 am",
            "duration": "00d03:16:00",
            "transfers": 2
        },
        {
            "departure": "September 15th 2022, 10:03:00 pm",
            "arrival": "September 16th 2022, 1:14:00 am",
            "duration": "00d03:11:00",
            "transfers": 2
        }
    ]

    test('Value - undefined', () => {
        const data = transportService.filterTransportData(undefined);
        expect(data).toStrictEqual(undefined);
    });

    test('Value - []', () => {
        const data = transportService.filterTransportData([]);
        expect(data).toStrictEqual([]);
    });

    test('Value -?from=basel&to=geneve&date=2022-09-15', () => {
        const data = transportService.filterTransportData(mockResponse);

        expect(data).toStrictEqual(functionCalculationFromMock);
    });



})