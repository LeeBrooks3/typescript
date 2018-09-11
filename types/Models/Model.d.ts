import ModelInterface from './ModelInterface';
export default abstract class Model implements ModelInterface {
    /**
     * The model's attributes.
     */
    protected attributes: object;
    /**
     * The attributes that should be cast to native types.
     */
    protected casts: object;
    /**
     * The attributes that are mass assignable.
     */
    protected fillable: string[];
    /**
     * The attributes that aren't mass assignable.
     */
    protected guarded: string[];
    /**
     * The model attribute's original state.
     */
    protected original: object;
    /**
     * The primary key for the model.
     */
    protected primaryKey: string;
    /**
     * Sets the given attributes.
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
     */
    protected castAttribute(key: string, value: any): any;
    /**
     * Get the casts array.
     */
    protected getCasts(): object;
    /**
     * Get the fillable attributes for the model.
     */
    protected getFillable(): string[];
    /**
     * Get the guarded attributes for the model.
     */
    protected getGuarded(): string[];
    /**
     * Determine whether an attribute should be cast to a native type.
     */
    protected hasCast(key: string, types?: string[]): boolean;
    /**
     * Determine if the given attribute may be mass assigned.
     */
    protected isFillable(key: string): boolean;
}
//# sourceMappingURL=Model.d.ts.map