import { AxiosInstance, AxiosRequestConfig, default as axios } from 'axios';
import ResponseInterface from '../Responses/ResponseInterface';
import ClientInterface from './ClientInterface';

export default abstract class Client implements ClientInterface {
    private client: AxiosInstance;

    /**
     * Creates a client instance.
     */
    public constructor(config?: AxiosRequestConfig) {
        this.client = axios.create(config);
    }

    /** @inheritDoc */
    public async get(path: string, params: object): Promise<ResponseInterface> {
        return this.client.get(path, {
            params,
        });
    }

    /** @inheritDoc */
    public async post(path: string, params: object): Promise<ResponseInterface> {
        return this.client.post(path, params);
    }

    /** @inheritDoc */
    public async patch(path: string, params: object): Promise<ResponseInterface> {
        return this.client.patch(path, params);
    }

    /** @inheritDoc */
    public async put(path: string, params: object): Promise<ResponseInterface> {
        return this.client.put(path, params);
    }

    /** @inheritDoc */
    public async delete(path: string, params: object): Promise<ResponseInterface> {
        return this.client.delete(path, {
            params,
        });
    }
}
