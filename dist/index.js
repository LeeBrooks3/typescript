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
define("Http/Responses/ResponseInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("Http/Clients/ClientInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("Http/Clients/Client", ["require", "exports", "axios"], function (require, exports, axios_1) {
    "use strict";
    exports.__esModule = true;
    var Client = /** @class */ (function () {
        /**
         * Creates a client instance.
         */
        function Client() {
            this.client = axios_1["default"].create();
        }
        /** @inheritDoc */
        Client.prototype.get = function (path, params) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.client.get(path, {
                            params: params
                        })];
                });
            });
        };
        /** @inheritDoc */
        Client.prototype.post = function (path, params) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.client.post(path, params)];
                });
            });
        };
        /** @inheritDoc */
        Client.prototype.patch = function (path, params) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.client.patch(path, params)];
                });
            });
        };
        /** @inheritDoc */
        Client.prototype.put = function (path, params) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.client.put(path, params)];
                });
            });
        };
        /** @inheritDoc */
        Client.prototype["delete"] = function (path, params) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.client["delete"](path, {
                            params: params
                        })];
                });
            });
        };
        return Client;
    }());
    exports["default"] = Client;
});
define("Models/ModelInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("Models/Model", ["require", "exports", "lodash", "moment"], function (require, exports, _, moment) {
    "use strict";
    exports.__esModule = true;
    var Model = /** @class */ (function () {
        /**
         * @param {object} attributes
         */
        function Model(attributes) {
            if (attributes === void 0) { attributes = {}; }
            /**
             * The model's attributes.
             *
             * @var {object}
             */
            this.attributes = {};
            /**
             * The attributes that should be cast to native types.
             *
             * @var {object}
             */
            this.casts = {};
            /**
             * The attributes that are mass assignable.
             *
             * @var {array}
             */
            this.fillable = [];
            /**
             * The attributes that aren't mass assignable.
             *
             * @var {array}
             */
            this.guarded = [];
            /**
             * The model attribute's original state.
             *
             * @var array
             */
            this.original = {};
            /**
             * The primary key for the model.
             *
             * @var string
             */
            this.primaryKey = 'id';
            this.setAttributes(attributes, true);
        }
        /** @inheritDoc */
        Model.prototype.fill = function (attributes) {
            var _this = this;
            _.forEach(attributes, function (value, key) {
                if (_this.isFillable(key)) {
                    _this.setAttribute(key, value);
                }
            });
            return this;
        };
        /** @inheritDoc */
        Model.prototype.getAttribute = function (key) {
            var value = this.attributes[key];
            if (this.hasCast(key)) {
                return this.castAttribute(key, value);
            }
            return value;
        };
        /** @inheritDoc */
        Model.prototype.getAttributes = function () {
            var _this = this;
            var attributes = {};
            _.forEach(_.keys(this.attributes), function (key) {
                attributes[key] = _this.getAttribute(key);
            });
            return attributes;
        };
        /** @inheritDoc */
        Model.prototype.getChangedAttributes = function () {
            var _this = this;
            var attributes = this.getAttributes();
            var changes = {};
            _.forEach(attributes, function (value, key) {
                if (_this.isChangedAttribute(key)) {
                    changes[key] = value;
                }
            });
            return changes;
        };
        /** @inheritDoc */
        Model.prototype.getKey = function () {
            var key = this.getKeyName();
            return this.getAttribute(key);
        };
        /** @inheritDoc */
        Model.prototype.getKeyName = function () {
            return this.primaryKey;
        };
        /** @inheritDoc */
        Model.prototype.getOriginalAttribute = function (key) {
            return this.original[key];
        };
        /** @inheritDoc */
        Model.prototype.getOriginalAttributes = function () {
            return this.original;
        };
        /** @inheritDoc */
        Model.prototype.getRouteKey = function () {
            return this.getAttribute(this.getRouteKeyName());
        };
        /** @inheritDoc */
        Model.prototype.getRouteKeyName = function () {
            return this.getKeyName();
        };
        /** @inheritDoc */
        Model.prototype.isChanged = function () {
            return !_.isEmpty(this.getChangedAttributes());
        };
        /** @inheritDoc */
        Model.prototype.isChangedAttribute = function (key) {
            var original = this.getOriginalAttribute(key);
            var current = this.getAttribute(key);
            if (this.hasCast(key)) {
                return this.castAttribute(key, current) !== this.castAttribute(key, original);
            }
            return current !== original;
        };
        /** @inheritDoc */
        Model.prototype.setAttribute = function (key, value, isOriginal) {
            var _this = this;
            if (isOriginal === void 0) { isOriginal = false; }
            this.attributes[key] = value;
            if (isOriginal) {
                this.original[key] = value;
            }
            if (this[key] === undefined) {
                this[key] = this.castAttribute(key, value);
                Object.defineProperty(this, key, {
                    get: function () { return _this.getAttribute(key); },
                    set: function (newValue) { return _this.setAttribute(key, newValue); }
                });
            }
            return this;
        };
        /** @inheritDoc */
        Model.prototype.setAttributes = function (attributes, isOriginal) {
            var _this = this;
            if (isOriginal === void 0) { isOriginal = false; }
            _.forEach(attributes, function (value, key) {
                _this.setAttribute(key, value, isOriginal);
            });
            return this;
        };
        /**
         * Cast an attribute to a native PHP type.
         *
         * @param {string} key
         * @param {*} value
         * @return {*}
         */
        Model.prototype.castAttribute = function (key, value) {
            if (_.isNull(value)) {
                return value;
            }
            var casts = this.getCasts();
            switch (casts[key]) {
                case 'int':
                case 'integer':
                    return Number(value);
                case 'real':
                case 'float':
                case 'double':
                    return Number(value);
                case 'string':
                    return String(value);
                case 'bool':
                case 'boolean':
                    return Boolean(value);
                case 'date':
                    return moment(value).startOf('day');
                case 'datetime':
                    return moment(value).startOf('second');
                case 'timestamp':
                    return moment(value).unix();
                default:
                    return value;
            }
        };
        /**
         * Get the casts array.
         *
         * @return {object}
         */
        Model.prototype.getCasts = function () {
            return this.casts;
        };
        /**
         * Get the fillable attributes for the model.
         *
         * @return {string[]}
         */
        Model.prototype.getFillable = function () {
            return this.fillable;
        };
        /**
         * Get the guarded attributes for the model.
         *
         * @return {string[]}
         */
        Model.prototype.getGuarded = function () {
            return this.guarded;
        };
        /**
         * Determine whether an attribute should be cast to a native type.
         *
         * @param {string} key
         * @param {string[]} types
         * @return {boolean}
         */
        Model.prototype.hasCast = function (key, types) {
            if (types === void 0) { types = []; }
            var casts = this.getCasts();
            if (_.has(casts, key)) {
                return types.length > 0 ? _.includes(types, casts[key]) : true;
            }
            return false;
        };
        /**
         * Determine if the given attribute may be mass assigned.
         *
         * @param {string} key
         * @return {boolean}
         */
        Model.prototype.isFillable = function (key) {
            return _.includes(this.getFillable(), key) && !_.includes(this.getGuarded(), key);
        };
        return Model;
    }());
    exports["default"] = Model;
});
define("Repositories/ModelRepositoryInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("Repositories/ModelRepository", ["require", "exports"], function (require, exports) {
    "use strict";
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
});
//# sourceMappingURL=index.js.map