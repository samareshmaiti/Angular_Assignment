import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Module6Component } from './child1-module6/child1-module6.component';
import { Child2Module6Component } from './child2-module6/child2-module6.component';
import { ParentModule6Component } from './parent-module6/parent-module6.component';

@NgModule({
  declarations: [Child1Module6Component, Child2Module6Component, ParentModule6Component],
  imports: [
    CommonModule
  ],
  exports:[Child1Module6Component, Child2Module6Component, ParentModule6Component]
})
export class Module6Module { }
