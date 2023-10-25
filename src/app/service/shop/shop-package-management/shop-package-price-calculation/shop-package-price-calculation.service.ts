import { Injectable } from '@angular/core';
import { ShopPackageDocumentType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
@Injectable({
  providedIn: 'root',
})
export class ShopPackagePriceCalculationService {
  updatePrice(p: ShopPackageDocumentType): ShopPackageDocumentType {
    p.totalMin = this.sumMinutes(p);
    p.originalPrice = this.sumTotalPrice(p);
    return this.applyDiscount(p);
  }

  private applyDiscount(p: ShopPackageDocumentType): ShopPackageDocumentType {
    const isPercentDiscount = p.discount.type === Constant.PackageDiscountType.Percent;
    if (isPercentDiscount) {
      return this.percentDiscount(p);
    } else {
      return this.dollarDiscount(p);
    }
  }

  private percentDiscount(p: ShopPackageDocumentType): ShopPackageDocumentType {
    const discountedAmount = parseFloat((p.originalPrice * p.discount.value).toFixed(2));
    const discountPrice = parseFloat((p.originalPrice - discountedAmount).toFixed(2));

    p.discountedAmount = discountedAmount;
    p.discountPrice = discountPrice > 0 ? discountPrice : 0;

    return p;
  }

  private dollarDiscount(p: ShopPackageDocumentType): ShopPackageDocumentType {
    const discountedAmount = parseFloat(p.discount.value.toFixed(2));
    const discountPrice = parseFloat((p.originalPrice - discountedAmount).toFixed(2));

    p.discountedAmount = discountedAmount;
    p.discountPrice = discountPrice > 0 ? discountPrice : 0;

    return p;
  }

  private sumMinutes(p: ShopPackageDocumentType): number {
    return Math.round(p.services.map(s => s.option.min).reduce((acc, curr) => acc + curr, 0));
  }

  private sumTotalPrice(p: ShopPackageDocumentType): number {
    const sumServices = this.sumServiceOptionPrice(p);
    const sumExtras = this.sumExtraPrice(p);
    const result = sumExtras + sumServices;
    return parseFloat(result.toFixed(2));
  }

  private sumServiceOptionPrice(p: ShopPackageDocumentType): number {
    if (!p.services || !Array.isArray(p.services)) {
      return 0; // or throw an error or handle it in a different way
    }

    const sum = p.services
      .filter(s => s && s.option && typeof s.option.price === 'number')
      .map(s => s.option.price)
      .reduce((acc, curr) => acc + curr, 0);

    return parseFloat(sum.toFixed(2));
  }

  private sumExtraPrice(p: ShopPackageDocumentType): number {
    if (!p.extras || !Array.isArray(p.extras)) {
      return 0;
    }

    const sum = p.extras
      .filter(s => s && typeof s.price === 'number')
      .map(s => s.price)
      .reduce((acc, curr) => acc + curr, 0);

    return parseFloat(sum.toFixed(2));
  }
}
