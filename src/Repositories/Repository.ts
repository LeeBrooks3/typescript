import ClientInterface from '../Http/Clients/ClientInterface';
import ResponseInterface from '../Http/Responses/ResponseInterface';
import ModelInterface from '../Models/ModelInterface';

export default abstract class Repository<T = ModelInterface> {
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
    protected abstract makeModel(attributes: object): T;
}
