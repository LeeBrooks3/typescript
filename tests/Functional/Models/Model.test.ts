import * as faker from 'faker';
import * as _ from 'lodash';
import * as moment from 'moment';
import ExampleModel from '../../Examples/Models/ExampleModel';

describe('Models/Model', () => {
    let model: ExampleModel;

    beforeEach(() => {
        model = new ExampleModel();
    });

    describe('fill', () => {
        it('should set fillable attributes', () => {
            model.fill({
                boolean: faker.random.boolean(),
            });

            expect(_.has(model.getAttributes(), 'boolean')).toBe(true);
        });

        it('should not set guarded attributes', () => {
            model.fill({
                id: faker.random.number(),
            });

            expect(_.has(model.getAttributes(), 'id')).toBe(false);
        });
    });

    describe('getAttribute', () => {
        it('should return an uncast attribute', () => {
            const id: number = faker.random.number();

            model = new ExampleModel({
                id,
            });

            expect(model.getAttribute('id')).toBe(id);
        });

        it('should return a cast boolean', () => {
            const value: number = 1;

            model = new ExampleModel({
                boolean: value,
            });

            expect(model.getAttribute('boolean')).toBe(true);
        });

        it('should return a cast float', () => {
            const value: string = '1.0';

            model = new ExampleModel({
                float: value,
            });

            expect(model.getAttribute('float')).toBe(1.0);
        });

        it('should return a cast integer', () => {
            const value: string = '1';

            model = new ExampleModel({
                integer: value,
            });

            expect(model.getAttribute('integer')).toBe(1);
        });

        it('should return a cast string', () => {
            const value: number = 1;

            model = new ExampleModel({
                string: value,
            });

            expect(model.getAttribute('string')).toBe('1');
        });

        it('should return a cast date', () => {
            const value: moment.Moment = moment();

            model = new ExampleModel({
                date: value,
            });

            expect(model.getAttribute('date')).toEqual(value.startOf('day'));
        });

        it('should return a cast datetime', () => {
            const value: moment.Moment = moment();

            model = new ExampleModel({
                datetime: value,
            });

            expect(model.getAttribute('datetime')).toEqual(value.startOf('second'));
        });

        it('should return a cast timestamp', () => {
            const value: moment.Moment = moment();

            model = new ExampleModel({
                timestamp: value,
            });

            expect(model.getAttribute('timestamp')).toBe(value.unix());
        });

        it('should return an attribute with a cast that doesn\'t exist', () => {
            const value: string = faker.random.uuid();

            model = new ExampleModel({
                uuid: value,
            });

            expect(model.getAttribute('uuid')).toBe(value);
        });
    });

    describe('getAttributes', () => {
        it('should return the attributes', () => {
            const attributes: object = {
                id: faker.random.number(),
            };

            model = new ExampleModel(attributes);

            expect(model.getAttributes()).toEqual(attributes);
        });
    });

    describe('getChangedAttributes', () => {
        it('should return the changed attributes', () => {
            const integer: number = faker.random.number();
            const attributes: object = {
                id: faker.random.number(),
                integer: faker.random.number(),
            };

            model = new ExampleModel(attributes);

            model.fill({
                integer,
            });

            expect(model.getChangedAttributes()).toEqual({
                integer,
            });
        });
    });

    describe('getKey', () => {
        it('should return the primary key value', () => {
            model = new ExampleModel({
                id: faker.random.number(),
            });

            expect(model.getKey()).toBe(model.getAttribute('id'));
        });
    });

    describe('getKeyName', () => {
        it('should return the primary key name', () => {
            model = new ExampleModel();

            expect(model.getKeyName()).toBe('id');
        });
    });

    describe('getOriginalAttribute', () => {
        it('should return the original attribute value', () => {
            const integer: number = faker.random.number();

            model = new ExampleModel({
                integer,
            });

            model.fill({
                integer: faker.random.number(),
            });

            expect(model.getOriginalAttribute('integer')).toBe(integer);
        });
    });

    describe('getOriginalAttributes', () => {
        it('should return the original attribute value', () => {
            const attributes: object = {
                integer: faker.random.number(),
            };

            model = new ExampleModel(attributes);

            model.fill({
                integer: faker.random.number(),
            });

            expect(model.getOriginalAttributes()).toEqual(attributes);
        });
    });

    describe('getRouteKey', () => {
        it('should return the route key value', () => {
            model = new ExampleModel({
                uuid: faker.random.uuid(),
            });

            expect(model.getRouteKey()).toBe(model.getAttribute('uuid'));
        });
    });

    describe('getRouteKeyName', () => {
        it('should return the route key name', () => {
            model = new ExampleModel();

            expect(model.getRouteKeyName()).toBe('uuid');
        });
    });

    describe('isChanged', () => {
        it('should return whether there are changed attributes', () => {
            const attributes: object = {
                integer: faker.random.number(),
            };

            model = new ExampleModel(attributes);

            model.fill({
                integer: faker.random.number(),
            });

            expect(model.isChanged()).toBe(true);
        });
    });

    describe('isChangedAttribute', () => {
        it('should return whether the given attribute has changed', () => {
            const attributes: object = {
                integer: faker.random.number(),
            };

            model = new ExampleModel(attributes);

            model.fill({
                integer: faker.random.number(),
            });

            expect(model.isChangedAttribute('integer')).toBe(true);
        });
    });

    describe('setAttribute', () => {
        it('should set the given attribute', () => {
            const integer: number = faker.random.number();

            model = new ExampleModel();

            model.setAttribute('integer', integer);

            expect(model.getAttribute('integer')).toBe(integer);
        });
    });

    describe('setAttributes', () => {
        it('should set the given attributes', () => {
            const attributes: object = {
                integer: faker.random.number(),
            };

            model = new ExampleModel();

            model.setAttributes(attributes);

            expect(model.getAttributes()).toEqual(attributes);
        });
    });

    describe('magicGet', () => {
        it('should get the given attribute', () => {
            const integer: number = faker.random.number();

            model = new ExampleModel({
                integer,
            });

            expect(model.integer).toBe(integer);
        });
    });

    describe('magicSet', () => {
        it('should set the given attributes', () => {
            const integer: number = faker.random.number();

            model = new ExampleModel({
                integer,
            });

            model.integer = '1';

            expect(model.integer).toBe(1);
        });
    });
});
