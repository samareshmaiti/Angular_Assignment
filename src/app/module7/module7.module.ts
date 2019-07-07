import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ServiceComponent } from './service/service.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [ChildComponent, ServiceComponent, ParentComponent],
  imports: [
    CommonModule
  ]
})
export class Module7Module { }
