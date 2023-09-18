import * as CryptoJS from 'crypto-js';
import * as _ from '../../crypt-key';

export const encrypt = async function (value: any) {
  return CryptoJS.AES.encrypt(JSON.stringify(value), _.Crypt.key).toString();
};

export const decrypt = async function (encryptedString: string) {
  let bytes = CryptoJS.AES.decrypt(encryptedString, _.Crypt.key);
  if (bytes.toString()) {
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
  return null;
};
