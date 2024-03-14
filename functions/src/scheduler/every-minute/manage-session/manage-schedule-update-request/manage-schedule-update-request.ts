import * as Repository from '../../../../repository/index';
import { logger } from 'firebase-functions/v2';
import * as Constant from '../../../../constant';

export const manage = async function () {
  try {
    const documents = await Repository.Shop.Schedule.UpdateRequest.getAll();
    const finalisedDocs = documents.filter(doc => doc.status !== Constant.API.Status.Pending);

    for (const doc of finalisedDocs) {
      await Repository.Shop.Schedule.UpdateRequest.deleteDocument(doc.id);
    }
  } catch (error) {
    logger.error(error);
    await Repository.Error.createErrorReport(error, 'Could not run', 'delete', 'Manage Schedule Update Request');
  }
};
