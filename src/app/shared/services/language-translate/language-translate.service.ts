import { LoadingService } from './../loading/loading.service';
import { LanguageService } from 'src/app/shared/services/language/language.service';
import { Injectable } from '@angular/core';
import { ILanguageTranslatedCriteria, ILanguageTranslateItem, ILanguageTranslateResult } from 'src/app/interface/system/language/language.interface';
import { OpenAiService } from '../open-ai/open-ai.service';
import { TextTransformService } from '../text-transform/text-transform.service';

@Injectable({
  providedIn: 'root'
})

export class LanguageTranslateService {
  private readonly correctGrammer: string = 'Correct grammar ';
  private readonly translateTo: string = 'Translate to ';
  private readonly returnAs: string = 'return as ';
  private readonly singleString: string = 'a single String Value.';

  //command
  private readonly correctGrammerThenTranslateTo: string = this.correctGrammer + "then "+ this.translateTo;
  private readonly returnAsSingleString: string = this.returnAs + this.singleString;
  private readonly convertJSON: string = " convert into JSON file";

  constructor(private openAi: OpenAiService, private textTransform: TextTransformService, private language: LanguageService, private loading: LoadingService) {
  }

  public async getTranslatedLanguagePackage(value: string, criteria: ILanguageTranslatedCriteria): Promise<ILanguageTranslateItem>{
    let translated: ILanguageTranslateResult = criteria.isTitle
                  ? await this.getTitleFormatTranslatedLanguagePackage(value, criteria)
                  : await this.getDescriptionFormatTranslatedLanguagePackage(value, criteria);
    let validated = this.validatedTranslated(translated);

    return {isEmpty: validated, translated: translated};
  }

  public async getTitleFormatTranslatedLanguagePackage(value: string, criteria: ILanguageTranslatedCriteria){
    await this.translateLoading();
    let command = this.getTranslatedCommand(value, criteria);
    let response: string = await this.openAi.receiveResult(command);
    let jsonFormat: ILanguageTranslateResult = this.setLanguageTranslateResult(response, criteria.code);
    let titleFormat: ILanguageTranslateResult = this.textTransform.getTranslatedTitleFormat(jsonFormat);
    await this.loading.dismiss();
    return titleFormat;
  }

  public async getDescriptionFormatTranslatedLanguagePackage(value: string, criteria: ILanguageTranslatedCriteria){
    await this.translateLoading();
    let command = this.getTranslatedCommand(value, criteria);
    let response: string = await this.openAi.receiveResult(command);
    let jsonFormat: ILanguageTranslateResult = this.setLanguageTranslateResult(response, criteria.code);
    let descriptionFormat: ILanguageTranslateResult = this.textTransform.getTranslatedDescrptionFormat(jsonFormat);
    await this.loading.dismiss();
    return descriptionFormat;
  }


  /** This will trigger open ai api to retreive the translate the sentence to selected language */
  public async getTranslatedSelectedLanguage(selectedLanguage: string, value: string): Promise<string>{
    await this.translateLoading();
    let command = this.correctGrammerThenTranslateTo + selectedLanguage + this.setCommandSentenceFormat(value) + this.returnAsSingleString;
    let response = await this.openAi.receiveResult(command);
    let result: string = this.deleteSpaces(response);
    await this.loading.dismiss();
    return result;
  }


  /** This will trigger open ai api to retreive the translate the sentence to English */
  public async getTranslateToEnglish(value: string): Promise<string>{
    await this.translateLoading();
    let command = this.correctGrammerThenTranslateTo + "English" + this.setCommandSentenceFormat(value) + this.returnAsSingleString;
    let response = await this.openAi.receiveResult(command);
    let result: string = this.deleteSpaces(response);

    await this.loading.dismiss();
    return result;
  }


  private getTranslatedCommand(value: string, criteria: ILanguageTranslatedCriteria){
    let firstCommand = criteria.isTitle ? this.translateTo : this.correctGrammerThenTranslateTo;
    let commandFormat = this.setCommandSentenceFormat(value);
    let allLanguageCommand = criteria.name.join(', ');
    let jsonFormatCommand = this.setJSONFormatCommand(criteria.code);
    let command = firstCommand + allLanguageCommand + this.convertJSON + jsonFormatCommand + commandFormat;

    return command;
  }

  private async translateLoading(){
    let loadingMsg = await this.language.transform('loading.name.translating');
    await this.loading.show(loadingMsg);
  }

  private validatedTranslated(translated: ILanguageTranslateResult){
    let validatedValue: boolean[] = [];
    for(let langCode in translated){
      let validated = translated[langCode].length > 0 ? true : false;
      validatedValue.push(validated);
    }

    return validatedValue.includes(false);
  }


  /** This will return result if it occured an error, will receive empty value else return response as JSON format*/
  private setLanguageTranslateResult(response: string, code: string[]): ILanguageTranslateResult{
    let resultItem: ILanguageTranslateResult = {};
    for(let languageCode of code){
      resultItem[languageCode] = '';
    }

    if(response){
      resultItem = JSON.parse(response);
    }

    return resultItem;
  }

  private setCommandSentenceFormat(sentence: string){
    return '"' + sentence + '"';
  }

  private deleteSpaces(str: string): string{
    return str.replace(/(\r\n|\n|\r|\"|)/gm,"");
  }

  private  setJSONFormatCommand(codes: string[]){
    let command = 'as ';

    codes.forEach((code, index) => {
      if(index === 0){
        command += '{' + '"' + code + '":"translatedValue",';
      }else{
        if(codes.length - 1 === index){
          command +=  '"' + code + '":"translatedValue"} ';
        }
        else{
          command +=  '"' + code + '":"translatedValue",';
        }
      }
    })

    return command;
  }

}
export { ILanguageTranslateResult };

