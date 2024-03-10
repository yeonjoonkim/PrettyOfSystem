import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopReservationScheduleAddBreakPopoverComponent } from './shop-reservation-schedule-add-break-popover.component';

describe('ShopReservationScheduleAddBreakPopoverComponent', () => {
  let component: ShopReservationScheduleAddBreakPopoverComponent;
  let fixture: ComponentFixture<ShopReservationScheduleAddBreakPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopReservationScheduleAddBreakPopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopReservationScheduleAddBreakPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
