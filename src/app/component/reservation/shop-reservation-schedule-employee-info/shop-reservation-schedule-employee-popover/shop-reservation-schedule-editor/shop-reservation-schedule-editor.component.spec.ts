import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopReservationScheduleEditorComponent } from './shop-reservation-schedule-editor.component';

describe('ShopReservationScheduleEditModalComponent', () => {
  let component: ShopReservationScheduleEditorComponent;
  let fixture: ComponentFixture<ShopReservationScheduleEditorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShopReservationScheduleEditorComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopReservationScheduleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
