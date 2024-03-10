import * as Consult from './constant-consult';
import * as Constant from '../constant-value';

export const PhoneOrigin: Consult.PhoneOriginType = {
  type: Constant.Consult.OriginType.Phone,
  description: Constant.Consult.OriginDescription.Phone,
};

export const OnlineOrigin: Consult.OnlineOriginType = {
  type: Constant.Consult.OriginType.Online,
  description: Constant.Consult.OriginDescription.Online,
};

export const WalkInOrigin: Consult.WalkInOriginType = {
  type: Constant.Consult.OriginType.WalkIn,
  description: Constant.Consult.OriginDescription.WalkIn,
};

export const WaitingListOrigin: Consult.WaitingListOriginType = {
  type: Constant.Consult.OriginType.WaitingList,
  description: Constant.Consult.OriginDescription.WaitingList,
};

export const isPhoneOrigin = (t: Consult.OriginType) => {
  return PhoneOrigin.type === t.type && PhoneOrigin.description === t.description;
};

export const isOnlineOrigin = (t: Consult.OriginType) => {
  return OnlineOrigin.type === t.type && OnlineOrigin.description === t.description;
};

export const isWalkInOrigin = (t: Consult.OriginType) => {
  return WalkInOrigin.type === t.type && WalkInOrigin.description === t.description;
};

export const isWaitingListOrigin = (t: Consult.OriginType) => {
  return WaitingListOrigin.type === t.type && WaitingListOrigin.description === WaitingListOrigin.description;
};
