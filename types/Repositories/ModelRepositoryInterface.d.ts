import ModelInterface from '../Models/ModelInterface';
export default interface ModelRepositoryInterface<T = ModelInterface> {
    /**
     * Retrieve a listing of the resource.
     *
     * @param {object} params
     * @return {Promise<ModelInterface[]>}
     */
    get(params: object): Promise<T[]>;
    /**
     * Creates a new resource.
     *
     * @param {object} attributes
     * @return {Promise<ModelInterface>}
     */
    create(attributes: object): Promise<T>;
    /**
     * Retrieve the specified resource.
     *
     * @param {int|string} id
     * @param {object} params
     * @return {Promise<ModelInterface>}
     */
    find(id: any, params: object): Promise<T>;
    /**
     * Update the specified resource.
     *
     * @param {ModelInterface} model
     * @param {object} attributes
     * @return {Promise<ModelInterface>}
     */
    update(model: ModelInterface, attributes: object): Promise<T>;
    /**
     * Remove the specified resource.
     *
     * @param {ModelInterface} model
     * @param {object} params
     * @return {Promise<void>}
     */
    delete(model: ModelInterface, params: object): void;
}
//# sourceMappingURL=ModelRepositoryInterface.d.ts.map