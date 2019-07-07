import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1Module6Component } from './child1-module6.component';

describe('Child1Module6Component', () => {
  let component: Child1Module6Component;
  let fixture: ComponentFixture<Child1Module6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1Module6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1Module6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
