import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberNgComponent } from './number-ng.component';

describe('NumberNgComponent', () => {
  let component: NumberNgComponent;
  let fixture: ComponentFixture<NumberNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
