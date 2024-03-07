import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopReservationScheduleEditModalComponent } from './shop-reservation-schedule-edit-modal.component';

describe('ShopReservationScheduleEditModalComponent', () => {
  let component: ShopReservationScheduleEditModalComponent;
  let fixture: ComponentFixture<ShopReservationScheduleEditModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopReservationScheduleEditModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopReservationScheduleEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
