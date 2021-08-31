import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckNgComponent } from './check-ng.component';

describe('SelectNgComponent', () => {
  let component: CheckNgComponent;
  let fixture: ComponentFixture<CheckNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
