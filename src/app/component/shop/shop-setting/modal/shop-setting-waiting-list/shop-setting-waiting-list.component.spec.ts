import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopSettingWaitingListComponent } from './shop-setting-waiting-list.component';

describe('ShopSettingWaitingListComponent', () => {
  let component: ShopSettingWaitingListComponent;
  let fixture: ComponentFixture<ShopSettingWaitingListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSettingWaitingListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopSettingWaitingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
