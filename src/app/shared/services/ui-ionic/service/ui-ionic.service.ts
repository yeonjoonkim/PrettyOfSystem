import { IonSelectProperty, IonLabelProperty } from '../interface/ui-Ionic.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class IonicUiService {
  public readonly ionLabel: IonLabelProperty = {
    mandatoryColor: 'danger',
    position: 'floating',
  };

  public readonly ionSelect: IonSelectProperty = {
    interface: 'popover'
  };
  constructor() { }
}
