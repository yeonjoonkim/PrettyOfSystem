export interface IPlanSelectionOption {
  isFreePlan: boolean;
  isMontlyPlan: boolean;
  isAnnualPlan: boolean;
}

export interface IPlanPrice{
  tax: number;
  net: number;
  total: number;
}

export interface IPlanConfiguration{
  id: string;
  name: string;
  description: string;
  option: IPlanSelectionOption;
  price: IPlanPrice;
  expiryIndays: number;
  isPremium: boolean;
  limitedService: number;
  limitedProduct: number;
  limitedUser: number;
}
