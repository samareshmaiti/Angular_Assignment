import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Module5Component } from './child1-module5/child1-module5.component';
import { Child2Module5Component } from './child2-module5/child2-module5.component';
import { ParentModule5Component } from './parent-module5/parent-module5.component';

@NgModule({
  declarations: [Child1Module5Component, Child2Module5Component, ParentModule5Component],
  imports: [
    CommonModule
  ],
  exports:[Child1Module5Component, Child2Module5Component, ParentModule5Component]
})
export class Module5Module { }
