import { default as axios } from 'axios';
import Client from '../../../../src/Http/Clients/Client';
import ExampleClient from '../../../Examples/Http/Clients/ExampleClient';

jest.mock('axios');

describe('Http/Clients/Client', () => {
    let client: Client;
    let mockAxiosInstance: any;

    beforeEach(() => {
        mockAxiosInstance = {
            delete: jest.fn(),
            get: jest.fn(),
            patch: jest.fn(),
            post: jest.fn(),
            put: jest.fn(),
        };

        axios.create = jest.fn(() => mockAxiosInstance);

        client = new ExampleClient();
    });

    describe('constructor', () => {
        it('should create an axios instance', () => {
            client = new ExampleClient();

            expect(axios.create).toHaveBeenCalled();
        });
    });

    describe('get', () => {
        it('should make a GET request', () => {
            const fakeEndpoint: string = 'someEndpoint';
            const fakeParams: any = {
                headers: {},
            };

            client.get(fakeEndpoint, fakeParams);

            expect(mockAxiosInstance.get).toHaveBeenCalledWith(fakeEndpoint, {
                headers: {},
                params: {},
            });
        });
    });

    describe('post', () => {
        it('should make a POST request', () => {
            const fakeEndpoint: string = 'someEndpoint';
            const fakeAttributes: object = {};

            client.post(fakeEndpoint, fakeAttributes);

            expect(mockAxiosInstance.post).toHaveBeenCalledWith(fakeEndpoint, fakeAttributes);
        });
    });

    describe('patch', () => {
        it('should make a PATCH request', () => {
            const fakeEndpoint: string = 'someEndpoint';
            const fakeAttributes: object = {};

            client.patch(fakeEndpoint, fakeAttributes);

            expect(mockAxiosInstance.patch).toHaveBeenCalledWith(fakeEndpoint, fakeAttributes);
        });
    });

    describe('put', () => {
        it('should make a PUT request', () => {
            const fakeEndpoint: string = 'someEndpoint';
            const fakeAttributes: object = {};

            client.put(fakeEndpoint, fakeAttributes);

            expect(mockAxiosInstance.put).toHaveBeenCalledWith(fakeEndpoint, fakeAttributes);
        });
    });

    describe('delete', () => {
        it('should make a DELETE request', () => {
            const fakeEndpoint: string = 'someEndpoint';

            client.delete(fakeEndpoint);

            expect(mockAxiosInstance.delete).toHaveBeenCalledWith(fakeEndpoint);
        });
    });
});
