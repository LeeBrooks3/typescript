import ClientInterface from '../Http/Clients/ClientInterface';
import ResponseInterface from '../Http/Responses/ResponseInterface';
import ModelInterface from '../Models/ModelInterface';

export default abstract class Repository<T = ModelInterface> {
    /**
     * A client instance.
     */
    protected client: ClientInterface;

    /**
     * The restful API endpoint for this model.
     */
    protected endpoint: string;

    /**
     * The namespace or name of the key used to wrap the main data of the payload.
     */
    protected namespace?: string = 'data';

    /**
     * Sets the client instance.
     */
    public constructor(client: ClientInterface) {
        this.client = client;
    }

    /**
     * Returns the client.
     */
    protected getClient(): ClientInterface {
        return this.client;
    }

    /**
     * Returns the endpoint.
     */
    protected getEndpoint(): string {
        return this.endpoint;
    }

    /**
     * Returns the namespace.
     */
    protected getNamespace(): string | null {
        return this.namespace === undefined ? null : this.namespace;
    }

    /**
     * Returns the unwrapped main data from the response payload.
     */
    protected getResponseData(response: ResponseInterface): any {
        const namespace: string | null = this.getNamespace();

        return namespace ? response.data[namespace] : response.data;
    }

    /**
     * Makes an instance of the model.
     */
    protected abstract makeModel(attributes: object): T;
}
