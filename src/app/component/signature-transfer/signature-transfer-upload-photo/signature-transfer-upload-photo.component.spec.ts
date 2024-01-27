import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignatureTransferUploadPhotoComponent } from './signature-transfer-upload-photo.component';

describe('SignatureTransferUploadPhotoComponent', () => {
  let component: SignatureTransferUploadPhotoComponent;
  let fixture: ComponentFixture<SignatureTransferUploadPhotoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureTransferUploadPhotoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignatureTransferUploadPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
