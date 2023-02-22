import { Injectable } from '@angular/core';
import ionicIcon from './ionic-icon-list';
@Injectable({
  providedIn: 'root'
})
export class IonicIconService {
  constructor() { }

  getOutlineIcon(){
    return ionicIcon.filter(icon => icon.name.endsWith("outline"));
  }



}
