import { logger } from 'firebase-functions/v2';
import { onSchedule } from 'firebase-functions/v2/scheduler';
import * as Service from '../../service/index';
import * as Repository from '../../repository/index';
import * as PregrancyUser from './manage-pregrancy-due-date/manage-pregrancy-due-date';
import * as Consult from './manage-consult/index';
import * as Session from './manage-session/index';
import * as Scheduler from './manage-shop-scheduler/manage-shop-scheduler';

export const EveryMinute = onSchedule('* * * * *', async event => {
  try {
    const shops = await Repository.Shop.Configuration.getAll();
    const configs = Service.Scheduler.ShopTime.getConfigs(shops, event.scheduleTime);

    //Manage Midnight
    await Scheduler.manage(configs);
    await Consult.DailyIncompletedStatus.manage(event.scheduleTime);

    await Session.WaitingList.manage(event.scheduleTime);
    await Session.ChangePhoneNumber.manage(event.scheduleTime);
    await Session.SigantureTransfer.manage(event.scheduleTime);
    await PregrancyUser.manage(event.scheduleTime);
  } catch (error) {
    const time = Service.Scheduler.ShopTime.getOfficeStamp(event.scheduleTime);
    logger.error(`task Run at: ${time}`, error);
    await Repository.Error.createErrorReport(event, error, 'Sync', 'EveryMinute');
  }
});

// const sendCritialEmail = async function (error: string) {
//   const button = `<a style="background-color: black; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block;">
//   ${error}</a>`;
//   await Service.Email.send('yeonjoon.developer@gmail.com', 'EveryMinute - Error', error, button, []);
// };
