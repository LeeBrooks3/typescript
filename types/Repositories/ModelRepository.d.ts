import ModelInterface from '../Models/ModelInterface';
import ModelRepositoryInterface from './ModelRepositoryInterface';
import Repository from './Repository';
export default abstract class ModelRepository<T = ModelInterface> extends Repository<T> implements ModelRepositoryInterface<T> {
    /** @inheritDoc */
    get(params?: object): Promise<T[]>;
    /** @inheritDoc */
    create(attributes?: object): Promise<T>;
    /** @inheritDoc */
    find(id: number | string, params?: object): Promise<T>;
    /** @inheritDoc */
    update(model: ModelInterface, attributes?: object): Promise<T>;
    /** @inheritDoc */
    delete(model: ModelInterface, params?: object): Promise<void>;
}
//# sourceMappingURL=ModelRepository.d.ts.map