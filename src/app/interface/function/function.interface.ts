export type OnChangeUserType = {
  isLoginOptionChanged: boolean;
  isPhoneNumberChanged: boolean;
  isFirstNameChanged: boolean;
  isLastNameChanged: boolean;
  isGenderChanged: boolean;
  isEmailChanged: boolean;
  isPasswordChanged: boolean;
  isSystemAdminChanged: boolean;
  isDisabledAccountChanged: boolean;
  isRosterChange: boolean;
  isCurrentlyActive: boolean;
  isPreviouslyActive: boolean;

  isShopActiveCountChanged: boolean;
  afterActiveShopCount: number;
  beforeActiveShopCount: number;
};

export type OnChangeUserActionType = {
  isSendMsgRosterChange: boolean;
  isAuthUpdate: boolean;
  isCurrentShopIdUpdate: boolean;
  isActivateAccount: boolean;
  isDeactiveAccount: boolean;
  isUpdateClaim: boolean;
};

export type OnChangeShopType = {
  isActiveChanged: boolean;
  isEmailChanged: boolean;
  isPhoneChanged: boolean;
  isAddressChanged: boolean;
  isOperatingHourChanged: boolean;
  isPreimumPlan: boolean;
};

export type OnChangeShopActionType = {
  isSendMsgClientShopInfoChange: boolean;
  isResetRoster: boolean;
  isActiveStatusChange: boolean;
};
