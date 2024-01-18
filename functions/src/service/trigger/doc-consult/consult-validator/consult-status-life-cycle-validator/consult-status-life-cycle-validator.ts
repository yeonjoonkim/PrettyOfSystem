import * as I from '../../../../../interface';
import * as Constant from '../../../../../constant';

//** b = Before, a = After */
export const get = function (b: I.ConsultStatusType, a: I.ConsultStatusType) {
  const before = detect(b);
  const after = detect(a);
  const result: I.ConsultDocumentStatusLifeCycleType = {
    Stay_As: stayAs(before, after),
    From_Creating: fromCreating(before, after),
    From_Pending: fromPending(before, after),
    From_Scheduled: fromScheduled(before, after),
    From_Start: fromStart(before, after),
    From_Completed: fromCompleted(before, after),
    From_Cancel: fromCancel(before, after),
  };
  return result;
};

const detect = function (status: I.ConsultStatusType) {
  const result: I.ConsultDocumentStatusDetectionType = {
    Is_Creating:
      status.type === Constant.Consult.StatusType.Creating &&
      status.description === Constant.Consult.StatusDescription.Creating,
    Is_Pending:
      status.type === Constant.Consult.StatusType.Pending &&
      status.description === Constant.Consult.StatusDescription.Pending,
    Is_Scheduled:
      status.type === Constant.Consult.StatusType.Scheduled &&
      status.description === Constant.Consult.StatusDescription.Scheduled,
    Is_Start:
      status.type === Constant.Consult.StatusType.Start &&
      status.description === Constant.Consult.StatusDescription.Start,
    Is_Completed:
      status.type === Constant.Consult.StatusType.Completed &&
      status.description === Constant.Consult.StatusDescription.Completed,
    Is_Cancel:
      status.type === Constant.Consult.StatusType.Cancel &&
      status.description === Constant.Consult.StatusDescription.Cancel,
  };
  return result;
};

const fromCreating = function (
  before: I.ConsultDocumentStatusDetectionType,
  after: I.ConsultDocumentStatusDetectionType
) {
  const result: I.ConsultDocumentCreatingStatusLifeCycleType = {
    To_Pending: before.Is_Creating && after.Is_Pending,
    To_Scheduled: before.Is_Creating && after.Is_Scheduled,
    To_Start: before.Is_Creating && after.Is_Start,
    To_Completed: before.Is_Creating && after.Is_Completed,
    To_Cancel: before.Is_Creating && after.Is_Cancel,
  };
  return result;
};

const fromPending = function (
  before: I.ConsultDocumentStatusDetectionType,
  after: I.ConsultDocumentStatusDetectionType
) {
  const result: I.ConsultDocumentPendingStatusLifeCycleType = {
    To_Creating: before.Is_Pending && after.Is_Creating,
    To_Scheduled: before.Is_Pending && after.Is_Scheduled,
    To_Start: before.Is_Pending && after.Is_Start,
    To_Completed: before.Is_Pending && after.Is_Completed,
    To_Cancel: before.Is_Pending && after.Is_Cancel,
  };
  return result;
};

const fromScheduled = function (
  before: I.ConsultDocumentStatusDetectionType,
  after: I.ConsultDocumentStatusDetectionType
) {
  const result: I.ConsultDocumentScheduledStatusLifeCycleType = {
    To_Creating: before.Is_Scheduled && after.Is_Creating,
    To_Pending: before.Is_Scheduled && after.Is_Pending,
    To_Start: before.Is_Scheduled && after.Is_Start,
    To_Completed: before.Is_Scheduled && after.Is_Completed,
    To_Cancel: before.Is_Scheduled && after.Is_Cancel,
  };
  return result;
};

const fromStart = function (
  before: I.ConsultDocumentStatusDetectionType,
  after: I.ConsultDocumentStatusDetectionType
) {
  const result: I.ConsultDocumentStartStatusLifeCycleType = {
    To_Creating: before.Is_Start && after.Is_Creating,
    To_Pending: before.Is_Start && after.Is_Pending,
    To_Scheduled: before.Is_Start && after.Is_Scheduled,
    To_Completed: before.Is_Start && after.Is_Completed,
    To_Cancel: before.Is_Start && after.Is_Cancel,
  };
  return result;
};

const fromCompleted = function (
  before: I.ConsultDocumentStatusDetectionType,
  after: I.ConsultDocumentStatusDetectionType
) {
  const result: I.ConsultDocumentCompletedStatusLifeCycleType = {
    To_Creating: before.Is_Completed && after.Is_Creating,
    To_Pending: before.Is_Completed && after.Is_Pending,
    To_Scheduled: before.Is_Completed && after.Is_Scheduled,
    To_Start: before.Is_Completed && after.Is_Start,
    To_Cancel: before.Is_Completed && after.Is_Cancel,
  };
  return result;
};

const fromCancel = function (
  before: I.ConsultDocumentStatusDetectionType,
  after: I.ConsultDocumentStatusDetectionType
) {
  const result: I.ConsultDocumentCancelStatusLifeCycleType = {
    To_Creating: before.Is_Cancel && after.Is_Creating,
    To_Pending: before.Is_Cancel && after.Is_Pending,
    To_Scheduled: before.Is_Cancel && after.Is_Scheduled,
    To_Start: before.Is_Cancel && after.Is_Start,
    To_Completed: before.Is_Cancel && after.Is_Completed,
  };
  return result;
};

const stayAs = function (
  before: I.ConsultDocumentStatusDetectionType,
  after: I.ConsultDocumentStatusDetectionType
) {
  const result: I.ConsultDocumentStayAsStatusLifeCycleType = {
    Creating: before.Is_Creating && after.Is_Creating,
    Pending: before.Is_Pending && after.Is_Pending,
    Scheduled: before.Is_Scheduled && after.Is_Scheduled,
    Start: before.Is_Start && after.Is_Start,
    Completed: before.Is_Completed && after.Is_Completed,
    Cancel: before.Is_Cancel && after.Is_Cancel,
  };
  return result;
};
