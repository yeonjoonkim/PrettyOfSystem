import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UpdateMassagePreferencePage } from './update-massage-preference.page';

describe('UpdateMassagePreferencePage', () => {
  let component: UpdateMassagePreferencePage;
  let fixture: ComponentFixture<UpdateMassagePreferencePage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(UpdateMassagePreferencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
