import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CreateAccountPage } from './create-account.page';

describe('CreateAccountPage', () => {
  let component: CreateAccountPage;
  let fixture: ComponentFixture<CreateAccountPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(CreateAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
