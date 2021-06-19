import {Component, Inject, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {Businessmen} from '../../../interfaces/businessmen.interface';
import {BusinessmensService} from '../../../services/businessmens.service';


@Component({
  // tslint:disable-next-line:component-selector
    selector: 'app-one_businessmen',
    templateUrl: './one_businessmen.component.html',
    styleUrls: ['./one_businessmen.component.css']
})




export class OnebusinessmenComponent implements OnInit {

    public onebus: Businessmen;
    public id: string;
    public comid: number;
    public answer: string;
    public Company: string[];




  // tslint:disable-next-line:variable-name
    constructor(private BService: BusinessmensService, private activatedRoute: ActivatedRoute, private _router: Router
         ){
    }
    ngOnInit(): void {
      this.answer = '';
      this.activatedRoute.url.subscribe(data => {
            this.BService.getOne(data[1].path)
            .subscribe(res => {this.onebus = res; });

            this.BService.getComOfBus(data[1].path).subscribe(res => {this.Company = res; });

    });



    }

    public addComforBus(id, comid): void {
        if (!this.BService.CheckRights()) {
            return;
        }

        // this.BService.setComforBus([this.onebus.id, (this.comid)]).subscribe(res => {this.answer = res; });
        // this.BService.getComOfBus(this.onebus.id).subscribe(res => {this.Company = res;});
        // this.BService.setComforBus1( );
        this.BService.setComforBus1(id, comid).subscribe();
        // window.location.href = 'http://localhost:4200/Businessmens/' +id;
        // this.BService.getAppsOfUser(this.oneuser.id).subscribe(res=>{this.UserApps=res});
        window.location.href = 'http://localhost:4200/Businessmens/' + id;
    }

    public DeleteB(): void {
        if (!this.BService.CheckRights()) {
            return;
        }
        this.BService.deleteB(this.onebus.id);
        window.location.href = 'http://localhost:4200/Businessmens';
    }


}
