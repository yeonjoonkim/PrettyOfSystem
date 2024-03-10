import { Consult } from '../constant-value';

//Consult - Status
export type CreatingStatusType = {
  type: typeof Consult.StatusType.Creating;
  description: typeof Consult.StatusDescription.Creating;
};

export type PendingStatusType = {
  type: typeof Consult.StatusType.Pending;
  description: typeof Consult.StatusDescription.Pending;
};
export type ScheduledStatusType = {
  type: typeof Consult.StatusType.Scheduled;
  description: typeof Consult.StatusDescription.Scheduled;
};
export type StartStatusType = {
  type: typeof Consult.StatusType.Start;
  description: typeof Consult.StatusDescription.Start;
};
export type CompletedStatusType = {
  type: typeof Consult.StatusType.Completed;
  description: typeof Consult.StatusDescription.Completed;
};
export type CancelStatusType = {
  type: typeof Consult.StatusType.Cancel;
  description: typeof Consult.StatusDescription.Cancel;
};

export type StatusType =
  | CreatingStatusType
  | PendingStatusType
  | ScheduledStatusType
  | StartStatusType
  | CompletedStatusType
  | CancelStatusType;

export type PhoneOriginType = {
  type: typeof Consult.OriginType.Phone;
  description: typeof Consult.OriginDescription.Phone;
};
export type WaitingListOriginType = {
  type: typeof Consult.OriginType.WaitingList;
  description: typeof Consult.OriginDescription.WaitingList;
};
export type OnlineOriginType = {
  type: typeof Consult.OriginType.Online;
  description: typeof Consult.OriginDescription.Online;
};
export type WalkInOriginType = {
  type: typeof Consult.OriginType.WalkIn;
  description: typeof Consult.OriginDescription.WalkIn;
};
export type OriginType = PhoneOriginType | WaitingListOriginType | OnlineOriginType | WalkInOriginType;
