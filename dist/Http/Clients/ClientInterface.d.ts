import ResponseInterface from '../Responses/ResponseInterface';
export default interface ClientInterface {
    /**
     * Makes a GET request.
     *
     * @param {string} uri
     * @param {object} params
     * @return {Promise<ResponseInterface>}
     */
    get(uri: string, params: object): Promise<ResponseInterface>;
    /**
     * Makes a POST request.
     *
     * @param {string} uri
     * @param {object} params
     * @return {Promise<ResponseInterface>}
     */
    post(uri: string, params: object): Promise<ResponseInterface>;
    /**
     * Makes a PATCH request.
     *
     * @param {string} uri
     * @param {object} params
     * @return {Promise<ResponseInterface>}
     */
    patch(uri: string, params: object): Promise<ResponseInterface>;
    /**
     * Makes a PUT request.
     *
     * @param {string} uri
     * @param {object} params
     * @return {Promise<ResponseInterface>}
     */
    put(uri: string, params: object): Promise<ResponseInterface>;
    /**
     * Makes a DELETE request.
     *
     * @param {string} uri
     * @param {object} params
     * @return {Promise<ResponseInterface>}
     */
    delete(uri: string, params: object): Promise<ResponseInterface>;
}
