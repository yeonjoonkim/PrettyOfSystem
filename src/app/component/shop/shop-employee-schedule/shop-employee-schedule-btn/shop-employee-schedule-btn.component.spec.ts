import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopEmployeeScheduleBtnComponent } from './shop-employee-schedule-btn.component';

describe('ShopEmployeeScheduleBtnComponent', () => {
  let component: ShopEmployeeScheduleBtnComponent;
  let fixture: ComponentFixture<ShopEmployeeScheduleBtnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopEmployeeScheduleBtnComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopEmployeeScheduleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
