"use strict";
exports.__esModule = true;
var Repository = /** @class */ (function () {
    /**
     * @param {ClientInterface} client
     */
    function Repository(client) {
        /**
         * The namespace or name of the key used to wrap the main data of the payload.
         *
         * @var {string}
         */
        this.namespace = 'data';
        this.client = client;
    }
    /**
     * Returns the client.
     *
     * @return {ClientInterface}
     */
    Repository.prototype.getClient = function () {
        return this.client;
    };
    /**
     * Returns the endpoint.
     *
     * @return {string}
     */
    Repository.prototype.getEndpoint = function () {
        return this.endpoint;
    };
    /**
     * Returns the namespace.
     *
     * @return {string|null}
     */
    Repository.prototype.getNamespace = function () {
        return this.namespace === undefined ? null : this.namespace;
    };
    /**
     * Returns the unwrapped main data from the response payload.
     *
     * @param {ResponseInterface} response
     * @return {*}
     */
    Repository.prototype.getResponseData = function (response) {
        var namespace = this.getNamespace();
        return namespace ? response.data[namespace] : response.data;
    };
    return Repository;
}());
exports["default"] = Repository;
//# sourceMappingURL=Repository.js.map