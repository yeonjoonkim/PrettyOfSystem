import { firestore } from 'firebase-admin';
import * as Db from '../../db';
import * as I from '../../interface';
import { logger } from 'firebase-functions/v2';
import * as Service from '../../service/index';

export const getAll = async function (): Promise<I.OpenApiInstanceType[]> {
  const snapshot = await firestore().collection(Db.Context.OpenApiInstance).get();
  const instnaces = snapshot.docs.map(doc => {
    let data = doc.data() as I.OpenApiInstanceType;
    data.expiredDate = Service.Date.toLocalDateTime(data.expiredDate);
    return {
      ...data,
    };
  });
  return instnaces;
};

export const updateExpiredInstanceToAvailable = async function () {
  try {
    const now = new Date();
    const all = await getAll();
    const expiredInstances = all.filter(s => s.expiredDate < now && s.inUse);

    if (expiredInstances.length > 0) {
      await Promise.all(expiredInstances.map(instance => updateNotInUseInstance(instance)));
      return true;
    }
    return false;
  } catch (error) {
    logger.error('Failed to update expired instances:', error);
    return false;
  }
};

export const getUsefulInstances = async function () {
  const instances = await getAll();
  const usefulInstances = instances.filter(s => !s.inUse).sort((a, b) => a.index - b.index);
  return usefulInstances;
};

export const getSelectedInstance = async function (sId: string, serviceId: string, f: string) {
  const instance = await getAll();
  const selected = instance.find(
    vm => vm.format === f && sId === vm.shopId && serviceId === vm.serviceId && vm.inUse
  );

  return selected;
};

export const updateInUseInstance = async function (
  vm: I.OpenApiInstanceType,
  f: I.TextFormatType,
  serviceId: string,
  shopId: string
) {
  const instances = await getAll();
  const currentSelected = instances.find(instance => instance.id === vm.id);
  if (currentSelected !== undefined && !currentSelected?.inUse) {
    const documentation = firestore().collection(Db.Context.OpenApiInstance).doc(vm.id);
    const data = await documentation.get();

    if (data.exists) {
      try {
        const now = new Date();
        vm.format = f;
        vm.serviceId = serviceId;
        vm.shopId = shopId;
        vm.inUse = true;
        vm.expiredDate = new Date(now.getTime() + 10 * 60 * 1000);
        await documentation.update(vm);
        logger.log('Open API Instance IN USE Mode Updated success', vm);
        return true;
      } catch (err) {
        logger.error(err);
        logger.error('Error updateInUseInstance', vm);
        return false;
      }
    } else {
      logger.error('Not Exisitng Instance updateInUseInstance', vm);
      return false;
    }
  } else {
    logger.error('In Use', vm);
    return false;
  }
};

export const updateNotInUseInstance = async function (vm: I.OpenApiInstanceType) {
  const documentation = firestore().collection(Db.Context.OpenApiInstance).doc(vm.id);
  const data = await documentation.get();
  if (data.exists) {
    try {
      vm.format = '';
      vm.serviceId = '';
      vm.shopId = '';
      vm.inUse = false;
      await documentation.update(vm);
      return true;
    } catch (err) {
      logger.error(err);
      logger.error('Updating Error', vm);
      return false;
    }
  } else {
    logger.error('Updating Not In Use Error Not existed', vm);
    return false;
  }
};
