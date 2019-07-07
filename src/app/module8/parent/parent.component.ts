import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers:[ServiceService]
})
export class ParentComponent implements OnInit {
  astronauts=['a','b'];
  history:string[]=[];
  missions=['hi','hello','hey'];
  nextMission=0;


  constructor(private serviceService:ServiceService) { 
    serviceService.source2Confirmed$.subscribe(
      astronaut => {
     this.history.push('${astronaut} confirmed the mission');
      }
    );
  }
  announce(){
    let mission=this.missions[this.nextMission++];
    this.serviceService.announcedService(mission);
    this.history.push('Mission "${mission}" announced');
    if(this.nextMission >=this.missions.length)
    {this.nextMission=0;
    }
  }

  ngOnInit() {
  }

}
