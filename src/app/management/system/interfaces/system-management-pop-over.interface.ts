export interface ISystemPopOverActionCriteria {
  isKeyPairValueActionSheet: boolean;
  menu: ISystemMenuAction;
}

export interface ISystemMenuAction{
  isRouteManagement: boolean;
}

export interface ISystemPopOverActionItem{
  description: string;
  ui: string;
  action: ISystemPopOverActionCriteria;
}

export interface ISystemPopOverCriteria{
  isDevelopment: boolean;
}
