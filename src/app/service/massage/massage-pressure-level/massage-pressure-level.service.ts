import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MassagePressureLevelService {
  constructor() {}

  getLabel(value: number) {
    switch (value) {
      case 1:
        return 'label.title.gentle';
      case 2:
        return 'label.title.soft';
      case 3:
        return 'label.title.medium';
      case 4:
        return 'label.title.strong';
      case 5:
        return 'label.title.extremestrong';
      default:
        return 'label.title.gentle';
    }
  }
}
