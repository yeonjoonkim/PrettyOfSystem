import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextTransformService {

  constructor() { }

  public getCapitalzedWord(stringValue: string){
    let lowcaseValue: string = stringValue.toLowerCase();
    let capitalzedWord: string = stringValue.charAt(0).toUpperCase() + lowcaseValue.slice(1);
    return capitalzedWord;
  }

  public getLowercaseWord(stringValue: string){
    return stringValue.toLowerCase();
  }

  public getUppercaseWord(stringValue: string){
    return stringValue.toUpperCase();
  }
  public getSentenceFormat(stringValue: string){
    let sentenceFormat: string = '';
    let words: Array<string> = stringValue.split(" ");
    let includeDotFormat: boolean = words[words.length - 1].includes('.');

    words.forEach((word, index) => {
      if(index === 0){
        let capitalzedWord: string = this.getCapitalzedWord(word);
        sentenceFormat += capitalzedWord;
      }
      else{
        let lowercaseWord: string = this.getLowercaseWord(word);
        sentenceFormat += " " + lowercaseWord;
      }
    });

    if(!includeDotFormat){
      sentenceFormat += ".";
    }

    return sentenceFormat;
  }
}
