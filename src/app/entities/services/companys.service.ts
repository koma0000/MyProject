import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Company} from '../interfaces/company.interface';
import {Businessmen} from '../interfaces/businessmen.interface';

@Injectable()
export class CompanysService {
    private companys$$: BehaviorSubject<Company[]> = new BehaviorSubject([]);
    public companys$: Observable<Company[]> = this.companys$$.asObservable();



    constructor(public api: ApiService) {

    }

    public getCompanys(): void {
        this.api.get('Companies')
        .toPromise()
        .then((company: Company[]) => {
            this.companys$$.next(company);
        });
    }
  public setCompany(item: any): void {
    this.api.post('Companies', item).toPromise().then((c: Company[]) => {
      this.companys$$.next(c);
    });
  }

  public getOne(id: string): Observable<Company> {
    return this.api.get('Companies/' + id);
  }

  public getComOfBus(id): Observable <string[]>{
    return this.api.get('Companies/ComFromBus/' + id);
  }

  public deleteC(id): void {
    this.api.delete('Companies/' + id);
  }
}
