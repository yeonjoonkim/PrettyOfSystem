import { ILanguageTranslateResult } from './../language-translate/language-translate.service';
import { Injectable } from '@angular/core';

export interface ITextTransformObject{
  [key: string]: string | {};
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
    translated.en = translated.en.endsWith('.') ? translated.en.slice(0, translated.en.length -1) : translated.en;
    translated.kr = translated.kr.endsWith('.') ? translated.kr.slice(0, translated.kr.length -1) : translated.kr;
    translated.jp = translated.jp.endsWith('。') ? translated.jp.slice(0, translated.jp.length -1) : translated.jp;
    translated.cn = translated.cn.endsWith('。') ? translated.cn.slice(0, translated.cn.length -1) : translated.cn;

    translated.en = this.getTitleFormat(translated.en);
    translated.kr = this.getTitleFormat(translated.kr);
    translated.jp = this.getTitleFormat(translated.jp);
    translated.cn = this.getTitleFormat(translated.cn);

    return translated;
  }

  public getTranslatedDescrptionFormat(translated: ILanguageTranslateResult){
    translated.en = this.getSentenceFormat(translated.en);
    translated.kr = this.getSentenceFormat(translated.kr);
    translated.jp = this.getSentenceFormat(translated.jp);
    translated.cn = this.getSentenceFormat(translated.cn);

    return translated;
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
