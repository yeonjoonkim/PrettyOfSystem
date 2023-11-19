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
  };
  constructor() {}

  public get(): IShopSettingOptionType[] {
    return [this.contact(), this.logo(), this.operatingHours(), this.finance(), this.calendar(), this.capacity()];
  }

  private calendar() {
    const option = this.defaultOption();
    option.name = this.name.calendar;
    option.img = 'assets/shop-setting/calendar.svg';
    option.isCalendar = true;
    return option;
  }

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
    };
    return result;
  }
}
