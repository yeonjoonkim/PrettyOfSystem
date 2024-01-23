import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserVisitShopPage } from './user-visit-shop.page';

describe('UserVisitShopPage', () => {
  let component: UserVisitShopPage;
  let fixture: ComponentFixture<UserVisitShopPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(UserVisitShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
