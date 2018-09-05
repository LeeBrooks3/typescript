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
        it('creates an axios instance', () => {
            client = new ExampleClient();

            expect(axios.create).toHaveBeenCalled();
        });
    });

    describe('get', () => {
        it('makes a GET request', () => {
            const fakeEndpoint: string = 'someEndpoint';
            const fakeParams: object = {};

            client.get(fakeEndpoint, fakeParams);

            expect(mockAxiosInstance.get).toHaveBeenCalledWith(fakeEndpoint, {
                params: fakeParams,
            });
        });
    });

    describe('post', () => {
        it('makes a POST request', () => {
            const fakeEndpoint: string = 'someEndpoint';
            const fakeAttributes: object = {};

            client.post(fakeEndpoint, fakeAttributes);

            expect(mockAxiosInstance.post).toHaveBeenCalledWith(fakeEndpoint, fakeAttributes);
        });
    });

    describe('patch', () => {
        it('makes a PATCH request', () => {
            const fakeEndpoint: string = 'someEndpoint';
            const fakeAttributes: object = {};

            client.patch(fakeEndpoint, fakeAttributes);

            expect(mockAxiosInstance.patch).toHaveBeenCalledWith(fakeEndpoint, fakeAttributes);
        });
    });

    describe('put', () => {
        it('makes a PUT request', () => {
            const fakeEndpoint: string = 'someEndpoint';
            const fakeAttributes: object = {};

            client.put(fakeEndpoint, fakeAttributes);

            expect(mockAxiosInstance.put).toHaveBeenCalledWith(fakeEndpoint, fakeAttributes);
        });
    });

    describe('delete', () => {
        it('makes a DELETE request', () => {
            const fakeEndpoint: string = 'someEndpoint';
            const fakeParams: object = {};

            client.delete(fakeEndpoint, fakeParams);

            expect(mockAxiosInstance.delete).toHaveBeenCalledWith(fakeEndpoint, {
                params: fakeParams,
            });
        });
    });
});
