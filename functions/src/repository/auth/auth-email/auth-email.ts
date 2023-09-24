import * as admin from 'firebase-admin';
import { logger } from 'firebase-functions/v2';
import * as Service from '../../../service/index';

export const createEmailLogin = async function (id: string, email: string, encrypted: string) {
  const isExistedId = await isExistedUserById(id);
  const isExisted = await isExistedEmail(email);
  const decryptedPassword = await Service.Crypt.decrypt(encrypted);

  if (
    !isExisted &&
    !isExistedId &&
    decryptedPassword !== null &&
    typeof decryptedPassword === 'string'
  ) {
    try {
      await admin.auth().createUser({
        uid: id,
        email: email,
        password: decryptedPassword,
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

export const updateEmailLogin = async function (id: string, email: string, encrypted: string) {
  const isExistedId = await isExistedUserById(id);
  const isExisted = await isExistedEmail(email);
  const decryptedPassword = await Service.Crypt.decrypt(encrypted);
  if (
    isExisted &&
    isExistedId &&
    decryptedPassword !== null &&
    typeof decryptedPassword === 'string'
  ) {
    try {
      await admin.auth().updateUser(id, {
        email: email,
        password: decryptedPassword,
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

export const deleteEmailLogin = async function (id: string) {
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

export const disableEmailLogin = async function (id: string) {
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

export const activeEmailLogin = async function (id: string) {
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

const isExistedUserById = async function (id: string) {
  try {
    await admin.auth().getUser(id);
    return true;
  } catch (error) {
    return false;
  }
};

const isExistedEmail = async function (email: string) {
  try {
    await admin.auth().getUserByEmail(email);
    return true;
  } catch (error) {
    return false;
  }
};
