import ModelInterface from '../Models/ModelInterface';
export default interface ModelRepositoryInterface<T = ModelInterface> {
    /**
     * Retrieve a listing of the resource.
     */
    get(params: object): Promise<T[]>;
    /**
     * Creates a new resource.
     */
    create(attributes: object): Promise<T>;
    /**
     * Retrieve the specified resource.
     */
    find(id: any, params: object): Promise<T>;
    /**
     * Update the specified resource.
     */
    update(model: ModelInterface, attributes: object): Promise<T>;
    /**
     * Remove the specified resource.
     */
    delete(model: ModelInterface, params: object): void;
}
//# sourceMappingURL=ModelRepositoryInterface.d.ts.map