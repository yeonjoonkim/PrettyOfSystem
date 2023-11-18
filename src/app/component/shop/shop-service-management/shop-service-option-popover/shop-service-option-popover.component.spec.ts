import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopServiceOptionPopoverComponent } from './shop-service-option-popover.component';

describe('ShopServiceOptionPopoverComponent', () => {
  let component: ShopServiceOptionPopoverComponent;
  let fixture: ComponentFixture<ShopServiceOptionPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopServiceOptionPopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopServiceOptionPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
