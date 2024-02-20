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
  saveIcon,
  borderColorIcon,
  hyperlinkOpenIcon,
  plusIcon,
  arrowRotateCwSmallIcon,
  caretAltDownIcon,
  caretAltUpIcon,
  caretAltLeftIcon,
  caretAltRightIcon,
  changeManuallyIcon,
  linkIcon,
  pencilIcon,
  cameraIcon,
  clockArrowRotateIcon,
  clockIcon,
} from '@progress/kendo-svg-icons';
@Injectable({
  providedIn: 'root',
})
export class KendoUiIconService {
  public fullClock: SVGIcon = clockIcon;
  public halfClock: SVGIcon = clockArrowRotateIcon;
  public trash: SVGIcon = trashIcon;
  public plus: SVGIcon = plusIcon;
  public link: SVGIcon = linkIcon;
  public pencil: SVGIcon = pencilIcon;
  public camera: SVGIcon = cameraIcon;
  public refresh: SVGIcon = arrowRotateCwSmallIcon;
  public lockIcon: SVGIcon = lockIcon;
  public userIcon: SVGIcon = userIcon;
  public accessibilityIcon: SVGIcon = accessibilityIcon;
  public cartIcon: SVGIcon = cartIcon;
  public listUnorderedSquareIcon: SVGIcon = listUnorderedSquareIcon;
  public parameterDateTimeIcon: SVGIcon = parameterDateTimeIcon;
  public checkIcon: SVGIcon = checkIcon;
  public alignHorizontalIcon: SVGIcon = alignItemsStretchAltIcon;
  public alignVerticalIcon: SVGIcon = alignItemsStretchIcon;
  public saveIcon: SVGIcon = saveIcon;
  public editIcon: SVGIcon = borderColorIcon;
  public hyperlinkOpenIcon: SVGIcon = hyperlinkOpenIcon;
  public changeManuallyIcon: SVGIcon = changeManuallyIcon;

  public left: SVGIcon = caretAltLeftIcon;
  public right: SVGIcon = caretAltRightIcon;
  public down: SVGIcon = caretAltDownIcon;
  public up: SVGIcon = caretAltUpIcon;
  constructor() {}
}
