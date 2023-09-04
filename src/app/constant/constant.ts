import firebase from 'firebase/compat/app';
import { Default, State, Date, Login } from './constant-value';
export { Default, State, Setting, Date, ShopSetting, SystemSetting, Login } from './constant-value';
import { TimeZone } from './timezone';
export { TimeZone } from './timezone';
import { API } from './constant-api';
export { API } from './constant-api';

//Login
export type LoginStatusType = (typeof Login.Status)[keyof typeof Login.Status];

//API
export type APIResponseType = (typeof API.Response)[keyof typeof API.Response];
export type ErrorAccidentType = (typeof API.ErrorAccident)[keyof typeof API.ErrorAccident];

//Date
export type TimeStamp = firebase.firestore.Timestamp;
export type TimeZoneType = (typeof TimeZone)[keyof typeof TimeZone];
export type DayIndexType = (typeof Date.DayIndex)[keyof typeof Date.DayIndex];
export type DayType = (typeof Date.Day)[keyof typeof Date.Day];
export type DateDayNightType = (typeof Date.DayNightType)[keyof typeof Date.DayNightType];
export type DateFormatType = (typeof Date.Format)[keyof typeof Date.Format];
export type DateTimeStatusType = (typeof Date.TimeStatus)[keyof typeof Date.TimeStatus];
export type DatePeriodType = (typeof Date.Period)[keyof typeof Date.Period];

//Country
export type CountryCodeType =
  (typeof Default.CountryCodeType)[keyof typeof Default.CountryCodeType];

//Role
export type GenderType = (typeof Default.Gender)[keyof typeof Default.Gender];

export type RoleAccessType = (typeof Default.RoleAccessType)[keyof typeof Default.RoleAccessType];
export type RoleAccessRateType =
  (typeof Default.RoleAccessRateType)[keyof typeof Default.RoleAccessRateType];

//PostCode
export type AustraliaStateType = (typeof State.AustraliaType)[keyof typeof State.AustraliaType];

//Form
export type ComponentModeType = (typeof Default.ComponentMode)[keyof typeof Default.ComponentMode];
export type FormActionType = (typeof Default.FormAction)[keyof typeof Default.FormAction];
export type FormStatusType = (typeof Default.FormStatus)[keyof typeof Default.FormStatus];
export type PhoneCodeType = (typeof Default.PhoneCode)[keyof typeof Default.PhoneCode];
export type CurrencyType = (typeof Default.CurrencyType)[keyof typeof Default.CurrencyType];