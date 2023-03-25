import { IPlanConfiguration } from 'src/app/interface/system/plan/plan.interface';
import { PlanComponent } from '../../../../management/system/components/plan-management/plan/plan.component';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanModalService {

  constructor(private modalCtrl: ModalController) { }

  public async presentAddPlan(): Promise<void>{
    let addPlan = await this.modalCtrl.create({component: PlanComponent, cssClass: 'modal'});
    await addPlan.present();
  }

  public async presentEditPlan(config: IPlanConfiguration){
    let editPlan = await this.modalCtrl.create({component: PlanComponent, cssClass: 'modal', componentProps: {plan: config, editMode: true}});
    await editPlan.present();
  }

  public async dismissModal(): Promise<void>{
    await this.modalCtrl.dismiss();
  }
}
