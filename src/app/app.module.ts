import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './entities/components/header/header.component';
import { SidenavComponent } from './entities/components/sidenav/sidenav.component';
import { SharedModule } from './entities/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { AfterViewInit } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient} from '@angular/common/http';

// COMPONENTS
import {BusinessmenComponent} from './entities/components/businessmens/businessmens.component';
import {CompanysComponent} from './entities/components/companys/companys.component';
import {AuthComponent} from './entities/components/auth/auth.component';
import {ForbesComponent} from './entities/components/Forbes/forbes.component';
import {OnebusinessmenComponent} from './entities/components/businessmens/one_businessmen/one_businessmen.component';
import {OnecompanysComponent} from './entities/components/companys/one_companys/one_companys.component';

// SERVICES
import {ApiService} from './entities/services/api.service';
import {BusinessmensService} from './entities/services/businessmens.service';
import {CompanysService} from './entities/services/companys.service';

import { Routes, RouterModule } from '@angular/router';
// import { CompanysComponent } from './entities/components/companys/businessmens/companys.component';

const routes: Routes = [
  {
    path: 'Businessmens', component: BusinessmenComponent,
  },
   {
     path: 'Companys', component: CompanysComponent,
   },
   {
    path: 'auth', component: AuthComponent,
  },
  {
    path: 'Forbes', component: ForbesComponent,
  },
  {
    path: 'Businessmens/:id', component: OnebusinessmenComponent,
  },
  {
    path: 'Companys/:id', component: OnecompanysComponent,
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    BusinessmenComponent,
    CompanysComponent,
    AuthComponent,
    ForbesComponent,
    OnebusinessmenComponent,
    OnecompanysComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [ApiService,
    ApiService,
    BusinessmensService,
    HttpClient,
    CompanysService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
