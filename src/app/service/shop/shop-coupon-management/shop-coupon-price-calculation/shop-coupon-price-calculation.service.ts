import { Injectable } from '@angular/core';
import { ShopCouponDocumentType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class ShopCouponPriceCalculationService {
  constructor() {}

  updatePrice(c: ShopCouponDocumentType) {
    const originalPrice = parseFloat((c.option.price * c.numOfCoupon).toFixed(2));
    const discountAmount = parseFloat((originalPrice * c.discount.value).toFixed(2));
    const discountedPrice = parseFloat((originalPrice - discountAmount).toFixed(2));

    c.originalPrice = originalPrice > 0 ? originalPrice : 0;
    c.discountAmount = discountAmount > 0 ? discountAmount : 0;
    c.discountPrice = discountedPrice > 0 ? discountedPrice : 0;

    return c;
  }
}
