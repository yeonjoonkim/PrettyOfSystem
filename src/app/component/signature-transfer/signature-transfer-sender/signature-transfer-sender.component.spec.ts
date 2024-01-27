import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignatureTransferSenderComponent } from './signature-transfer-sender.component';

describe('SignatureTransferSenderComponent', () => {
  let component: SignatureTransferSenderComponent;
  let fixture: ComponentFixture<SignatureTransferSenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureTransferSenderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignatureTransferSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
