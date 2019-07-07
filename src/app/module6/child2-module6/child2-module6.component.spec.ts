import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2Module6Component } from './child2-module6.component';

describe('Child2Module6Component', () => {
  let component: Child2Module6Component;
  let fixture: ComponentFixture<Child2Module6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child2Module6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2Module6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
