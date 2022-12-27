import { ISystemPopOverCriteria } from './../../../interfaces/system-management-pop-over.interface';
import { Component, OnInit } from '@angular/core';
import { ISystemPopOverActionCriteria, ISystemPopOverActionItem } from '../../../interfaces/system-management-pop-over.interface';
import { SystemManagementPopOverService } from '../../../services/system-management-pop-over/system-management-pop-over.service';
import { SystemManagementModalService } from '../../../services/system-management-modal/system-management-modal.service';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-system-management-pop-over',
  templateUrl: './system-management-pop-over.component.html',
  styleUrls: ['./system-management-pop-over.component.css']
})
export class SystemManagementPopOverComponent implements OnInit {
  public systemPopOverActionButtons: ISystemPopOverActionItem[] = [];
  public criteria: ISystemPopOverCriteria = {
    isDevelopment: false,
  };

  constructor(public navParams: NavParams, private sysManagementPopOverService: SystemManagementPopOverService,
    private sysManagementModalService: SystemManagementModalService, private popOverCtrl: PopoverController) {
      this.criteria = this.navParams.get('criteria');
  }

  ngOnInit() {
    if(this.criteria.isDevelopment){
      this.systemPopOverActionButtons = this.sysManagementPopOverService.getSystemManagementDevelopmentButton();
    }else{
    }
  }

  /**This on Click event trigger the open Action Modal based on action criteria */
  async onClickDevelopmentActionButton(criteria: ISystemPopOverActionCriteria){
    await this.sysManagementModalService.openActionModal(criteria);
    this.popOverCtrl.dismiss(criteria);
  }

}
