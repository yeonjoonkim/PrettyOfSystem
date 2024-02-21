import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopReservationSchedulerToolbarComponent } from './shop-reservation-scheduler-toolbar.component';

describe('ShopReservationSchedulerToolbarComponent', () => {
  let component: ShopReservationSchedulerToolbarComponent;
  let fixture: ComponentFixture<ShopReservationSchedulerToolbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopReservationSchedulerToolbarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopReservationSchedulerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
