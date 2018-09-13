"use strict";
exports.__esModule = true;
var Repository = /** @class */ (function () {
    /**
     * Sets the client instance.
     */
    function Repository(client) {
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
     * Returns the envelope.
     */
    Repository.prototype.getEnvelope = function () {
        return this.envelope === undefined ? null : this.envelope;
    };
    /**
     * Returns the unwrapped main data from the response payload.
     */
    Repository.prototype.getResponseData = function (response) {
        var envelope = this.getEnvelope();
        return envelope ? response.data[envelope] : response.data;
    };
    return Repository;
}());
exports["default"] = Repository;
//# sourceMappingURL=Repository.js.map