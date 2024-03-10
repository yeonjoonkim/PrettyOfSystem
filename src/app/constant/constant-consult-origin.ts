import { Consult } from './constant-value';

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
