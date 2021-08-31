import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunbtnComponent } from './runbtn.component';

describe('RunbtnComponent', () => {
  let component: RunbtnComponent;
  let fixture: ComponentFixture<RunbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
