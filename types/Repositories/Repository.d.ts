import ClientInterface from '../Http/Clients/ClientInterface';
import ResponseInterface from '../Http/Responses/ResponseInterface';
export default abstract class Repository<Model> {
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
//# sourceMappingURL=Repository.d.ts.map