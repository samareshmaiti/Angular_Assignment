import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildModule3Component } from './child-module3.component';

describe('ChildModule3Component', () => {
  let component: ChildModule3Component;
  let fixture: ComponentFixture<ChildModule3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildModule3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildModule3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
