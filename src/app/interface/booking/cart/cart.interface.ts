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
  specialist: CheckOutSpecialistType;
  selectedTime: CheckOutSessionTime | null;
  dateTime: string;
  dayIndex: Day;
};

export type CheckOutSessionTime = {
  start: string;
  end: string;
};

export type CheckOutSpecialistType = {
  id: string;
  name: string;
};

export type CheckOutItem = {
  type: CartItemType;
  shopId: string;
  itemId: string;
  title: string;
  isInsuranceCover: boolean;
  specializedEmployees: NameValuePairType[];
  limitedTime: ShopPackageLimitedTime | null;
  relatedServices: NameValuePairType[];
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
