import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopEmployeeRosterAddBreakPopoverComponent } from './shop-employee-roster-add-break-popover.component';

describe('ShopEmployeeRosterAddBreakPopoverComponent', () => {
  let component: ShopEmployeeRosterAddBreakPopoverComponent;
  let fixture: ComponentFixture<ShopEmployeeRosterAddBreakPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopEmployeeRosterAddBreakPopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopEmployeeRosterAddBreakPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
