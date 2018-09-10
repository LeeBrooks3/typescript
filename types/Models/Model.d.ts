import ModelInterface from './ModelInterface';
export default abstract class Model implements ModelInterface {
    /**
     * The model's attributes.
     *
     * @var {object}
     */
    protected attributes: object;
    /**
     * The attributes that should be cast to native types.
     *
     * @var {object}
     */
    protected casts: object;
    /**
     * The attributes that are mass assignable.
     *
     * @var {array}
     */
    protected fillable: string[];
    /**
     * The attributes that aren't mass assignable.
     *
     * @var {array}
     */
    protected guarded: string[];
    /**
     * The model attribute's original state.
     *
     * @var array
     */
    protected original: object;
    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected primaryKey: string;
    /**
     * @param {object} attributes
     */
    constructor(attributes?: object);
    /** @inheritDoc */
    fill(attributes: object): this;
    /** @inheritDoc */
    getAttribute(key: string): any;
    /** @inheritDoc */
    getAttributes(): object;
    /** @inheritDoc */
    getChangedAttributes(): object;
    /** @inheritDoc */
    getKey(): any;
    /** @inheritDoc */
    getKeyName(): string;
    /** @inheritDoc */
    getOriginalAttribute(key: string): any;
    /** @inheritDoc */
    getOriginalAttributes(): object;
    /** @inheritDoc */
    getRouteKey(): any;
    /** @inheritDoc */
    getRouteKeyName(): string;
    /** @inheritDoc */
    isChanged(): boolean;
    /** @inheritDoc */
    isChangedAttribute(key: string): boolean;
    /** @inheritDoc */
    setAttribute(key: string, value: any, isOriginal?: boolean): this;
    /** @inheritDoc */
    setAttributes(attributes: object, isOriginal?: boolean): this;
    /**
     * Cast an attribute to a native PHP type.
     *
     * @param {string} key
     * @param {*} value
     * @return {*}
     */
    protected castAttribute(key: string, value: any): any;
    /**
     * Get the casts array.
     *
     * @return {object}
     */
    protected getCasts(): object;
    /**
     * Get the fillable attributes for the model.
     *
     * @return {string[]}
     */
    protected getFillable(): string[];
    /**
     * Get the guarded attributes for the model.
     *
     * @return {string[]}
     */
    protected getGuarded(): string[];
    /**
     * Determine whether an attribute should be cast to a native type.
     *
     * @param {string} key
     * @param {string[]} types
     * @return {boolean}
     */
    protected hasCast(key: string, types?: string[]): boolean;
    /**
     * Determine if the given attribute may be mass assigned.
     *
     * @param {string} key
     * @return {boolean}
     */
    protected isFillable(key: string): boolean;
}
//# sourceMappingURL=Model.d.ts.map