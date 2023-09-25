import { BookingSearchIconType, ShopCategoryType } from '../..';
import { PostCodeItemType } from '../../global/global.interface';

export type BookingQueryCriteria = {
  address: PostCodeItemType;
  shopCategoryName: BookingSearchIconType;
};
