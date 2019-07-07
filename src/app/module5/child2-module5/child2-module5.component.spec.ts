import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2Module5Component } from './child2-module5.component';

describe('Child2Module5Component', () => {
  let component: Child2Module5Component;
  let fixture: ComponentFixture<Child2Module5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child2Module5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2Module5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
