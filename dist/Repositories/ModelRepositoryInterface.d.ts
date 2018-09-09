import ModelInterface from '../Models/ModelInterface';
export default interface ModelRepositoryInterface<Model> {
    /**
     * Retrieve a listing of the resource.
     *
     * @param {object} params
     * @return {Promise<ModelInterface[]>}
     */
    get(params: object): Promise<Model[]>;
    /**
     * Creates a new resource.
     *
     * @param {object} attributes
     * @return {Promise<ModelInterface>}
     */
    create(attributes: object): Promise<Model>;
    /**
     * Retrieve the specified resource.
     *
     * @param {int|string} id
     * @param {object} params
     * @return {Promise<ModelInterface>}
     */
    find(id: any, params: object): Promise<Model>;
    /**
     * Update the specified resource.
     *
     * @param {ModelInterface} model
     * @param {object} attributes
     * @return {Promise<ModelInterface>}
     */
    update(model: ModelInterface, attributes: object): Promise<Model>;
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