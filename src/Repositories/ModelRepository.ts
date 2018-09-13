import ClientInterface from '../Http/Clients/ClientInterface';
import ResponseInterface from '../Http/Responses/ResponseInterface';
import ModelInterface from '../Models/ModelInterface';
import ModelRepositoryInterface from './ModelRepositoryInterface';
import Repository from './Repository';

export default abstract class ModelRepository<T = ModelInterface> extends Repository<T> implements ModelRepositoryInterface<T> { // tslint:disable-line max-line-length
    /** @inheritDoc */
    public async get(params: object = {}): Promise<T[]> {
        const client: ClientInterface = this.getClient();
        const endpoint: string = this.getEndpoint();
        const response: ResponseInterface = await client.get(endpoint, params);
        const payload: object[] = this.getResponseData(response);

        return payload.map((attributes: object) => this.makeModel(attributes));
    }

    /** @inheritDoc */
    public async create(attributes: object = {}): Promise<T> {
        const client: ClientInterface = this.getClient();
        const endpoint: string = this.getEndpoint();
        const response: ResponseInterface = await client.post(`${endpoint}`, attributes);
        const payload: object = this.getResponseData(response);

        return this.makeModel(payload);
    }

    /** @inheritDoc */
    public async find(id: number | string, params: object = {}): Promise<T> {
        const client: ClientInterface = this.getClient();
        const endpoint: string = this.getEndpoint();
        const response: ResponseInterface = await client.get(`${endpoint}/${id}`, params);
        const payload: object = this.getResponseData(response);

        return this.makeModel(payload);
    }

    /** @inheritDoc */
    public async update(model: ModelInterface, attributes: object = {}): Promise<T> {
        const client: ClientInterface = this.getClient();
        const endpoint: string = this.getEndpoint();
        const id: any = model.getRouteKey();

        const response: ResponseInterface = await client.patch(`${endpoint}/${id}`, attributes);
        const payload: object = this.getResponseData(response);

        return this.makeModel(payload);
    }

    /** @inheritDoc */
    public async delete(model: ModelInterface, params: object = {}): Promise<void> {
        const client: ClientInterface = this.getClient();
        const endpoint: string = this.getEndpoint();
        const id: any = model.getRouteKey();

        await client.delete(`${endpoint}/${id}`, params);
    }
}
