export type ConsultDocumentStatusChangeActionType = {
  requestCancelSMS: boolean;
  requestScheduledSMS: boolean;
  deleteUnSendSMS: boolean;
  updateReport: boolean;
};

//Update Scheudled Time Validator

export type ConsultDocumentScheduleChangeActionType = {
  hasSchedule: boolean;
  hasModifiedSchedule: boolean;
  requestValidateScheduledTime: boolean;
  requestRescheduledSMS: boolean;
};

export type ConsultDocumentCheckoutChangeActionType = {
  hasModified: boolean;
  requestValidateScheduledTime: boolean;
  requestValidateCheckout: boolean;
};
