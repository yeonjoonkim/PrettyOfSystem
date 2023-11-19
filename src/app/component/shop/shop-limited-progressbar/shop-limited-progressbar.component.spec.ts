import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopLimitedProgressbarComponent } from './shop-limited-progressbar.component';

describe('ShopLimitedProgressbarComponent', () => {
  let component: ShopLimitedProgressbarComponent;
  let fixture: ComponentFixture<ShopLimitedProgressbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShopLimitedProgressbarComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopLimitedProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
