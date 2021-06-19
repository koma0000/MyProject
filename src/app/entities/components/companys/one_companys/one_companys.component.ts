import {Component, Inject, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Company } from 'src/app/entities/interfaces/company.interface';
import {CompanysService} from 'src/app/entities/services/companys.service';
import {Businessmen} from 'src/app/entities/interfaces/businessmen.interface';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-one_companys',
  templateUrl: './one_companys.component.html',
  styleUrls: ['./one_companys.component.css']
})





export class OnecompanysComponent implements OnInit {

  public onecom: Company;
  public id: string;
  public busid: number;
  public answer: string;
  public Businessmen: string[];




  // tslint:disable-next-line:variable-name
  constructor(private CService: CompanysService, private activatedRoute: ActivatedRoute, private _router: Router
  ){
  }
  ngOnInit(): void {
    this.answer = '';
    this.activatedRoute.url.subscribe(data => {
      this.CService.getOne(data[1].path)
        .subscribe(res => {this.onecom = res; });

      this.CService.getComOfBus(data[1].path).subscribe(res => {this.Businessmen = res; });

    });



  }

  public DeleteC(): void {
    this.CService.deleteC(this.onecom.id);
    window.location.href = 'http://localhost:4200/Companys';
  }


}
