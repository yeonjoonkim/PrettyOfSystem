import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopPackageExtraPopoverComponent } from './shop-package-extra-popover.component';

describe('ShopPackageExtraPopoverComponent', () => {
  let component: ShopPackageExtraPopoverComponent;
  let fixture: ComponentFixture<ShopPackageExtraPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShopPackageExtraPopoverComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopPackageExtraPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
