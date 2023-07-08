import { Injectable } from '@angular/core';
import {
  SVGIcon,
  trashIcon
}from "@progress/kendo-svg-icons";
@Injectable({
  providedIn: 'root'
})
export class KendoUiIconService {
  public trash: SVGIcon = trashIcon;

  constructor() { }
}
