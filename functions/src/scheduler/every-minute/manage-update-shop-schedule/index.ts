import { manageWorkStatusRequest } from './manage-update-shop-schedule-work-status/manage-update-shop-schedule-work-status';
import * as Repository from '../../../repository/index';
import { logger } from 'firebase-functions/v2';
import * as I from '../../../interface';

export const manage = async function (configs: I.ShopConfigurationType[]) {
  try {
    for (const config of configs) {
      await manageWorkStatusRequest(config);
    }
  } catch (error) {
    logger.error(error);
    await Repository.Error.createErrorReport(error, 'Could not run', 'update', 'Manage Update Schedule Status');
  }
};
