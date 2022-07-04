import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';


const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'data-binding',component:DataBindingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
