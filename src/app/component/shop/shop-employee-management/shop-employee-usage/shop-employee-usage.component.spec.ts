import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopEmployeeUsageComponent } from './shop-employee-usage.component';

describe('ShopEmployeeUsageComponent', () => {
  let component: ShopEmployeeUsageComponent;
  let fixture: ComponentFixture<ShopEmployeeUsageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopEmployeeUsageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopEmployeeUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
