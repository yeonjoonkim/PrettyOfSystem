import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CartViewPage } from './cart-view.page';

describe('CartViewPage', () => {
  let component: CartViewPage;
  let fixture: ComponentFixture<CartViewPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(CartViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
