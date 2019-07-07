import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentModule5Component } from './parent-module5.component';

describe('ParentModule5Component', () => {
  let component: ParentModule5Component;
  let fixture: ComponentFixture<ParentModule5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentModule5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentModule5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
