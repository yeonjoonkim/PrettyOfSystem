import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopMassageShopAgreementComponent } from './shop-massage-shop-agreement.component';

describe('ShopMassageShopAgreementComponent', () => {
  let component: ShopMassageShopAgreementComponent;
  let fixture: ComponentFixture<ShopMassageShopAgreementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopMassageShopAgreementComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopMassageShopAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
