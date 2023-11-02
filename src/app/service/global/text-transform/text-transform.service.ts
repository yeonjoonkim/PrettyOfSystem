import { ILanguageTranslateResult } from './../language-translate/language-translate.service';
import { Injectable } from '@angular/core';

export interface TextTransformObjectType {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class TextTransformService {
  constructor() {}

  /** This will retreive capitalzed word as a single string value.
   * Recommand to use a single string value.
   */
  public preCleansingTranslateProp(input: string): string {
    // Replace escaped double quotes with single quotes
    let cleanedString = input.replace(/\\"/g, "'");

    // Remove unescaped double quotes
    cleanedString = cleanedString.replace(/"([^"]*)"/g, '$1');

    // Replace multiple white spaces (including new lines and tabs) with a single space
    cleanedString = cleanedString.replace(/\s+/g, ' ');

    // Trim leading and trailing white spaces
    cleanedString = cleanedString.trim();

    // Remove all double quotes
    cleanedString = cleanedString.replace(/"/g, '');

    // Replace multiple white spaces (including new lines and tabs) with a single space
    const compressedString = cleanedString.replace(/\s+/g, ' ');

    // Trim leading and trailing white spaces
    const trimmedString = compressedString.trim();

    return trimmedString;
  }

  public getCapitalzedWord(str: string): string {
    let lowcaseValue: string = str.toLowerCase();
    let capitalzedWord: string = str.charAt(0).toUpperCase() + lowcaseValue.slice(1);
    return capitalzedWord;
  }

  public getTranslatedTitleFormat(translated: ILanguageTranslateResult) {
    let formatter = translated;

    for (let key in formatter) {
      if (typeof formatter[key] === 'string') {
        formatter[key] = formatter[key].endsWith('.')
          ? formatter[key].slice(0, formatter[key].length - 1)
          : formatter[key];
        formatter[key] = formatter[key].endsWith('。')
          ? formatter[key].slice(0, formatter[key].length - 1)
          : formatter[key];
        formatter[key] = this.getTitleFormat(formatter[key]);
      } else {
        formatter[key] = '';
      }
    }

    return formatter;
  }

  public getTranslatedDescrptionFormat(translated: ILanguageTranslateResult) {
    let formatter = translated;

    for (let key in formatter) {
      formatter[key] = this.getDescriptionFormat(formatter[key]);
    }

    return formatter;
  }

  public getTranslatedLowerFormat(translated: ILanguageTranslateResult) {
    let formatter = translated;

    for (let key in formatter) {
      formatter[key] = formatter[key].toLowerCase();
    }

    return formatter;
  }

  public getTranslatedUpperFormat(translated: ILanguageTranslateResult) {
    let formatter = translated;

    for (let key in formatter) {
      formatter[key] = formatter[key].toUpperCase();
    }

    return formatter;
  }

  /** This will retreive title format string.
   * "eXample exAmple" => "Example Example".
   */
  public getTitleFormat(str: string): string {
    let titleFormat: string = '';
    let words: Array<string> = this.getContainWordList(str);
    words.forEach((word, index) => {
      if (index === 0) {
        let capitalzedWord = this.getCapitalzedWord(word);
        titleFormat += capitalzedWord;
      } else {
        let capitalzedWord = this.getCapitalzedWord(word);
        titleFormat += ' ' + capitalzedWord;
      }
    });

    return titleFormat;
  }

  public getDefaultLanguageTranslateResult(result: ILanguageTranslateResult) {
    let description = result['en'].length > 0 ? result['en'] : '';
    return description;
  }

  public getDescriptionFormat(str: string): string {
    // Split the string into sentences using the period, then filter out any empty strings
    let paragraphs = str.split('.').filter(sentence => sentence.trim() !== '');

    // Map over the non-empty sentences, format them, then join with ' '
    return paragraphs.map(sentence => this.getSentenceFormat(sentence.trim())).join(' ');
  }

  public getTransformObjectKeyValue(keyValue: string, name: string) {
    let objectKeyFormatValue = keyValue;
    let words: string[] = this.getContainWordList(name);
    words.forEach(word => {
      objectKeyFormatValue += word.toLowerCase();
    });
    return objectKeyFormatValue;
  }

  /** This will retrieve sentence format string.
   * "eXample exAmple" => "Example example."
   * "THIS IS SAMPLE" => "This is sample."
   * "is this a question?" => "Is this a question?"
   * "this is exciting!" => "This is exciting!"
   */
  public getSentenceFormat(str: string): string {
    let sentenceFormat: string = '';
    let words: Array<string> = this.getContainWordList(str);

    // Use a regex to match any of the punctuation marks at the end of the last word
    let punctuationRegex = /[.!?।。？]$/;

    words.forEach((word, index) => {
      if (index === 0) {
        let capitalizedWord: string = this.getCapitalzedWord(word);
        sentenceFormat += capitalizedWord;
      } else {
        let lowercaseWord: string = word.toLowerCase();
        sentenceFormat += ' ' + lowercaseWord;
      }
    });

    let trimmedSentence = sentenceFormat.trimEnd();
    let sentenceSpecialEnd =
      trimmedSentence.length > 0 &&
      punctuationRegex.test(trimmedSentence[trimmedSentence.length - 1]);

    if (!sentenceSpecialEnd) {
      sentenceFormat += '.';
    }
    return sentenceFormat;
  }

  public setLanguageTransformCodeList(key: string): Array<string> {
    let lowcaseKey: string = key.toLowerCase();
    return lowcaseKey.split('.');
  }

  public setKeyPairValueObject(isTitle: boolean, value: string): {} {
    let objectValue: string = isTitle ? this.getTitleFormat(value) : this.getSentenceFormat(value);
    return objectValue;
  }

  public deleteSpaces(str: string): string {
    return str.replace(/(\r\n|\n|\r|\"|)/gm, '');
  }

  public isDescriptionFormat(str: string) {
    let titleFormat: string = this.getTitleFormat(str);
    return str !== titleFormat;
  }

  public getContainWordList(str: string): Array<string> {
    const words = str.split(' ').filter(word => word.length > 0);
    return words;
  }
}
