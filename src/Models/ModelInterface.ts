export default interface ModelInterface {
    /**
     * Fill the model with an array of attributes.
     */
    fill(attributes: object): this;

    /**
     * Get an attribute from the model.
     */
    getAttribute(key: string): any;

    /**
     * Get all of the current attributes on the model.
     */
    getAttributes(): object;

    /**
     * Get the attributes that have been changed.
     */
    getChangedAttributes(): object;

    /**
     * Get the value of the model's primary key.
     */
    getKey(): any;

    /**
     * Get the primary key for the model.
     */
    getKeyName(): string;

    /**
     * Get the model's original attribute value.
     */
    getOriginalAttribute(key: string): any;

    /**
     * Get the model's original attribute values.
     */
    getOriginalAttributes(): object;

    /**
     * Get the value of the model's route key.
     */
    getRouteKey(): any;

    /**
     * Get the route key for the model.
     */
    getRouteKeyName(): string;

    /**
     * Determine if the model has been modified.
     */
    isChanged(): boolean;

    /**
     * Determine if the given attribute has been modified.
     */
    isChangedAttribute(key: string): boolean;

    /**
     * Set a given attribute on the model.
     */
    setAttribute(key: string, value: any, isOriginal: boolean): this;

    /**
     * Set the array of model attributes. No checking is done.
     */
    setAttributes(attributes: object, isOriginal: boolean): this;
}
