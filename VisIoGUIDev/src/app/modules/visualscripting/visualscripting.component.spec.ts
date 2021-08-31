import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualscriptingComponent } from './visualscripting.component';

describe('VisualscriptingComponent', () => {
  let component: VisualscriptingComponent;
  let fixture: ComponentFixture<VisualscriptingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualscriptingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualscriptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
