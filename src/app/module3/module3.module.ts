import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentModule3Component } from './parent-module3/parent-module3.component';
import { ChildModule3Component } from './child-module3/child-module3.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ParentModule3Component, ChildModule3Component],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports:[ParentModule3Component,ChildModule3Component]
})
export class Module3Module { }
