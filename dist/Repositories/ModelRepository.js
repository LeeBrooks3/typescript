"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var ModelRepository = /** @class */ (function () {
    /**
     * @param {ClientInterface} client
     */
    function ModelRepository(client) {
        /**
         * The namespace or name of the key used to wrap the main data of the payload.
         *
         * @var {string}
         */
        this.namespace = 'data';
        this.client = client;
    }
    /** @inheritDoc */
    ModelRepository.prototype.get = function (params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var client, endpoint, response, payload;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.getClient();
                        endpoint = this.getEndpoint();
                        return [4 /*yield*/, client.get(endpoint, params)];
                    case 1:
                        response = _a.sent();
                        payload = this.getResponseData(response);
                        return [2 /*return*/, payload.map(function (attributes) { return _this.makeModel(attributes); })];
                }
            });
        });
    };
    /** @inheritDoc */
    ModelRepository.prototype.create = function (attributes) {
        if (attributes === void 0) { attributes = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var client, endpoint, response, payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.getClient();
                        endpoint = this.getEndpoint();
                        return [4 /*yield*/, client.post("" + endpoint, attributes)];
                    case 1:
                        response = _a.sent();
                        payload = this.getResponseData(response);
                        return [2 /*return*/, this.makeModel(payload)];
                }
            });
        });
    };
    /** @inheritDoc */
    ModelRepository.prototype.find = function (id, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var client, endpoint, response, payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.getClient();
                        endpoint = this.getEndpoint();
                        return [4 /*yield*/, client.get(endpoint + "/" + id, params)];
                    case 1:
                        response = _a.sent();
                        payload = this.getResponseData(response);
                        return [2 /*return*/, this.makeModel(payload)];
                }
            });
        });
    };
    /** @inheritDoc */
    ModelRepository.prototype.update = function (model, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var client, endpoint, id, response, payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.getClient();
                        endpoint = this.getEndpoint();
                        id = model.getRouteKey();
                        return [4 /*yield*/, client.patch(endpoint + "/" + id, params)];
                    case 1:
                        response = _a.sent();
                        payload = this.getResponseData(response);
                        return [2 /*return*/, this.makeModel(payload)];
                }
            });
        });
    };
    /** @inheritDoc */
    ModelRepository.prototype["delete"] = function (model, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var client, endpoint, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.getClient();
                        endpoint = this.getEndpoint();
                        id = model.getRouteKey();
                        return [4 /*yield*/, client["delete"](endpoint + "/" + id, params)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns the client.
     *
     * @return {ClientInterface}
     */
    ModelRepository.prototype.getClient = function () {
        return this.client;
    };
    /**
     * Returns the endpoint.
     *
     * @return {string}
     */
    ModelRepository.prototype.getEndpoint = function () {
        return this.endpoint;
    };
    /**
     * Returns the namespace.
     *
     * @return {string|null}
     */
    ModelRepository.prototype.getNamespace = function () {
        return this.namespace === undefined ? null : this.namespace;
    };
    /**
     * Returns the unwrapped main data from the response payload.
     *
     * @param {ResponseInterface} response
     * @return {*}
     */
    ModelRepository.prototype.getResponseData = function (response) {
        var namespace = this.getNamespace();
        return namespace ? response.data[namespace] : response.data;
    };
    return ModelRepository;
}());
exports["default"] = ModelRepository;
//# sourceMappingURL=ModelRepository.js.map