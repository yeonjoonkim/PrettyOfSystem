import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShopClientEditPage } from './shop-client-edit.page';

describe('ShopClientEditPage', () => {
  let component: ShopClientEditPage;
  let fixture: ComponentFixture<ShopClientEditPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ShopClientEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
