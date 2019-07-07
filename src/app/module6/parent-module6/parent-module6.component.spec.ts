import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentModule6Component } from './parent-module6.component';

describe('ParentModule6Component', () => {
  let component: ParentModule6Component;
  let fixture: ComponentFixture<ParentModule6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentModule6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentModule6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
