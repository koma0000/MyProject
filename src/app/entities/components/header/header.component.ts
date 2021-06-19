import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })

  export class HeaderComponent implements OnInit {

    public title = 'Businessmens and Companys';
  @Input()
    public sidenavDrawer!: MatDrawer;
    constructor() { }
  ngOnInit(): void {
    }
    toggleSidenav(): void {
      this.sidenavDrawer.toggle();
    }

  // tslint:disable-next-line:typedef
    public LogIn() {
      return localStorage.getItem('login') ? `You are logged in as a ${localStorage.getItem('login')}` : 'Login';
    }
}
