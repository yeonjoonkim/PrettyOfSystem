import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChangePhoneNumberPage } from './change-phone-number.page';

describe('ChangePhoneNumberPage', () => {
  let component: ChangePhoneNumberPage;
  let fixture: ComponentFixture<ChangePhoneNumberPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ChangePhoneNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
