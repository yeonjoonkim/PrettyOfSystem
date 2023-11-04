import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShopSettingPage } from './shop-setting.page';

describe('ShopSettingPage', () => {
  let component: ShopSettingPage;
  let fixture: ComponentFixture<ShopSettingPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ShopSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
