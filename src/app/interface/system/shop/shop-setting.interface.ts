export interface IShopSetting{
  reservationScheduler: IShopReservationScheduler;
}

export interface IShopReservationScheduler{
  isEnabled: boolean;
  intervalMintue: number;
}
