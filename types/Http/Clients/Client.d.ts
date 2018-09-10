import { AxiosRequestConfig } from 'axios';
import ResponseInterface from '../Responses/ResponseInterface';
import ClientInterface from './ClientInterface';
export default abstract class Client implements ClientInterface {
    private client;
    /**
     * Creates a client instance.
     */
    constructor(config?: AxiosRequestConfig);
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
//# sourceMappingURL=Client.d.ts.map