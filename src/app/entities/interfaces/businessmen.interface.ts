import {Company} from './company.interface';

export interface Businessmen {
    id: number;
    name: string;
    surname: string;
    age: number;
    Companies: Company[];
}
