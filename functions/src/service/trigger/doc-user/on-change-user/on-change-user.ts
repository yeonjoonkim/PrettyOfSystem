import * as I from '../../../../interface';

export const getChangeDectection = function (before: I.IUser, after: I.IUser): I.OnChangeUserType {
  let changeAction = getDefaultOnChangeUserDocumentationType();
  changeAction.isLoginOptionChanged = isLoginOptionChanged(before, after);
  changeAction.isPhoneNumberChanged = isPhoneNumberChanged(before, after);
  changeAction.isFirstNameChanged = isFirstNameChanged(before, after);
  changeAction.isLastNameChanged = isLastNameChanged(before, after);
  changeAction.isGenderChanged = isGenderChanged(before, after);
  changeAction.isEmailChanged = isEmailChanged(before, after);
  changeAction.isPasswordChanged = isPasswordChanged(before, after);
  changeAction.beforeActiveShopCount = getActiveShopCount(before);
  changeAction.afterActiveShopCount = getActiveShopCount(after);
  changeAction.isShopActiveCountChanged = isShopActiveCountChanged(before, after);
  changeAction.isRosterChange = areAssociatedShopsRosterChange(before, after);
  changeAction.isSystemAdminChanged = isSystemAdminChanged(before, after);
  changeAction.isDisabledAccountChanged = isDisabledAccountChanged(before, after);
  changeAction.isCurrentShopRoleChange = isCurrentShopRoleChange(before, after);
  changeAction.isCurrentShopIdChange = isCurrentShopChange(before, after);
  return changeAction;
};

export const getChangeAction = function (c: I.OnChangeUserType, after: I.IUser) {
  let event = getDefaultOnChangeUserActionType();
  event.isAuthUpdate =
    (!c.isLoginOptionChanged && c.isEmailChanged && after.loginOption.email) ||
    (!c.isLoginOptionChanged && c.isPasswordChanged && after.loginOption.email) ||
    (!c.isLoginOptionChanged && c.isPhoneNumberChanged && after.loginOption.phoneNumber);
  event.isActivateAccount = c.beforeActiveShopCount === 0 && c.afterActiveShopCount > 0;
  event.isDeactiveAccount = c.beforeActiveShopCount > 0 && c.afterActiveShopCount === 0;
  event.isCurrentShopIdUpdate = c.isShopActiveCountChanged;
  event.isCurrentShopRoleUpdate = c.isCurrentShopRoleChange;
  event.isSendMsgRosterChange = c.isRosterChange;
  event.isUpdateClaim =
    c.isSystemAdminChanged ||
    c.isDisabledAccountChanged ||
    (!event.isActivateAccount && !event.isDeactiveAccount) ||
    c.isCurrentShopRoleChange ||
    c.isCurrentShopIdChange ||
    event.isCurrentShopIdUpdate;

  return event;
};

const isCurrentShopChange = function (before: I.IUser, after: I.IUser) {
  return before.currentShopId !== after.currentShopId;
};

const getActiveShopCount = function (user: I.IUser) {
  return user.associatedShops.filter(s => s.active).length;
};

const isSystemAdminChanged = function (before: I.IUser, after: I.IUser) {
  return before.isSystemAdmin !== after.isSystemAdmin;
};

const isShopActiveCountChanged = function (before: I.IUser, after: I.IUser) {
  const beforeActiveShops = before.associatedShops.filter(s => s.active).length;
  const afterActiveShops = after.associatedShops.filter(s => s.active).length;

  return beforeActiveShops !== afterActiveShops;
};

const isDisabledAccountChanged = function (before: I.IUser, after: I.IUser) {
  return before.disabledAccount !== after.disabledAccount;
};

const isPasswordChanged = function (before: I.IUser, after: I.IUser) {
  return before.encryptedPassword !== after.encryptedPassword;
};

const isEmailChanged = function (before: I.IUser, after: I.IUser) {
  return before.email !== after.email;
};

const isGenderChanged = function (before: I.IUser, after: I.IUser) {
  return before.gender !== after.gender;
};

const isFirstNameChanged = function (before: I.IUser, after: I.IUser) {
  return before.firstName !== after.firstName;
};

const isLastNameChanged = function (before: I.IUser, after: I.IUser) {
  return before.lastName !== after.lastName;
};

const isPhoneNumberChanged = function (before: I.IUser, after: I.IUser) {
  return before.phoneNumber !== after.phoneNumber;
};

const isLoginOptionChanged = function (before: I.IUser, after: I.IUser) {
  return (
    before.loginOption.email !== after.loginOption.email &&
    before.loginOption.phoneNumber !== after.loginOption.phoneNumber
  );
};

const isCurrentShopRoleChange = function (before: I.IUser, after: I.IUser) {
  const isSameShop = before.currentShopId === after.currentShopId;
  const beforeCurrentShop = before.associatedShops.find(s => s.shopId === after.currentShopId);
  const afterCurrentShop = after.associatedShops.find(s => s.shopId === after.currentShopId);
  if (isSameShop && beforeCurrentShop !== undefined && afterCurrentShop !== undefined) {
    return beforeCurrentShop.role.description !== afterCurrentShop.role.description;
  }
  return false;
};

const areAssociatedShopsRosterChange = function (before: I.IUser, after: I.IUser) {
  const beforeActiveShops = before.associatedShops.filter(s => s.active);
  const afterActiveShops = after.associatedShops.filter(s => s.active);

  if (beforeActiveShops.length !== afterActiveShops.length) return false;

  return afterActiveShops.some(afterShop => {
    const beforeShop = beforeActiveShops.find(s => s.shopId === afterShop.shopId);
    return beforeShop && isRosterChange(beforeShop.roster, afterShop.roster);
  });
};

const isRosterChange = function (before: I.ShopWorkHoursType, after: I.ShopWorkHoursType) {
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

const getDefaultOnChangeUserDocumentationType = function (): I.OnChangeUserType {
  return {
    isDisabledAccountChanged: false,
    isLoginOptionChanged: false,
    isPhoneNumberChanged: false,
    isFirstNameChanged: false,
    isLastNameChanged: false,
    isGenderChanged: false,
    isEmailChanged: false,
    isCurrentShopIdChange: false,
    isSystemAdminChanged: false,
    isCurrentShopRoleChange: false,
    isPasswordChanged: false,
    isCurrentlyActive: false,
    isPreviouslyActive: false,
    isRosterChange: false,
    isShopActiveCountChanged: false,
    afterActiveShopCount: 0,
    beforeActiveShopCount: 0,
  };
};

const getDefaultOnChangeUserActionType = function (): I.OnChangeUserActionType {
  return {
    isSendMsgRosterChange: false,
    isAuthUpdate: false,
    isActivateAccount: false,
    isDeactiveAccount: false,
    isCurrentShopIdUpdate: false,
    isCurrentShopRoleUpdate: false,
    isUpdateClaim: false,
  };
};
