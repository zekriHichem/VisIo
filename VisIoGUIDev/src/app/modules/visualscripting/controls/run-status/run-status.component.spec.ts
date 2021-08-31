import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunStatusNgComponent } from './run-status.component';

describe('RunStatusNgComponent', () => {
  let component: RunStatusNgComponent;
  let fixture: ComponentFixture<RunStatusNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunStatusNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunStatusNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
