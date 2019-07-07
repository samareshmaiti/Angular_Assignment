import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-module3',
  templateUrl: './parent-module3.component.html',
  styleUrls: ['./parent-module3.component.css']
})
export class ParentModule3Component implements OnInit {
  public message:string;
  constructor() { }

  ngOnInit() {
  }
  buttonClicked(data){

    this.message = data;

}
}
