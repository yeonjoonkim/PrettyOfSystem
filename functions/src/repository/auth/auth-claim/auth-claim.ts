import * as admin from 'firebase-admin';
import { logger } from 'firebase-functions/v2';

export const update = async function (id: string, isSystemAdmin: boolean, disabled: boolean) {
  const isExistedId = await isExistedUserById(id);

  if (isExistedId) {
    try {
      await admin
        .auth()
        .setCustomUserClaims(id, { isSystemAdmin: isSystemAdmin, disabled: disabled });
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
