import {Component, Inject, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Businessmen } from 'src/app/entities/interfaces/businessmen.interface';
import {BusinessmensService} from 'src/app/entities/services/businessmens.service';

@Component({
    selector: 'app-businessmens',
    templateUrl: './businessmens.component.html',
    styleUrls: ['./businessmens.component.css']
})

export class BusinessmenComponent implements OnInit {
    public businessmensList: Businessmen[];
    public nameinput: string;
    public surnameinput: string;
    public ageinput: number;
    public ageerror: string;
    public searchId: string;


    title = 'Businessmens';

  // tslint:disable-next-line:variable-name
    constructor(private BusinessmenService: BusinessmensService, private activatedRoute: ActivatedRoute, private _router: Router) {

    }


    ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.BusinessmenService.businessmes$.subscribe((b: Businessmen[]) => this.businessmensList = b);
        this.BusinessmenService.getBusinessmens();
        this.nameinput = '';
        this.surnameinput = '';
        this.ageinput = 18;
        this.ageerror = '';
        this.searchId = '';
    }

    public checkAge(): boolean {
        if (Number(this.ageinput)){
            if (this.ageinput >= 18 && this.ageinput < 100){
                return true;
            }
        }
        this.ageerror = 'Invalid age. Please try again!';
        return false;

    }

    public AddBusinessmen(): void {
        // if (!this.BusinessmenService.CheckRights())
        // var buffer:Businessmen;
        // buffer.name=this.nameinput;
        // buffer.surname=this.surnameinput;
        // buffer.age=this.ageinput;
        // console.log(buffer);
        if (!this.BusinessmenService.CheckRights()) {
            return;
        }
        this.BusinessmenService.businessmes$.subscribe((b: Businessmen[]) => this.businessmensList = b);
        this.BusinessmenService.SetBusinessmen({
            Name: this.nameinput,
            Surname: this.surnameinput,
            Age: this.ageinput
        });
        window.location.href = 'http://localhost:4200/Businessmens';
    }
 public SetClick(): void {
        this.BusinessmenService.businessmes$.subscribe((b: Businessmen[]) => this.businessmensList = b);
        this.BusinessmenService.getBusinessmens();

        this.businessmensList.forEach(element => {
          // tslint:disable-next-line:triple-equals
            if (this.searchId == element.id.toString()){
                this._router.navigate(['/Businessmens/' + this.searchId]);
            }
        });
        this.ageerror = '*Not found this id';

        this.businessmensList.length = 0;

    }
    public GoToItem(id: number): void{
        this._router.navigate(['/Businessmens/' + id]);
    }
}
