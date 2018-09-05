import * as faker from 'faker';
import ClientInterface from '../../../../src/Http/Clients/ClientInterface';
import ResponseInterface from '../../../../src/Http/Responses/ResponseInterface';
import Model from '../../../../src/Models/Model';
import ModelRepository from '../../../../src/Repositories/ModelRepository';
import ExampleModel from '../../../Examples/Models/ExampleModel';
import ExampleModelRepository from '../../../Examples/Repositories/ExampleModelRepository';

describe('Repositories/ModelRepository', () => {
    let modelRepository: ModelRepository<ExampleModel>;
    let mockClient: ClientInterface;
    let mockResponse: ResponseInterface;
    let mockResponseData: any;

    beforeEach(() => {
        mockResponseData = {
            data: {},
        };

        mockResponse = {
            data: mockResponseData,
            headers: {},
            status: 200,
            statusText: 'OK',
        };

        mockClient = {
            delete: jest.fn(() => Promise.resolve(mockResponse)),
            get: jest.fn(() => Promise.resolve(mockResponse)),
            patch: jest.fn(() => Promise.resolve(mockResponse)),
            post: jest.fn(() => Promise.resolve(mockResponse)),
            put: jest.fn(() => Promise.resolve(mockResponse)),
        };

        modelRepository = new ExampleModelRepository(mockClient);
    });

    describe('get', () => {
        it('should make a GET request to retrieve a listing of the resource', async () => {
            const fakeEndpoint: string = 'someEndpoint';
            const fakeParams: object = {};

            mockResponseData.data = [{}];

            const result: ExampleModel[] = await modelRepository.get(fakeParams);

            expect(mockClient.get).toHaveBeenCalledWith(fakeEndpoint, fakeParams);
            expect(result[0]).toBeInstanceOf(ExampleModel);
        });
    });

    describe('create', () => {
        it('should make a POST request to create a new resource', async () => {
            const fakeEndpoint: string = 'someEndpoint';
            const fakeAttributes: object = {};

            const result: ExampleModel = await modelRepository.create(fakeAttributes);

            expect(mockClient.post).toHaveBeenCalledWith(fakeEndpoint, fakeAttributes);
            expect(result).toBeInstanceOf(ExampleModel);
        });
    });

    describe('find', () => {
        it('should make a GET request to retrieve the specified resource', async () => {
            const fakeId: number = 1;
            const fakeEndpoint: string = `someEndpoint/${fakeId}`;
            const fakeParams: object = {};

            const result: ExampleModel = await modelRepository.find(fakeId, fakeParams);

            expect(mockClient.get).toHaveBeenCalledWith(fakeEndpoint, fakeParams);
            expect(result).toBeInstanceOf(ExampleModel);
        });
    });

    describe('update', () => {
        it('should make a PATCH request', async () => {
            const fakeRouteKeyValue: string = faker.random.uuid();
            const fakeModel: Model = new ExampleModel({
                uuid: fakeRouteKeyValue,
            });
            const fakeEndpoint: string = `someEndpoint/${fakeRouteKeyValue}`;
            const fakeAttributes: object = {};

            const result: ExampleModel = await modelRepository.update(fakeModel, fakeAttributes);

            expect(mockClient.patch).toHaveBeenCalledWith(fakeEndpoint, fakeAttributes);
            expect(result).toBeInstanceOf(ExampleModel);
        });
    });

    describe('delete', () => {
        it('should make a DELETE request', async () => {
            const fakeRouteKeyValue: string = faker.random.uuid();
            const fakeModel: Model = new ExampleModel({
                uuid: fakeRouteKeyValue,
            });
            const fakeEndpoint: string = `someEndpoint/${fakeRouteKeyValue}`;
            const fakeParams: object = {};

            await modelRepository.delete(fakeModel, fakeParams);

            expect(mockClient.delete).toHaveBeenCalledWith(fakeEndpoint, fakeParams);
        });
    });
});
