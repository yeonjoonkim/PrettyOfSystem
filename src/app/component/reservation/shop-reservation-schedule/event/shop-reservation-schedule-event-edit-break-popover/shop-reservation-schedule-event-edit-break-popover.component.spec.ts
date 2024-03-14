import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopReservationScheduleEventEditBreakPopoverComponent } from './shop-reservation-schedule-event-edit-break-popover.component';

describe('ShopReservationScheduleEditBreakPopoverComponent', () => {
  let component: ShopReservationScheduleEventEditBreakPopoverComponent;
  let fixture: ComponentFixture<ShopReservationScheduleEventEditBreakPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShopReservationScheduleEventEditBreakPopoverComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopReservationScheduleEventEditBreakPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
