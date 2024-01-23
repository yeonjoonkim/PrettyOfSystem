import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShopClientManagementPage } from './shop-client-management.page';

describe('ShopClientManagementPage', () => {
  let component: ShopClientManagementPage;
  let fixture: ComponentFixture<ShopClientManagementPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ShopClientManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
