export interface ISystemPopOverActionCriteria {
  isKeyPairValueActionSheet: boolean;
}

export interface ISystemPopOverActionItem{
  description: string;
  action: ISystemPopOverActionCriteria;
}

export interface ISystemPopOverCriteria{
  isDevelopment: boolean;
}
