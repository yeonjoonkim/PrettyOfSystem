import { Consult } from './constant-value';

//Consult - Status
export type ConsultCreatingStatus = {
  type: typeof Consult.StatusType.Creating;
  description: typeof Consult.StatusDescription.Creating;
};

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

export type ConsultStatusType =
  | ConsultCreatingStatus
  | ConsultPendingStatus
  | ConsultScheduledStatus
  | ConsultStartStatus
  | ConsultCompletedStatus
  | ConsultCancelStatus;

export const Consult_PendingStatus = {
  type: Consult.StatusType.Pending,
  description: Consult.StatusDescription.Pending,
};

export const Consult_CreatingStatus = {
  type: Consult.StatusType.Creating,
  description: Consult.StatusDescription.Creating,
};

export const Consult_ScheduledStatus = {
  type: Consult.StatusType.Scheduled,
  description: Consult.StatusDescription.Scheduled,
};

export const Consult_StartStatus = {
  type: Consult.StatusType.Start,
  description: Consult.StatusDescription.Start,
};

export const Consult_CancelStatus = {
  type: Consult.StatusType.Cancel,
  description: Consult.StatusDescription.Cancel,
};

export const Consult_ScheduledStatusTypes = [
  Consult.StatusType.Scheduled,
  Consult.StatusType.Start,
  Consult.StatusType.Completed,
];

export const Consult_FutureScheduledStatusTypes = [Consult.StatusType.Pending, Consult.StatusType.Scheduled];

export const Consult_InCompletedStatusTypes = [
  Consult.StatusType.Pending,
  Consult.StatusType.Scheduled,
  Consult.StatusType.Start,
];
export const Consult_CompletedStatusTypes = [Consult.StatusType.Completed];
export const Consult_CancelStatusTypes = [Consult.StatusType.Cancel];
