import {Component, Inject, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Businessmen } from 'src/app/entities/interfaces/businessmen.interface';
import {BusinessmensService} from 'src/app/entities/services/businessmens.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import { KeyValue } from '@angular/common';



@Component({
    selector: 'app-forbes',
    templateUrl: './forbes.component.html',
    styleUrls: ['./forbes.component.css']
})

export class ForbesComponent implements OnInit {
  displayedColumns: string[] = ['key', 'value'];
  public names: Map<string, number>;

  constructor(private bService: BusinessmensService, private activatedRoute: ActivatedRoute
        ){
    }
    ShowA = false;
    ShowDesc = false;
    ShowAsc = false;
    ShowBaz = true;
    ngOnInit(): void {
        this.names = this.bService.getForbes().subscribe(res => this.names = res);
        console.log(this.names);
  }

  toogleTagA(): void{
this.ShowA = true;
this.ShowDesc = false;
this.ShowAsc = false;
this.ShowBaz = false;
  }

  toogleTagBaz(): void{
    this.ShowBaz = true;
    this.ShowDesc = false;
    this.ShowAsc = false;
    this.ShowA = false;
  }

  toogleTagAsc(): void{
    this.ShowAsc = true;
    this.ShowDesc = false;
    this.ShowBaz = false;
    this.ShowA = false;
  }

  toogleTagDesc(): void{
    this.ShowDesc = true;
    this.ShowAsc = false;
    this.ShowBaz = false;
    this.ShowA = false;
  }

  // По алфавиту (А,Б,С A,B,C,D)
  valueAscOrder = (a: KeyValue<string, number>, b: KeyValue<string, number>): number => {
    return a.key.localeCompare(b.key);
  }


// Order by descending property key(по значениям по убывании)
  keyDescOrder = (a: KeyValue<string, number>, b: KeyValue<string, number>): number => {
    return a.value < b.value ? -1 : (b.value < a.value ? 1 : 0);
  }


  keyAskOrder = (a: KeyValue<string, number>, b: KeyValue<string, number>): number => {
    return a.value > b.value ? -1 : (b.value > a.value ? 1 : 0);
  }
}



