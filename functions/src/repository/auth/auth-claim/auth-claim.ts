import * as admin from 'firebase-admin';
import { logger } from 'firebase-functions/v2';
import * as I from '../../../interface';

export const update = async function (id: string, claim: I.UserClaimType) {
  const isExistedId = await isExistedUserById(id);

  if (isExistedId) {
    try {
      await admin.auth().setCustomUserClaims(id, claim);
      logger.error('Update Claim Success ----- ');
      logger.info(`CurrentShopId: ${claim.currentShopId}`);

      return true;
    } catch (error) {
      return false;
    }
  } else {
    logger.error('id is not existed');
    return false;
  }
};

const isExistedUserById = async function (id: string) {
  try {
    await admin.auth().getUser(id);
    return true;
  } catch (error) {
    return false;
  }
};
