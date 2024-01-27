import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SignatureTransferPage } from './signature-transfer.page';

describe('SignatureTransferPage', () => {
  let component: SignatureTransferPage;
  let fixture: ComponentFixture<SignatureTransferPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(SignatureTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
