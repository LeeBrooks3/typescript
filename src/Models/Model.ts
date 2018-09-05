import * as _ from 'lodash';
import * as moment from 'moment';
import ModelInterface from './ModelInterface';

export default abstract class Model implements ModelInterface {
    /**
     * The model's attributes.
     *
     * @var {object}
     */
    protected attributes: object = {};

    /**
     * The attributes that should be cast to native types.
     *
     * @var {object}
     */
    protected casts: object = {};

    /**
     * The attributes that are mass assignable.
     *
     * @var {array}
     */
    protected fillable: string[] = [];

    /**
     * The attributes that aren't mass assignable.
     *
     * @var {array}
     */
    protected guarded: string[] = [];

    /**
     * The model attribute's original state.
     *
     * @var array
     */
    protected original: object = {};

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected primaryKey: string = 'id';

    /**
     * @param {object} attributes
     */
    public constructor(attributes: object = {}) {
        this.setAttributes(attributes, true);
    }

    /** @inheritDoc */
    public fill(attributes: object): this {
        _.forEach(attributes, (value: any, key: string) => {
            if (this.isFillable(key)) {
                this.setAttribute(key, value);
            }
        });

        return this;
    }

    /** @inheritDoc */
    public getAttribute(key: string): any {
        const value: any = this.attributes[key];

        if (this.hasCast(key)) {
            return this.castAttribute(key, value);
        }

        return value;
    }

    /** @inheritDoc */
    public getAttributes(): object {
        const attributes: object = {};

        _.forEach(_.keys(this.attributes), (key: string) => {
            attributes[key] = this.getAttribute(key);
        });

        return attributes;
    }

    /** @inheritDoc */
    public getChangedAttributes(): object {
        const attributes: object = this.getAttributes();
        const changes: object = {};

        _.forEach(attributes, (value: any, key: string) => {
            if (this.isChangedAttribute(key)) {
                changes[key] = value;
            }
        });

        return changes;
    }

    /** @inheritDoc */
    public getKey(): any {
        const key: string = this.getKeyName();

        return this.getAttribute(key);
    }

    /** @inheritDoc */
    public getKeyName(): string {
        return this.primaryKey;
    }

    /** @inheritDoc */
    public getOriginalAttribute(key: string): any {
        return this.original[key];
    }

    /** @inheritDoc */
    public getOriginalAttributes(): object {
        return this.original;
    }

    /** @inheritDoc */
    public getRouteKey(): any {
        return this.getAttribute(this.getRouteKeyName());
    }

    /** @inheritDoc */
    public getRouteKeyName(): string {
        return this.getKeyName();
    }

    /** @inheritDoc */
    public isChanged(): boolean {
        return !_.isEmpty(this.getChangedAttributes());
    }

    /** @inheritDoc */
    public isChangedAttribute(key: string): boolean {
        const original: any = this.getOriginalAttribute(key);
        const current: any = this.getAttribute(key);

        if (this.hasCast(key)) {
            return this.castAttribute(key, current) !== this.castAttribute(key, original);
        }

        return current !== original;
    }

    /** @inheritDoc */
    public setAttribute(key: string, value: any, isOriginal: boolean = false): this {
        this.attributes[key] = value;

        if (isOriginal) {
            this.original[key] = value;
        }

        if (this[key] === undefined) {
            this[key] = this.castAttribute(key, value);

            Object.defineProperty(this, key, {
                get: (): any => this.getAttribute(key),
                set: (newValue: any): this => this.setAttribute(key, newValue),
            });
        }

        return this;
    }

    /** @inheritDoc */
    public setAttributes(attributes: object, isOriginal: boolean = false): this {
        _.forEach(attributes, (value: any, key: string) => {
            this.setAttribute(key, value, isOriginal);
        });

        return this;
    }

    /**
     * Cast an attribute to a native PHP type.
     *
     * @param {string} key
     * @param {*} value
     * @return {*}
     */
    protected castAttribute(key: string, value: any): any {
        if (_.isNull(value)) {
            return value;
        }

        const casts: object = this.getCasts();

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
    }

    /**
     * Get the casts array.
     *
     * @return {object}
     */
    protected getCasts(): object {
        return this.casts;
    }

    /**
     * Get the fillable attributes for the model.
     *
     * @return {string[]}
     */
    protected getFillable(): string[] {
        return this.fillable;
    }

    /**
     * Get the guarded attributes for the model.
     *
     * @return {string[]}
     */
    protected getGuarded(): string[] {
        return this.guarded;
    }

    /**
     * Determine whether an attribute should be cast to a native type.
     *
     * @param {string} key
     * @param {string[]} types
     * @return {boolean}
     */
    protected hasCast(key: string, types: string[] = []): boolean {
        const casts: object = this.getCasts();

        if (_.has(casts, key)) {
            return types.length > 0 ? _.includes(types, casts[key]) : true;
        }

        return false;
    }

    /**
     * Determine if the given attribute may be mass assigned.
     *
     * @param {string} key
     * @return {boolean}
     */
    protected isFillable(key: string): boolean {
        return _.includes(this.getFillable(), key) && !_.includes(this.getGuarded(), key);
    }
}
