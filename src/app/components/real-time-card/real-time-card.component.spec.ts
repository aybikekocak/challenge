import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeCardComponent } from './real-time-card.component';

describe('RealTimeCardComponent', () => {
  let component: RealTimeCardComponent;
  let fixture: ComponentFixture<RealTimeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealTimeCardComponent]
    });
    fixture = TestBed.createComponent(RealTimeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
