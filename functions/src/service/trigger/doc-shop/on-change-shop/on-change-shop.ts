import * as I from '../../../../interface';
import * as Repository from '../../../../repository/index';

export const getChangeDectection = async function (
  before: I.ShopConfigurationType,
  after: I.ShopConfigurationType
): Promise<I.OnChangeShopType> {
  let changeAction = getDefaultChangeType();
  changeAction.isPreimumPlan = await isPreimumPlan(after);
  changeAction.isActiveChanged = isActiveChange(before, after);
  changeAction.isAddressChanged = isAddressChange(before, after);
  changeAction.isEmailChanged = isEmailChange(before, after);
  changeAction.isPhoneChanged = isPhoneNumberChange(before, after);
  changeAction.isOperatingHourChanged = isOperatingHoursChange(
    before.operatingHours,
    after.operatingHours
  );
  return changeAction;
};

export const getChangeAction = function (c: I.OnChangeShopType) {
  let event = getDefaultActionType();
  event.isResetRoster = c.isOperatingHourChanged;
  event.isSendMsgClientShopInfoChange =
    (c.isAddressChanged || c.isEmailChanged || c.isPhoneChanged || c.isOperatingHourChanged) &&
    c.isPreimumPlan;
  event.isActiveStatusChange = c.isActiveChanged;
  return event;
};

const isPreimumPlan = async function (after: I.ShopConfigurationType) {
  const premiumPlans = await Repository.System.Plan.getOnlyPremium();
  const premiumPlan = premiumPlans.find(p => p.id === after.plan.configurationId);

  return premiumPlan !== undefined ? true : false;
};

const isActiveChange = function (before: I.ShopConfigurationType, after: I.ShopConfigurationType) {
  return before.active !== after.active;
};

const isEmailChange = function (before: I.ShopConfigurationType, after: I.ShopConfigurationType) {
  return before.email !== after.email;
};

const isPhoneNumberChange = function (
  before: I.ShopConfigurationType,
  after: I.ShopConfigurationType
) {
  return before.phoneNumber !== after.phoneNumber;
};

const isAddressChange = function (before: I.ShopConfigurationType, after: I.ShopConfigurationType) {
  return (
    before.address.street !== after.address.street ||
    before.address.suburb !== after.address.suburb ||
    before.address.state !== after.address.state
  );
};

export const isOperatingHoursChange = function (
  before: I.ShopWorkHoursType,
  after: I.ShopWorkHoursType
) {
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  return (
    days.some(day => {
      const beforeDay: I.ShopOperatingDailyType = (before as any)[day];
      const afterDay: I.ShopOperatingDailyType = (after as any)[day];
      const isWorkHoursChanged = isWorkHoursChange(beforeDay, afterDay);

      if (beforeDay.isOpen !== afterDay.isOpen) return true;
      if (beforeDay.workHours !== afterDay.workHours) return true;
      if (isWorkHoursChanged) return true;
      return false;
    }) || !isDayOffChanged(before.closeDay, after.closeDay)
  );
};

const isDayOffChanged = function (a: I.DayIndexType[], b: I.DayIndexType[]) {
  if (a.length !== b.length) return false;
  return a.every((val, index) => val === b[index]);
};

const isWorkHoursChange = function (
  before: I.ShopOperatingDailyType,
  after: I.ShopOperatingDailyType
) {
  return (
    before.index !== after.index ||
    before.day !== after.day ||
    before.isOpen !== after.isOpen ||
    before.workHours !== after.workHours ||
    isShopOperatingHoursChange(before.operatingHours, after.operatingHours)
  );
};

const isShopOperatingHoursChange = function (
  before: I.ShopOperatingHoursType,
  after: I.ShopOperatingHoursType
): boolean {
  return (
    before.openTime.hr !== after.openTime.hr ||
    before.openTime.min !== after.openTime.min ||
    before.closeTime.hr !== after.closeTime.hr ||
    before.closeTime.min !== after.closeTime.min
  );
};

const getDefaultChangeType = function (): I.OnChangeShopType {
  return {
    isActiveChanged: false,
    isEmailChanged: false,
    isPhoneChanged: false,
    isAddressChanged: false,
    isOperatingHourChanged: false,
    isPreimumPlan: false,
  };
};

const getDefaultActionType = function (): I.OnChangeShopActionType {
  return {
    isSendMsgClientShopInfoChange: false,
    isResetRoster: false,
    isActiveStatusChange: false,
  };
};
