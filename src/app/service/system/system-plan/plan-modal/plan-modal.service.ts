import { IPlanConfiguration } from 'src/app/interface/system/plan/plan.interface';
import { PlanComponent } from '../../../../component/system/plan/plan/plan.component';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanModalService {

  constructor(private modalCtrl: ModalController) { }

  public async presentAddPlan(): Promise<void>{
    let addPlan = await this.modalCtrl.create({component: PlanComponent, componentProps: { readOnly: false, editMode: false}});
    await addPlan.present();
  }

  public async presentEditPlan(config: IPlanConfiguration){
    let editPlan = await this.modalCtrl.create({component: PlanComponent, componentProps: {plan: config, editMode: true}});
    await editPlan.present();
  }

  public async presentViewPlan(config: IPlanConfiguration){
    let editPlan = await this.modalCtrl.create({component: PlanComponent, componentProps: {plan: config, readOnly: true}});
    await editPlan.present();
  }


  public async dismissModal(): Promise<void>{
    await this.modalCtrl.dismiss();
  }
}
