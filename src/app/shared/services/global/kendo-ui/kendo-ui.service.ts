import { Injectable } from '@angular/core';
import { KendoUiIconService } from './icon/kendo-ui-icon.service';

@Injectable({
  providedIn: 'root'
})
export class KendoUiService {

  constructor(public icon: KendoUiIconService){}
}
