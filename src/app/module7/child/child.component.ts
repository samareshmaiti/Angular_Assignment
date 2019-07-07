import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() public child=new EventEmitter();
public name="";
  constructor() { }
  onClick(name)
  {
this.child.emit(name);
  }


  ngOnInit() {
  }

}
