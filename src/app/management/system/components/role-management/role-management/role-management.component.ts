import { Component, OnInit } from '@angular/core';
import { RoleModalService } from 'src/app/service/system/role/role-modal/role-modal.service';

@Component({
  selector: 'role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss'],
})
export class RoleManagementComponent implements OnInit {
  constructor(private roleModal: RoleModalService) { }

  ngOnInit() {}


  /** present the Add Role Component */
  public async onClickAddRole(){
    await this.roleModal.prsentAddRole();
  }

}
