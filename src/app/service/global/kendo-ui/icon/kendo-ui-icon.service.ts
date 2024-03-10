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
  checkCircleIcon,
  minusCircleIcon,
  xCircleIcon,
  kpiStatusOpenIcon,
  checkOutlineIcon,
  cancelCircleIcon,
  rowsIcon,
  columnsIcon,
  xIcon,
  chartLineStackedIcon,
  imageEditIcon,
  tableCellPropertiesIcon,
  calendarDateIcon,
  warningCircleIcon,
  warningTriangleIcon,
  thumbUpIcon,
  calendarIcon,
  filterIcon,
  trackChangesAcceptIcon,
  trackChangesIcon,
  trackChangesEnableIcon,
  trackChangesAcceptAllIcon,
  exclamationCircleIcon,
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

  public checkCircleIcon = checkCircleIcon;
  public cancelCircleIcon = cancelCircleIcon;
  public checkOutlineIcon = checkOutlineIcon;
  public minusCircleIcon = minusCircleIcon;
  public xCircleIcon = xCircleIcon;
  public kpiStatusOpenIcon = kpiStatusOpenIcon;
  public rowsIcon = rowsIcon;
  public columnsIcon = columnsIcon;
  public xIcon = xIcon;
  public chartLineStackedIcon = chartLineStackedIcon;
  public imageEditIcon = imageEditIcon;
  public tableCellPropertiesIcon = tableCellPropertiesIcon;
  public calendarDateIcon = calendarDateIcon;
  public calendarIcon = calendarIcon;
  public warningCircleIcon = warningCircleIcon;
  public warningTriangleIcon = warningTriangleIcon;
  public thumbUpIcon = thumbUpIcon;
  public filterIcon = filterIcon;
  public pendingIcon = trackChangesIcon;
  public scheduledIcon = trackChangesEnableIcon;
  public startingIcon = trackChangesAcceptIcon;
  public completedIcon = trackChangesAcceptAllIcon;
  public exclamationCircleIcon = exclamationCircleIcon;
  constructor() {}
}
