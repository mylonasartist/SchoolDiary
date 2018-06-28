import { Entity } from '../../entity';

export class Subject extends Entity<number> {

    // TODO check how it can be done with annotations.
    static validation = {
        name: {
            required: true,
            minLength: 3,
            maxLength: 100,
            pattern: '^[A-Za-z0-9 ]+$'
        },
        description: {
            required: false,
            maxLength: 1000
        }
    };
    name: string;
    description: string;
}
