import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-child-module3',
  templateUrl: './child-module3.component.html',
  styleUrls: ['./child-module3.component.css']
})
export class ChildModule3Component implements OnInit {
  @Input()  public sendedData: string ;
  constructor() { }

  ngOnInit() {
  }

}
