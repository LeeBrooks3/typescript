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
    /** @inheritDoc */
    protected castAttribute(key: string, value: any): any;
    /** @inheritDoc */
    protected getCasts(): object;
    /** @inheritDoc */
    protected getFillable(): string[];
    /** @inheritDoc */
    protected getGuarded(): string[];
    /** @inheritDoc */
    protected hasCast(key: string, types?: string[]): boolean;
    /** @inheritDoc */
    protected isFillable(key: string): boolean;
}
