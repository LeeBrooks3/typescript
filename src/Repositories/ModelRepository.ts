import ClientInterface from '../Http/Clients/ClientInterface';
import ResponseInterface from '../Http/Responses/ResponseInterface';
import ModelInterface from '../Models/ModelInterface';
import ModelRepositoryInterface from './ModelRepositoryInterface';

export default abstract class ModelRepository<Model> implements ModelRepositoryInterface<Model> {
    /**
     * A client instance.
     *
     * @var {ClientInterface}
     */
    protected client: ClientInterface;

    /**
     * The restful API endpoint for this model.
     *
     * @var {string}
     */
    protected endpoint: string;

    /**
     * The namespace or name of the key used to wrap the main data of the payload.
     *
     * @var {string}
     */
    protected namespace?: string = 'data';

    /**
     * @param {ClientInterface} client
     */
    public constructor(client: ClientInterface) {
        this.client = client;
    }

    /** @inheritDoc */
    public async get(params: object = {}): Promise<Model[]> {
        const client: ClientInterface = this.getClient();
        const endpoint: string = this.getEndpoint();
        const response: ResponseInterface = await client.get(endpoint, params);
        const payload: object[] = this.getResponseData(response);

        return payload.map((attributes: object) => this.makeModel(attributes));
    }

    /** @inheritDoc */
    public async create(attributes: object = {}): Promise<Model> {
        const client: ClientInterface = this.getClient();
        const endpoint: string = this.getEndpoint();
        const response: ResponseInterface = await client.post(`${endpoint}`, attributes);
        const payload: object = this.getResponseData(response);

        return this.makeModel(payload);
    }

    /** @inheritDoc */
    public async find(id: number | string, params: object = {}): Promise<Model> {
        const client: ClientInterface = this.getClient();
        const endpoint: string = this.getEndpoint();
        const response: ResponseInterface = await client.get(`${endpoint}/${id}`, params);
        const payload: object = this.getResponseData(response);

        return this.makeModel(payload);
    }

    /** @inheritDoc */
    public async update(model: ModelInterface, params: object = {}): Promise<Model> {
        const client: ClientInterface = this.getClient();
        const endpoint: string = this.getEndpoint();
        const id: any = model.getRouteKey();

        const response: ResponseInterface = await client.patch(`${endpoint}/${id}`, params);
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

    /**
     * Returns the client.
     *
     * @return {ClientInterface}
     */
    protected getClient(): ClientInterface {
        return this.client;
    }

    /**
     * Returns the endpoint.
     *
     * @return {string}
     */
    protected getEndpoint(): string {
        return this.endpoint;
    }

    /**
     * Returns the namespace.
     *
     * @return {string|null}
     */
    protected getNamespace(): string | null {
        return this.namespace === undefined ? null : this.namespace;
    }

    /**
     * Returns the unwrapped main data from the response payload.
     *
     * @param {ResponseInterface} response
     * @return {*}
     */
    protected getResponseData(response: ResponseInterface): any {
        const namespace: string | null = this.getNamespace();

        return namespace ? response.data[namespace] : response.data;
    }

    /**
     * Makes an instance of the model.
     *
     * @param {object} attributes
     * @return {ModelInterface}
     */
    protected abstract makeModel(attributes: object): Model;
}
