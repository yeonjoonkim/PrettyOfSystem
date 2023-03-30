import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberValidationService {

  constructor() { }

  public nullReplaceToZero(number: number): number{
    return number === undefined || number === null || isNaN(number) ? 0 : number;
  }

  public roundToDecimalPlaces(number: number, decimal: number){
    number = this.nullReplaceToZero(number);
    let factor = Math.pow(10, decimal);
    return Math.round(number * factor) / factor;
  }
}
