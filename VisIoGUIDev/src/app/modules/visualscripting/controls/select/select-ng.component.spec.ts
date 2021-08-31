import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNgComponent } from './select-ng.component';

describe('SelectNgComponent', () => {
  let component: SelectNgComponent;
  let fixture: ComponentFixture<SelectNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
