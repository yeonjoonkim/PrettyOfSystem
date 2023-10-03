import * as I from '../../interface';
import * as Api from '../../third-party-api/index';
import * as TextTransform from '../text/service-text';
import * as Repo from '../../repository/index';
import { logger } from 'firebase-functions/v2';

export const process = async function (
  vm: I.OpenApiInstanceType,
  doc: I.ChatGptTranslateDocumentType
) {
  doc.attempt = doc.attempt || 0;

  // Utility function to handle translation
  const performTranslation = async (lang: I.NameValuePairType) => {
    try {
      let translated = await translateResult(vm, lang, doc.format, doc.prop);
      if (!translated.error) {
        doc.result.push(translated.result);
      } else {
        doc.error.push(lang);
      }
      doc.translateResult.push(translated);
    } catch (e) {
      logger.error(doc.id + 'Error in Performance Translataion: ' + lang.name, e);
      doc.error.push(lang);
    }
  };

  const sleep = async (duration: number) => {
    return new Promise(resolve => setTimeout(resolve, duration));
  };

  for (const lang of doc.languages) {
    await performTranslation(lang);
    await sleep(1000); // delay of 1 second between requests
  }

  let backoffTime = 2000;

  while (doc.attempt < 2 && doc.error.length > 0) {
    doc.attempt++;
    let currentErrors = [...doc.error];
    doc.error = [];
    for (const errorLang of currentErrors) {
      await performTranslation(errorLang);
      await sleep(backoffTime);
    }
    backoffTime *= 2;
  }

  return doc;
};

export const translateResult = async function (
  i: I.OpenApiInstanceType,
  l: I.NameValuePairType,
  f: I.TextFormatType,
  p: string
) {
  let r = defaultResult();
  r.language = l;
  r.formatter = setFormatter(f);
  r.command = setCommand(l, p);
  r.response = await Api.OpenApi.sendRequest(i, r.command);

  if (!r.response) {
    r.error = true;
    return r;
  }

  if (r.response.error || !r.response.result || r.response.result.choices?.length === 0) {
    r.error = true;
    return r;
  }

  const result = r.response.result.choices[0].message.content;
  r.translatedObject = await translatedObjectResult(result, l.value);

  if (objectInspector(r.translatedObject)) {
    r.error = true;
    return r;
  }

  r.translatedObject = transformText(r.translatedObject, r.formatter);
  r.result.name = l.value;
  r.result.value = r.translatedObject[l.value];

  return r;
};

const setFormatter = function (format: I.TextFormatType): I.ILanguageTranslatedFormatCriteria {
  return {
    isDescription: format === I.Text.Format.Description,
    isLower: format === I.Text.Format.Lower,
    isTitle: format === I.Text.Format.Title,
    isUpper: format === I.Text.Format.Upper,
  };
};

const translatedObjectResult = async function (
  result: string,
  code: string
): Promise<I.ILanguageTranslateResult> {
  let object: I.ILanguageTranslateResult = {};
  object[code] = '';

  try {
    object = JSON.parse(result);
  } catch (error) {
    await Repo.Error.createErrorReport(result, error, 'update', 'LanguageTransJSON');
    console.error('Failed to parse JSON:', error);
  }
  return object;
};
const objectInspector = function (translated: I.ILanguageTranslateResult) {
  for (let langCode in translated) {
    const value = translated[langCode];
    const isNotDefault = value.toLowerCase().includes('translatedvalue');
    const isString = typeof value === 'string';
    const hasLength = value.length > 0;
    const isValid = hasLength && isString && !isNotDefault;

    logger.info('Validation - ' + value + ' ', isValid, translated);
    if (!isValid) return true;
  }

  return false;
};

function transformText(obj: any, formatter: any): any {
  switch (true) {
    case formatter.isTitle:
      return TextTransform.getTranslatedTitleFormat(obj);
    case formatter.isDescription:
      return TextTransform.getTranslatedDescrptionFormat(obj);
    case formatter.isLower:
      return TextTransform.getTranslatedLowerFormat(obj);
    case formatter.isUpper:
      return TextTransform.getTranslatedUpperFormat(obj);
    default:
      return TextTransform.getTranslatedTitleFormat(obj);
  }
}

const setCommand = function (lang: I.NameValuePairType, prop: string) {
  const cleansedProp = TextTransform.preCleansingTranslateProp(prop);

  return (
    'Please correct any grammar errors in the following text: "' +
    cleansedProp +
    '". Then translate the corrected text to ' +
    lang.name +
    '. The translation should be provided in JSON format, without any additional information or descriptions. The JSON key should be "' +
    lang.value +
    '" and the value should be the translated string. Please ensure that the JSON is properly formatted and can be parsed without errors by JSON.parse() in JavaScript or TypeScript. Here is the desired output format: {"' +
    lang.value +
    '":"<translatedValue>"}. Please do not include any introductory text or additional information in your response.'
  );
};

const defaultResult = function () {
  const result: I.ChatGptTranslateResult = {
    response: null,
    command: '',
    formatter: {
      isTitle: false,
      isUpper: false,
      isLower: false,
      isDescription: false,
    },
    translatedObject: {},
    result: {
      name: '',
      value: '',
    },
    language: {
      name: '',
      value: '',
    },
    error: false,
  };
  return result;
};
