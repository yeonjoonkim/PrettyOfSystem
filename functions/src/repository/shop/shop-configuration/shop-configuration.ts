import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import * as Service from './../../../service/index';
import * as Repository from '../../../repository/index';
import { logger } from 'firebase-functions/v2';

export const getAll = async function (): Promise<I.ShopConfigurationType[]> {
  const allSnapshot = await firestore().collection(Db.Context.ShopConfiguration).get();
  const allShopConfigs = allSnapshot.docs.map(doc => {
    let config = doc.data() as I.ShopConfigurationType;
    config.setting = Service.Override.Shop.Config.override(config.setting);
    return {
      ...config,
    };
  });

  return allShopConfigs;
};

export const getActiveConfigs = async function (): Promise<I.ShopConfigurationType[]> {
  const activeSnapshot = await firestore()
    .collection(Db.Context.ShopConfiguration)
    .where('active', '==', true)
    .where('activeTo', '==', null)
    .get();

  const activeShopConfigs = activeSnapshot.docs.map(doc => {
    let config = doc.data() as I.ShopConfigurationType;
    config.setting = Service.Override.Shop.Config.override(config.setting);
    return {
      ...config,
    };
  });

  return activeShopConfigs;
};

export const getDeactiveConfigs = async function (): Promise<I.ShopConfigurationType[]> {
  const activeSnapshot = await firestore()
    .collection(Db.Context.ShopConfiguration)
    .where('active', '==', false)
    .where('activeTo', '!=', null)
    .get();

  const activeShopConfigs = activeSnapshot.docs.map(doc => {
    let config = doc.data() as I.ShopConfigurationType;
    config.setting = Service.Override.Shop.Config.override(config.setting);
    return {
      ...config,
    };
  });

  return activeShopConfigs;
};

export const deactivate = async function (configId: string, timezone: string): Promise<boolean> {
  const configRef = firestore().collection(Db.Context.ShopConfiguration).doc(configId);
  try {
    const updatedConfig: Partial<I.ShopConfigurationType> = {
      active: false,
      activeTo: Service.Date.shopTimeStamp(timezone),
    };

    await configRef.update(updatedConfig);
    return true;
  } catch (error) {
    await Repository.Error.createErrorReport(configRef, error, 'update', 'deactivateShopConfiguration');
    return false;
  }
};

export const activate = async function (configId: string): Promise<boolean> {
  const configRef = firestore().collection(Db.Context.ShopConfiguration).doc(configId);
  try {
    const updatedConfig: Partial<I.ShopConfigurationType> = {
      active: true,
      activeTo: null,
    };

    await configRef.update(updatedConfig);
    return true;
  } catch (error) {
    await Repository.Error.createErrorReport(configRef, error, 'update', 'deactivateShopConfiguration');
    return false;
  }
};

export const updateConfig = async function (config: I.ShopConfigurationType): Promise<boolean> {
  const documentation = firestore().collection(Db.Context.ShopConfiguration).doc(config.id);
  const data = await documentation.get();
  if (data.exists) {
    try {
      await documentation.update({ ...config });
      return true;
    } catch (error) {
      await Repository.Error.createErrorReport(config, error, 'update', 'updateConfig');
      return false;
    }
  } else {
    return false;
  }
};

export const getSelectedConfig = async function (id: string) {
  try {
    const configSnapShot = await firestore().collection(Db.Context.ShopConfiguration).doc(id).get();
    if (!configSnapShot.exists) {
      return null;
    }
    let config = configSnapShot.data() as I.ShopConfigurationType;
    config.setting = Service.Override.Shop.Config.override(config.setting);
    return config;
  } catch (error) {
    logger.error(' Cannot retreive', error);
    return null;
  }
};

export const deleteConfig = async function (configId: string): Promise<boolean> {
  const configDoc = firestore().collection(Db.Context.ShopConfiguration).doc(configId);
  const data = await configDoc.get();

  if (data.exists) {
    try {
      await configDoc.delete();
      return true;
    } catch (error) {
      await Repository.Error.createErrorReport({ id: configId }, error, 'delete', 'deleteConfig');
      return false;
    }
  } else {
    return false;
  }
};
