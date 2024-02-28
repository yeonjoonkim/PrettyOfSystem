import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopReservationScheduleEmployeeInfoComponent } from './shop-reservation-schedule-employee-info.component';

describe('ShopReservationScheduleEmployeeInfoComponent', () => {
  let component: ShopReservationScheduleEmployeeInfoComponent;
  let fixture: ComponentFixture<ShopReservationScheduleEmployeeInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopReservationScheduleEmployeeInfoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopReservationScheduleEmployeeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
