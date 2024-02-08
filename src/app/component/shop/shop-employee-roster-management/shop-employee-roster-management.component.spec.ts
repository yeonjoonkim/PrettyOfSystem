import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopEmployeeRosterManagementComponent } from './shop-employee-roster-management.component';

describe('ShopEmployeeRosterManagementComponent', () => {
  let component: ShopEmployeeRosterManagementComponent;
  let fixture: ComponentFixture<ShopEmployeeRosterManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopEmployeeRosterManagementComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopEmployeeRosterManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
