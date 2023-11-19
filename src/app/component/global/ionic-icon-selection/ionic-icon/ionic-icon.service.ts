import { Injectable } from '@angular/core';
import ionicIcon from './ionic-icon';

export interface IIonicIcon {
  name: string;
  tags: string[];
  selected?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class IonicIconService {
  constructor() {}

  /** This will return full icon list */
  private getFullIcon(): IIonicIcon[] {
    return ionicIcon;
  }

  /** This will return based on the input */
  private filterByIconShape(iconShape: 'outline' | 'sharp' | 'filled') {
    return ionicIcon.filter(icon => icon.name.endsWith(iconShape));
  }

  /** This will return IIonicIcon[] by the icon filter Option */
  public setIcon(iconFilterOption: 'outline' | 'sharp' | 'filled' | 'full'): IIonicIcon[] {
    return iconFilterOption === 'full' ? this.getFullIcon() : this.filterByIconShape(iconFilterOption);
  }
}
