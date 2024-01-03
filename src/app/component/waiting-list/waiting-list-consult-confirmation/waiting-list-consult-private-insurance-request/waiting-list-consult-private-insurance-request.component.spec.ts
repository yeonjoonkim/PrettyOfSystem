import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaitingListConsultPrivateInsuranceRequestComponent } from './waiting-list-consult-private-insurance-request.component';

describe('WaitingListConsultPrivateInsuranceRequestComponent', () => {
  let component: WaitingListConsultPrivateInsuranceRequestComponent;
  let fixture: ComponentFixture<WaitingListConsultPrivateInsuranceRequestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingListConsultPrivateInsuranceRequestComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaitingListConsultPrivateInsuranceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
