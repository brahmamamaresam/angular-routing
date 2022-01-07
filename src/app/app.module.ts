import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CrisisListComponent } from '../crisis-list/crisis-list.component';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';



const routes:Routes=[
  {path:'crisis-list',component:CrisisListComponent},
  {path:'heroes-list',component:HeroesListComponent},
  {path:'',redirectTo:'/heroes-list',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent,CrisisListComponent,HeroesListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
