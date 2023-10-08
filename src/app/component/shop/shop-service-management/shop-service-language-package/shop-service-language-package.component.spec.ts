import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopServiceLanguagePackageComponent } from './shop-service-language-package.component';

describe('ShopServiceLanguagePackageComponent', () => {
  let component: ShopServiceLanguagePackageComponent;
  let fixture: ComponentFixture<ShopServiceLanguagePackageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopServiceLanguagePackageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopServiceLanguagePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
