import ModelRepository from '../../../src/Repositories/ModelRepository';
import ExampleModel from '../Models/ExampleModel';

export default class ExampleModelRepository extends ModelRepository<ExampleModel> {
    protected endpoint: string = 'someEndpoint';

    /** @inheritDoc */
    protected makeModel(attributes: object): ExampleModel {
        return new ExampleModel(attributes);
    }
}
