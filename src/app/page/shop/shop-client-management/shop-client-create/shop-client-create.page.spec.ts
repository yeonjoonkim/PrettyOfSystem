import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShopClientCreatePage } from './shop-client-create.page';

describe('ShopClientCreatePage', () => {
  let component: ShopClientCreatePage;
  let fixture: ComponentFixture<ShopClientCreatePage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ShopClientCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
