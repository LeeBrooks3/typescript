"use strict";
exports.__esModule = true;
var _ = require("lodash");
var moment = require("moment");
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
//# sourceMappingURL=Model.js.map