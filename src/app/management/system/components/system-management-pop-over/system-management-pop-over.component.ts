import { Component, OnInit } from '@angular/core';
import { ISystemPopOverActionCriteria, ISystemPopOverActionItem } from './interfaces/system-management-pop-over.interface';
import { SystemManagementPopOverService } from './services/system-management-pop-over/system-management-pop-over.service';
import { SystemManagementModalService } from './services/system-management-modal/system-management-modal.service';
@Component({
  selector: 'app-system-management-pop-over',
  templateUrl: './system-management-pop-over.component.html',
  styleUrls: ['./system-management-pop-over.component.css']
})
export class SystemManagementPopOverComponent implements OnInit {
  public systemPopOverActionButtons: ISystemPopOverActionItem[] = [];


  constructor(private sysManagementPopOverService: SystemManagementPopOverService, private sysManagementModalService: SystemManagementModalService) { }

  ngOnInit() {
    this.systemPopOverActionButtons = this.sysManagementPopOverService.getSystemManagementPopOverButton();
  }

  async onClickActionButton(actionCrteria: ISystemPopOverActionCriteria){
    await this.sysManagementModalService.openActionModal(actionCrteria);
  }

}
