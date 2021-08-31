import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSessionModalComponent } from './add-session-modal.component';

describe('AddSessionModalComponent', () => {
  let component: AddSessionModalComponent;
  let fixture: ComponentFixture<AddSessionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSessionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSessionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
