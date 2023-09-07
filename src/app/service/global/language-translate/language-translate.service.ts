import { Injectable } from '@angular/core';
import {
  ILanguageTranslatedCriteria,
  ILanguageTranslateResult,
} from 'src/app/interface/system/language/language.interface';
import { OpenAiService } from '../../open-ai/open-ai.service';
import { TextTransformService } from '../text-transform/text-transform.service';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageTranslateService {
  private readonly correctGrammer: string = 'Correct grammar ';
  private readonly translateTo: string = 'Translate to ';
  private readonly returnAs: string = 'return as ';
  private readonly singleString: string = 'a single String Value.';

  //command
  private readonly correctGrammerThenTranslateTo: string =
    this.correctGrammer + 'then ' + this.translateTo;
  private readonly returnAsSingleString: string = this.returnAs + this.singleString;
  private readonly convertJSON: string =
    'It must convert into exact same JSON format without any description or information. Do not say any introduction.';

  constructor(
    private openAi: OpenAiService,
    private textTransform: TextTransformService,
    private loading: LoadingService
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

  public async getTitleFormat(
    value: string,
    criteria: ILanguageTranslatedCriteria,
    loading: boolean
  ) {
    let command = this.getTranslatedCommand(value, criteria);
    let response: string = await this.openAi.receiveResult(command, loading);
    let jsonFormat: ILanguageTranslateResult = this.setLanguageTranslateResult(
      response,
      criteria.code
    );
    let titleFormat: ILanguageTranslateResult =
      this.textTransform.getTranslatedTitleFormat(jsonFormat);
    return titleFormat;
  }

  private async getDescriptionFormat(
    value: string,
    criteria: ILanguageTranslatedCriteria,
    loading: boolean
  ) {
    let command = this.getTranslatedCommand(value, criteria);
    let response: string = await this.openAi.receiveResult(command, loading);
    let jsonFormat: ILanguageTranslateResult = this.setLanguageTranslateResult(
      response,
      criteria.code
    );
    let descriptionFormat: ILanguageTranslateResult =
      this.textTransform.getTranslatedDescrptionFormat(jsonFormat);
    return descriptionFormat;
  }

  private async getUpperFormat(
    value: string,
    criteria: ILanguageTranslatedCriteria,
    loading: boolean
  ) {
    let command = this.getTranslatedCommand(value, criteria);
    let response: string = await this.openAi.receiveResult(command, loading);
    let jsonFormat: ILanguageTranslateResult = this.setLanguageTranslateResult(
      response,
      criteria.code
    );
    let descriptionFormat: ILanguageTranslateResult =
      this.textTransform.getTranslatedUpperFormat(jsonFormat);
    return descriptionFormat;
  }

  private async getLowerFormat(
    value: string,
    criteria: ILanguageTranslatedCriteria,
    loading: boolean
  ) {
    let command = this.getTranslatedCommand(value, criteria);
    let response: string = await this.openAi.receiveResult(command, loading);
    let jsonFormat: ILanguageTranslateResult = this.setLanguageTranslateResult(
      response,
      criteria.code
    );
    let descriptionFormat: ILanguageTranslateResult =
      this.textTransform.getTranslatedLowerFormat(jsonFormat);
    return descriptionFormat;
  }

  /** This will trigger open ai api to retreive the translate the sentence to selected language */
  public async getTranslatedNewLanguage(
    selectedLanguage: string,
    value: string,
    loading: boolean
  ): Promise<string> {
    let command =
      selectedLanguage + this.setCommandSentenceFormat(value) + this.returnAsSingleString;
    let response = await this.openAi.receiveResult(command, loading);
    let result: string = this.deleteSpaces(response);
    return result;
  }

  /** This will trigger open ai api to retreive the translate the sentence to English */
  public async getTranslateToEnglish(value: string, loading: boolean): Promise<string> {
    let command =
      this.correctGrammerThenTranslateTo +
      'English' +
      this.setCommandSentenceFormat(value) +
      this.returnAsSingleString;
    let response = await this.openAi.receiveResult(command, loading);
    let result: string = this.deleteSpaces(response);

    return result;
  }

  private getTranslatedCommand(value: string, criteria: ILanguageTranslatedCriteria) {
    let firstCommand = this.correctGrammerThenTranslateTo;
    let commandFormat = this.setCommandSentenceFormat(value);
    let allLanguageCommand = criteria.name.join(', ');
    let jsonFormatCommand = this.setJSONFormatCommand(criteria.code);
    let command =
      firstCommand + allLanguageCommand + commandFormat + this.convertJSON + jsonFormatCommand;

    return command;
  }

  private validatedTranslated(translated: ILanguageTranslateResult) {
    let validatedValue: boolean[] = [];
    for (let langCode in translated) {
      let validated = translated[langCode].length > 0 ? true : false;
      validatedValue.push(validated);
    }

    for (let langCode in translated) {
      let validated = translated[langCode] !== 'Translatedvalue';
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
      resultItem = JSON.parse(response);
    } catch (error) {
      console.error('Failed to parse JSON:', error);
      // Handle error accordingly, maybe set a default value or take another action.
    }
    return resultItem;
  }

  private setCommandSentenceFormat(sentence: string) {
    return '. The Translated Value is "' + sentence + '".';
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
