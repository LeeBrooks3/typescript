import { AxiosInstance, AxiosRequestConfig, default as axios } from 'axios';
import * as _ from 'lodash';
import RequestParamsInterface from '../Requests/RequestParamsInterface';
import ResponseInterface from '../Responses/ResponseInterface';
import ClientInterface from './ClientInterface';

export default class Client implements ClientInterface {
    /**
     * An axios client instance.
     */
    private client: AxiosInstance;

    /**
     * Creates the axios client instance.
     */
    public constructor(config?: AxiosRequestConfig) {
        this.client = axios.create(config);
    }

    /** @inheritDoc */
    public async get(path: string, params?: RequestParamsInterface): Promise<ResponseInterface> {
        return params ? this.client.get(path, this.processParams(params)) : this.client.get(path);
    }

    /** @inheritDoc */
    public async post(path: string, data: object, params?: RequestParamsInterface): Promise<ResponseInterface> {
        return params ? this.client.post(path, data, this.processParams(params)) : this.client.post(path, data);
    }

    /** @inheritDoc */
    public async patch(path: string, data: object, params?: RequestParamsInterface): Promise<ResponseInterface> {
        return params ? this.client.patch(path, data, this.processParams(params)) : this.client.patch(path, data);
    }

    /** @inheritDoc */
    public async put(path: string, data: object, params?: RequestParamsInterface): Promise<ResponseInterface> {
        return params ? this.client.put(path, data, this.processParams(params)) : this.client.put(path, data);
    }

    /** @inheritDoc */
    public async delete(path: string, params?: RequestParamsInterface): Promise<ResponseInterface> {
        return params ? this.client.delete(path, this.processParams(params)) : this.client.delete(path);
    }

    /**
     * Processes the given request parameters.
     */
    private processParams(requestParams: RequestParamsInterface): AxiosRequestConfig {
        const params: AxiosRequestConfig = {
            params: _.omit(requestParams, ['headers']),
        };

        const headers: object = _.get(requestParams, 'headers');

        if (headers) {
            params.headers = headers;
        }

        return params;
    }
}
