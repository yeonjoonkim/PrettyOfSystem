import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PriceCardTooltipComponent } from './price-card-tooltip.component';

describe('PriceCardTooltipComponent', () => {
  let component: PriceCardTooltipComponent;
  let fixture: ComponentFixture<PriceCardTooltipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PriceCardTooltipComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceCardTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
