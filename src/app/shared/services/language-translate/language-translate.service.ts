import { Injectable } from '@angular/core';
import { ILanguageNameCodeCollection, ILanguageTranslateResult } from 'src/app/interface/system/language/language.interface';
import { OpenAiService } from '../open-ai/open-ai.service';


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
  private readonly correctGrammer: string = 'Correct grammar ';
  private readonly translateTo: string = 'Translate to ';
  private readonly returnAs: string = 'return as ';
  private readonly singleString: string = 'a single String Value.';

  //command
  private readonly correctGrammerThenTranslateTo: string = this.translateTo;
  private readonly returnAsSingleString: string = this.returnAs + this.singleString;
  private readonly convertJSON: string = " convert into JSON file";

  constructor(private openAi: OpenAiService) {
  }


  /** This will trigger open ai api to retreive the translate the sentence to all languages as a JSON format*/
  public async getTranslatedSentenceAllLanguages(sentence: string, allLanguageCriteria: ILanguageNameCodeCollection): Promise<ILanguageTranslateResult>{
    let commandFormat = this.setCommandSentenceFormat(sentence);
    let allLanguageCommand = allLanguageCriteria.name.join(', ');
    let jsonFormatCommand = this.setJSONFormatCommand(allLanguageCriteria.code);
    let command = this.correctGrammerThenTranslateTo + allLanguageCommand + this.convertJSON + jsonFormatCommand + commandFormat;
    let response: string = await this.openAi.receiveResult(command);
    let jsonFormat: ILanguageTranslateResult = this.setLanguageTranslateResult(response, allLanguageCriteria.code);

    return jsonFormat;
  }

    /** This will trigger open ai api to retreive the translate the sentence to selected language */
    public async getTranslatedSelectedLanguage(selectedLanguage: string, sentence: string): Promise<string>{
      //initial command prompt
      let commandSentence = this.setCommandSentenceFormat(sentence);
      let command = this.correctGrammerThenTranslateTo + selectedLanguage + commandSentence + this.returnAsSingleString;
      let response = await this.openAi.receiveResult(command);
      let result: string = this.deleteSpaces(response);

      return result;
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
  private setLanguageTranslateResult(response: string, code: string[]): ILanguageTranslateResult{
    let resultItem: ILanguageTranslateResult = {};
    for(let languageCode of code){
      resultItem[languageCode] = '';
    }
    try{
      resultItem = JSON.parse(response);
    }
    catch(err){
      //Todo: Please modify the error message to be notification or alert user.
      console.error(err);
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
          command +=  '"' + code + '":"translatedValue"}';
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

