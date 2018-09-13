import { AxiosRequestConfig } from 'axios';
import RequestParamsInterface from '../Requests/RequestParamsInterface';
import ResponseInterface from '../Responses/ResponseInterface';
import ClientInterface from './ClientInterface';
export default class Client implements ClientInterface {
    /**
     * An axios client instance.
     */
    private client;
    /**
     * Creates the axios client instance.
     */
    constructor(config?: AxiosRequestConfig);
    /** @inheritDoc */
    get(path: string, params?: RequestParamsInterface): Promise<ResponseInterface>;
    /** @inheritDoc */
    post(path: string, data: object, params?: RequestParamsInterface): Promise<ResponseInterface>;
    /** @inheritDoc */
    patch(path: string, data: object, params?: RequestParamsInterface): Promise<ResponseInterface>;
    /** @inheritDoc */
    put(path: string, data: object, params?: RequestParamsInterface): Promise<ResponseInterface>;
    /** @inheritDoc */
    delete(path: string, params?: RequestParamsInterface): Promise<ResponseInterface>;
    /**
     * Processes the given request parameters.
     */
    private processParams;
}
//# sourceMappingURL=Client.d.ts.map