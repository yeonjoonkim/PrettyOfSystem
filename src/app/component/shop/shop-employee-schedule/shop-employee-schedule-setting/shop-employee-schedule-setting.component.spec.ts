import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopEmployeeScheduleSettingComponent } from './shop-employee-schedule-setting.component';

describe('ShopEmployeeScheduleSettingComponent', () => {
  let component: ShopEmployeeScheduleSettingComponent;
  let fixture: ComponentFixture<ShopEmployeeScheduleSettingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShopEmployeeScheduleSettingComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopEmployeeScheduleSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
