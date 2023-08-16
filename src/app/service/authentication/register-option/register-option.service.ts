import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterOptionService {

  constructor() { }


  public async email(): Promise<boolean>{
    let result: boolean = false;

    return result;
  } 

  public async phone(): Promise<boolean>{
    let result: boolean = false;

    return result;
  } 
}
