export interface IShopSetting{
  reservationScheduler: IShopReservationScheduler;
  //general: IShopGeneralSetting;
}

export interface IShopGeneralSetting{
  taxRate: number;
}

export interface IShopReservationScheduler{
  isEnabled: boolean;
  intervalMin: number;
}
