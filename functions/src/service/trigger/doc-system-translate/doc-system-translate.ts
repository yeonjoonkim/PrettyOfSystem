import * as I from '../../../interface';
import * as Constant from '../../../constant';
import * as TextTransform from '../../text/service-text';
import { logger } from 'firebase-functions/v2';

export const prepareDocuments = function (
  configs: I.ShopConfigurationType[],
  requestLanguage: I.SystemLanguageTranslateRequestType
) {
  const requestForms: I.ChatGptTranslateDocumentType[] = [];

  for (let config of configs) {
    const packageItems = transformEnglishNamePairValueList(config);
    logger.info('Retreiving ' + config.name + 'Packages');
    for (let item of packageItems) {
      const reference = item.name.split('.');
      const serviceId = reference[0];
      const format = reference[1];
      const previousLanguageType = reference[2];

      if (previousLanguageType === 'en') {
        const form = defaultTranslateDocumentType();
        form.shopId = config.id;
        form.languages = [{ name: requestLanguage.name, value: requestLanguage.code }];
        form.packageKey = serviceId;
        form.serviceId = serviceId;
        form.prop = TextTransform.preCleansingTranslateProp(item.value);
        form.format = Object.values(I.Text.Format).includes(
          format as 'upper' | 'lower' | 'title' | 'description'
        )
          ? (format as 'upper' | 'lower' | 'title' | 'description')
          : 'title';
        requestForms.push(form);
      }
    }
  }
  return requestForms;
};

const transformEnglishNamePairValueList = function (config: I.ShopConfigurationType) {
  const result: I.NameValuePairType[] = [];

  for (let key in config.package) {
    if (config.package.hasOwnProperty(key)) {
      const format = key.split('.');
      const value = config.package[key];
      const element = { name: key, value: value };
      const formatChecker = format.length === 3;
      const englishFormat = format[2] === 'en';

      if (formatChecker && englishFormat) {
        result.push(element);
      }
    }
  }

  return result;
};

const defaultTranslateDocumentType = function () {
  const document: I.ChatGptTranslateDocumentType = {
    id: '',
    shopId: '',
    serviceId: '',
    packageKey: '',
    format: Constant.Text.Format.Description,
    languages: [],
    result: [],
    prop: '',
    status: Constant.API.TranslateStatus.Create,
    createdDate: new Date(),
    error: [],
    attempt: 0,
    translateResult: [],
  };

  return document;
};
