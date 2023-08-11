import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SystemUserPage } from './system-user.page';

describe('SystemUserPage', () => {
  let component: SystemUserPage;
  let fixture: ComponentFixture<SystemUserPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(SystemUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
