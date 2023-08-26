import { PlanService } from 'src/app/service/system/system-plan/plan.service';
import { GlobalService } from 'src/app/service/global/global.service';
import { IPlanConfiguration } from 'src/app/interface/system/plan/plan.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss'],
})
export class PlanListComponent implements OnInit {
  @Output() onUpdate = new EventEmitter<boolean>();
  @Input() planOptions: IPlanConfiguration[] = [];
  constructor(public global: GlobalService, private planService: PlanService) {}

  ngOnInit() {}

  public async onClickAddPlan() {
    let modal = await this.planService.modal.presentAddPlan();
    await modal.present();
    await this.handleDismissModal(modal);
  }

  public async onClickEdit(config: IPlanConfiguration) {
    let modal = await this.planService.modal.presentEditPlan(config);
    await modal.present();
    await this.handleDismissModal(modal);
  }

  public async onClickDelete(id: string, name: string) {
    await this.planService.processDeletePlan(id, name);
    this.onUpdate.emit(true);
  }

  private async handleDismissModal(modal: HTMLIonModalElement) {
    let result = await modal.onWillDismiss();
    if (result?.data === 'refresh') {
      this.onUpdate.emit(true);
    }
  }
}
