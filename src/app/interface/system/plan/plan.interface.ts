export interface PlanPriceType {
  tax: number;
  net: number;
  total: number;
}

export interface PlanConfigurationType {
  id: string;
  name: string;
  weeklyPrice: PlanPriceType;
  monthlyPrice: PlanPriceType;
  annuallyPrice: PlanPriceType;
  isTestPlan: boolean;
  isPremium: boolean;
  limitedService: number;
  limitedPackage: number;
  limitedProduct: number;
  limitedUser: number;
}
