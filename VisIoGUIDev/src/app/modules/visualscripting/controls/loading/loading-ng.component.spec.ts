import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingNgComponent } from './loading-ng.component';

describe('SelectNgComponent', () => {
  let component: LoadingNgComponent;
  let fixture: ComponentFixture<LoadingNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
