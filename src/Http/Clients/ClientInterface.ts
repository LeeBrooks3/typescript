import ResponseInterface from '../Responses/ResponseInterface';

export default interface ClientInterface {
    /**
     * Makes a GET request.
     */
    get(uri: string, params?: object): Promise<ResponseInterface>;

    /**
     * Makes a POST request.
     */
    post(uri: string, data: object, params?: object): Promise<ResponseInterface>;

    /**
     * Makes a PATCH request.
     */
    patch(uri: string, data: object, params?: object): Promise<ResponseInterface>;

    /**
     * Makes a PUT request.
     */
    put(uri: string, data: object, params?: object): Promise<ResponseInterface>;

    /**
     * Makes a DELETE request.
     */
    delete(uri: string, params?: object): Promise<ResponseInterface>;
}
