import { IPlanConfiguration } from 'src/app/interface/system/plan/plan.interface';
import { PlanComponent } from '../../../../component/system/plan/plan/plan.component';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class PlanModalService {
  constructor(private modalCtrl: ModalController) {}

  public async presentAddPlan(): Promise<HTMLIonModalElement> {
    let addPlan = await this.modalCtrl.create({
      component: PlanComponent,
      componentProps: { readOnly: false, editMode: false },
    });
    return addPlan;
  }

  public async presentEditPlan(config: IPlanConfiguration): Promise<HTMLIonModalElement> {
    let selectedConfig: IPlanConfiguration = cloneDeep(config);
    let editPlan = await this.modalCtrl.create({
      component: PlanComponent,
      componentProps: { plan: selectedConfig, editMode: true },
    });
    return editPlan;
  }

  public async presentViewPlan(config: IPlanConfiguration): Promise<HTMLIonModalElement> {
    let selectedConfig: IPlanConfiguration = cloneDeep(config);
    let viewPlan = await this.modalCtrl.create({
      component: PlanComponent,
      componentProps: { plan: selectedConfig, readOnly: true },
    });

    return viewPlan;
  }

  public async dismissModal(): Promise<void> {
    await this.modalCtrl.dismiss();
  }
  public async dissmissModalWithRefresh() {
    await this.modalCtrl.dismiss('refresh');
  }
}
