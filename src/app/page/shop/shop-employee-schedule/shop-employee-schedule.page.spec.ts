import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShopEmployeeSchedulePage } from './shop-employee-schedule.page';

describe('ShopEmployeeSchedulePage', () => {
  let component: ShopEmployeeSchedulePage;
  let fixture: ComponentFixture<ShopEmployeeSchedulePage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ShopEmployeeSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
