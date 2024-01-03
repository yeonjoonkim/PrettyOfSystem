import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaitingListConsultConfirmationComponent } from './waiting-list-consult-confirmation.component';

describe('WaitingListConsultConfirmationComponent', () => {
  let component: WaitingListConsultConfirmationComponent;
  let fixture: ComponentFixture<WaitingListConsultConfirmationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingListConsultConfirmationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaitingListConsultConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
