import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildModule4Component } from './child-module4.component';

describe('ChildModule4Component', () => {
  let component: ChildModule4Component;
  let fixture: ComponentFixture<ChildModule4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildModule4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildModule4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
