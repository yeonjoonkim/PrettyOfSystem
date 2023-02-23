import { Injectable } from '@angular/core';
import ionicIcon from './ionic-icon-list';
@Injectable({
  providedIn: 'root'
})
export class IonicIconService {
  constructor() { }

  /**This will return only contains outline icon */
  getOutlineIcon(){
    return ionicIcon.filter(icon => icon.name.endsWith("outline"));
  }

  /**This will return only contains sharp icon list. */
  getSharpIcon(){
    return ionicIcon.filter(icon => icon.name.endsWith("sharp"));
  }

}
