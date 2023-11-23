import * as Repository from '../../../repository/index';
import * as I from '../../../interface';
import { logger } from 'firebase-functions/v2';

export const rollOverRoster = async function (configs: I.SchedulerShopConfigurationType[]) {
  const rollover = configs.filter(c => c.isSun && c.isMidNight);
  const shopIds = rollover.map(r => r.config.id);
  if (shopIds.length > 0) {
    const users = await Repository.User.getAssociatedShopUserByIds(shopIds);

    if (users.length > 0) {
      users.forEach(user => {
        user.associatedShops.forEach(shop => {
          const rolloverConfig = configs.find(c => c.config.id === shop.shopId);
          if (rolloverConfig) {
            logger.info(
              `${rollover.find(r => r.config.id === shop.shopId)?.config?.name} - ${user.lastName} ${
                user.lastName
              } will updated`
            );
            shop.roster = shop.nextWeekRoster;
          }
        });
      });

      for (const user of users) {
        await Repository.User.updateSelectedUser(user);
      }
    }
  }
};
