import { transportService } from "../../services/transport.service";

describe('Testing filterTransportData Method', () => {

    test('Value - undefined', () => {
        const data = transportService.filterTransportData(undefined);
        expect(data).toStrictEqual(undefined);
    });

    test('Value - []', () => {
        const data = transportService.filterTransportData([]);
        expect(data).toStrictEqual([]);
    });

    test('Value - []', () => {
        const data = transportService.filterTransportData([]);
        expect(data).toStrictEqual([]);
    });



})