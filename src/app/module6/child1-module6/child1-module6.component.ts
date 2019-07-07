import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1-module6',
  templateUrl: './child1-module6.component.html',
  styleUrls: ['./child1-module6.component.css']
})
export class Child1Module6Component implements OnInit {
  @Output() public child1=new EventEmitter();
  onClick(value)
  {
this.child1.emit(value);
  }
  constructor() { }

  ngOnInit() {
  }
  }
