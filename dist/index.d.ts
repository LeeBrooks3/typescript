declare module "Http/Responses/ResponseInterface" {
    export interface ResponseInterface<T = any> {
        data: T;
        status: number;
        statusText: string;
        headers: any;
        request?: any;
    }
}
declare module "Http/Clients/ClientInterface" {
    import ResponseInterface from "Http/Responses/ResponseInterface";
    export interface ClientInterface {
        /**
         * Makes a GET request.
         *
         * @param {string} uri
         * @param {object} params
         * @return {Promise<ResponseInterface>}
         */
        get(uri: string, params: object): Promise<ResponseInterface>;
        /**
         * Makes a POST request.
         *
         * @param {string} uri
         * @param {object} params
         * @return {Promise<ResponseInterface>}
         */
        post(uri: string, params: object): Promise<ResponseInterface>;
        /**
         * Makes a PATCH request.
         *
         * @param {string} uri
         * @param {object} params
         * @return {Promise<ResponseInterface>}
         */
        patch(uri: string, params: object): Promise<ResponseInterface>;
        /**
         * Makes a PUT request.
         *
         * @param {string} uri
         * @param {object} params
         * @return {Promise<ResponseInterface>}
         */
        put(uri: string, params: object): Promise<ResponseInterface>;
        /**
         * Makes a DELETE request.
         *
         * @param {string} uri
         * @param {object} params
         * @return {Promise<ResponseInterface>}
         */
        delete(uri: string, params: object): Promise<ResponseInterface>;
    }
}
declare module "Http/Clients/Client" {
    import ResponseInterface from "Http/Responses/ResponseInterface";
    import ClientInterface from "Http/Clients/ClientInterface";
    export abstract class Client implements ClientInterface {
        private client;
        /**
         * Creates a client instance.
         */
        constructor();
        /** @inheritDoc */
        get(path: string, params: object): Promise<ResponseInterface>;
        /** @inheritDoc */
        post(path: string, params: object): Promise<ResponseInterface>;
        /** @inheritDoc */
        patch(path: string, params: object): Promise<ResponseInterface>;
        /** @inheritDoc */
        put(path: string, params: object): Promise<ResponseInterface>;
        /** @inheritDoc */
        delete(path: string, params: object): Promise<ResponseInterface>;
    }
}
declare module "Models/ModelInterface" {
    export interface ModelInterface {
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
}
declare module "Models/Model" {
    import ModelInterface from "Models/ModelInterface";
    export abstract class Model implements ModelInterface {
        /**
         * The model's attributes.
         *
         * @var {object}
         */
        protected attributes: object;
        /**
         * The attributes that should be cast to native types.
         *
         * @var {object}
         */
        protected casts: object;
        /**
         * The attributes that are mass assignable.
         *
         * @var {array}
         */
        protected fillable: string[];
        /**
         * The attributes that aren't mass assignable.
         *
         * @var {array}
         */
        protected guarded: string[];
        /**
         * The model attribute's original state.
         *
         * @var array
         */
        protected original: object;
        /**
         * The primary key for the model.
         *
         * @var string
         */
        protected primaryKey: string;
        /**
         * @param {object} attributes
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
         *
         * @param {string} key
         * @param {*} value
         * @return {*}
         */
        protected castAttribute(key: string, value: any): any;
        /**
         * Get the casts array.
         *
         * @return {object}
         */
        protected getCasts(): object;
        /**
         * Get the fillable attributes for the model.
         *
         * @return {string[]}
         */
        protected getFillable(): string[];
        /**
         * Get the guarded attributes for the model.
         *
         * @return {string[]}
         */
        protected getGuarded(): string[];
        /**
         * Determine whether an attribute should be cast to a native type.
         *
         * @param {string} key
         * @param {string[]} types
         * @return {boolean}
         */
        protected hasCast(key: string, types?: string[]): boolean;
        /**
         * Determine if the given attribute may be mass assigned.
         *
         * @param {string} key
         * @return {boolean}
         */
        protected isFillable(key: string): boolean;
    }
}
declare module "Repositories/ModelRepositoryInterface" {
    import ModelInterface from "Models/ModelInterface";
    export interface ModelRepositoryInterface<Model> {
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
}
declare module "Repositories/ModelRepository" {
    import ClientInterface from "Http/Clients/ClientInterface";
    import ResponseInterface from "Http/Responses/ResponseInterface";
    import ModelInterface from "Models/ModelInterface";
    import ModelRepositoryInterface from "Repositories/ModelRepositoryInterface";
    export abstract class ModelRepository<Model> implements ModelRepositoryInterface<Model> {
        /**
         * A client instance.
         *
         * @var {ClientInterface}
         */
        protected client: ClientInterface;
        /**
         * The restful API endpoint for this model.
         *
         * @var {string}
         */
        protected endpoint: string;
        /**
         * The namespace or name of the key used to wrap the main data of the payload.
         *
         * @var {string}
         */
        protected namespace?: string;
        /**
         * @param {ClientInterface} client
         */
        constructor(client: ClientInterface);
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
        /**
         * Returns the client.
         *
         * @return {ClientInterface}
         */
        protected getClient(): ClientInterface;
        /**
         * Returns the endpoint.
         *
         * @return {string}
         */
        protected getEndpoint(): string;
        /**
         * Returns the namespace.
         *
         * @return {string|null}
         */
        protected getNamespace(): string | null;
        /**
         * Returns the unwrapped main data from the response payload.
         *
         * @param {ResponseInterface} response
         * @return {*}
         */
        protected getResponseData(response: ResponseInterface): any;
        /**
         * Makes an instance of the model.
         *
         * @param {object} attributes
         * @return {ModelInterface}
         */
        protected abstract makeModel(attributes: object): Model;
    }
}
