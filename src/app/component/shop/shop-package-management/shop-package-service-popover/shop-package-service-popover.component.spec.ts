import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopPackageServicePopoverComponent } from './shop-package-service-popover.component';

describe('ShopPackageServicePopoverComponent', () => {
  let component: ShopPackageServicePopoverComponent;
  let fixture: ComponentFixture<ShopPackageServicePopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShopPackageServicePopoverComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopPackageServicePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
