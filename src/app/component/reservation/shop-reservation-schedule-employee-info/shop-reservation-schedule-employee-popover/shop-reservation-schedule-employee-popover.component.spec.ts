import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopReservationScheduleEmployeePopoverComponent } from './shop-reservation-schedule-employee-popover.component';

describe('ShopReservationScheduleEmployeePopoverComponent', () => {
  let component: ShopReservationScheduleEmployeePopoverComponent;
  let fixture: ComponentFixture<ShopReservationScheduleEmployeePopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopReservationScheduleEmployeePopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopReservationScheduleEmployeePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
