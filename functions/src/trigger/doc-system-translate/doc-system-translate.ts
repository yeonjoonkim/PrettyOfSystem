import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import * as Repository from '../../repository/index';
import * as Db from '../../db';
import * as Service from '../../service/index';
import * as I from '../../interface';
import { logger } from 'firebase-functions/v2';

export const onCreateNewLanguage = onDocumentCreated(
  Db.Context.SystemLangaugeTranslateRequest + '/{requestId}',
  async event => {
    let requestData = event.data?.data() as I.SystemLanguageTranslateRequestType | null;
    if (requestData) {
      logger.info('Retreving All Shop Configs and Completed Document');
      const configs = await Repository.Shop.Configuration.getAll();
      const compeltedDocs = await Repository.TranslateRequest.getCompletes();
      const forms = Service.Trigger.SystemTranslateRequest.prepareDocuments(
        configs,
        requestData,
        compeltedDocs
      );

      const sleep = async (duration: number) => {
        return new Promise(resolve => setTimeout(resolve, duration));
      };

      for (const form of forms) {
        const result = await Repository.TranslateRequest.createDocument(form);
        if (result) {
          logger.info('Success Queue: ' + form.format + ' ' + form.prop);
        } else {
          logger.error('ERROR Queue: ' + form.format + ' ' + form.prop, form);
        }
        await sleep(1000); // delay of 1 second between requests
      }
    }
  }
);
