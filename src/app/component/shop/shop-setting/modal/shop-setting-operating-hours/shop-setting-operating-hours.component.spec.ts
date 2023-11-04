import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopSettingOperatingHoursComponent } from './shop-setting-operating-hours.component';

describe('ShopSettingOperatingHoursComponent', () => {
  let component: ShopSettingOperatingHoursComponent;
  let fixture: ComponentFixture<ShopSettingOperatingHoursComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSettingOperatingHoursComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopSettingOperatingHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
