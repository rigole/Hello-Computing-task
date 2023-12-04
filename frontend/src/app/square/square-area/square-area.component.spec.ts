import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareAreaComponent } from './square-area.component';

describe('SquareAreaComponent', () => {
  let component: SquareAreaComponent;
  let fixture: ComponentFixture<SquareAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquareAreaComponent]
    });
    fixture = TestBed.createComponent(SquareAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
