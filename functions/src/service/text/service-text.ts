import * as I from '../../interface';

export const preCleansingTranslateProp = function (input: string): string {
  return input.trim().replace(/[^\w\s-]/g, '');
};

export const getTranslatedLowerFormat = function (translated: I.ILanguageTranslateResult) {
  let formatter = translated;

  for (let key in formatter) {
    formatter[key] = formatter[key].toLowerCase();
  }

  return formatter;
};

export const getTranslatedUpperFormat = function (translated: I.ILanguageTranslateResult) {
  let formatter = translated;

  for (let key in formatter) {
    formatter[key] = formatter[key].toUpperCase();
  }

  return formatter;
};

export const getTranslatedDescrptionFormat = function (translated: I.ILanguageTranslateResult) {
  let formatter = translated;

  for (let key in formatter) {
    formatter[key] = descriptionFormat(formatter[key]);
  }

  return formatter;
};

export const getTranslatedTitleFormat = function (translated: I.ILanguageTranslateResult) {
  let formatter = translated;

  for (let key in formatter) {
    if (typeof formatter[key] === 'string') {
      formatter[key] = formatter[key].endsWith('.')
        ? formatter[key].slice(0, formatter[key].length - 1)
        : formatter[key];
      formatter[key] = formatter[key].endsWith('。')
        ? formatter[key].slice(0, formatter[key].length - 1)
        : formatter[key];
      formatter[key] = titleFormat(formatter[key]);
    } else {
      formatter[key] = '';
    }
  }

  return formatter;
};

export const titleFormat = function (str: string): string {
  let titleFormat = '';
  let words = getWords(str);
  words.forEach((word, index) => {
    if (index === 0) {
      let capitalzedWord = capitalzed(word);
      titleFormat += capitalzedWord;
    } else {
      let capitalzedWord = capitalzed(word);
      titleFormat += ' ' + capitalzedWord;
    }
  });

  return titleFormat;
};

export const descriptionFormat = function (str: string): string {
  let paragraphs = str.split('.').filter(sentence => sentence.trim() !== '');
  return paragraphs.map(sentence => sentenceFormat(sentence.trim())).join(' ');
};

const sentenceFormat = function (input: string) {
  const punctuationRegex = /[.!?।。？]$/;
  let sentence = '';
  const words: string[] = getWords(input);

  words.forEach((word, index) => {
    if (index === 0) {
      let capitalizedWord: string = capitalzed(word);
      sentence += capitalizedWord;
    } else {
      let lowercaseWord: string = word.toLowerCase();
      sentence += ' ' + lowercaseWord;
    }
  });

  let trimmedSentence = sentence.trimEnd();
  let sentenceSpecialEnd =
    trimmedSentence.length > 0 &&
    punctuationRegex.test(trimmedSentence[trimmedSentence.length - 1]);

  if (!sentenceSpecialEnd) {
    sentence += '.';
  }
  return sentence;
};

const capitalzed = function (str: string): string {
  let lowcaseValue: string = str.toLowerCase();
  let capitalzedWord: string = str.charAt(0).toUpperCase() + lowcaseValue.slice(1);
  return capitalzedWord;
};

const getWords = function (input: string): string[] {
  const words = input.split(' ').filter(word => word.length > 0);
  return words;
};
