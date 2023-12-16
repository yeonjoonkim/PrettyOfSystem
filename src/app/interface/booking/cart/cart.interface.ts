import { CartItemType } from '../../../constant/constant';
import { NameValuePairType } from '../../global/global.interface';
import { ShopPackageLimitedTime } from '../../shop/shop-service.interface';

export type Cart = {
  shopId: string;
  checkout: CheckOutItem[];
  totalPrice: number;
  totalMin: number;
  expiredDateTime: string;
  timezone: string;
  timeoutMin: number;
};

export type CheckOutItem = {
  type: CartItemType;
  shopId: string;
  itemId: string;
  title: string;
  isInsuranceCover: boolean;
  specializedEmployees: NameValuePairType[];
  limitedTime: ShopPackageLimitedTime | null;
  price: number;
  qty: number;
  min: number;
  couponCriteria: CheckOutCouponItemType | null;
};

export type CheckOutCouponItemType = {
  numberOfCoupon: number;
  expiredMonth: number;
  min: number;
  price: number;
};
