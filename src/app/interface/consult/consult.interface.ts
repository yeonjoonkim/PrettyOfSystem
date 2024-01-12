import {
  TimeZoneType,
  ConsultOriginType,
  ConsultStatusType,
  ConsultPaymentStatusType,
  GenderType,
} from '../../constant/constant';
import { CheckOutItem } from '../booking/cart/cart.interface';
import { AddressType } from '../global/global.interface';
import {
  UserSettingEmergencyContactType,
  UserSettingMassageType,
  UserSettingMedicalHistroyType,
  UserSettingPrivateInsuranceType,
} from '../user/user.interface';
import { MassageBodySelectorAreaType } from '../massage/massage.interface';

export type ConsultDocumentType = {
  origin: ConsultOriginType;
  createdDateTime: string;
  id: string;
  shopId: string;
  shopTimezone: TimeZoneType;
  status: ConsultStatusType;
  paymentId: string;
  paymentStatus: ConsultPaymentStatusType;
  scheduled: ConsultScheduleTimeType | null;
  checkouts: CheckOutItem[];
  totalMin: number;
  totalPrice: number;
  adjustedPrice: number;
  remainingBalance: number;
  smsRequestIds: string[];
  isFirstVisit: boolean;
  isInsuranceClaimRequest: boolean;
  hasTermandConditionConsent: boolean;
  client: ConsultClientInfoType;
  associatedEmployee: ConsultAssociatedEmployee;
  report: ConsultReportType;
  isRequiredDeposit: boolean;
  recieptId: null | string;
};

export type ConsultAssociatedEmployee = {
  id: string;
  name: string;
};

export type ConsultClientInfoType = {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  phoneNumber: string;
  email: string;
  address: AddressType | null;
  gender: GenderType;
  isOver18: boolean;
  isPregrant: boolean;
  signature: string;
  emergancyContact: UserSettingEmergencyContactType | null;
  privateInsurance: UserSettingPrivateInsuranceType | null;
  medicalHistory: UserSettingMedicalHistroyType;
  massage: UserSettingMassageType;
};

export type ConsultReportType = {
  medicalHistoryStatement: string;
  treatmentStatement: string;
  bodyPainSelectors: MassageBodySelectorAreaType[];
};

export type ConsultScheduleTimeType = {
  startOfDay: string;
  startDateTime: string;
  endDateTime: string;
};
