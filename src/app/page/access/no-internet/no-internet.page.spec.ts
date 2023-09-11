import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoInternetPage } from './no-internet.page';

describe('NoInternetPage', () => {
  let component: NoInternetPage;
  let fixture: ComponentFixture<NoInternetPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(NoInternetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
