import { ILanguageTranslateResult } from './../language-translate/language-translate.service';
import { Injectable } from '@angular/core';

export interface ITextTransformObject{
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class TextTransformService {

  constructor() {
  }


  /** This will retreive capitalzed word as a single string value.
   * Recommand to use a single string value.
  */
  public getCapitalzedWord(str: string): string{
    let lowcaseValue: string = str.toLowerCase();
    let capitalzedWord: string = str.charAt(0).toUpperCase() + lowcaseValue.slice(1);
    return capitalzedWord;
  }

  public getTranslatedTitleFormat(translated: ILanguageTranslateResult){
    let formatter = translated;

    for(let key in formatter){
      formatter[key] = formatter[key].endsWith('.') ? formatter[key].slice(0, formatter[key].length -1) : formatter[key];
      formatter[key] = formatter[key].endsWith('。') ? formatter[key].slice(0, formatter[key].length -1) : formatter[key];
      formatter[key] = this.getTitleFormat(formatter[key]);
    }

    return formatter;
  }

  public getTranslatedDescrptionFormat(translated: ILanguageTranslateResult){
    let formatter = translated;

    for(let key in formatter){
      formatter[key] = this.getDescriptionFormat(formatter[key]);
    }

    return formatter;
  }


  /** This will retreive title format string.
   * "eXample exAmple" => "Example Example".
  */
  public getTitleFormat(str: string): string{
    let titleFormat: string = '';
    let words: Array<string> = this.getContainWordList(str);
    words.forEach((word, index) => {
      if(index === 0){
        let capitalzedWord = this.getCapitalzedWord(word);
        titleFormat += capitalzedWord;
      }else{
        let capitalzedWord = this.getCapitalzedWord(word);
        titleFormat += " " + capitalzedWord;
      }
    });

    return titleFormat;
  }

  public getDescriptionFormat(str: string){
    let paragraph = str.split('.');
    return paragraph.map(sentence => this.getSentenceFormat(sentence)).join(' ');
  }

  /** This will retreive sentence format string.
   * "eXample exAmple" => "Example example."
   * "THIS IS SAMPLE" => "This is sample."
  */
  public getSentenceFormat(str: string): string{
    let sentenceFormat: string = '';
    let words: Array<string> = this.getContainWordList(str);
    let includeFinalised: boolean = words.length > 1 ? words[words.length - 1].includes('.') : true;

    words.forEach((word, index) => {
      if(index === 0){
        let capitalzedWord: string = this.getCapitalzedWord(word);
        sentenceFormat += capitalzedWord;
      }
      else{
          let lowercaseWord: string = word.toLowerCase();
          sentenceFormat += " " + lowercaseWord;
      }
    });

    if(!includeFinalised){
      sentenceFormat += ".";
    }

    return sentenceFormat;
  }

  public setLanguageTransformCodeList(key: string): Array<string>{
    let lowcaseKey: string = key.toLowerCase();
    return lowcaseKey.split(".");
  }

  public setKeyPairValueObject(isTitle: boolean, value: string): {}{
    let objectValue: string = isTitle ? this.getTitleFormat(value) : this.getSentenceFormat(value);
    return objectValue;
  }

  public deleteSpaces(str: string): string{
    return str.replace(/(\r\n|\n|\r|\"|)/gm,"");
  }

  public getContainWordList(str: string):  Array<string> {
    return str.split(" ").filter(str => str.length > 0);
  }
}
