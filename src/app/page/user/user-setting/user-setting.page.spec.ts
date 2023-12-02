import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserSettingPage } from './user-setting.page';

describe('UserSettingPage', () => {
  let component: UserSettingPage;
  let fixture: ComponentFixture<UserSettingPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(UserSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
