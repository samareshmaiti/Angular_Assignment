import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2-module5',
  templateUrl: './child2-module5.component.html',
  styleUrls: ['./child2-module5.component.css']
})
export class Child2Module5Component implements OnInit {
  @Output() messageEvent1 = new EventEmitter<any>();
  public data="";
  constructor() { }

  ngOnInit() {
  }
  getData(event) {
    //console.log("************", event)
    this.messageEvent1.emit(event);
  }

}
