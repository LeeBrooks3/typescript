"use strict";
exports.__esModule = true;
var Repository = /** @class */ (function () {
    /**
     * Sets the client instance.
     */
    function Repository(client) {
        /**
         * The namespace or name of the key used to wrap the main data of the payload.
         */
        this.namespace = 'data';
        this.client = client;
    }
    /**
     * Returns the client.
     */
    Repository.prototype.getClient = function () {
        return this.client;
    };
    /**
     * Returns the endpoint.
     */
    Repository.prototype.getEndpoint = function () {
        return this.endpoint;
    };
    /**
     * Returns the namespace.
     */
    Repository.prototype.getNamespace = function () {
        return this.namespace === undefined ? null : this.namespace;
    };
    /**
     * Returns the unwrapped main data from the response payload.
     */
    Repository.prototype.getResponseData = function (response) {
        var namespace = this.getNamespace();
        return namespace ? response.data[namespace] : response.data;
    };
    return Repository;
}());
exports["default"] = Repository;
//# sourceMappingURL=Repository.js.map