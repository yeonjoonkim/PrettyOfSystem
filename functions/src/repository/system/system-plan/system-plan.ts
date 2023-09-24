import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import { logger } from 'firebase-functions/v2';

export const getAll = async function (): Promise<I.PlanConfigurationType[]> {
  const allPlansSnapshot = await firestore().collection(Db.Context.System.Plan.Option).get();
  const allPlans = allPlansSnapshot.docs.map(doc => {
    const data = doc.data() as I.PlanConfigurationType;
    return {
      ...data,
    };
  });

  return allPlans;
};

export const getOnlyPremium = async function () {
  const allPlans = await getAll();
  return allPlans.filter(plan => plan.isPremium);
};

export const getOnlyTest = async function () {
  const allPlans = await getAll();
  return allPlans.filter(plan => plan.isTestPlan);
};

export const getActivePlan = async function () {
  const allPlans = await getAll();
  return allPlans.filter(plan => !plan.isTestPlan);
};

export const getSelectedPlan = async function (
  id: string
): Promise<I.PlanConfigurationType | null> {
  try {
    const planSnapshot = await firestore().collection(Db.Context.System.Plan.Option).doc(id).get();
    if (!planSnapshot.exists) {
      return null;
    }
    return planSnapshot.data() as I.PlanConfigurationType;
  } catch (error) {
    logger.error(error);
    return null;
  }
};

export const updateSelectedPlan = async function (plan: I.PlanConfigurationType): Promise<boolean> {
  const documentation = firestore().collection(Db.Context.System.Plan.Option).doc(plan.id);
  const data = await documentation.get();
  if (data.exists) {
    try {
      await documentation.update({
        name: plan.name,
        weeklyPrice: plan.weeklyPrice,
        monthlyPrice: plan.monthlyPrice,
        annuallyPrice: plan.annuallyPrice,
        isTestPlan: plan.isTestPlan,
        isPremium: plan.isPremium,
        limitedService: plan.limitedService,
        limitedPackage: plan.limitedPackage,
        limitedProduct: plan.limitedProduct,
        limitedUser: plan.limitedUser,
        lastModifiedDate: new Date(),
      });
      return true;
    } catch (error) {
      logger.error(error);
      return false;
    }
  } else {
    return await createPlan(plan);
  }
};

export const createPlan = async function (plan: I.PlanConfigurationType): Promise<boolean> {
  const documentation = firestore().collection(Db.Context.System.Plan.Option).doc(plan.id);
  const data = await documentation.get();

  if (!data.exists) {
    try {
      await documentation.set({
        name: plan.name,
        weeklyPrice: plan.weeklyPrice,
        monthlyPrice: plan.monthlyPrice,
        annuallyPrice: plan.annuallyPrice,
        isTestPlan: plan.isTestPlan,
        isPremium: plan.isPremium,
        limitedService: plan.limitedService,
        limitedPackage: plan.limitedPackage,
        limitedProduct: plan.limitedProduct,
        limitedUser: plan.limitedUser,
        lastModifiedDate: new Date(),
      });
      return true;
    } catch (error) {
      logger.error(error);
      return false;
    }
  } else {
    return false;
  }
};

export const deleteSelectedPlan = async function (plan: I.PlanConfigurationType) {
  const planRef = firestore().collection(Db.Context.System.Plan.Option).doc(plan.id);

  try {
    await planRef.delete();
    return true;
  } catch (error) {
    logger.error(error);
    return false;
  }
};
