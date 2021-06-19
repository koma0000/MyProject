import {Component, Inject, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Company } from 'src/app/entities/interfaces/company.interface'
import {CompanysService} from 'src/app/entities/services/companys.service';
import {Businessmen} from '../../interfaces/businessmen.interface';

@Component({
    selector: 'app-companys',
    templateUrl: './companys.component.html',
    styleUrls: ['./companys.component.css']
})

export class CompanysComponent implements OnInit {
    public CompanysList: Company[];
    public nameinput: string;
    public proceedsinput: number;
    public profitinput: number;
    public error: string;


    title = 'Companies';

  // tslint:disable-next-line:variable-name
    constructor(private CompanyService: CompanysService, private activatedRoute: ActivatedRoute, private _router: Router) {

    }


    ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.CompanyService.companys$.subscribe((с: Company[]) => this.CompanysList = с);
        this.CompanyService.getCompanys();
        this.nameinput = '';
        this.proceedsinput = null;
        this.profitinput = null;
        this.error = null;
    }

    public CheckAtribs(): boolean {
        if (Number(this.proceedsinput) && Number(this.profitinput)){
            return true;
        }
        else if (this.profitinput == null && this.proceedsinput == null){
            this.error = null;
        }
        else {
            this.error = 'Invalid data. Please try again!';
 }
        return false;
    }

    public AddCompany(): void {
      this.CompanyService.companys$.subscribe((с: Company[]) => this.CompanysList = с);
      this.CompanyService.setCompany({
      Name : this.nameinput,
      Proceeds : this.proceedsinput,
      Profit: this.profitinput,
      });
      window.location.href = 'http://localhost:4200/Companys';
    }

  public GoToItem(id: number): void{
    this._router.navigate(['/Companys/' + id]);
  }

    // public ageError():void{
    //     this.ageerror='Invalid age. Please try again!'
    // }

}
