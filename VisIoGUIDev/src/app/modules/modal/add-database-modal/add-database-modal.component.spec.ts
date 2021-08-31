import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDatabaseModalComponent } from './add-database-modal.component';

describe('AddDatabaseModalComponent', () => {
  let component: AddDatabaseModalComponent;
  let fixture: ComponentFixture<AddDatabaseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDatabaseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDatabaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
