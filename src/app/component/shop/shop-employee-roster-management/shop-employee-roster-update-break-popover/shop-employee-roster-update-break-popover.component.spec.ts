import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopEmployeeRosterUpdateBreakPopoverComponent } from './shop-employee-roster-update-break-popover.component';

describe('ShopEmployeeRosterUpdateBreakPopoverComponent', () => {
  let component: ShopEmployeeRosterUpdateBreakPopoverComponent;
  let fixture: ComponentFixture<ShopEmployeeRosterUpdateBreakPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopEmployeeRosterUpdateBreakPopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopEmployeeRosterUpdateBreakPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
