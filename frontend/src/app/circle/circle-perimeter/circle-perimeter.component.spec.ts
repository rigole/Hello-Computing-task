import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclePerimeterComponent } from './circle-perimeter.component';

describe('CirclePerimeterComponent', () => {
  let component: CirclePerimeterComponent;
  let fixture: ComponentFixture<CirclePerimeterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CirclePerimeterComponent]
    });
    fixture = TestBed.createComponent(CirclePerimeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
