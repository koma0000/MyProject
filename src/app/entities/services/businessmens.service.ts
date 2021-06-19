import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Businessmen} from '../interfaces/businessmen.interface';

@Injectable()
export class BusinessmensService {
    private businessmes$$: BehaviorSubject<Businessmen[]> = new BehaviorSubject([]);
    public businessmes$: Observable<Businessmen[]> = this.businessmes$$.asObservable();



    constructor(public api: ApiService) {

    }

    public CheckRights(): boolean {
        if (!(localStorage.getItem('login') === 'admin')) {
          alert('Для этого действия вы должны войти как admin');
          return false;
        }
        else {
          return true;
        }
    }

    public getBusinessmens(): void {
        this.api.get('Businessmen')
        .toPromise()
        .then((businessmes: Businessmen[]) => {
            this.businessmes$$.next(businessmes);
        });
    }

    public SetBusinessmen(item: any): void {
        this.api.post('Businessmen', item).toPromise().then((b: Businessmen[]) => {
            this.businessmes$$.next(b);
        });
    }

    public getForbes(): any {
       // let buffer: Map<string, number>;
       // this.api.get('Businessmen/GetForebs').toPromise().then((b: Map<string, number>) => buffer = b);
        return this.api.get('Businessmen/GetForebs');
    }

    public setComforBus(item): Observable<string> {
        return this.api.setComforBus('Businessmen/add/', item);
    }




    public getOne(id: string): Observable<Businessmen> {
        return this.api.get('Businessmen/' + id);
    }

    public getComOfBus(id): Observable <string[]>{
      return this.api.get('Businessmen/BusFromCom/' + id);
    }

    public deleteB(id): void {
        this.api.delete('Businessmen/' + id);
    }

    public setComforBus1(id1: number, id2: number): Observable<any> {
      let observable: Observable<any>;
      // @ts-ignore
      observable = this.api.post('Businessmen/add/' + id1 + '/' + id2);
      return observable;
  }

  public update(id1: number, body: any): void {
    this.api.put('Businessmen/' + id1.toString(), body).toPromise().then((b: Businessmen[]) => {
      this.businessmes$$.asObservable();
    });
  }


    // public getAppsOfUser(id):Observable<string[]> {
    //     return this.api.get('Businessmen/appsFromUser/'+id);

    // }

}
