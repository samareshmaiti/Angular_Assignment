import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentModule3Component } from './parent-module3.component';

describe('ParentModule3Component', () => {
  let component: ParentModule3Component;
  let fixture: ComponentFixture<ParentModule3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentModule3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentModule3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
