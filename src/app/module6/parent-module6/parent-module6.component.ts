import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-module6',
  templateUrl: './parent-module6.component.html',
  styleUrls: ['./parent-module6.component.css']
})
export class ParentModule6Component implements OnInit {
  public name="";
  message(value)
  {
    this.name=value;
  }
  constructor() { }

  ngOnInit() {
  }

}
