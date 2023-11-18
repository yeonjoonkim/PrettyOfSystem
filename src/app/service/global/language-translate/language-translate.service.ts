import { Injectable } from '@angular/core';
import {
  ILanguageTranslatedCriteria,
  ILanguageTranslateResult,
} from 'src/app/interface/system/language/language.interface';
import { OpenAiService } from '../../open-ai/open-ai.service';
import { TextTransformService } from '../text-transform/text-transform.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageTranslateService {
  private readonly _correctGrammer: string = 'Correct grammar ';
  private readonly _translateTo: string = 'translate to ';
  private readonly _returnAs: string = 'return as ';
  private readonly _singleString: string = 'a single String Value.';

  //command
  private readonly _correctGrammerThenTranslateTo: string = this._correctGrammer + 'then ' + this._translateTo;
  private readonly _returnAsSingleString: string = this._returnAs + this._singleString;
  private readonly _convertJSON: string =
    'It must convert into exact same JSON format without any description or information. Do not say any introduction.';

  constructor(
    private openAi: OpenAiService,
    private textTransform: TextTransformService
  ) {}

  public async get(value: string, criteria: ILanguageTranslatedCriteria, loading: boolean) {
    let translated: ILanguageTranslateResult = criteria.format.isTitle
      ? await this.getTitleFormat(value, criteria, loading)
      : criteria.format.isDescription
      ? await this.getDescriptionFormat(value, criteria, loading)
      : criteria.format.isLower
      ? await this.getLowerFormat(value, criteria, loading)
      : criteria.format.isUpper
      ? await this.getUpperFormat(value, criteria, loading)
      : await this.getTitleFormat(value, criteria, loading);

    let validated = this.validatedTranslated(translated);

    return { isEmpty: validated, translated: translated };
  }

  public async getTitleFormat(value: string, criteria: ILanguageTranslatedCriteria, loading: boolean) {
    let command = this.getTranslatedCommand(value, criteria);
    let response: string = await this.openAi.receiveResult(command, loading);
    let jsonFormat: ILanguageTranslateResult = this.setLanguageTranslateResult(response, criteria.code);
    let titleFormat: ILanguageTranslateResult = this.textTransform.getTranslatedTitleFormat(jsonFormat);
    return titleFormat;
  }

  private async getDescriptionFormat(value: string, criteria: ILanguageTranslatedCriteria, loading: boolean) {
    let command = this.getTranslatedCommand(value, criteria);
    let response: string = await this.openAi.receiveResult(command, loading);
    let jsonFormat: ILanguageTranslateResult = this.setLanguageTranslateResult(response, criteria.code);
    let descriptionFormat: ILanguageTranslateResult = this.textTransform.getTranslatedDescrptionFormat(jsonFormat);
    return descriptionFormat;
  }

  private async getUpperFormat(value: string, criteria: ILanguageTranslatedCriteria, loading: boolean) {
    let command = this.getTranslatedCommand(value, criteria);
    let response: string = await this.openAi.receiveResult(command, loading);
    let jsonFormat: ILanguageTranslateResult = this.setLanguageTranslateResult(response, criteria.code);
    let descriptionFormat: ILanguageTranslateResult = this.textTransform.getTranslatedUpperFormat(jsonFormat);
    return descriptionFormat;
  }

  private async getLowerFormat(value: string, criteria: ILanguageTranslatedCriteria, loading: boolean) {
    let command = this.getTranslatedCommand(value, criteria);
    let response: string = await this.openAi.receiveResult(command, loading);
    let jsonFormat: ILanguageTranslateResult = this.setLanguageTranslateResult(response, criteria.code);
    let descriptionFormat: ILanguageTranslateResult = this.textTransform.getTranslatedLowerFormat(jsonFormat);
    return descriptionFormat;
  }

  /** This will trigger open ai api to retreive the translate the sentence to selected language */
  public async getTranslatedNewLanguage(
    selectedLanguage: string,
    value: string,
    loading: boolean
  ): Promise<string> {
    let command = selectedLanguage + this.setCommandSentenceFormat(value) + this._returnAsSingleString;
    let response = await this.openAi.receiveResult(command, loading);
    let result: string = this.deleteSpaces(response);
    return result;
  }

  /** This will trigger open ai api to retreive the translate the sentence to English */
  public async getTranslateToEnglish(value: string, loading: boolean): Promise<string> {
    let command =
      this._correctGrammerThenTranslateTo +
      'English' +
      this.setCommandSentenceFormat(value) +
      this._returnAsSingleString;
    let response = await this.openAi.receiveResult(command, loading);
    let result: string = this.deleteSpaces(response);

    return result;
  }

  private getTranslatedCommand(value: string, criteria: ILanguageTranslatedCriteria) {
    let firstCommand = this._correctGrammerThenTranslateTo;
    let commandFormat = this.setCommandSentenceFormat(value);
    let allLanguageCommand = criteria.name.join(', ');
    let jsonFormatCommand = this.setJSONFormatCommand(criteria.code);
    let command = firstCommand + allLanguageCommand + commandFormat + this._convertJSON + jsonFormatCommand;

    return command;
  }

  private validatedTranslated(translated: ILanguageTranslateResult) {
    let validatedValue: boolean[] = [];
    for (let langCode in translated) {
      let validated = translated[langCode].length > 0 ? true : false;
      validatedValue.push(validated);
    }

    for (let langCode in translated) {
      const value = translated[langCode];
      const isNotDefault = value !== 'Translatedvalue';
      const isString = typeof value === 'string';
      const hasLength = value.length > 0;

      let validated = isNotDefault && isString && hasLength;
      validatedValue.push(validated);
    }

    return validatedValue.includes(false);
  }

  /** This will return result if it occured an error, will receive empty value else return response as JSON format*/
  private setLanguageTranslateResult(response: string, code: string[]): ILanguageTranslateResult {
    let resultItem: ILanguageTranslateResult = {};
    for (let languageCode of code) {
      resultItem[languageCode] = '';
    }

    try {
      const startIndex = response.lastIndexOf('{');
      const endIndex = response.lastIndexOf('}') + 1;
      const jsonString = response.substring(startIndex, endIndex);
      const json = safeJsonParse(jsonString, 10);
      resultItem = json.error ? resultItem : json.data;
      if (json.error) {
        console.error(json);
      }
    } catch (error) {
      console.error('Failed to parse JSON:', error);
      // Handle error accordingly, maybe set a default value or take another action.
    }
    return resultItem;
  }

  private setCommandSentenceFormat(sentence: string) {
    return ' at a professional level. The Translated Value is "' + sentence.replace(/"/g, '') + '".';
  }

  private deleteSpaces(str: string): string {
    return str.replace(/(\r\n|\n|\r|\"|)/gm, '');
  }

  private setJSONFormatCommand(codes: string[]) {
    let command = 'Here is Output Example: ';

    codes.forEach((code, index) => {
      if (index === 0) {
        command += '{' + '"' + code + '":"translatedValue",';
      } else {
        if (codes.length - 1 === index) {
          command += '"' + code + '":"translatedValue"} ';
        } else {
          command += '"' + code + '":"translatedValue",';
        }
      }
      if (codes.length === 1) {
        command = command.slice(0, command.length - 1);
        command += '}';
      }
    });
    return command;
  }
}
export { ILanguageTranslateResult };

const safeJsonParse = function (jsonString: string, maxAttempts: number) {
  let lastError = null;

  for (let attempts = 0; attempts < maxAttempts; attempts++) {
    try {
      const result = JSON.parse(jsonString);
      return { error: null, data: result };
    } catch (error) {
      if (!(error instanceof SyntaxError) || typeof error.message !== 'string') {
        return { error: new Error('Unexpected error during JSON parsing'), data: null };
      }

      lastError = error;
      const errorPosition = extractErrorPosition(error.message);
      if (errorPosition === null) {
        return { error, data: null };
      }

      jsonString = tryFixingJsonError(jsonString, errorPosition);
    }
  }

  return {
    error: lastError ?? new Error('Unable to parse JSON after multiple attempts'),
    data: null,
  };
};

const extractErrorPosition = function (errorMessage: string): number | null {
  const match = errorMessage.match(/at position (\d+)/);
  return match ? parseInt(match[1], 10) : null;
};

const tryFixingJsonError = function (jsonString: string, errorPosition: number): string {
  const fixes = [
    { pattern: /,\s*}/, replacement: '}' },
    { pattern: /,\s*\]/, replacement: ']' },
    { pattern: /"(\w+)"\s*:([^"])/g, replacement: '"$1":$2', offset: -1 },
    { pattern: /(\w+)\s*:/, replacement: '"$1":', offset: 0 },
    { pattern: /:\s*([^"\d\s}\]])/, replacement: ': "$1', offset: 0 },
    { pattern: /([^\d\s"{}\]])\s*([,}])/, replacement: '$1"$2', offset: 0 },
    { pattern: /\n/g, replacement: '\\n', offset: 0 },
    { pattern: /"\s*}/, replacement: '"}', offset: 0 },
    { pattern: /"\s*]/, replacement: '"]', offset: 0 },
    { pattern: /"{2,}/g, replacement: '"', offset: 0 },
  ];

  for (const { pattern, replacement, offset = 0 } of fixes) {
    const localErrorPosition = errorPosition + offset;
    const beforeError = jsonString.slice(0, localErrorPosition);
    const afterError = jsonString.slice(localErrorPosition);
    const updatedAfterError = afterError.replace(pattern, replacement);

    if (updatedAfterError !== afterError) {
      return beforeError + updatedAfterError;
    }
  }

  return jsonString;
};
