import { PlanService } from 'src/app/service/system/system-plan/plan.service';
import { GlobalService } from 'src/app/service/global/global.service';
import { PlanConfigurationType } from 'src/app/interface/system/plan/plan.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss'],
})
export class PlanListComponent implements OnInit {
  @Output() onUpdate = new EventEmitter<boolean>();
  @Input() planOptions: PlanConfigurationType[] = [];
  private _isModalOpen: boolean = false;
  constructor(public global: GlobalService, private _planService: PlanService) {}

  ngOnInit() {}

  public async onClickAddPlan() {
    if (!this._isModalOpen) {
      this._isModalOpen = true;
      let modal = await this._planService.modal.presentAddPlan();
      await modal.present();
      await this.handleDismissModal(modal);
    }
  }

  public async onClickEdit(config: PlanConfigurationType) {
    if (!this._isModalOpen) {
      this._isModalOpen = true;
      let modal = await this._planService.modal.presentEditPlan(config);
      await modal.present();
      await this.handleDismissModal(modal);
    }
  }

  public async onClickDelete(id: string, name: string) {
    await this._planService.processDeletePlan(id, name);
    this.onUpdate.emit(true);
  }

  private async handleDismissModal(modal: HTMLIonModalElement) {
    let result = await modal.onWillDismiss();
    this._isModalOpen = false;
    if (result?.data === 'refresh') {
      this.onUpdate.emit(true);
    }
  }
}
