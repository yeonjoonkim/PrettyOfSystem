import * as admin from 'firebase-admin';

export const isExistedEmail = async function (email: string) {
  try {
    await admin.auth().getUserByEmail(email);
    return true;
  } catch (error) {
    return false;
  }
};

export const isExistedPhoneNumber = async function (phoneNumber: string) {
  try {
    await admin.auth().getUserByPhoneNumber(phoneNumber);
    return true;
  } catch (error) {
    return false;
  }
};

export const isExistedUserById = async function (id: string) {
  try {
    await admin.auth().getUser(id);
    return true;
  } catch (error) {
    return false;
  }
};
