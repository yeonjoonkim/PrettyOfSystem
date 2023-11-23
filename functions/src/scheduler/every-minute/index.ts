import { logger } from 'firebase-functions/v2';
import { onSchedule } from 'firebase-functions/v2/scheduler';
import * as Service from '../../service/index';
import * as Repository from '../../repository/index';
import { rollOverRoster } from './rollover-roster/rollover-roster';
import { manageOneTimeCheckInUrl } from './manage-one-time-checkin-url/manage-one-time-checkin-url';
export const EveryMinute = onSchedule('* * * * *', async event => {
  try {
    const shops = await Repository.Shop.Configuration.getAll();
    const configs = Service.Scheduler.ShopTime.getConfigs(shops, event.scheduleTime);

    //Every Sunday Midnight
    await rollOverRoster(configs);

    //Every Minute
    await manageOneTimeCheckInUrl(event.scheduleTime);
  } catch (error) {
    const time = Service.Scheduler.ShopTime.getOfficeStamp(event.scheduleTime);
    logger.error(`task Run at: ${time}`, error);
  }
});
