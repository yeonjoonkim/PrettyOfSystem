import * as admin from 'firebase-admin';
import { logger } from 'firebase-functions/v2';

export const createPhoneLogin = async function (id: string, phoneNumber: string) {
  const isExistedId = await isExistedUserById(id);
  const isExistedNumber = await isExistedPhoneNumber(phoneNumber);

  if (!isExistedId && !isExistedNumber) {
    try {
      await admin.auth().createUser({
        uid: id,
        phoneNumber: phoneNumber,
        disabled: false,
      });
      return true;
    } catch (error) {
      logger.error(error);
      return false;
    }
  } else {
    logger.error('Number or id existed');
    return false;
  }
};

export const updatePhoneLogin = async function (id: string, newNumber: string) {
  const isExistedId = await isExistedUserById(id);
  const isExistedNumber = await isExistedPhoneNumber(newNumber);

  if (isExistedId && !isExistedNumber) {
    try {
      const user = await admin.auth().getUser(id);

      if (user.phoneNumber !== newNumber) {
        await admin.auth().updateUser(id, { phoneNumber: newNumber });
      }

      return true;
    } catch (error) {
      logger.error(error);
      return false;
    }
  } else {
    logger.error('Number existed or id not existed');
    return false;
  }
};

export const disablePhoneLogin = async function (id: string) {
  const isExisted = await isExistedUserById(id);
  if (isExisted) {
    try {
      await admin.auth().updateUser(id, { disabled: true });
      return true;
    } catch (error) {
      logger.error(error);
      return false;
    }
  } else {
    logger.error('Id not existed');
    return false;
  }
};

export const activePhoneLogin = async function (id: string) {
  const isExisted = await isExistedUserById(id);
  if (isExisted) {
    try {
      await admin.auth().updateUser(id, { disabled: false });
      return true;
    } catch (error) {
      logger.error(error);
      return false;
    }
  } else {
    logger.error('Id not existed');
    return false;
  }
};

export const deletePhoneLogin = async function (id: string) {
  const isExisted = await isExistedUserById(id);
  if (isExisted) {
    try {
      await admin.auth().deleteUser(id);
      return true;
    } catch (error) {
      logger.error(error);
      return false;
    }
  } else {
    logger.error('Id not existed');
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

const isExistedPhoneNumber = async function (phoneNumber: string) {
  try {
    await admin.auth().getUserByPhoneNumber(phoneNumber);
    return true;
  } catch (error) {
    return false;
  }
};
