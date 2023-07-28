import firebase from 'firebase/compat/app';


import {Default, State, Setting, Date} from './constant/constant';
export {Default, State, Setting, Date, ShopSetting, SystemSetting} from './constant/constant';
import { TimeZone } from './constant/timezone';
export { TimeZone } from './constant/timezone';

//Date
export type TimeStamp = firebase.firestore.Timestamp;
export type TimeZoneType = typeof TimeZone[keyof typeof TimeZone];
export type DayIndexType = typeof Date.DayIndex[keyof typeof Date.DayIndex];
export type DayType = typeof Date.Day[keyof typeof Date.Day];
export type DateDayNightType = typeof Date.DayNightType[keyof typeof Date.DayNightType];
export type DateFormatType = typeof Date.Format[keyof typeof Date.Format];
export type DateTimeStatusType = typeof Date.TimeStatus[keyof typeof Date.TimeStatus];
export type DatePeriodType = typeof Date.Period[keyof typeof Date.Period];

//Country
export type CountryCodeType = typeof Default.CountryCodeType[keyof typeof Default.CountryCodeType];

//Role
export type RoleAccessType = typeof Default.RoleAccessType[keyof typeof Default.RoleAccessType];
export type RoleAccessRateType = typeof Default.RoleAccessRateType[keyof typeof Default.RoleAccessRateType];

//PostCode
export type AustraliaStateType = typeof State.AustraliaType[keyof typeof State.AustraliaType];

//Form
export type ComponentModeType = typeof Default.ComponentMode[keyof typeof Default.ComponentMode];
export type FormActionType = typeof Default.FormAction[keyof typeof Default.FormAction];
export type FormStatusType = typeof Default.FormStatus[keyof typeof Default.FormStatus];
export type PhoneCodeType = typeof Default.PhoneCode[keyof typeof Default.PhoneCode];
export type CurrencyType = typeof Default.CurrencyType[keyof typeof Default.CurrencyType];
