import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildModule4Component } from './child-module4/child-module4.component';
import { ParentModule4Component } from './parent-module4/parent-module4.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ChildModule4Component, ParentModule4Component],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports:[ParentModule4Component,ChildModule4Component]
})
export class Module4Module { }
