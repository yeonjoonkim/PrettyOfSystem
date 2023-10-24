import * as I from '../../interface';
import * as Api from '../../third-party-api/index';
import * as TextTransform from '../text/service-text';
import * as Repo from '../../repository/index';
import { logger } from 'firebase-functions/v2';

export const EnglishProcess = async function (
  vm: I.OpenApiInstanceType,
  prop: string,
  format: I.TextFormatType
) {
  let attempt = 0;
  let error = false;

  const performTranslation = async () => {
    try {
      let translated = await translateResult(vm, { name: 'English', value: 'en' }, format, prop);
      if (!translated.error) {
        error = false;
        return translated;
      } else {
        error = true;
        return translated;
      }
    } catch (e) {
      logger.error('Default Translated Error in Performance Translataion: English', e);
      error = true;
      return null;
    }
  };

  const sleep = async (duration: number) => {
    return new Promise(resolve => setTimeout(resolve, duration));
  };

  let result = await performTranslation();

  while (attempt < 3 && error) {
    attempt++;
    result = await performTranslation();
    await sleep(1000);
  }

  return result;
};

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
      doc.result.push(lang);
    }
  };

  const sleep = async (duration: number) => {
    return new Promise(resolve => setTimeout(resolve, duration));
  };

  for (const lang of doc.languages) {
    await performTranslation(lang);
    await sleep(1000); // delay of 1 second between requests
  }

  while (doc.attempt < 3 && doc.error.length > 0) {
    doc.attempt++;
    let currentErrors = [...doc.error];
    doc.error = [];
    for (const errorLang of currentErrors) {
      await performTranslation(errorLang);
      await sleep(1000);
    }
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
  r.command = setCommand(l, p, r.formatter);
  r.response = await Api.OpenApi.sendRequest(i, r.command);

  if (!r.response) {
    r.error = true;
    return r;
  }

  if (r.response.error || !r.response.result || r.response.result.choices?.length === 0) {
    r.error = true;
    return r;
  }

  let result = r.response.result.choices[0].message.content;

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
    const startIndex = result.lastIndexOf('{');
    const endIndex = result.lastIndexOf('}') + 1;
    const jsonString = result.substring(startIndex, endIndex);
    object = JSON.parse(jsonString);
  } catch (error) {
    await Repo.Error.createErrorReport(
      result,
      JSON.stringify(error),
      'update',
      'LanguageTransJSON'
    );
    logger.error('Failed to parse JSON:', error);
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

const setCommand = function (
  lang: I.NameValuePairType,
  prop: string,
  format: I.ILanguageTranslatedFormatCriteria
) {
  const cleansedProp = TextTransform.preCleansingTranslateProp(prop);
  const formatCommand = format.isDescription
    ? ' at a professional level. Translated Value is "'
    : '. Translated Value is "';

  return (
    'Please correct any grammatical errors in the input and then translate it to' +
    lang.name +
    formatCommand +
    cleansedProp +
    '". ' +
    'It must convert into exact same JSON format without any description or information. Do not say any introduction.' +
    'Here is Output Example:' +
    '{"' +
    lang.value +
    '":"translatedValue"}.'
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
