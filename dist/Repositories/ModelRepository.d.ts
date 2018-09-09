import ClientInterface from '../Http/Clients/ClientInterface';
import ResponseInterface from '../Http/Responses/ResponseInterface';
import ModelInterface from '../Models/ModelInterface';
import ModelRepositoryInterface from './ModelRepositoryInterface';
export default abstract class ModelRepository<Model> implements ModelRepositoryInterface<Model> {
    protected client: ClientInterface;
    protected endpoint: string;
    protected namespace?: string;
    /**
     * @param {ClientInterface} client
     */
    constructor(client: ClientInterface);
    /**
     * Returns an array of the model.
     *
     * @param {object} params
     * @return {Promise<ModelInterface[]>}
     */
    get(params?: object): Promise<Model[]>;
    /**
     * Creates and returns an instance of the model.
     *
     * @param {object} attributes
     * @return {Promise<object>}
     */
    create(attributes?: object): Promise<Model>;
    /**
     * Returns an instance of the model.
     *
     * @param {number | string} id
     * @param {object} params
     * @return {Promise<ModelInterface>}
     */
    find(id: number | string, params?: object): Promise<Model>;
    /**
     * Updates and returns an instance of the model.
     *
     * @param {ModelInterface} model
     * @param {object} params
     * @return {Promise<ModelInterface>}
     */
    update(model: ModelInterface, params?: object): Promise<Model>;
    /**
     * Deletes an instance of the model.
     *
     * @param {ModelInterface} model
     * @param {object} params
     * @return {Promise<void>}
     */
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
