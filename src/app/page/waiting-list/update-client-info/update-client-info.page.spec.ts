import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UpdateClientInfoPage } from './update-client-info.page';

describe('UpdateClientInfoPage', () => {
  let component: UpdateClientInfoPage;
  let fixture: ComponentFixture<UpdateClientInfoPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(UpdateClientInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
