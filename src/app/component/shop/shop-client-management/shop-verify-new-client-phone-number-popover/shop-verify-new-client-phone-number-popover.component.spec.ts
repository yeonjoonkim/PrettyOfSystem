import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopVerifyNewClientPhoneNumberPopoverComponent } from './shop-verify-new-client-phone-number-popover.component';

describe('ShopVerifyNewClientPhoneNumberPopoverComponent', () => {
  let component: ShopVerifyNewClientPhoneNumberPopoverComponent;
  let fixture: ComponentFixture<ShopVerifyNewClientPhoneNumberPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopVerifyNewClientPhoneNumberPopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopVerifyNewClientPhoneNumberPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
