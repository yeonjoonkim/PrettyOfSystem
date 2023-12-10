import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopSettingInsuranceProviderComponent } from './shop-setting-insurance-provider.component';

describe('ShopSettingInsuranceProviderComponent', () => {
  let component: ShopSettingInsuranceProviderComponent;
  let fixture: ComponentFixture<ShopSettingInsuranceProviderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSettingInsuranceProviderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopSettingInsuranceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
