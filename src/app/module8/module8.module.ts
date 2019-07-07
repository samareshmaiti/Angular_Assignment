import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [ChildComponent, ParentComponent],
  imports: [
    CommonModule
  ],
// tslint:disable-next-line: no-unused-expression
  exports:[ChildComponent, ParentComponent]
})
export class Module8Module { }
