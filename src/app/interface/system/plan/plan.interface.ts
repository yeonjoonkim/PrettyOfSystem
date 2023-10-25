export type PlanPriceType = {
  tax: number;
  net: number;
  total: number;
};

export type PlanConfigurationType = {
  id: string;
  name: string;
  weeklyPrice: PlanPriceType;
  monthlyPrice: PlanPriceType;
  annuallyPrice: PlanPriceType;
  isTestPlan: boolean;
  isPremium: boolean;
  limitedPackage: number;
  limitedService: number;
  limitedCoupon: number;
  limitedExtra: number;
  limitedProduct: number;
  limitedUser: number;
};
