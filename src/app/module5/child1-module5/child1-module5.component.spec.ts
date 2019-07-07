import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1Module5Component } from './child1-module5.component';

describe('Child1Module5Component', () => {
  let component: Child1Module5Component;
  let fixture: ComponentFixture<Child1Module5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1Module5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1Module5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
