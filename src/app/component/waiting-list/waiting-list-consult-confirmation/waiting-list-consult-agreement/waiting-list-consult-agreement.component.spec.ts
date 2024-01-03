import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaitingListConsultAgreementComponent } from './waiting-list-consult-agreement.component';

describe('WaitingListConsultAgreementComponent', () => {
  let component: WaitingListConsultAgreementComponent;
  let fixture: ComponentFixture<WaitingListConsultAgreementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingListConsultAgreementComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaitingListConsultAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
