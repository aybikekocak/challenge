import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCComponent } from './card-c.component';

describe('CardCComponent', () => {
  let component: CardCComponent;
  let fixture: ComponentFixture<CardCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCComponent]
    });
    fixture = TestBed.createComponent(CardCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
