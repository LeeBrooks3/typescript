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
    protected namespace?: string;
    /**
     * @param {ClientInterface} client
     */
    constructor(client: ClientInterface);
    /** @inheritDoc */
    get(params?: object): Promise<Model[]>;
    /** @inheritDoc */
    create(attributes?: object): Promise<Model>;
    /** @inheritDoc */
    find(id: number | string, params?: object): Promise<Model>;
    /** @inheritDoc */
    update(model: ModelInterface, params?: object): Promise<Model>;
    /** @inheritDoc */
    delete(model: ModelInterface, params?: object): Promise<void>;
    /**
     * Returns the client.
     *
     * @return {ClientInterface}
     */
    protected getClient(): ClientInterface;
    /**
     * Returns the endpoint.
     *
     * @return {string}
     */
    protected getEndpoint(): string;
    /**
     * Returns the namespace.
     *
     * @return {string|null}
     */
    protected getNamespace(): string | null;
    /**
     * Returns the unwrapped main data from the response payload.
     *
     * @param {ResponseInterface} response
     * @return {*}
     */
    protected getResponseData(response: ResponseInterface): any;
    /**
     * Makes an instance of the model.
     *
     * @param {object} attributes
     * @return {ModelInterface}
     */
    protected abstract makeModel(attributes: object): Model;
}
//# sourceMappingURL=ModelRepository.d.ts.map