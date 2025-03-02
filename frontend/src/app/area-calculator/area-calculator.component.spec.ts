import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCalculatorComponent } from './area-calculator.component';

describe('AreaCalculatorComponent', () => {
  let component: AreaCalculatorComponent;
  let fixture: ComponentFixture<AreaCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaCalculatorComponent]
    });
    fixture = TestBed.createComponent(AreaCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
