import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopEmployeeManagementComponent } from './shop-employee-management.component';

describe('ShopEmployeeManagementComponent', () => {
  let component: ShopEmployeeManagementComponent;
  let fixture: ComponentFixture<ShopEmployeeManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShopEmployeeManagementComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopEmployeeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
