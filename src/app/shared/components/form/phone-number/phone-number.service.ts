import { Injectable, Type } from '@angular/core';
import * as Constant from '../../../services/global/global-constant';
export interface IPhoneNumberSelectionController {
  countryCode: Constant.CurrencyType;
  phoneCode: Constant.PhoneCodeType;
  mask: string;
  isAustralia: boolean;
  isKorea: boolean;
  isJapan: boolean;
  isChina: boolean;
}

export interface IOption {
  koreanOption: string;
  chineseOption: string;
  japaneseOption: string;
  australianOption: string;
}

export interface IDropDownMenuSelection {
  text: string;
  countryCode: Constant.CurrencyType;
  phoneCode: Constant.PhoneCodeType;
}

@Injectable({
  providedIn: 'root',
})
export class PhoneNumberService {
  public readonly australia: IDropDownMenuSelection = {
    countryCode: Constant.Default.CurrencyType.AUD,
    phoneCode: Constant.Default.PhoneCode.AU,
    text: Constant.Default.PhoneCode.AU,
  };
  public readonly china: IDropDownMenuSelection = {
    countryCode: Constant.Default.CurrencyType.CNY,
    phoneCode: Constant.Default.PhoneCode.CN,
    text: Constant.Default.PhoneCode.CN,
  };
  public readonly korea: IDropDownMenuSelection = {
    countryCode: Constant.Default.CurrencyType.KRW,
    phoneCode: Constant.Default.PhoneCode.KR,
    text: Constant.Default.PhoneCode.KR,
  };
  public readonly japan: IDropDownMenuSelection = {
    countryCode: Constant.Default.CurrencyType.JPY,
    phoneCode: Constant.Default.PhoneCode.JP,
    text: Constant.Default.PhoneCode.JP,
  };

  public readonly dropDownMenuSelections: IDropDownMenuSelection[] = [
    this.australia,
    this.china,
    this.korea,
    this.japan,
  ];

  private readonly maskOption: IOption = {
    koreanOption: '00-0000-0000',
    japaneseOption: '00-0000-0000',
    chineseOption: '0 0000 0000',
    australianOption: '000 000 000',
  };

  private readonly maskPattern = {
    koreanOption: /^1([0-9]{1})-?([0-9]{3,4})-?([0-9]{4})$/,
    japaneseOption: /^1([0-9]{1})-?([0-9]{3,4})-?([0-9]{4})$/,
    chineseOption: /^1([3-9])\d{9}$/,
    australianOption: /^[2-478](?:[ -]?[0-9]){8}$/,
  };

  constructor() {}

  public startZeroReplacement(number: string | undefined, mask: string) {
    mask = mask.replace(/[-\s]/g, '').replace(/[a-zA-Z0-9]/g, ' ');
    let value: string = typeof number === 'string' ? number : mask;
    value = value.startsWith('0', 0) ? mask : value;
    return value;
  }

  public getDefaultDropDownSelect(option: IPhoneNumberSelectionController) {
    return option.isAustralia
      ? this.australia
      : option.isChina
      ? this.china
      : option.isJapan
      ? this.japan
      : option.isKorea
      ? this.korea
      : this.australia;
  }

  public validateMaskPattern(
    phoneNumber: string,
    option: IPhoneNumberSelectionController
  ) {
    return option.isAustralia
      ? this.maskPattern.australianOption.test(phoneNumber)
      : option.isChina
      ? this.maskPattern.chineseOption.test(phoneNumber)
      : option.isJapan
      ? this.maskPattern.japaneseOption.test(phoneNumber)
      : option.isKorea
      ? this.maskPattern.koreanOption.test(phoneNumber)
      : this.maskPattern.australianOption.test(phoneNumber);
  }

  public getDefaultOption(phoneCode: Constant.PhoneCodeType) {
    let option = this.getCountrySelectionCtrlByPhoneCode(phoneCode);
    option.mask = this.getDefaultMaskOption(option);

    return option;
  }

  private getDefaultMaskOption(
    option: IPhoneNumberSelectionController
  ): string {
    return option.isAustralia
      ? this.maskOption.australianOption
      : option.isChina
      ? this.maskOption.chineseOption
      : option.isJapan
      ? this.maskOption.japaneseOption
      : option.isKorea
      ? this.maskOption.koreanOption
      : this.maskOption.australianOption;
  }

  private getCountrySelectionCtrlByPhoneCode(
    phoneCode: Constant.PhoneCodeType
  ): IPhoneNumberSelectionController {
    return {
      countryCode: this.getCountryCodeByPhoneCode(phoneCode),
      phoneCode: phoneCode,
      isAustralia: phoneCode === Constant.Default.PhoneCode.AU,
      isChina: phoneCode === Constant.Default.PhoneCode.CN,
      isJapan: phoneCode === Constant.Default.PhoneCode.JP,
      isKorea: phoneCode === Constant.Default.PhoneCode.KR,
      mask: '',
    };
  }

  private getCountryCodeByPhoneCode(
    phoneCode: Constant.PhoneCodeType
  ): Constant.CurrencyType {
    let isAustralia = phoneCode === Constant.Default.PhoneCode.AU;
    let isChina = phoneCode === Constant.Default.PhoneCode.CN;
    let isJapan = phoneCode === Constant.Default.PhoneCode.JP;
    let isKorea = phoneCode === Constant.Default.PhoneCode.KR;

    return isAustralia
      ? Constant.Default.CurrencyType.AUD
      : isChina
      ? Constant.Default.CurrencyType.CNY
      : isKorea
      ? Constant.Default.CurrencyType.KRW
      : isJapan
      ? Constant.Default.CurrencyType.JPY
      : Constant.Default.CurrencyType.AUD;
  }
}
