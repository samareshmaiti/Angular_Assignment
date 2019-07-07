import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';
import { Module3Module } from './module3/module3.module';
import { Module4Module } from './module4/module4.module';
import { Module5Module } from './module5/module5.module';
import { Module6Module } from './module6/module6.module';
import { Module8Module } from './module8/module8.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module1Module,
    Module2Module,
    FormsModule,
    Module3Module,
    Module4Module,
    Module5Module,
    Module6Module,
    Module8Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
