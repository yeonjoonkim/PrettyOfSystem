import { Injectable } from '@angular/core';

export type IShopSettingOptionType = {
  name: string;
  img: string;
  isFinance: boolean;
  isPicture: boolean;
  isCalendar: boolean;
  isContact: boolean;
  isOperatingHours: boolean;
  isCapacity: boolean;
  isWaitingList: boolean;
  isInsuranceProvider: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class ShopSettingOptionService {
  private readonly _title = 'label.title.';
  public readonly name = {
    finance: this._title + 'finance',
    picture: this._title + 'album',
    calendar: this._title + 'calendar',
    contact: this._title + 'information',
    operatingHours: this._title + 'operatinghours',
    capacity: this._title + 'capacity',
    waitingList: this._title + 'waitinglist',
    insuranceprovider: this._title + 'insuranceprovider',
  };
  constructor() {}

  public get(): IShopSettingOptionType[] {
    return [
      this.contact(),
      this.logo(),
      this.operatingHours(),
      this.finance(),
      //this.calendar(),
      this.capacity(),
      this.waitingList(),
      this.insuranceProvider(),
    ];
  }

  // private calendar() {
  //   const option = this.defaultOption();
  //   option.name = this.name.calendar;
  //   option.img = 'assets/shop-setting/calendar.svg';
  //   option.isCalendar = true;
  //   return option;
  // }

  private logo() {
    const option = this.defaultOption();
    option.name = this.name.picture;
    option.img = 'assets/shop-setting/picture.svg';
    option.isPicture = true;
    return option;
  }

  private contact() {
    const option = this.defaultOption();
    option.name = this.name.contact;
    option.img = 'assets/shop-setting/contact.svg';
    option.isContact = true;
    return option;
  }

  private operatingHours() {
    const option = this.defaultOption();
    option.name = this.name.operatingHours;
    option.img = 'assets/shop-setting/operatinghours.svg';
    option.isOperatingHours = true;
    return option;
  }

  private finance() {
    const option = this.defaultOption();
    option.name = this.name.finance;
    option.img = 'assets/shop-setting/finance.svg';
    option.isFinance = true;
    return option;
  }

  private capacity() {
    const option = this.defaultOption();
    option.name = this.name.capacity;
    option.img = 'assets/shop-setting/capacity.svg';
    option.isCapacity = true;
    return option;
  }

  private waitingList() {
    const option = this.defaultOption();
    option.name = this.name.waitingList;
    option.img = 'assets/shop-setting/waiting-list.svg';
    option.isWaitingList = true;
    return option;
  }

  private insuranceProvider() {
    const option = this.defaultOption();
    option.name = this.name.insuranceprovider;
    option.img = 'assets/shop-setting/insurance-provider.svg';
    option.isInsuranceProvider = true;
    return option;
  }

  private defaultOption() {
    const result: IShopSettingOptionType = {
      name: '',
      img: '',
      isFinance: false,
      isCalendar: false,
      isPicture: false,
      isContact: false,
      isOperatingHours: false,
      isCapacity: false,
      isWaitingList: false,
      isInsuranceProvider: false,
    };
    return result;
  }
}
