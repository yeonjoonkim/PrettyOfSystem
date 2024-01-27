import { ShopCategoryIndicatorType, SignatureTransferStatusType } from '../..';

export type SignatureTransferDocumentType = {
  id: string;
  shopCategory: ShopCategoryIndicatorType;
  expiredOfficeDateTime: string;
  signature: string | null;
  status: SignatureTransferStatusType;
};
