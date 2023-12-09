import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { cloneDeep } from 'lodash-es';
import { MassageBodySelectorPopoverComponent } from 'src/app/component/massage/massage-body-selector-popover/massage-body-selector-popover.component';
import { MassageBodySelectorAreaType, MassageBodySelectorPopoverProp } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class MassageBodySelectorPopoverService {
  constructor(private _popoverCtrl: PopoverController) {}

  public async create(prop: MassageBodySelectorPopoverProp) {
    const copiedProp = cloneDeep(prop);
    let popover = await this._popoverCtrl.create({
      component: MassageBodySelectorPopoverComponent,
      translucent: true,
      componentProps: { prop: copiedProp },
      cssClass: 'center-popover-container',
    });
    return popover;
  }

  public async handleDismiss(popover: HTMLIonPopoverElement) {
    const result = await popover.onWillDismiss();
    return result?.data ? (result.data as MassageBodySelectorAreaType[]) : null;
  }
}
