import * as Status from '../constant/constant-consult';
import { Consult } from '../constant/constant-value';

export const CreatingStatusType: Status.ConsultCreatingStatus = {
  type: Consult.StatusType.Creating,
  description: Consult.StatusDescription.Creating,
};

export const PendingStatusType: Status.ConsultPendingStatus = {
  type: Consult.StatusType.Pending,
  description: Consult.StatusDescription.Pending,
};

export const ScheduledType;
