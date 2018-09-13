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
     * The envelope or key used to wrap the main data of the payload.
     */
    protected envelope?: string;
    /**
     * Sets the client instance.
     */
    constructor(client: ClientInterface);
    /**
     * Returns the client.
     */
    protected getClient(): ClientInterface;
    /**
     * Returns the endpoint.
     */
    protected getEndpoint(): string;
    /**
     * Returns the envelope.
     */
    protected getEnvelope(): string | null;
    /**
     * Returns the unwrapped main data from the response payload.
     */
    protected getResponseData(response: ResponseInterface): any;
    /**
     * Makes an instance of the model.
     */
    protected abstract makeModel(attributes: object): T;
}
//# sourceMappingURL=Repository.d.ts.map