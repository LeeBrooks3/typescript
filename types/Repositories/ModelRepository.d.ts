import ModelInterface from '../Models/ModelInterface';
import ModelRepositoryInterface from './ModelRepositoryInterface';
import Repository from './Repository';
export default abstract class ModelRepository<Model> extends Repository<Model> implements ModelRepositoryInterface<Model> {
    /** @inheritDoc */
    get(params?: object): Promise<Model[]>;
    /** @inheritDoc */
    create(attributes?: object): Promise<Model>;
    /** @inheritDoc */
    find(id: number | string, params?: object): Promise<Model>;
    /** @inheritDoc */
    update(model: ModelInterface, params?: object): Promise<Model>;
    /** @inheritDoc */
    delete(model: ModelInterface, params?: object): Promise<void>;
}
//# sourceMappingURL=ModelRepository.d.ts.map