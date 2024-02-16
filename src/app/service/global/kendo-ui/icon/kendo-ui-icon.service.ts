import { Injectable } from '@angular/core';
import {
  SVGIcon,
  trashIcon,
  lockIcon,
  userIcon,
  accessibilityIcon,
  cartIcon,
  listUnorderedSquareIcon,
  parameterDateTimeIcon,
  checkIcon,
  alignItemsStretchAltIcon,
  alignItemsStretchIcon,
} from '@progress/kendo-svg-icons';
@Injectable({
  providedIn: 'root',
})
export class KendoUiIconService {
  public trash: SVGIcon = trashIcon;
  public lockIcon: SVGIcon = lockIcon;
  public userIcon: SVGIcon = userIcon;
  public accessibilityIcon: SVGIcon = accessibilityIcon;
  public cartIcon: SVGIcon = cartIcon;
  public listUnorderedSquareIcon: SVGIcon = listUnorderedSquareIcon;
  public parameterDateTimeIcon: SVGIcon = parameterDateTimeIcon;
  public checkIcon: SVGIcon = checkIcon;
  public alignHorizontalIcon: SVGIcon = alignItemsStretchAltIcon;
  public alignVerticalIcon: SVGIcon = alignItemsStretchIcon;

  constructor() {}
}
