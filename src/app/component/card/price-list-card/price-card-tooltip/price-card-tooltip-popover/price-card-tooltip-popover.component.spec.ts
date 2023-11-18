import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PriceCardTooltipPopoverComponent } from './price-card-tooltip-popover.component';

describe('PriceCardTooltipPopoverComponent', () => {
  let component: PriceCardTooltipPopoverComponent;
  let fixture: ComponentFixture<PriceCardTooltipPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PriceCardTooltipPopoverComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceCardTooltipPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
