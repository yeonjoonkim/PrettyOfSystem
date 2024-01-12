import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WaitingListConsultRequestPage } from './waiting-list-consult-request.page';

describe('WaitingListConsultRequestPage', () => {
  let component: WaitingListConsultRequestPage;
  let fixture: ComponentFixture<WaitingListConsultRequestPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(WaitingListConsultRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
