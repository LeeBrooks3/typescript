import ClientInterface from './ClientInterface';
import ResponseInterface from '../Responses/ResponseInterface';
export default abstract class Client implements ClientInterface {
    private client;
    /**
     * Creates a client instance.
     */
    constructor();
    /** @inheritDoc */
    get(path: string, params: object): Promise<ResponseInterface>;
    /** @inheritDoc */
    post(path: string, params: object): Promise<ResponseInterface>;
    /** @inheritDoc */
    patch(path: string, params: object): Promise<ResponseInterface>;
    /** @inheritDoc */
    put(path: string, params: object): Promise<ResponseInterface>;
    /** @inheritDoc */
    delete(path: string, params: object): Promise<ResponseInterface>;
}
