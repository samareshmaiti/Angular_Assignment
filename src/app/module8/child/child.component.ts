import { Component, OnInit ,OnDestroy, Input} from '@angular/core';
import { ServiceService } from '../service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnDestroy{
  @Input() astronaut: string;
  mission="";
  confirmed=false;
  announced=false;
  subscription:Subscription;
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  

  constructor( private serviceService: ServiceService) { 
    this.subscription=serviceService.sourceConfirmed$.subscribe(
      mission =>{
       // this.mission = mission;
        this.announced=true;
        this.confirmed=false;
      }
    );
  }
  confirm()
  {
    this.confirmed=true;
    this.serviceService.announcedService2(this.astronaut);
  }
ngDestroy(){
  this.subscription.unsubscribe();
}
  ngOnInit() {
  }

}
