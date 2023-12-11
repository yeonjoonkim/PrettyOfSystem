import * as I from '../../../../interface';
import { logger } from 'firebase-functions/v2';
import * as Repository from '../../../../repository/index';
import * as Email from '../../../e-mail/e-mail';
import * as Constant from '../../../../constant';
export const start = async function (docs: I.ChangePhoneNumberRequestDocumentType[]) {
  logger.info(`Start Change Number: ${docs.length} users`);
  try {
    for (let doc of docs) {
      const user = await Repository.User.getSelectedUser(doc.userId);
      if (user !== null) {
        logger.info(`${user.firstName} ${user.lastName}'s Previous phone number: ${user.phoneNumber}`);
        user.phoneNumber = doc.newPhoneNumber;
        logger.info(`${user.firstName} ${user.lastName}'s New phone number: ${user.phoneNumber}`);
        if (user.phoneNumber.length > 0) {
          await Repository.User.updateSelectedUser(user);
          await Repository.Session.ChangePhoneNumber.deleteDocument(doc);
        }
      }
    }
  } catch (error) {
    logger.error(error);
    await Repository.Error.createErrorReport(error, 'Could not run', 'Sync', 'ChangeNumber');
  }
};

export const sendEmail = async function (docs: I.ChangePhoneNumberRequestDocumentType[]) {
  logger.info(`Start Send Email - Change Phone Number: ${docs.length} users`);
  const failedDocs = [];
  const successDocs = [];

  try {
    for (let doc of docs) {
      const name = doc.url.includes('https:') ? 'Please Click Here To Change Phone Number' : doc.url;
      const button = `<a href="${doc.url}" style="background-color: black; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block;">
       ${name}
  </a>`;
      const result = await Email.send(doc.emailAddress, 'Change Phone Number Request', '', button);
      if (result) {
        successDocs.push(doc);
      } else {
        failedDocs.push(doc);
      }

      logger.info(`Failed: ${failedDocs.length} Request has not been sent`);
      if (failedDocs.length > 0) {
        for (let doc of failedDocs) {
          doc.attempt = doc.attempt + 1;
          doc.status = Constant.ChangeNumberRequestStatus.EmailFail;
          await Repository.Session.ChangePhoneNumber.upadteDocument(doc);
        }
      }
    }
    logger.info(`Sccuess: ${successDocs.length} Request has been sent`);
    if (successDocs.length > 0) {
      for (let doc of successDocs) {
        doc.attempt = doc.attempt + 1;
        doc.status = Constant.ChangeNumberRequestStatus.EmailSent;
        await Repository.Session.ChangePhoneNumber.upadteDocument(doc);
      }
    }
  } catch (error) {
    await Repository.Error.createErrorReport(error, 'Sending Email', 'Sync', 'sendEmail');
  }
};
