import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UpdateMedicalInfoPage } from './update-medical-info.page';

describe('UpdateMedicalInfoPage', () => {
  let component: UpdateMedicalInfoPage;
  let fixture: ComponentFixture<UpdateMedicalInfoPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(UpdateMedicalInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
