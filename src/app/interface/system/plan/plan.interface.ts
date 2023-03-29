export interface IPlanPrice{
  tax: number;
  net: number;
  total: number;
}

export interface IPlanRangeOption{
  isFreePlan: boolean;
  isWeeklyPlan: boolean;
  isMontlyPlan: boolean;
  isAnnualPlan: boolean;
}

export interface IPlanPriceSelectOption{
  id: string;
  name: string;
  option: IPlanRangeOption;
}

export interface IPlanConfiguration{
  id: string;
  name: string;
  weeklyPrice: IPlanPrice;
  monthlyPrice: IPlanPrice;
  annuallyPrice: IPlanPrice;
  isPremium: boolean;
  limitedService: number;
  limitedProduct: number;
  limitedUser: number;
}
