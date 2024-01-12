import firebase from 'firebase/compat/app';
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
  Consult,
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
  Consult,
} from './constant-value';
import { TimeZone } from './timezone';
export { TimeZone } from './timezone';
import { API } from './constant-api';
export { API, Email } from './constant-api';

//Shop Category
export type ShopCategoryTitleType = (typeof ShopCategoryTitle)[keyof typeof ShopCategoryTitle];

//Login
export type LoginStatusType = (typeof Login.Status)[keyof typeof Login.Status];

//Change Phone Number
export type ChangeNumberRequestStatusType =
  (typeof ChangeNumberRequestStatus)[keyof typeof ChangeNumberRequestStatus];

//Date
export type TimeStamp = firebase.firestore.Timestamp;
export type TimeZoneType = (typeof TimeZone)[keyof typeof TimeZone];
export type DayIndexType = (typeof Date.DayIndex)[keyof typeof Date.DayIndex];
export type DayType = (typeof Date.Day)[keyof typeof Date.Day];
export type DateDayNightType = (typeof Date.DayNightType)[keyof typeof Date.DayNightType];
export type DateFormatType = (typeof Date.Format)[keyof typeof Date.Format];
export type DateTimeStatusType = (typeof Date.TimeStatus)[keyof typeof Date.TimeStatus];
export type PeriodType = (typeof Date.Period)[keyof typeof Date.Period];
export type WeekType = (typeof Date.WeekType)[keyof typeof Date.WeekType];

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

//API
export type APIResponseType = (typeof API.Response)[keyof typeof API.Response];
export type APIActionType = (typeof API.Action)[keyof typeof API.Action];
export type APITranslationStatus = (typeof API.TranslateStatus)[keyof typeof API.TranslateStatus];

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

//Consult - Status
export type ConsultPendingStatus = {
  type: typeof Consult.StatusType.Pending;
  description: typeof Consult.StatusDescription.Pending;
};
export type ConsultScheduledStatus = {
  type: typeof Consult.StatusType.Scheduled;
  description: typeof Consult.StatusDescription.Scheduled;
};
export type ConsultStartStatus = {
  type: typeof Consult.StatusType.Start;
  description: typeof Consult.StatusDescription.Start;
};
export type ConsultCompletedStatus = {
  type: typeof Consult.StatusType.Completed;
  description: typeof Consult.StatusDescription.Completed;
};
export type ConsultCancelStatus = {
  type: typeof Consult.StatusType.Cancel;
  description: typeof Consult.StatusDescription.Cancel;
};

export type ConsultAwaitingStatus = {
  type: typeof Consult.StatusType.Awaiting;
  description: typeof Consult.StatusDescription.Awaiting;
};

export type ConsultAnyEmployee = 'label.title.anyone';

export type ConsultStatusType =
  | ConsultPendingStatus
  | ConsultAwaitingStatus
  | ConsultScheduledStatus
  | ConsultStartStatus
  | ConsultCompletedStatus
  | ConsultCancelStatus;

//Consult - Payment
export type ConsultUnPaidPayment = {
  type: typeof Consult.PaymentType.Unpaid;
  description: typeof Consult.PaymentDescription.Unpaid;
};
export type ConsultPartPaidPayment = {
  type: typeof Consult.PaymentType.PartPaid;
  description: typeof Consult.PaymentDescription.PartPaid;
};
export type ConsultFullPaidPayment = {
  type: typeof Consult.PaymentType.FullPaid;
  description: typeof Consult.PaymentDescription.FullPaid;
};
export type ConsultRefundedPayment = {
  type: typeof Consult.PaymentType.Refunded;
  description: typeof Consult.PaymentDescription.Refunded;
};
export type ConsultPaymentStatusType =
  | ConsultUnPaidPayment
  | ConsultPartPaidPayment
  | ConsultFullPaidPayment
  | ConsultRefundedPayment;

//Consult - Origin
export type ConsultPhoneOrigin = {
  type: typeof Consult.OriginType.Phone;
  description: typeof Consult.OriginDescription.Phone;
};
export type ConsultWaitingListOrigin = {
  type: typeof Consult.OriginType.WaitingList;
  description: typeof Consult.OriginDescription.WaitingList;
};
export type ConsultOnlineOrigin = {
  type: typeof Consult.OriginType.Online;
  description: typeof Consult.OriginDescription.Online;
};
export type ConsultWalkInOrigin = {
  type: typeof Consult.OriginType.WalkIn;
  description: typeof Consult.OriginDescription.WalkIn;
};
export type ConsultOriginType =
  | ConsultPhoneOrigin
  | ConsultWalkInOrigin
  | ConsultOnlineOrigin
  | ConsultWaitingListOrigin;
