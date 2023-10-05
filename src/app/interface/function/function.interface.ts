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
  isCurrentShopRoleChange: boolean;
  isCurrentShopIdChange: boolean;
  isShopActiveCountChanged: boolean;
  afterActiveShopCount: number;
  beforeActiveShopCount: number;
};

export type OnChangeUserActionType = {
  isSendMsgRosterChange: boolean;
  isAuthUpdate: boolean;
  isCurrentShopIdUpdate: boolean;
  isCurrentShopRoleUpdate: boolean;
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
  isTranslatedRequestChange: boolean;
  isTranslatedRequestDelete: boolean;
};

export type OnChangeShopActionType = {
  isSendMsgClientShopInfoChange: boolean;
  isResetRoster: boolean;
  isActiveStatusChange: boolean;
  isTranslatedRequestDelete: boolean;
};
