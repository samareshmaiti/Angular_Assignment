import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child1-module5',
  templateUrl: './child1-module5.component.html',
  styleUrls: ['./child1-module5.component.css']
})
export class Child1Module5Component implements OnInit {
  @Output() public messageEvent = new EventEmitter<any>();
  constructor() { }
  fireEvent(name) {
    
    this.messageEvent.emit(name);
  }
  ngOnInit() {
  }

}
