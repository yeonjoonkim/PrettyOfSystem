import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserMassageSettingPage } from './user-massage-setting.page';

describe('UserMassageSettingPage', () => {
  let component: UserMassageSettingPage;
  let fixture: ComponentFixture<UserMassageSettingPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(UserMassageSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
