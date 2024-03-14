import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopReservationScheduleEmployeeNewBreakPopoverComponent } from './shop-reservation-schedule-employee-new-break-popover.component';

describe('ShopReservationScheduleEmployeeNewBreakPopoverComponent', () => {
  let component: ShopReservationScheduleEmployeeNewBreakPopoverComponent;
  let fixture: ComponentFixture<ShopReservationScheduleEmployeeNewBreakPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopReservationScheduleEmployeeNewBreakPopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopReservationScheduleEmployeeNewBreakPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
