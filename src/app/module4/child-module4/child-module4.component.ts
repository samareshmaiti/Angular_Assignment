import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-module4',
  templateUrl: './child-module4.component.html',
  styleUrls: ['./child-module4.component.css']
})
export class ChildModule4Component implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();

  constructor() { }
  fireEvent(name)
  {
    this.messageEvent.emit(name);
  }

  ngOnInit() {
  }

}
