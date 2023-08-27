export interface IPlanPrice {
  tax: number;
  net: number;
  total: number;
}

export interface IPlanConfiguration {
  id: string;
  name: string;
  weeklyPrice: IPlanPrice;
  monthlyPrice: IPlanPrice;
  annuallyPrice: IPlanPrice;
  isTestPlan: boolean;
  isPremium: boolean;
  limitedService: number;
  limitedPackage: number;
  limitedProduct: number;
  limitedUser: number;
}
