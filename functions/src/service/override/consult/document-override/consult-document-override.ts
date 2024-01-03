import * as I from '../../../../interface';
import * as T from '../../../type-checker/type-checker';
import * as Constant from '../../../../constant';

export const override = function (doc: I.ConsultDocumentType) {
  const newDoc: I.ConsultDocumentType = {
    id: T.string(doc?.id),
    shopId: T.string(doc?.shopId),
    createdDateTime: T.string(doc?.createdDateTime),
    origin: origin(doc?.origin),
    shopTimezone: T.timezone(doc?.shopTimezone),
    status: status(doc?.status),
    remainingBalance: T.number(doc?.remainingBalance),
    paymentStatus: paymentStatus(doc?.paymentStatus),
    scheduled: scheduled(doc?.scheduled),
    checkouts: checkouts(doc?.checkouts),
    totalMin: T.number(doc?.totalMin),
    totalPrice: T.number(doc?.totalPrice),
    adjustedPrice: T.number(doc?.adjustedPrice),
    transactionIds: T.stringArray(doc?.transactionIds),
    smsRequestIds: T.stringArray(doc?.smsRequestIds),
    isFirstVisit: T.boolean(doc?.isFirstVisit),
    isInsuranceClaimRequest: T.boolean(doc?.isInsuranceClaimRequest),
    hasTermandConditionConsent: T.boolean(doc?.hasTermandConditionConsent),
    client: consultClient(doc?.client),
    associatedEmployee: associatedEmployee(doc?.associatedEmployee),
    report: report(doc?.report),
    recieptId: T.nullableString(doc?.recieptId),
    isRequiredDeposit: T.boolean(doc?.isRequiredDeposit),
  };
  return newDoc;
};

const origin = function (origin: I.ConsultOriginType | undefined | null): I.ConsultOriginType {
  return origin !== undefined && origin !== null
    ? origin
    : { type: Constant.Consult.OriginType.WalkIn, description: Constant.Consult.OriginDescription.WalkIn };
};

const status = function (status: I.ConsultStatusType | undefined | null): I.ConsultStatusType {
  return status !== undefined && status !== null
    ? status
    : {
        syncId: T.string(''),
        type: Constant.Consult.StatusType.Cancel,
        description: Constant.Consult.StatusDescription.Cancel,
      };
};

const associatedEmployee = function (associatedEmployee: I.ConsultAssociatedEmployee | undefined | null) {
  return associatedEmployee !== undefined && associatedEmployee !== null
    ? associatedEmployee
    : {
        id: '',
        name: '',
      };
};

const paymentStatus = function (
  paymentStatus: I.ConsultPaymentStatusType | undefined | null
): I.ConsultPaymentStatusType {
  return paymentStatus !== undefined && paymentStatus !== null
    ? paymentStatus
    : {
        type: Constant.Consult.PaymentType.Unpaid,
        description: Constant.Consult.PaymentDescription.Unpaid,
      };
};

const scheduled = function (scheduled: I.ConsultScheduleTimeType | undefined | null) {
  return scheduled !== null && scheduled !== undefined ? scheduled : null;
};

const checkouts = function (checkouts: I.CheckOutItem[] | undefined | null) {
  checkouts = checkouts !== undefined && checkouts !== null ? checkouts : ([] as I.CheckOutItem[]);
  return checkouts.map(c => {
    const newCheckout: I.CheckOutItem = {
      type: c?.type !== undefined && c?.type !== null ? c.type : Constant.CartItem.Service,
      shopId: T.string(c?.shopId),
      itemId: T.string(c?.itemId),
      title: T.string(c?.title),
      isInsuranceCover: T.boolean(c?.isInsuranceCover),
      specializedEmployees: T.nameValuePairArray(c?.specializedEmployees),
      limitedTime: c?.limitedTime !== undefined && c?.limitedTime !== null ? c.limitedTime : null,
      price: T.number(c?.price),
      qty: T.number(c?.qty),
      min: T.number(c?.min),
      couponCriteria:
        c?.couponCriteria !== undefined && c?.couponCriteria !== null ? coupoonCriteria(c.couponCriteria) : null,
    };
    return newCheckout;
  });
};

const coupoonCriteria = function (c: I.CheckOutCouponItemType) {
  const newCriteria: I.CheckOutCouponItemType = {
    numberOfCoupon: T.number(c?.numberOfCoupon),
    expiredMonth: T.number(c?.expiredMonth),
    min: T.number(c?.min),
    price: T.number(c?.price),
  };
  return newCriteria;
};

const consultClient = function (c: I.ConsultClientInfoType | undefined | null): I.ConsultClientInfoType {
  const newClient: I.ConsultClientInfoType = {
    id: T.string(c?.id),
    firstName: T.string(c?.firstName),
    lastName: T.string(c?.lastName),
    dob: T.string(c?.dob),
    phoneNumber: T.string(c?.phoneNumber),
    email: T.string(c?.email),
    address: c?.address !== undefined && c?.address !== null ? c.address : null,
    gender: c?.gender !== undefined && c?.gender !== null ? c.gender : Constant.Default.Gender.Other,
    isOver18: false,
    isPregrant: false,
    signature: '',
    parentSignature: null,
    emergancyContact: null,
    privateInsurance:
      c?.privateInsurance !== undefined && c?.privateInsurance !== null ? c.privateInsurance : null,
    medicalHistory:
      c?.medicalHistory !== undefined && c?.medicalHistory !== null
        ? c.medicalHistory
        : {
            otherStatus: null,
            symptomsAndDiseases: [],
          },
    massage: massage(c?.massage),
  };
  return newClient;
};

const massage = function (m: I.UserSettingMassageType | undefined | null) {
  const newMassage: I.UserSettingMassageType = {
    pressure:
      m?.pressure !== null && m?.pressure !== undefined
        ? m.pressure
        : {
            rating: Constant.Massage.Pressure.Raiting.One,
            description: Constant.Massage.Pressure.Description.ExtremeSoft,
          },
    areas: m?.areas !== null && m?.areas !== undefined ? m.areas : [],
    difficultChangePosition:
      m?.difficultChangePosition !== undefined && m?.difficultChangePosition !== null
        ? m.difficultChangePosition
        : {
            type: Constant.Massage.DifficultChangePosition.Type.NoProblem,
            description: Constant.Massage.DifficultChangePosition.Description.NoProblem,
          },
  };
  return newMassage;
};

const report = function (r: I.ConsultReportType | undefined | null): I.ConsultReportType {
  const newReport: I.ConsultReportType = {
    medicalHistoryStatement: T.string(r?.medicalHistoryStatement),
    treatmentStatement: T.string(r?.treatmentStatement),
    bodyPainSelectors:
      r?.bodyPainSelectors !== undefined && r?.bodyPainSelectors !== null ? r.bodyPainSelectors : [],
  };
  return newReport;
};
