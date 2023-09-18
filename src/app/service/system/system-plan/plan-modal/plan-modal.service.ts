import { PlanConfigurationType } from 'src/app/interface/system/plan/plan.interface';
import { PlanComponent } from 'src/app/component/system/plan/plan/plan.component';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class PlanModalService {
  constructor(private _modalCtrl: ModalController) {}

  public async presentAddPlan(): Promise<HTMLIonModalElement> {
    let addPlan = await this._modalCtrl.create({
      component: PlanComponent,
      componentProps: { readOnly: false, editMode: false },
    });
    return addPlan;
  }

  public async presentEditPlan(config: PlanConfigurationType): Promise<HTMLIonModalElement> {
    let selectedConfig: PlanConfigurationType = cloneDeep(config);
    let editPlan = await this._modalCtrl.create({
      component: PlanComponent,
      componentProps: { plan: selectedConfig, editMode: true },
    });
    return editPlan;
  }

  public async presentViewPlan(config: PlanConfigurationType): Promise<HTMLIonModalElement> {
    let selectedConfig: PlanConfigurationType = cloneDeep(config);
    let viewPlan = await this._modalCtrl.create({
      component: PlanComponent,
      componentProps: { plan: selectedConfig, readOnly: true },
    });

    return viewPlan;
  }

  public async dismissModal(): Promise<void> {
    await this._modalCtrl.dismiss();
  }
  public async dissmissModalWithRefresh() {
    await this._modalCtrl.dismiss('refresh');
  }
}
