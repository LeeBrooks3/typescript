import Model from '../../../src/Models/Model';

export default class ExampleModel extends Model {
    public id: number;
    public boolean: number;
    public float: string;
    public integer: string;
    public string: number;
    public date: string;
    public datetime: string;
    public timestamp: string;
    public uuid: string;

    protected casts: object = {
        boolean: 'boolean',
        date: 'date',
        datetime: 'datetime',
        float: 'float',
        integer: 'integer',
        string: 'string',
        timestamp: 'timestamp',
        uuid: 'uuid',
    };

    protected fillable: string[] = [
        'boolean',
        'float',
        'integer',
        'string',
        'date',
        'datetime',
        'timestamp',
        'uuid',
    ];

    protected guarded: string[] = [
        'id',
    ];

    /** @inheritDoc */
    public getRouteKeyName(): string {
        return 'uuid';
    }
}
