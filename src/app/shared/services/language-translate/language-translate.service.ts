import { Injectable } from '@angular/core';
import { OpenAiService } from '../open-ai/open-ai.service';
export interface ILanguageTranslateResult{
  en: string;
  jp: string;
  cn: string;
  kr: string;
}

@Injectable({
  providedIn: 'root'
})

export class LanguageTranslateService {
  private readonly language = {
    english: 'English',
    korean: 'Korean',
    traditionalChinese: 'Simplified Chinese',
    japanese: 'Japanese'
  };
  private readonly correctGrammer: string = 'Correct grammar '
  private readonly translateTo: string = 'Translate to ';
  private readonly returnAs: string = 'return as ';
  private readonly singleString: string = 'a single String Value.';

  //command
  private readonly correctGrammerThenTranslateTo: string = this.translateTo;
  private readonly returnAsSingleString: string = this.returnAs + this.singleString;
  private readonly convertJSON: string = " convert into JSON file";
  private readonly allLanguage: string = this.language.english + "," + this.language.korean + "," + this.language.traditionalChinese + "," + this.language.japanese;
  private readonly jsonFormat: string = 'as {"en":"translatedValue","kr":"translatedValue","cn":"translatedValue","jp":"translatedValue"}';

  //{"":"","":"","":"","":""} = default count = 25 characters 6 tokens
  //{"en":"","jp":"","kr":"","cn":""} = 34 characters 9 tokens
  //{"english":"","japanese":"","korean":"","chinese":""} = 54 characters 14 tokens

  constructor(private openAi: OpenAiService) {
  }


  /** This will trigger open ai api to retreive the translate the sentence to all languages as a JSON format*/
  public async getTranslatedSentenceAllLanguages(sentence: string): Promise<ILanguageTranslateResult>{
    let commandFormat = this.setCommandSentenceFormat(sentence);
    let command = this.correctGrammerThenTranslateTo + this.allLanguage + this.convertJSON + this.jsonFormat + commandFormat;
    let response: string = await this.openAi.receiveResult(command);
    let jsonFormat: ILanguageTranslateResult = this.setLanguageTranslateResult(response);

    return jsonFormat;
  }


  /** This will trigger open ai api to retreive the translate the sentence to English */
  public async getTranslateToEnglish(sentence: string): Promise<string>{
    //initial command prompt
    let commandSentence = this.setCommandSentenceFormat(sentence);
    let command = this.correctGrammerThenTranslateTo + this.language.english + commandSentence + this.returnAsSingleString;
    let response = await this.openAi.receiveResult(command);
    let result: string = this.deleteSpaces(response);

    return result;
  }


  /** This will trigger open ai api to retreive the translate the sentence to Korean */
  public async getTranslateToKorean(sentence: string): Promise<string>{
    //initial command prompt
    let commandSentence = this.setCommandSentenceFormat(sentence);
    let command = this.correctGrammerThenTranslateTo + this.language.korean + commandSentence + this.returnAsSingleString;
    let response = await this.openAi.receiveResult(command);
    let result: string = this.deleteSpaces(response);

    return result;
  }


  /** This will trigger open ai api to retreive the translate the sentence to Traditional Chinese */
  public async getTranslateToTraditionalChinese(sentence: string): Promise<string>{
    //initial command prompt
    let commandSentence = this.setCommandSentenceFormat(sentence);
    let command = this.correctGrammerThenTranslateTo + this.language.traditionalChinese + commandSentence + this.returnAsSingleString;
    let response = await this.openAi.receiveResult(command);
    let result: string = this.deleteSpaces(response);

    return result;
  }


  /** This will trigger open ai api to retreive the translate the sentence to Japanese*/
  public async getTranslateToJapanese(sentence: string): Promise<string>{
    //initial command prompt
    let commandSentence = this.setCommandSentenceFormat(sentence);
    let command = this.correctGrammerThenTranslateTo + this.language.japanese + commandSentence + this.returnAsSingleString;
    let response = await this.openAi.receiveResult(command);
    let result: string = this.deleteSpaces(response);

    return result;
  }


  /** This will return result if it occured an error, will receive empty value else return response as JSON format*/
  private setLanguageTranslateResult(response: string): ILanguageTranslateResult{
    let result: ILanguageTranslateResult = {
      en: '',
      jp: '',
      kr: '',
      cn: '',
    };

    try{
      result = JSON.parse(response);
    }
    catch(err){
      //Todo: Please modify the error message to be notification or alert user.
      console.error(err);
    }
    return result;
  }

  private setCommandSentenceFormat(sentence: string){
    return '"' + sentence + '"';
  }

  private deleteSpaces(str: string): string{
    return str.replace(/(\r\n|\n|\r|\"|)/gm,"");
  }

}
