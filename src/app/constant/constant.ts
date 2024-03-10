//import firestore from 'firebase/firestore';
import firebase from 'firebase/compat';
import {
  Default,
  State,
  Date,
  Login,
  Text,
  BookingSearchIconType,
  PackageDiscountType,
  Massage,
  ChangeNumberRequestStatus,
  Medical,
  ShopCategoryTitle,
  CartItem,
  Transaction,
  Query,
  SignatureTransferStatus,
  Scheduler,
} from './constant-value';
export {
  Default,
  State,
  BookingSearchIconType,
  Date,
  ShopSetting,
  SystemSetting,
  Login,
  Text,
  Massage,
  Medical,
  PackageDiscountType,
  ShopCategoryTitle,
  ChangeNumberRequestStatus,
  CartItem,
  Payment,
  Transaction,
  Query,
  SignatureTransferStatus,
  Scheduler,
} from './constant-value';
import { TimeZone } from './timezone';
export { TimeZone } from './timezone';
import { API } from './constant-api';
export { API, Email } from './constant-api';
export * as Consult from './consult/consult.index';
export * from './constant-payment';

//Shop Category
export type ShopCategoryTitleType = (typeof ShopCategoryTitle)[keyof typeof ShopCategoryTitle];

//Login
export type LoginStatusType = (typeof Login.Status)[keyof typeof Login.Status];

//Change Phone Number
export type ChangeNumberRequestStatusType =
  (typeof ChangeNumberRequestStatus)[keyof typeof ChangeNumberRequestStatus];

//Date
export type TimeStamp = firebase.firestore.Timestamp; //firebase.Timestamp;
export type TimeZoneType = (typeof TimeZone)[keyof typeof TimeZone];
export type DayIndexType = (typeof Date.DayIndex)[keyof typeof Date.DayIndex];
export type DayType = (typeof Date.Day)[keyof typeof Date.Day];
export type DateDayNightType = (typeof Date.DayNightType)[keyof typeof Date.DayNightType];
export type DateFormatType = (typeof Date.Format)[keyof typeof Date.Format];
export type DateTimeStatusType = (typeof Date.TimeStatus)[keyof typeof Date.TimeStatus];
export type PeriodType = (typeof Date.Period)[keyof typeof Date.Period];
export type WeekType = (typeof Date.WeekType)[keyof typeof Date.WeekType];
export const DayList: DayType[] = [
  Date.Day.Sun,
  Date.Day.Mon,
  Date.Day.Tue,
  Date.Day.Wed,
  Date.Day.Thu,
  Date.Day.Fri,
  Date.Day.Sat,
];
export const DayIndexList: DayIndexType[] = [
  Date.DayIndex.Sun,
  Date.DayIndex.Mon,
  Date.DayIndex.Tue,
  Date.DayIndex.Wed,
  Date.DayIndex.Thu,
  Date.DayIndex.Fri,
  Date.DayIndex.Sat,
];
//Country
export type CountryCodeType = (typeof Default.CountryCodeType)[keyof typeof Default.CountryCodeType];

//Role
export type GenderType = (typeof Default.Gender)[keyof typeof Default.Gender];
export type RoleDescriptionType = (typeof Default.RoleDescriptionType)[keyof typeof Default.RoleDescriptionType];
export type RoleAccessRateType = (typeof Default.RoleAccessRateType)[keyof typeof Default.RoleAccessRateType];

//PostCode
export type AustraliaStateType = (typeof State.AustraliaType)[keyof typeof State.AustraliaType];

//Discount
export type PackageDiscountType = (typeof PackageDiscountType)[keyof typeof PackageDiscountType];
export type CouponDiscountType = 'Percent';

//Form
export type ComponentModeType = (typeof Default.ComponentMode)[keyof typeof Default.ComponentMode];
export type FormActionType = (typeof Default.FormAction)[keyof typeof Default.FormAction];
export type FormStatusType = (typeof Default.FormStatus)[keyof typeof Default.FormStatus];
export type PhoneCodeType = (typeof Default.PhoneCode)[keyof typeof Default.PhoneCode];
export type CurrencyType = (typeof Default.CurrencyType)[keyof typeof Default.CurrencyType];
export type TextFormatType = (typeof Text.Format)[keyof typeof Text.Format];
export type LanguageTransformType =
  (typeof Default.LanguageTransformType)[keyof typeof Default.LanguageTransformType];
export type SignatureTransferStatusType = (typeof SignatureTransferStatus)[keyof typeof SignatureTransferStatus];

//API
export type QueryOperatorType = (typeof Query)[keyof typeof Query];
export type APIResponseType = (typeof API.Response)[keyof typeof API.Response];
export type APIActionType = (typeof API.Action)[keyof typeof API.Action];
export type APITranslationStatus = (typeof API.TranslateStatus)[keyof typeof API.TranslateStatus];
export type APIQueryMethodType = (typeof API.QueryMethod)[keyof typeof API.QueryMethod];

//Booking
export type BookingSearchIconType = (typeof BookingSearchIconType)[keyof typeof BookingSearchIconType];

//Massage
export type MassageBodyPreferenceType =
  (typeof Massage.Body.PreferenceType)[keyof typeof Massage.Body.PreferenceType];
export type MassageBodyPreferenceNameType =
  (typeof Massage.Body.PreferenceName)[keyof typeof Massage.Body.PreferenceName];
export type MassageDescriptionType = (typeof Massage.Description)[keyof typeof Massage.Description];
export type MassagePainScaleRatingType = (typeof Massage.PainScale.Rating)[keyof typeof Massage.PainScale.Rating];
export type MassagePainScaleDescriptionType =
  (typeof Massage.PainScale.Description)[keyof typeof Massage.PainScale.Description];
export type MassagePressureRatingType = (typeof Massage.Pressure.Raiting)[keyof typeof Massage.Pressure.Raiting];
export type MassagePressureDescriptionType =
  (typeof Massage.Pressure.Description)[keyof typeof Massage.Pressure.Description];
export type MassageDiffcultChangePositionType =
  (typeof Massage.DifficultChangePosition.Type)[keyof typeof Massage.DifficultChangePosition.Type];
export type MassageDiffcultChangePositionDescriptionType =
  (typeof Massage.DifficultChangePosition.Description)[keyof typeof Massage.DifficultChangePosition.Description];

//Medical Insurance Company
export type MedicalInsuranceType = (typeof Medical.Insurance)[keyof typeof Medical.Insurance];
//Medical History
export type MedicalHistorySystemType =
  (typeof Medical.History.SystemType)[keyof typeof Medical.History.SystemType];
export type MedicalHistoryType = (typeof Medical.History.Type)[keyof typeof Medical.History.Type];

//Cart
export type CartItemType = (typeof CartItem)[keyof typeof CartItem];

//Transaction Method
export const Transaction_OnlineTypes = [
  Transaction.Method.OnlineCard,
  Transaction.Method.ApplePay,
  Transaction.Method.GPay,
];
export const Transaction_OfflineTypes = [
  Transaction.Method.Card,
  Transaction.Method.Hicap,
  Transaction.Method.Cash,
  Transaction.Method.Coupon,
];
export type TransactionType = (typeof Transaction.Method)[keyof typeof Transaction.Method];

//Scheduler
export type SchedulerViewModeType = (typeof Scheduler.View)[keyof typeof Scheduler.View];
export type SchedulerEmployeeViewModeType = (typeof Scheduler.EmployeeView)[keyof typeof Scheduler.EmployeeView];
export type SchedulerEmployeeStatusType = (typeof Scheduler.WorkingStatus)[keyof typeof Scheduler.WorkingStatus];
