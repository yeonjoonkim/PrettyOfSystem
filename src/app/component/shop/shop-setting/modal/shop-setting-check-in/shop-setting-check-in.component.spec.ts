import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopSettingCheckInComponent } from './shop-setting-check-in.component';

describe('ShopSettingCheckInComponent', () => {
  let component: ShopSettingCheckInComponent;
  let fixture: ComponentFixture<ShopSettingCheckInComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSettingCheckInComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopSettingCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
