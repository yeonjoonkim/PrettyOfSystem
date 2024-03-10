import * as Consult from './constant-consult';
import * as Constant from '../constant-value';

export const Creating: Consult.CreatingStatusType = {
  type: Constant.Consult.StatusType.Creating,
  description: Constant.Consult.StatusDescription.Creating,
};

export const Pending: Consult.PendingStatusType = {
  type: Constant.Consult.StatusType.Pending,
  description: Constant.Consult.StatusDescription.Pending,
};

export const Scheduled: Consult.ScheduledStatusType = {
  type: Constant.Consult.StatusType.Scheduled,
  description: Constant.Consult.StatusDescription.Scheduled,
};

export const Start: Consult.StartStatusType = {
  type: Constant.Consult.StatusType.Start,
  description: Constant.Consult.StatusDescription.Start,
};

export const Cancel: Consult.CancelStatusType = {
  type: Constant.Consult.StatusType.Cancel,
  description: Constant.Consult.StatusDescription.Cancel,
};

export const Completed: Consult.CompletedStatusType = {
  type: Constant.Consult.StatusType.Completed,
  description: Constant.Consult.StatusDescription.Completed,
};

export const Status_Type = {
  Creating: Creating,
  Pending: Pending,
  Scheduled: Scheduled,
  Start: Start,
  Cancel: Cancel,
  Completed: Completed,
} as const;

//Creating Types
export const Creating_Types = [Status_Type.Creating] as const;
export const Creating_Status_Types = Creating_Types.map(t => t.type);
export const Creating_Description_Types = Creating_Types.map(t => t.description);

//Pending Types
export const Pending_Types = [Status_Type.Pending] as const;
export const Pending_Status_Types = Creating_Types.map(t => t.type);
export const Pending_Description_Types = Creating_Types.map(t => t.description);

//Scheduled Types
export const Scheduled_Types = [Status_Type.Scheduled, Status_Type.Start, Status_Type.Completed] as const;
export const Scheduled_Description_Types = Scheduled_Types.map(t => t.description);
export const Scheduled_Status_Types = Scheduled_Types.map(t => t.type);

//Future Scheduled Types
export const Future_Schedule_Types = [Status_Type.Pending, Status_Type.Scheduled] as const;
export const Future_Schedule_Description_Types = Future_Schedule_Types.map(t => t.description);
export const Future_Schedule_Status_Types = Future_Schedule_Types.map(t => t.type);

//In Completed Types
export const InCompleted_Types = [Status_Type.Pending, Status_Type.Scheduled, Status_Type.Start] as const;
export const InCompleted_Description_Types = InCompleted_Types.map(t => t.description);
export const InCompleted_Status_Types = InCompleted_Types.map(t => t.type);

//Completed Types
export const Completed_Types = [Status_Type.Completed] as const;
export const Completed_Description_Types = Completed_Types.map(t => t.description);
export const Completed_Status_Types = Completed_Types.map(t => t.type);

//Cancel Types
export const Cancel_Types = [Status_Type.Cancel] as const;
export const Cancel_Description_Types = Cancel_Types.map(t => t.description);
export const Cancel_Status_Types = Cancel_Types.map(t => t.type);

export const isCreatingType = (t: Consult.StatusType) => {
  return Creating.type === t.type && Creating.description === t.description;
};

export const isPendingType = (t: Consult.StatusType) => {
  return Pending.type === t.type && Pending.description === t.description;
};

export const isScheduledType = (t: Consult.StatusType) => {
  return Scheduled.type === t.type && Scheduled.description === t.description;
};

export const isStartType = (t: Consult.StatusType) => {
  return Start.type === t.type && Start.description === t.description;
};

export const isCancelType = (t: Consult.StatusType) => {
  return Cancel.type === t.type && Cancel.description === t.description;
};

export const isCompletedType = (t: Consult.StatusType) => {
  return Completed.type === t.type && Completed.description === t.description;
};

export const inSchedules = (t: Consult.StatusType) => {
  return Scheduled_Types.some(compare => compare.description === t.description && compare.type === t.type);
};

export const inFutureSchedules = (t: Consult.StatusType) => {
  return Future_Schedule_Types.some(compare => compare.description === t.description && compare.type === t.type);
};

export const inIncompletedSchedules = (t: Consult.StatusType) => {
  return InCompleted_Types.some(compare => compare.description === t.description && compare.type === t.type);
};
