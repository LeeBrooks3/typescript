export default interface ModelInterface {
    /**
     * Fill the model with an array of attributes.
     *
     * @param {array} attributes
     * @return {this}
     */
    fill(attributes: object): this;
    /**
     * Get an attribute from the model.
     *
     * @param {string} key
     * @return {*}
     */
    getAttribute(key: string): any;
    /**
     * Get all of the current attributes on the model.
     *
     * @return {object}
     */
    getAttributes(): object;
    /**
     * Get the attributes that have been changed.
     *
     * @return {object}
     */
    getChangedAttributes(): object;
    /**
     * Get the value of the model's primary key.
     *
     * @return {*}
     */
    getKey(): any;
    /**
     * Get the primary key for the model.
     *
     * @return {string}
     */
    getKeyName(): string;
    /**
     * Get the model's original attribute value.
     *
     * @param {string} key
     * @return {*}
     */
    getOriginalAttribute(key: string): any;
    /**
     * Get the model's original attribute values.
     *
     * @return {object}
     */
    getOriginalAttributes(): object;
    /**
     * Get the value of the model's route key.
     *
     * @return {*}
     */
    getRouteKey(): any;
    /**
     * Get the route key for the model.
     *
     * @return {string}
     */
    getRouteKeyName(): string;
    /**
     * Determine if the model has been modified.
     *
     * @return {boolean}
     */
    isChanged(): boolean;
    /**
     * Determine if the given attribute has been modified.
     *
     * @param {string} key
     * @return {boolean}
     */
    isChangedAttribute(key: string): boolean;
    /**
     * Set a given attribute on the model.
     *
     * @param {string} key
     * @param {*} value
     * @param {boolean} isOriginal
     * @return {this}
     */
    setAttribute(key: string, value: any, isOriginal: boolean): this;
    /**
     * Set the array of model attributes. No checking is done.
     *
     * @param {object} attributes
     * @param {boolean} isOriginal
     * @return {this}
     */
    setAttributes(attributes: object, isOriginal: boolean): this;
}
//# sourceMappingURL=ModelInterface.d.ts.map