import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignatureTransferReceiverComponent } from './signature-transfer-receiver.component';

describe('SignatureTransferReceiverComponent', () => {
  let component: SignatureTransferReceiverComponent;
  let fixture: ComponentFixture<SignatureTransferReceiverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureTransferReceiverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignatureTransferReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
