import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShopEmployeeManagementPage } from './shop-employee-management.page';

describe('ShopEmployeeManagementPage', () => {
  let component: ShopEmployeeManagementPage;
  let fixture: ComponentFixture<ShopEmployeeManagementPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ShopEmployeeManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
