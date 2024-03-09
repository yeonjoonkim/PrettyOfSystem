import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopReservationScheduleEditBreakPopoverComponent } from './shop-reservation-schedule-edit-break-popover.component';

describe('ShopReservationScheduleEditBreakPopoverComponent', () => {
  let component: ShopReservationScheduleEditBreakPopoverComponent;
  let fixture: ComponentFixture<ShopReservationScheduleEditBreakPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopReservationScheduleEditBreakPopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopReservationScheduleEditBreakPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
