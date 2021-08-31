import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkContextComponent } from './spark-context.component';

describe('SparkContextComponent', () => {
  let component: SparkContextComponent;
  let fixture: ComponentFixture<SparkContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
