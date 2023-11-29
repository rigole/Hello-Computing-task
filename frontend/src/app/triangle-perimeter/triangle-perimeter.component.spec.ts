import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrianglePerimeterComponent } from './triangle-perimeter.component';

describe('TrianglePerimeterComponent', () => {
  let component: TrianglePerimeterComponent;
  let fixture: ComponentFixture<TrianglePerimeterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrianglePerimeterComponent]
    });
    fixture = TestBed.createComponent(TrianglePerimeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
