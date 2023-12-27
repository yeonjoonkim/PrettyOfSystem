import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaitingListSelectTimeSummaryComponent } from './waiting-list-select-time-summary.component';

describe('WaitingListSelectTimeSummaryComponent', () => {
  let component: WaitingListSelectTimeSummaryComponent;
  let fixture: ComponentFixture<WaitingListSelectTimeSummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingListSelectTimeSummaryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaitingListSelectTimeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
