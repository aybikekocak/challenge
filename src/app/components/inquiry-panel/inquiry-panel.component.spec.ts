import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryPanelComponent } from './inquiry-panel.component';

describe('InquiryPanelComponent', () => {
  let component: InquiryPanelComponent;
  let fixture: ComponentFixture<InquiryPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquiryPanelComponent]
    });
    fixture = TestBed.createComponent(InquiryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
