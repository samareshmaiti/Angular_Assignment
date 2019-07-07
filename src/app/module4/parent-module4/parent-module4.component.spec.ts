import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentModule4Component } from './parent-module4.component';

describe('ParentModule4Component', () => {
  let component: ParentModule4Component;
  let fixture: ComponentFixture<ParentModule4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentModule4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentModule4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
