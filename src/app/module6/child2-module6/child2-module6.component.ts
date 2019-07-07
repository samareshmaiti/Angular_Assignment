import { Component, OnInit,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2-module6',
  templateUrl: './child2-module6.component.html',
  styleUrls: ['./child2-module6.component.css']
})
export class Child2Module6Component implements OnInit {
  @Input() public child1="";
  constructor() { }
  
  ngOnInit() {
  }

}
