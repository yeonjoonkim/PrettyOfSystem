import { logger } from 'firebase-functions/v2';
import { onSchedule } from 'firebase-functions/v2/scheduler';
import * as Service from '../../service/index';
import * as Repository from '../../repository/index';
import { rollOverRoster } from './rollover-roster/rollover-roster';
import * as PregrancyUser from './manage-pregrancy-due-date/manage-pregrancy-due-date';
import * as Consult from './manage-consult/index';
import * as Session from './manage-session/index';

export const EveryMinute = onSchedule('* * * * *', async event => {
  try {
    const shops = await Repository.Shop.Configuration.getAll();
    const configs = Service.Scheduler.ShopTime.getConfigs(shops, event.scheduleTime);

    //Every Sunday Midnight
    await rollOverRoster(configs);

    //Every Minute
    await Session.WaitingList.manage(event.scheduleTime);
    await Session.ChangePhoneNumber.manage(event.scheduleTime);
    await Session.SigantureTransfer.manage(event.scheduleTime);
    await PregrancyUser.manage(event.scheduleTime);
    await Consult.DailyIncompletedStatus.manage(event.scheduleTime);
  } catch (error) {
    const time = Service.Scheduler.ShopTime.getOfficeStamp(event.scheduleTime);
    logger.error(`task Run at: ${time}`, error);
  }
});
