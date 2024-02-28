import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopReservationSchedulerMobileToolbarPopoverComponent } from './shop-reservation-scheduler-mobile-toolbar-popover.component';

describe('ShopReservationSchedulerMobileToolbarPopoverComponent', () => {
  let component: ShopReservationSchedulerMobileToolbarPopoverComponent;
  let fixture: ComponentFixture<ShopReservationSchedulerMobileToolbarPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopReservationSchedulerMobileToolbarPopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopReservationSchedulerMobileToolbarPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
