import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-module4',
  templateUrl: './parent-module4.component.html',
  styleUrls: ['./parent-module4.component.css']
})
export class ParentModule4Component implements OnInit {
public data:string;
  constructor() { }

  ngOnInit() {
  }
  getData(event) {
    //console.log("************", event)
    this.data= event;

}
}
