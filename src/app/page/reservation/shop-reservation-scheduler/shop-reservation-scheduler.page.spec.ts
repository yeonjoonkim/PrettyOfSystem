import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShopReservationSchedulerPage } from './shop-reservation-scheduler.page';

describe('ShopReservationSchedulerPage', () => {
  let component: ShopReservationSchedulerPage;
  let fixture: ComponentFixture<ShopReservationSchedulerPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ShopReservationSchedulerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
