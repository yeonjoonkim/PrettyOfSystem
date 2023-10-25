import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShopServiceManagementPage } from './shop-service-management.page';

describe('ShopServiceManagementPage', () => {
  let component: ShopServiceManagementPage;
  let fixture: ComponentFixture<ShopServiceManagementPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ShopServiceManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
