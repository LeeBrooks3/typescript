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
     * Returns the envelope.
     */
    protected getEnvelope(): string | null {
        return this.envelope === undefined ? null : this.envelope;
    }

    /**
     * Returns the unwrapped main data from the response payload.
     */
    protected getResponseData(response: ResponseInterface): any {
        const envelope: string | null = this.getEnvelope();

        return envelope ? response.data[envelope] : response.data;
    }

    /**
     * Makes an instance of the model.
     */
    protected abstract makeModel(attributes: object): T;
}
