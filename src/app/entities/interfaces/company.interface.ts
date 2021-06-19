import {Businessmen} from './businessmen.interface';

export interface Company {
    id: number;
    name: string;
    proceeds: number;
    profit: number;
    Businessmens: Businessmen[];
}
