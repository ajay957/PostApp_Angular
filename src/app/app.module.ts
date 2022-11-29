import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ViewAllComponent } from './view-all/view-all.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';

const myRoute:Routes=[

  {
  path:"",
  component:AddPostComponent
  },
  {
    path:"view",
    component:ViewAllComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    ViewAllComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
